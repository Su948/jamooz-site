'use client';

import { useEffect, useState } from 'react';

const R2 = 'https://pub-7c0fef674c514e7d8b3844cdeadf9c48.r2.dev/JAMOOZ_preview_web_assets';
const asset = (group: string, file: string) => `${R2}/${group}/${file}`;
const ali = (path: string) => `https:${path}`;
const pct = (n:number,total:number) => `${(n/total)*100}%`;
const heroSlides = [
  {
    image:'/preview-assets/hero/factory-selective.webp',
    eyebrow:'',
    title:'Global Smart Massage Solutions Provider',
    body:'Factory Strength • OEM/ODM Customization • Stable Quality & Delivery',
    cta:'Discover JAMOOZ',
    href:'#about',
    theme:'dark',
    align:'left',
    overlay:true,
    compact:false,
    showCta:false,
  },
  {
    image:'/preview-assets/hero/products.webp',
    eyebrow:'Professional Massage Device Manufacturer',
    title:'Wellness Products Built for Your Market',
    body:'Flexible bulk supply, custom branding and product development for global B2B partners.',
    cta:'Explore Products',
    href:'#product-range',
    theme:'dark',
    align:'left',
    overlay:true,
    compact:true,
    showCta:true,
  },
  {
    image:'/preview-assets/hero/odm-selective.webp',
    eyebrow:'One-Stop Custom Scalp Massage Comb Development',
    title:'ODM From 0 to 1',
    body:'From idea to mass production, we turn concepts into market-ready wellness products.',
    cta:'Start Your Project',
    href:'#inquiry',
    theme:'light',
    align:'center',
    overlay:true,
    compact:true,
    showCta:false,
  },
] as const;

const painStates = [
  { id:'p1',x:609,y:185,w:68,h:93,image:ali('//sc04.alicdn.com/kf/Hd2b7d5ddb4a34689872369aa618d57ffz/252717039/Hd2b7d5ddb4a34689872369aa618d57ffz.png') },
  { id:'p2',x:579,y:393,w:115,h:105,image:ali('//sc04.alicdn.com/kf/Ha7597fb64c9949ef9ed169d4b659806bE/252717039/Ha7597fb64c9949ef9ed169d4b659806bE.png') },
  { id:'p3',x:645,y:775,w:78,h:159,image:ali('//sc04.alicdn.com/kf/H07535359442b4b909ab787fc36acba76K/252717039/H07535359442b4b909ab787fc36acba76K.png') },
  { id:'p4',x:546,y:769,w:71,h:163,image:ali('//sc04.alicdn.com/kf/H07535359442b4b909ab787fc36acba76K/252717039/H07535359442b4b909ab787fc36acba76K.png') },
  { id:'p5',x:639,y:553,w:66,h:128,image:ali('//sc04.alicdn.com/kf/H5b413e14344a456bbe57c4b1a6eb95a6T/252717039/H5b413e14344a456bbe57c4b1a6eb95a6T.png') },
  { id:'p6',x:566,y:551,w:66,h:129,image:ali('//sc04.alicdn.com/kf/H5b413e14344a456bbe57c4b1a6eb95a6T/252717039/H5b413e14344a456bbe57c4b1a6eb95a6T.png') },
  { id:'p7',x:710,y:507,w:49,h:98,image:ali('//sc04.alicdn.com/kf/H221e3a936b6741758d1718b3bbec1a4ai/252717039/H221e3a936b6741758d1718b3bbec1a4ai.png') },
  { id:'p8',x:514,y:507,w:50,h:99,image:ali('//sc04.alicdn.com/kf/H221e3a936b6741758d1718b3bbec1a4ai/252717039/H221e3a936b6741758d1718b3bbec1a4ai.png') },
  { id:'p9',x:608,y:263,w:65,h:60,image:ali('//sc04.alicdn.com/kf/Hadfb85f0a827454a8ebf62c26e7dd5db8/252717039/Hadfb85f0a827454a8ebf62c26e7dd5db8.png') },
] as const;

const customGroups = [
  { id:'c1',x:1017,y:96,w:149,h:173,files:['1.1.webp','1.2.webp','1.3.webp','1.4.webp'],swatches:[{x:1021,y:268,w:57,h:76},{x:1084,y:270,w:55,h:75},{x:1153,y:266,w:55,h:81},{x:1221,y:268,w:57,h:78}] },
  { id:'c2',x:1170,y:95,w:157,h:167,files:['2.1.webp','2.2.webp'],swatches:[{x:1020,y:271,w:55,h:71},{x:1089,y:267,w:53,h:73}] },
  { id:'c3',x:1344,y:97,w:146,h:163,files:['3.1.webp','3.2.webp','3.3.webp'],swatches:[{x:1022,y:273,w:50,h:69},{x:1091,y:271,w:47,h:67},{x:1162,y:274,w:46,h:67}] },
  { id:'c4',x:1501,y:106,w:146,h:158,files:['4.1.webp','4.2.webp','4.3.webp'],swatches:[{x:1014,y:262,w:60,h:76},{x:1087,y:270,w:52,h:78},{x:1160,y:269,w:51,h:75}] },
] as const;

const scrollBg = ali('//sc04.alicdn.com/kf/Hd94f7581c62d4edaa1393c4d63bc2c4fK/252717039/Hd94f7581c62d4edaa1393c4d63bc2c4fK.png');
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

const collectionBg = ali('//sc04.alicdn.com/kf/H469e2db625db44f6bc64935cc98366b0r/252717039/H469e2db625db44f6bc64935cc98366b0r.png');
const collectionItems = [
  {x:1040,y:86,w:527,h:352,img:ali('//sc04.alicdn.com/kf/H8e3115ca790f499e953f19c01998e217y/252717039/H8e3115ca790f499e953f19c01998e217y.png'),href:'https://jamooz.m.en.alibaba.com/productgrouplist-927686627/U_shaped_massage_pillow.html'},
  {x:358,y:467,w:392,h:352,img:ali('//sc04.alicdn.com/kf/H4dbedbb220ff45a7a4f89627a1efc017a/252717039/H4dbedbb220ff45a7a4f89627a1efc017a.png'),href:'https://jamooz.m.en.alibaba.com/productgrouplist-829339617/Massage_chair.html'},
  {x:765,y:467,w:392,h:352,img:ali('//sc04.alicdn.com/kf/H2025407316334f0a85313640130714e9Z/252717039/H2025407316334f0a85313640130714e9Z.png'),href:'https://jamooz.m.en.alibaba.com/productgrouplist-964368605/Abdominal_massage.html'},
  {x:1175,y:467,w:392,h:352,img:ali('//sc04.alicdn.com/kf/H83987d9d85764c28a6d49136d9f5a9dec/252717039/H83987d9d85764c28a6d49136d9f5a9dec.png'),href:'https://jamooz.m.en.alibaba.com/productgrouplist-964118558/scalp_massager.html'},
];

const categoryPages = [
  {name:'Massage Gun',h:1362,bg:ali('//sc04.alicdn.com/kf/H42269ee3d363461685c2bc242f4eaa10w/252717039/H42269ee3d363461685c2bc242f4eaa10w.jpg'),links:[{x:85,y:0,w:1195,h:340,href:'https://jamooz.m.en.alibaba.com/productgrouplist-963657820/'},{x:715,y:500,w:765,h:267,href:'https://www.alibaba.com/product-detail/Hot-Selling-Mini-Portable-Massage-Gun_1601806822298.html'},{x:352,y:893,w:309,h:401,href:'https://www.alibaba.com/product-detail/2026-New-Electric-Massage-Gun-Smart_1601777950076.html'},{x:658,y:893,w:304,h:398,href:'https://www.alibaba.com/product-detail/JAMOOZ-Double-Head-High-Power-3_1601441437669.html'},{x:959,y:888,w:299,h:407,href:'https://www.alibaba.com/product-detail/Portable-Mini-Electric-Massage-Gun-Deep_1601806789203.html'},{x:1259,y:892,w:302,h:401,href:'https://www.alibaba.com/product-detail/Smart-Electric-Massage-Gun-One-hand_1601806789959.html'}]},
  {name:'Face & Eye',h:1399,bg:ali('//sc04.alicdn.com/kf/Hb7d680b041594d96a8ad3e0fd5fe0ca4V/252717039/Hb7d680b041594d96a8ad3e0fd5fe0ca4V.jpg'),links:[{x:85,y:0,w:1195,h:340,href:'https://jamooz.m.en.alibaba.com/productgrouplist-916843355/'},{x:715,y:500,w:765,h:267,href:'https://www.alibaba.com/product-detail/Eye-Massager-With-Heat-Cold-Vibration_1601675044291.html'},{x:352,y:893,w:309,h:401,href:'https://www.alibaba.com/product-detail/2026-Most-Selling-Product-Women-s_11000030235200.html'},{x:658,y:893,w:304,h:398,href:'https://www.alibaba.com/product-detail/Skin-Tightening-Facial-Massager-with-Red_1601794009991.html'},{x:959,y:888,w:299,h:407,href:'https://www.alibaba.com/product-detail/Portable-Rechargeable-Eye-Massager-Airbag-Compression_1601784338402.html'},{x:1259,y:892,w:302,h:401,href:'https://www.alibaba.com/product-detail/Eye-Massager-With-Heat-Cold-Vibration_1601675044291.html'}]},
  {name:'Scalp Massage',h:1354,bg:ali('//sc04.alicdn.com/kf/H1cecd2d0beac4601ab0900ed3963c9bbY/252717039/H1cecd2d0beac4601ab0900ed3963c9bbY.jpg'),links:[{x:85,y:0,w:1195,h:340,href:'https://jamooz.m.en.alibaba.com/productgrouplist-964339889/'},{x:715,y:500,w:765,h:267,href:'https://www.alibaba.com/product-detail/JAMOOZ-Portable-Healthy-Technology-Electric-Scalp_1601708387462.html'},{x:352,y:893,w:309,h:401,href:'https://www.alibaba.com/product-detail/2026-Upgraded-Electric-Scalp-Massage-Comb_1601809224462.html'},{x:656,y:892,w:302,h:401,href:'https://www.alibaba.com/product-detail/Best-Selling-Products-2025-Hair-Growth_11000031623897.html'},{x:956,y:894,w:304,h:398,href:'https://www.alibaba.com/product-detail/Electric-Head-Massager-Sleep-Monitor-Migraine_1600878255438.html'},{x:1260,y:888,w:299,h:407,href:'https://www.alibaba.com/product-detail/Cat-Smart-Handy-Automatic-Silicone-Rechargeable_1600295060563.html'}]},
  {name:'U-Shaped Pillow',h:1363,bg:ali('//sc04.alicdn.com/kf/H48dd9a59c44b435c991f3e1999a84d63F/252717039/H48dd9a59c44b435c991f3e1999a84d63F.jpg'),links:[{x:85,y:0,w:1195,h:340,href:'https://jamooz.m.en.alibaba.com/productgrouplist-927686627/'},{x:715,y:500,w:765,h:267,href:'https://www.alibaba.com/product-detail/2026-Portable-Best-Selling-Intelligent-3D_1601594698148.html'},{x:352,y:893,w:309,h:401,href:'https://www.alibaba.com/product-detail/Portable-Massagers-Products-Travel-Hot-Sale_1601233871632.html'},{x:656,y:892,w:302,h:401,href:'https://www.alibaba.com/product-detail/Portable-Massagers-Products-Travel-Hot-Sale_1601233871632.html'},{x:956,y:894,w:304,h:398,href:'https://www.alibaba.com/product-detail/Infrared_Light_Hot_Compress_USB_Charge_Neck_Pillow_Massage_Travel_Neck_Pillow_Massage_Cordless_Travel_Massage_Pillow_1600307030163.html'},{x:1260,y:888,w:299,h:407,href:'https://www.alibaba.com/product-detail/Best-selling-Products-2025-Estate-Car_1601377613813.html'}]},
];

const reviewBg = ali('//sc04.alicdn.com/kf/H9d354770c4b14f6ea84599d5cb42df7cw/252717039/H9d354770c4b14f6ea84599d5cb42df7cw.png');
const reviews = [
  {x:360,y:286,w:362,h:517,img:ali('//sc04.alicdn.com/kf/H8a20f2689d164b6184b3b9a7541d1075D/252717039/H8a20f2689d164b6184b3b9a7541d1075D.png'),speed:'25s'},
  {x:780,y:286,w:362,h:707,img:ali('//sc04.alicdn.com/kf/H9f69f1787ffe4ce093b5364efaaaed9dW/252717039/H9f69f1787ffe4ce093b5364efaaaed9dW.png'),speed:'31s'},
  {x:1198,y:286,w:362,h:517,img:ali('//sc04.alicdn.com/kf/H0afcafb90e0740d6842ae09a714d44dfm/252717039/H0afcafb90e0740d6842ae09a714d44dfm.png'),speed:'27s'},
];

const companyImage = ali('//sc04.alicdn.com/kf/H074a318c1d1a4f568d94181d93a09474F/252717039/H074a318c1d1a4f568d94181d93a09474F.png');
const companyVideo = 'https://play.video.alibaba.com/global/play/6000299682943.mp4?dft=hd';
const companyLinks = [
  {x:1187,y:294,w:174,h:159,href:'https://www.alibaba.com/product-detail/JAMOOZ-Portable-Healthy-Technology-Electric-Scalp_1601708387462.html'},
  {x:1369,y:284,w:171,h:173,href:'https://www.alibaba.com/product-detail/2026-Portable-Best-Selling-Intelligent-3D_1601594698148.html'},
  {x:1549,y:290,w:169,h:167,href:'https://www.alibaba.com/product-detail/Premium-Ergonomic-Memory-Foam-Bread-Pillow_1601803716499.html'},
  {x:1729,y:288,w:172,h:168,href:'https://www.alibaba.com/product-detail/JAMOOZ-2024-Luxury-Zero-Gravity-Full_1601084511260.html'},
] as const;
const certificateImage = ali('//sc02.alicdn.com/kf/H99de7b20e65046c896d63f96a166fde27.png');

export default function HomepagePreview(){
  const [bannerIndex,setBannerIndex] = useState(0);
  const [painImage,setPainImage] = useState(painStates[0].image);
  const [customGroup,setCustomGroup] = useState(0);
  const [customVariant,setCustomVariant] = useState(0);
  const group = customGroups[customGroup];
  const chooseGroup = (i:number) => { setCustomGroup(i); setCustomVariant(0); };
  const prevBanner = () => setBannerIndex(i => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextBanner = () => setBannerIndex(i => (i + 1) % heroSlides.length);

  useEffect(() => {
    const timer = window.setInterval(nextBanner, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="bg-white text-zinc-900">
    <section aria-label="JAMOOZ highlights" className="group relative min-h-[500px] overflow-hidden bg-[#171229] sm:min-h-[460px] lg:min-h-0" style={{aspectRatio:'1920 / 650'}}>
      {heroSlides.map((slide,i)=><div key={slide.image} aria-hidden={bannerIndex!==i} className={`absolute inset-0 transition-opacity duration-700 ${bannerIndex===i?'opacity-100':'pointer-events-none opacity-0'}`}>
        <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        {slide.overlay&&<div className={`absolute z-10 ${slide.theme==='dark'?'text-white':'text-[#211544]'} ${i===0?'left-[29.5%] top-[20%] w-[34%] text-left':i===1?'left-[6.5%] top-[16%] w-[27%] text-left':'left-[34%] top-[7%] w-[33%] text-left'}`}>
          {slide.eyebrow&&<p className={`mb-[1.2%] font-bold ${i===1?'text-[clamp(8px,0.8vw,14px)] uppercase tracking-[0.22em]':'text-[clamp(10px,1vw,18px)]'} ${slide.theme==='dark'?'text-violet-100':'text-[#211080]'}`}>{slide.eyebrow}</p>}
          {i===0?<h1 className="font-semibold leading-[1.06] tracking-tight text-[clamp(20px,2.65vw,52px)]">{slide.title}</h1>:<h2 className={`font-semibold leading-[1.07] tracking-tight ${i===1?'text-[clamp(22px,2.25vw,42px)]':'text-[clamp(22px,2.8vw,54px)]'}`}>{slide.title}</h2>}
          <p className={`mt-[2%] ${i===1?'max-w-[290px] text-[clamp(10px,0.9vw,16px)] leading-[1.45]':i===0?'text-[clamp(10px,1.05vw,18px)] leading-[1.45]':'text-[clamp(10px,0.95vw,17px)] leading-[1.45]'} ${slide.theme==='dark'?'text-white/80':'text-[#3d3260]'}`}>{slide.body}</p>
          {slide.showCta&&<a href={slide.href} className="mt-[4%] inline-flex min-h-9 items-center justify-center rounded-full bg-white px-5 py-2 text-[clamp(10px,0.8vw,14px)] font-bold text-[#241746] transition hover:-translate-y-0.5 hover:bg-violet-100">{slide.cta}<span aria-hidden className="ml-2">→</span></a>}
        </div>}
      </div>)}
      <button type="button" onClick={prevBanner} aria-label="Previous banner" className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-2xl text-white opacity-0 backdrop-blur-sm transition hover:bg-black/55 group-hover:opacity-100 md:left-6">‹</button>
      <button type="button" onClick={nextBanner} aria-label="Next banner" className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-2xl text-white opacity-0 backdrop-blur-sm transition hover:bg-black/55 group-hover:opacity-100 md:right-6">›</button>
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
        {heroSlides.map((slide,i)=><button key={slide.image} type="button" onClick={()=>setBannerIndex(i)} aria-label={`Show banner ${i+1}`} className={`h-2.5 rounded-full transition-all ${bannerIndex===i?'w-7 bg-white':'w-2.5 bg-white/55 hover:bg-white/80'}`} />)}
      </div>
    </section>

    <section id="solutions" className="scroll-mt-24 bg-white py-10 md:py-14"><div className="mx-auto max-w-[1440px] px-3 md:px-6"><div className="relative mx-auto overflow-hidden" style={{aspectRatio:'1920 / 1059'}}><img src={painImage} alt="JAMOOZ body pain solution" className="absolute inset-0 h-full w-full object-contain" />{painStates.map(p=><button key={p.id} aria-label={p.id} onMouseEnter={()=>setPainImage(p.image)} onFocus={()=>setPainImage(p.image)} onClick={()=>setPainImage(p.image)} className="absolute z-10 bg-transparent" style={{left:pct(p.x,1920),top:pct(p.y,1059),width:pct(p.w,1920),height:pct(p.h,1059)}} />)}</div></div></section>

    <section id="oem-odm" className="scroll-mt-24 bg-[#faf8ff] py-10 md:py-14"><div className="mx-auto max-w-[1440px] px-3 md:px-6"><div className="relative mx-auto overflow-hidden" style={{aspectRatio:'1920 / 640'}}><img src={asset('customization',group.files[customVariant])} alt="customization preview" className="absolute inset-0 h-full w-full object-contain" />{customGroups.map((g,i)=><button key={g.id} aria-label={g.id} onMouseEnter={()=>chooseGroup(i)} onFocus={()=>chooseGroup(i)} onClick={()=>chooseGroup(i)} className="absolute z-20 bg-transparent" style={{left:pct(g.x,1920),top:pct(g.y,640),width:pct(g.w,1920),height:pct(g.h,640)}} />)}{group.swatches.map((s,i)=><button key={i} aria-label={`variant-${i+1}`} onMouseEnter={()=>setCustomVariant(i)} onFocus={()=>setCustomVariant(i)} onClick={()=>setCustomVariant(i)} className="absolute z-30 bg-transparent" style={{left:pct(s.x,1920),top:pct(s.y,640),width:pct(s.w,1920),height:pct(s.h,640)}} />)}</div></div></section>

    <section className="relative overflow-hidden" style={{aspectRatio:'1920 / 788'}}><img src={scrollBg} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 overflow-hidden"><div className="jamooz-marquee flex h-full w-[200%]">{[0,1].map(copy=><div key={copy} className="relative h-full w-1/2 shrink-0"><img src={scrollImage} alt="JAMOOZ products" className="absolute inset-0 h-full w-full object-contain" />{scrollLinks.map((l,i)=><a key={i} href={l.href} target="_blank" rel="noreferrer" className="absolute z-10" style={{left:pct(l.x,1920),top:pct(l.y,788),width:pct(l.w,1920),height:pct(l.h,788)}} aria-label={`product-${i+1}`} />)}</div>)}</div></div></section>

    <section className="bg-white py-10 md:py-14"><div className="mx-auto max-w-[1440px] px-3 md:px-6"><div className="relative overflow-hidden" style={{aspectRatio:'1920 / 913'}}><img src={collectionBg} alt="JAMOOZ categories" className="absolute inset-0 h-full w-full object-contain" />{collectionItems.map((it,i)=><a key={i} href={it.href} target="_blank" rel="noreferrer" className="absolute z-10 overflow-hidden" style={{left:pct(it.x,1920),top:pct(it.y,913),width:pct(it.w,1920),height:pct(it.h,913)}}><img src={it.img} alt="category" className="h-full w-full object-contain" /></a>)}</div></div></section>

    {categoryPages.map(page=><section key={page.name} className="bg-white"><div className="relative mx-auto overflow-hidden" style={{aspectRatio:`1920 / ${page.h}`}}><img src={page.bg} alt={page.name} className="absolute inset-0 h-full w-full object-contain" />{page.links.map((l,i)=><a key={i} href={l.href} target="_blank" rel="noreferrer" className="absolute z-10" style={{left:pct(l.x,1920),top:pct(l.y,page.h),width:pct(l.w,1920),height:pct(l.h,page.h)}} aria-label={`${page.name}-${i+1}`} />)}</div></section>)}

    <section className="relative overflow-hidden bg-white" style={{aspectRatio:'1920 / 2020'}}>
      <img src={companyImage} alt="JAMOOZ company introduction" className="absolute inset-0 h-full w-full object-contain" />
      <video
        src={companyVideo}
        aria-label="JAMOOZ company introduction video"
        className="absolute z-10 h-full w-full bg-black object-cover"
        style={{left:pct(360,1920),top:pct(30,2020),width:pct(800,1920),height:pct(450,2020)}}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />
      {companyLinks.map((link,i)=><a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`JAMOOZ featured company product ${i+1}`} className="absolute z-10" style={{left:pct(link.x,1920),top:pct(link.y,2020),width:pct(link.w,1920),height:pct(link.h,2020)}} />)}
    </section>

    <section id="products" className="scroll-mt-24 relative overflow-hidden bg-white" style={{aspectRatio:'1920 / 1110'}}><img src={reviewBg} alt="Customer reviews" className="absolute inset-0 h-full w-full object-contain" />{reviews.map((r,i)=><div key={i} className="absolute overflow-hidden" style={{left:pct(r.x,1920),top:pct(r.y,1110),width:pct(r.w,1920),height:pct(r.h,1110)}}><div className="review-roll" style={{animationDuration:r.speed}}><img src={r.img} alt="buyer reviews" className="block h-auto w-full" /><img src={r.img} alt="" aria-hidden className="block h-auto w-full" /></div></div>)}</section>

    <section id="about" className="scroll-mt-24 bg-white"><img src={certificateImage} alt="JAMOOZ certificates" className="block h-auto w-full" /></section>

    <style jsx global>{`
      @keyframes jamoozScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .jamooz-marquee { animation: jamoozScroll 26s linear infinite; }
      .jamooz-marquee:hover { animation-play-state: paused; }
      @keyframes reviewScroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
      .review-roll { animation: reviewScroll 26s linear infinite; }
      .review-roll:hover { animation-play-state: paused; }
      @media (prefers-reduced-motion: reduce){ .jamooz-marquee,.review-roll{animation:none;} }
    `}</style>
  </div>;
}
