/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function compile(file, globals = {}, imports = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  vm.runInNewContext(code, { exports, require: n => imports[n], ...globals });
  return exports;
}
const storage = () => { const m = new Map(); return { getItem: k => m.get(k), setItem: (k,v) => m.set(k,v) }; };
function analytics(hostname = 'www.jmz.global', pathname = '/', consent = 'granted', sessionStorage = storage()) {
  const w = {location:{hostname,pathname},localStorage:storage(),sessionStorage};
  w.localStorage.setItem('jmz_analytics_consent', consent);
  return { w, api:compile('src/lib/analytics.ts', {window:w}) };
}
const params = {lead_id:'JAM-20261026-ABC12345',form_id:'product-inquiry',form_method:'online'};
const a = analytics();
a.api.trackConversionEvent('generate_lead',params);
a.api.trackConversionEvent('generate_lead',params);
assert.equal(a.w.dataLayer.length,1);
assert.equal(a.w.dataLayer[0].event,'generate_lead');
const restored=analytics('www.jmz.global','/','granted',a.w.sessionStorage);
restored.api.trackConversionEvent('generate_lead',params);
assert.equal(restored.w.dataLayer,undefined);
for(const host of ['localhost','127.0.0.1','preview.vercel.app']) {
  const x=analytics(host);x.api.trackConversionEvent('whatsapp_click');assert.equal(x.w.dataLayer,undefined);
}
for(const path of ['/preview','/preview/products','/analytics-test']) {
  const x=analytics('www.jmz.global',path);x.api.trackConversionEvent('generate_lead',params);assert.equal(x.w.dataLayer,undefined);
}
for(const consent of ['denied','unset']) {
  const x=analytics('www.jmz.global','/',consent);x.api.trackConversionEvent('generate_lead',params);assert.equal(x.w.dataLayer,undefined);
}
const bad=analytics();bad.api.trackConversionEvent('generate_lead',{});bad.api.trackConversionEvent('generate_lead',{lead_id:'someone@example.com'});assert.equal(bad.w.dataLayer,undefined);
const unavailable=analytics('www.jmz.global','/','granted',{getItem(){throw Error('blocked');}});
unavailable.api.trackConversionEvent('generate_lead',params);unavailable.api.trackConversionEvent('generate_lead',params);assert.equal(unavailable.w.dataLayer.length,1);
a.api.trackConversionEvent('whatsapp_click');a.api.trackConversionEvent('email_click');assert.equal(a.w.dataLayer.length,3);

async function formCase(response) {
  let resolve, requests=0;const tracked=[];
  const react={useState:()=>[{status:'idle'},()=>{}],useRef:v=>({current:v}),useEffect:fn=>fn()};
  const jsx=(type,props)=>({type,props});
  const form=compile('src/components/InquiryForm.tsx', {
    Date,FormData:class{entries(){return [['name','Test']];}},
    fetch:()=>{requests++;return new Promise(r=>{resolve=r;});},
  },{'react':react,'react/jsx-runtime':{jsx,jsxs:jsx},'@/lib/analytics':{trackConversionEvent:(...args)=>tracked.push(args)},'@/lib/rfq':{oemOptions:['None']}}).default({id:'test',sourcePage:'/products/jmz-901'});
  const event={preventDefault(){},currentTarget:{reset(){}}};
  const first=form.props.onSubmit(event);await form.props.onSubmit(event);assert.equal(requests,1,'double clicks must not send two requests');
  resolve({ok:response.ok,json:async()=>response});await first;
  assert.equal(tracked.length,response.ok&&response.delivered?1:0);
  if(tracked.length){assert.equal(tracked[0][0],'generate_lead');assert.equal(tracked[0][1].lead_id,params.lead_id);}
  if(!response.ok){const retry=form.props.onSubmit(event);assert.equal(requests,2,'failed requests must unlock retry');resolve({ok:false,json:async()=>response});await retry;}
}
(async()=>{
  await formCase({ok:true,reference:params.lead_id,delivered:true});
  await formCase({ok:true,reference:params.lead_id,delivered:false});
  await formCase({ok:false,message:'delivery failed'});
  console.log('PASS: production isolation, consent, reference dedupe, storage fallback, contact clicks, double-submit lock, success/failure/honeypot and retry. No network or email sent.');
})().catch(e=>{console.error(e);process.exitCode=1;});
