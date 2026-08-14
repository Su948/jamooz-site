'use client';

import { useState } from 'react';

const R2 = 'https://pub-7c0fef674c514e7d8b3844cdeadf9c48.r2.dev/JAMOOZ_preview_web_assets';
const asset = (group: string, file: string) => `${R2}/${group}/${file}`;
const ali = (path: string) => `https:${path}`;

const painStates = [
  { id: 'p1', x:609, y:185, w:68, h:93, image: ali('//sc04.alicdn.com/kf/Hd2b7d5ddb4a34689872369aa618d57ffz/252717039/Hd2b7d5ddb4a34689872369aa618d57ffz.png') },
  { id: 'p2', x:579, y:393, w:115, h:105, image: ali('//sc04.alicdn.com/kf/Ha7597fb64c9949ef9ed169d4b659806bE/252717039/Ha7597fb64c9949ef9ed169d4b659806bE.png') },
  { id: 'p3', x:645, y:775, w:78, h:159, image: ali('//sc04.alicdn.com/kf/H07535359442b4b909ab787fc36acba76K/252717039/H07535359442b4b909ab787fc36acba76K.png') },
  { id: 'p4', x:546, y:769, w:71, h:163, image: ali('//sc04.alicdn.com/kf/H07535359442b4b909ab787fc36acba76K/252717039/H07535359442b4b909ab787fc36acba76K.png') },
  { id: 'p5', x:639, y:553, w:66, h:128, image: ali('//sc04.alicdn.com/kf/H5b413e14344a456bbe57c4b1a6eb95a6T/252717039/H5b413e14344a456bbe57c4b1a6eb95a6T.png') },
  { id: 'p6', x:566, y:551, w:66, h:129, image: ali('//sc04.alicdn.com/kf/H5b413e14344a456bbe57c4b1a6eb95a6T/252717039/H5b413e14344a456bbe57c4b1a6eb95a6T.png') },
  { id: 'p7', x:710, y:507, w:49, h:98, image: ali('//sc04.alicdn.com/kf/H221e3a936b6741758d1718b3bbec1a4ai/252717039/H221e3a936b6741758d1718b3bbec1a4ai.png') },
  { id: 'p8', x:514, y:507, w:50, h:99, image: ali('//sc04.alicdn.com/kf/H221e3a936b6741758d1718b3bbec1a4ai/252717039/H221e3a936b6741758d1718b3bbec1a4ai.png') },
  { id: 'p9', x:608, y:263, w:65, h:60, image: ali('//sc04.alicdn.com/kf/Hadfb85f0a827454a8ebf62c26e7dd5db8/252717039/Hadfb85f0a827454a8ebf62c26e7dd5db8.png') },
] as const;

const customGroups = [
  { id:'c1', x:1017,y:96,w:149,h:173, files:['1.1.webp','1.2.webp','1.3.webp','1.4.webp'], swatches:[{x:1021,y:268,w:57,h:76},{x:1084,y:270,w:55,h:75},{x:1153,y:266,w:55,h:81},{x:1221,y:268,w:57,h:78}] },
  { id:'c2', x:1170,y:95,w:157,h:167, files:['2.1.webp','2.2.webp'], swatches:[{x:1020,y:271,w:55,h:71},{x:1089,y:267,w:53,h:73}] },
  { id:'c3', x:1344,y:97,w:146,h:163, files:['3.1.webp','3.2.webp','3.3.webp'], swatches:[{x:1022,y:273,w:50,h:69},{x:1091,y:271,w:47,h:67},{x:1162,y:274,w:46,h:67}] },
  { id:'c4', x:1501,y:106,w:146,h:158, files:['4.1.webp','4.2.webp','4.3.webp'], swatches:[{x:1014,y:262,w:60,h:76},{x:1087,y:270,w:52,h:78},{x:1160,y:269,w:51,h:75}] },
] as const;

const scrollImage = ali('//sc04.alicdn.com/kf/Ha436492285ff4327be16f9091707abb00/252717039/Ha436492285ff4327be16f9091707abb00.png');
const scrollLinks = [
  {x:289,y:421,w:164,h:244,href:'https://www.alibaba.com/product-detail/Electric-Hand-Vibration-Massager-Product-with_1601807652970.html'},
  {x:464,y:407,w:154,h:271,href:'https://www.alibaba.com/product-detail/JAMOOZ-Portable-Healthy-Technology-Electric-Scalp_1601708387462.html'},
  {x:635,y:411,w:183,h:257,href:'https://www.alibaba.com/product-detail/2026-New-Electric-Massage-Gun-Smart_1601777950076.html'},
  {x:863,y:438,w:212,h:224,href:'https://www.alibaba.com/product-detail/Premium-Ergonomic-Memory-Foam-Bread-Pillow_1601803716499.html'},
  {x:1119,y:451,w:225,h:213,href:'https://www.alibaba.com/product-detail/Electric-Neck-and-Shoulder-Massager-Heated_1601792759656.html'},
  {x:1377,y:459,w:226,h:222,href:'https://www.alibaba.com/product-detail/2026-Most-Selling-Product-Women-s_11000030235200.html'},
  {x:1650,y:435,w:251,h:226,href:'https://www.alibaba.com/product-detail/Custom-Designed-Luxury-Modern-Multi-Functional_1601400310978.html'},
];

function pct(n:number,total:number){ return `${(n/total)*100}%`; }

export default function HomepagePreview(){
  const [painImage,setPainImage] = useState(painStates[0].image);
  const [customGroup,setCustomGroup] = useState(0);
  const [customVariant,setCustomVariant] = useState(0);
  const group = customGroups[customGroup];

  const chooseGroup = (index:number) => { setCustomGroup(index); setCustomVariant(0); };

  return <div className="bg-white text-zinc-900">
    <section className="overflow-hidden bg-black">
      <img src={asset('banner','banner1.webp')} alt="JAMOOZ" className="block h-auto w-full" />
    </section>

    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-3 md:px-6">
        <div className="mb-6 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-violet-700">Targeted Pain Relief</p><h2 className="mt-2 text-3xl font-semibold md:text-4xl">Move Your Mouse To Find Targeted Relief</h2></div>
        <div className="relative mx-auto overflow-hidden bg-white" style={{aspectRatio:'1920 / 1059'}}>
          <img src={painImage} alt="JAMOOZ body pain solution" className="absolute inset-0 h-full w-full object-contain" />
          {painStates.map((p)=><button key={p.id} aria-label={p.id} onMouseEnter={()=>setPainImage(p.image)} onFocus={()=>setPainImage(p.image)} onClick={()=>setPainImage(p.image)} className="absolute z-10 bg-transparent" style={{left:pct(p.x,1920),top:pct(p.y,1059),width:pct(p.w,1920),height:pct(p.h,1059)}} />)}
        </div>
      </div>
    </section>

    <section className="bg-[#f7f4fb] py-10 md:py-14">
      <div className="mb-6 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-violet-700">Popular Products</p><h2 className="mt-2 text-3xl font-semibold md:text-4xl">Continuous Product Showcase</h2></div>
      <div className="overflow-hidden">
        <div className="jamooz-marquee flex w-[200%]">
          {[0,1].map((copy)=><div key={copy} className="relative w-1/2 shrink-0" style={{aspectRatio:'1920 / 788'}}>
            <img src={scrollImage} alt="JAMOOZ products" className="absolute inset-0 h-full w-full object-contain" />
            {scrollLinks.map((l,i)=><a key={i} href={l.href} target="_blank" rel="noreferrer" className="absolute z-10" style={{left:pct(l.x,1920),top:pct(l.y,788),width:pct(l.w,1920),height:pct(l.h,788)}} aria-label={`product-${i+1}`} />)}
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-3 md:px-6">
        <div className="mb-6 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-violet-700">Product Categories</p><h2 className="mt-2 text-3xl font-semibold md:text-4xl">Product Category Display</h2></div>
        <div className="grid gap-4 md:grid-cols-2">
          {['banner_03.webp','banner_04.webp','banner_05.webp','banner_06.webp'].map(f=><img key={f} src={asset('product_categories',f)} alt="category" className="block h-auto w-full" />)}
        </div>
      </div>
    </section>

    <section className="bg-[#faf8ff] py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-3 md:px-6">
        <div className="mb-6 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-violet-700">Customization</p><h2 className="mt-2 text-3xl font-semibold md:text-4xl">Interactive Customization Preview</h2></div>
        <div className="relative mx-auto overflow-hidden bg-white" style={{aspectRatio:'1920 / 640'}}>
          <img src={asset('customization',group.files[customVariant])} alt="customization preview" className="absolute inset-0 h-full w-full object-contain" />
          {customGroups.map((g,i)=><button key={g.id} aria-label={g.id} onMouseEnter={()=>chooseGroup(i)} onFocus={()=>chooseGroup(i)} onClick={()=>chooseGroup(i)} className="absolute z-20 bg-transparent" style={{left:pct(g.x,1920),top:pct(g.y,640),width:pct(g.w,1920),height:pct(g.h,640)}} />)}
          {group.swatches.map((s,i)=><button key={i} aria-label={`variant-${i+1}`} onMouseEnter={()=>setCustomVariant(i)} onFocus={()=>setCustomVariant(i)} onClick={()=>setCustomVariant(i)} className="absolute z-30 bg-transparent" style={{left:pct(s.x,1920),top:pct(s.y,640),width:pct(s.w,1920),height:pct(s.h,640)}} />)}
        </div>
      </div>
    </section>

    <style jsx global>{`
      @keyframes jamoozScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .jamooz-marquee { animation: jamoozScroll 26s linear infinite; }
      .jamooz-marquee:hover { animation-play-state: paused; }
      @media (prefers-reduced-motion: reduce){ .jamooz-marquee{ animation:none; } }
    `}</style>
  </div>;
}
