'use client';

import { useRef, useState } from 'react';

const ali = (path: string) => `https:${path}`;
const pct = (n:number,total:number) => `${(n/total)*100}%`;
const seoCategories = [
  'Head & Scalp',
  'Neck & Shoulder',
  'Back & Waist',
  'Handheld Massage',
  'Foot Care',
  'Cupping & Guasha',
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
  { id:'c1',name:'Scalp Massager',fabric:false,logo:{x:72,y:75},colors:[{name:'White',hex:'#ffffff',file:'1.1.webp'},{name:'Green',hex:'#315d34',file:'1.2.webp'},{name:'Red',hex:'#d84d4d',file:'1.3.webp'},{name:'Purple',hex:'#8f86b9',file:'1.4.webp'}] },
  { id:'c2',name:'Neck Massager',fabric:false,logo:{x:72,y:56},colors:[{name:'Blue',hex:'#253c86',file:'2.1.webp'},{name:'Grey',hex:'#a7a7a7',file:'2.2.webp'}] },
  { id:'c3',name:'Massage Belt',fabric:false,logo:{x:58,y:55},colors:[{name:'Black',hex:'#171717',file:'3.1.webp'},{name:'Grey',hex:'#8f8f8f',file:'3.2.webp'},{name:'White',hex:'#ffffff',file:'3.3.webp'}] },
  { id:'c4',name:'Massage Pillow',fabric:true,logo:{x:53,y:40},colors:[{name:'Blue',hex:'#6d8fc0',file:'4.1.webp'},{name:'Red',hex:'#d84a3a',file:'4.2.webp'},{name:'Green',hex:'#5f8589',file:'4.3.webp'}] },
] as const;
const customizationCapabilities = ['Custom Logo','Colors & Materials','Functions & Features','Packaging Design','Private Label','New Product Development'] as const;
const customizationServices = ['Logo Printing','Custom Color','Custom Packaging','Function Customization','Private Label'] as const;

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
  const [painImage,setPainImage] = useState(painStates[0].image);
  const [customGroup,setCustomGroup] = useState(0);
  const [customVariant,setCustomVariant] = useState(0);
  const [selectedServices,setSelectedServices] = useState<string[]>(['Logo Printing','Custom Packaging']);
  const [logoPreview,setLogoPreview] = useState<string | null>(null);
  const [logoPosition,setLogoPosition] = useState<{x:number;y:number}>({x:customGroups[0].logo.x,y:customGroups[0].logo.y});
  const [logoScale,setLogoScale] = useState(1);
  const [logoRotation,setLogoRotation] = useState(0);
  const [draggingLogo,setDraggingLogo] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const group = customGroups[customGroup];
  const activeColor = group.colors[customVariant] || group.colors[0];
  const chooseGroup = (i:number) => { setCustomGroup(i); setCustomVariant(0); setLogoPosition({x:customGroups[i].logo.x,y:customGroups[i].logo.y}); };
  const toggleService = (service:string) => setSelectedServices(current => current.includes(service) ? current.filter(item => item !== service) : [...current,service]);
  const selectionServiceNames = selectedServices.map(service => service === 'Logo Printing' ? 'Custom Logo' : service);
  const requestCustomQuote = () => {
    const form = document.getElementById('preview-inquiry-form') as HTMLFormElement | null;
    const selection = `${group.name} · ${activeColor.name}${selectionServiceNames.length ? ` · ${selectionServiceNames.join(' · ')}` : ''}`;
    if (form) {
      const product = form.elements.namedItem('product') as HTMLInputElement | null;
      const oem = form.elements.namedItem('oem') as HTMLSelectElement | null;
      const message = form.elements.namedItem('message') as HTMLTextAreaElement | null;
      if (product) product.value = group.name;
      if (oem) oem.value = 'ODM — Product Customization';
      if (message) message.value = `Custom configuration: ${selection}\nAvailable branding: ${group.fabric ? 'Embroidery · Woven Label · Printed Label · Custom Packaging' : 'Silk-Screen Printing · Laser Engraving · UV Printing'}`;
    }
    document.getElementById('inquiry')?.scrollIntoView({behavior:'smooth'});
  };
  const handleLogoUpload = (file:File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') return;
      const image = new Image();
      image.onload = () => {
        const maxDimension = 900;
        const ratio = Math.min(1,maxDimension/Math.max(image.width,image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1,Math.round(image.width*ratio));
        canvas.height = Math.max(1,Math.round(image.height*ratio));
        const context = canvas.getContext('2d');
        if (!context) return;
        context.drawImage(image,0,0,canvas.width,canvas.height);
        const pixels = context.getImageData(0,0,canvas.width,canvas.height);
        for (let i=0;i<pixels.data.length;i+=4) {
          const minimum = Math.min(pixels.data[i],pixels.data[i+1],pixels.data[i+2]);
          if (minimum>=245) pixels.data[i+3]=0;
          else if (minimum>220) pixels.data[i+3]=Math.round(pixels.data[i+3]*((245-minimum)/25));
        }
        context.putImageData(pixels,0,0);
        setLogoPreview(canvas.toDataURL('image/png'));
        setLogoScale(1);
        setLogoRotation(0);
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  const moveLogo = (clientX:number,clientY:number) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return;
    setLogoPosition({x:Math.max(8,Math.min(92,((clientX-rect.left)/rect.width)*100)),y:Math.max(8,Math.min(92,((clientY-rect.top)/rect.height)*100))});
  };
  return <div className="bg-white text-zinc-900">
    <section aria-label="JAMOOZ massage device manufacturing" className="relative min-h-[480px] overflow-hidden bg-[#5f4790] sm:min-h-0" style={{aspectRatio:'1920 / 650'}}>
      <img src="/preview-assets/hero/products.webp" alt="JAMOOZ massage and wellness product range" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4c397d]/45 via-transparent to-transparent" />
      <div className="relative z-10 flex h-full min-h-[480px] items-center px-[5%] sm:min-h-0">
        <div className="w-full max-w-[330px] text-white sm:w-[29%] sm:max-w-none">
          <div className="inline-flex flex-col rounded-lg border border-white/20 bg-[#302057]/45 px-3.5 py-2.5 shadow-lg shadow-purple-950/10 backdrop-blur-md">
            <span className="text-[clamp(9px,0.68vw,12px)] font-extrabold tracking-[0.18em] text-[#ead4ff]">20+ YEARS EXPERIENCE</span>
            <span className="mt-1 text-[clamp(8px,0.6vw,11px)] font-semibold tracking-[0.08em] text-white/80">OEM / ODM&nbsp;&nbsp;|&nbsp;&nbsp;CUSTOM DESIGN&nbsp;&nbsp;|&nbsp;&nbsp;MASS PRODUCTION</span>
          </div>
          <h2 className="mt-5 text-[clamp(28px,2vw,39px)] font-semibold leading-[1.08] tracking-tight">Your <span className="text-[#e7b6ff]">Trusted</span> Massage Device<br />OEM/ODM Manufacturing Partner</h2>
          <div className="mt-5 border-l-2 border-[#d8a9ff] pl-3.5">
            <p className="text-[clamp(12px,0.82vw,15px)] font-semibold leading-[1.45] text-white">20+ Years Manufacturing Experience</p>
            <p className="mt-2 text-[clamp(11px,0.76vw,14px)] leading-[1.5] text-white/78">From Product Design To Mass Production,<br />We Help Global Brands Build Successful<br />Wellness Products.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#inquiry" className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#34205f] shadow-lg shadow-purple-950/15 transition hover:-translate-y-0.5 hover:bg-violet-100">Request A Quote</a>
            <a href="#product-range" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/65 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20">Explore Products</a>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="body-solutions-title" className="flex min-h-[220px] items-center border-b border-violet-100/70 bg-[#fcfbff] py-9 md:h-[260px] md:py-10">
      <div className="mx-auto w-full max-w-[1240px] px-5 text-center sm:px-8">
        <h1 id="body-solutions-title" className="text-3xl font-semibold tracking-tight text-[#302050] sm:text-4xl">Massage Solutions for Every Part of the Body</h1>
        <p className="mx-auto mt-4 max-w-[980px] text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">Discover our range of scalp massagers, neck and shoulder massagers, massage pillows, back massagers, foot massagers and electric cupping devices—designed for different wellness needs and global markets.</p>
        <nav aria-label="Product solution categories" className="mt-6 flex flex-wrap justify-center gap-2.5 md:flex-nowrap">
          {seoCategories.map(category=><a key={category} href="#product-range" className="inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-800 transition hover:border-violet-400 hover:bg-violet-50">{category}</a>)}
        </nav>
      </div>
    </section>

    <section id="solutions" className="scroll-mt-24 bg-white py-10 md:py-14"><div className="mx-auto max-w-[1440px] px-3 md:px-6"><div className="relative mx-auto overflow-hidden" style={{aspectRatio:'1920 / 1059'}}><img src={painImage} alt="JAMOOZ body pain solution" className="absolute inset-0 h-full w-full object-contain" /><div className="absolute inset-x-0 top-0 z-[5] flex h-[16%] items-center justify-center bg-[#faf8ff] px-4"><h2 className="text-center text-[clamp(18px,2.2vw,38px)] font-semibold tracking-tight text-[#45245f]">Hover Over the Body to Explore Products</h2></div>{painStates.map(p=><button key={p.id} aria-label={p.id} onMouseEnter={()=>setPainImage(p.image)} onFocus={()=>setPainImage(p.image)} onClick={()=>setPainImage(p.image)} className="absolute z-10 bg-transparent" style={{left:pct(p.x,1920),top:pct(p.y,1059),width:pct(p.w,1920),height:pct(p.h,1059)}} />)}</div></div></section>

    <section id="oem-odm" className="scroll-mt-24 bg-[#faf8ff] py-16 md:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">OEM/ODM Customization</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#342050] sm:text-4xl">Build Your Custom Massage Product</h2><p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">Choose a product, explore available colors and select the customization services you need. Our team will help turn your idea into a production-ready solution.</p></header>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">{customizationCapabilities.map(capability=><span key={capability} className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-800 shadow-sm"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-violet-500" />{capability}</span>)}</div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-violet-100 bg-white p-5 shadow-xl shadow-violet-900/5 sm:p-7">
            <div className="flex items-center justify-between gap-4"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">Live Product Preview</p><span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">{group.name}</span></div>
            <div ref={previewRef} className="relative mt-3 h-[390px] touch-none"><img src={`/preview-assets/customization-clean/${activeColor.file}`} alt={`${activeColor.name} ${group.name} product and custom packaging preview`} className="h-full w-full object-contain" />{selectedServices.includes('Logo Printing')&&<button type="button" title="Drag to reposition logo" aria-label="Logo placement preview. Drag to reposition." onPointerDown={event=>{event.currentTarget.setPointerCapture(event.pointerId);setDraggingLogo(true);moveLogo(event.clientX,event.clientY)}} onPointerMove={event=>{if(draggingLogo)moveLogo(event.clientX,event.clientY)}} onPointerUp={()=>setDraggingLogo(false)} onPointerCancel={()=>setDraggingLogo(false)} className={`absolute z-10 cursor-move rounded-md border border-dashed border-violet-400 px-2 py-1 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${logoPreview?'bg-transparent':'bg-white/85 backdrop-blur-sm'}`} style={{left:`${logoPosition.x}%`,top:`${logoPosition.y}%`,transform:`translate(-50%, -50%) rotate(${logoRotation}deg) scale(${logoScale})`}}>{logoPreview?<img src={logoPreview} alt="Uploaded custom logo with transparent background" className="max-h-12 max-w-28 object-contain" />:<span className="text-xs font-black tracking-[0.12em] text-violet-800">JAMOOZ</span>}</button>}</div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2"><span className="rounded-full border border-violet-200 bg-white/95 px-3 py-2 text-xs font-semibold text-violet-800 shadow-sm">Custom Packaging</span><span className="rounded-full border border-violet-200 bg-white/95 px-3 py-2 text-xs font-semibold text-violet-800 shadow-sm">Logo Placement</span></div>
            <div className="absolute bottom-20 left-6 right-6 space-y-2"><div className="flex flex-wrap items-center gap-2"><label className="cursor-pointer rounded-full bg-violet-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-violet-800 focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2">Upload Your Logo<input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={event=>handleLogoUpload(event.target.files?.[0])} className="sr-only" /></label>{logoPreview&&<button type="button" onClick={()=>{setLogoPreview(null);setLogoScale(1);setLogoRotation(0)}} className="rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-800 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">Use JAMOOZ Logo</button>}<span className="text-xs text-zinc-500">White backgrounds are removed automatically. Drag the logo to reposition it.</span></div>{selectedServices.includes('Logo Printing')&&<div className="flex flex-wrap items-center gap-4 rounded-xl border border-violet-100 bg-white/95 px-3 py-2 text-xs text-zinc-600 shadow-sm"><label className="flex items-center gap-2"><span className="font-semibold text-violet-800">Logo Size</span><input type="range" min="50" max="200" step="5" value={Math.round(logoScale*100)} onChange={event=>setLogoScale(Number(event.target.value)/100)} aria-label="Logo size" className="w-24 accent-violet-700" /><output>{Math.round(logoScale*100)}%</output></label><label className="flex items-center gap-2"><span className="font-semibold text-violet-800">Rotation</span><input type="range" min="-180" max="180" step="5" value={logoRotation} onChange={event=>setLogoRotation(Number(event.target.value))} aria-label="Logo rotation" className="w-24 accent-violet-700" /><output>{logoRotation}°</output></label></div>}</div>
          </div>

          <div className="rounded-3xl border border-violet-100 bg-white p-5 shadow-xl shadow-violet-900/5 sm:p-7">
            <fieldset><legend className="text-base font-bold text-[#3d2758]">1. Choose a Product</legend><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{customGroups.map((product,i)=><button key={product.id} type="button" onClick={()=>chooseGroup(i)} aria-pressed={customGroup===i} className={`group rounded-2xl border p-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${customGroup===i?'border-violet-500 bg-violet-50 shadow-md':'border-zinc-200 bg-white hover:border-violet-300 hover:bg-violet-50/50'}`}><img src={`/preview-assets/customization-clean/${product.colors[0].file}`} alt="" className="h-20 w-full rounded-xl object-contain" /><span className="mt-2 block text-center text-xs font-semibold text-zinc-700 group-hover:text-violet-800">{product.name}</span></button>)}</div></fieldset>

            <fieldset className="mt-7"><legend className="text-base font-bold text-[#3d2758]">2. Select a Color</legend><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{group.colors.map((color,i)=><button key={color.name} type="button" title={color.name} aria-label={`Select ${color.name} for ${group.name}`} aria-pressed={customVariant===i} onClick={()=>setCustomVariant(i)} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${customVariant===i?'border-violet-500 bg-violet-50 text-violet-800':'border-zinc-200 text-zinc-600 hover:border-violet-300 hover:bg-violet-50/50'}`}><span aria-hidden className="h-5 w-5 shrink-0 rounded-full border border-zinc-300 shadow-sm" style={{backgroundColor:color.hex}} />{color.name}</button>)}</div></fieldset>

            <fieldset className="mt-7"><legend className="text-base font-bold text-[#3d2758]">3. Select Customization Services</legend><div className="mt-4 flex flex-wrap gap-2.5">{customizationServices.map(service=>{const selected=selectedServices.includes(service);return <button key={service} type="button" aria-pressed={selected} onClick={()=>toggleService(service)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${selected?'border-violet-600 bg-violet-700 text-white':'border-zinc-200 bg-white text-zinc-600 hover:border-violet-300 hover:bg-violet-50'}`}><span aria-hidden>{selected?'✓':'+'}</span>{service}</button>})}</div></fieldset>

            <div className="mt-7 rounded-2xl bg-violet-50 p-4 text-sm text-violet-950"><span className="font-bold">Available Branding:</span> {group.fabric?'Embroidery · Woven Label · Printed Label · Custom Packaging':'Silk-Screen Printing · Laser Engraving · UV Printing'}</div>
            <div className="mt-5 rounded-2xl border border-violet-100 bg-[#fcfaff] p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-violet-700">Your Selection</p><p className="mt-2 text-sm font-semibold leading-6 text-[#3d2758]">{group.name} · {activeColor.name}{selectionServiceNames.length?` · ${selectionServiceNames.join(' · ')}`:''}</p><button type="button" onClick={requestCustomQuote} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2">Request a Custom Quote</button></div>
          </div>
        </div>
      </div>
    </section>

    <section id="product-range" className="scroll-mt-24 relative overflow-hidden" style={{aspectRatio:'1920 / 788'}}><img src={scrollBg} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 overflow-hidden"><div className="jamooz-marquee flex h-full w-[200%]">{[0,1].map(copy=><div key={copy} className="relative h-full w-1/2 shrink-0"><img src={scrollImage} alt="JAMOOZ products" className="absolute inset-0 h-full w-full object-contain" />{scrollLinks.map((l,i)=><a key={i} href={l.href} target="_blank" rel="noreferrer" className="absolute z-10" style={{left:pct(l.x,1920),top:pct(l.y,788),width:pct(l.w,1920),height:pct(l.h,788)}} aria-label={`product-${i+1}`} />)}</div>)}</div></div></section>

    <section className="bg-white py-10 md:py-14"><div className="mx-auto max-w-[1440px] px-3 md:px-6"><div className="relative overflow-hidden" style={{aspectRatio:'1920 / 913'}}><img src={collectionBg} alt="JAMOOZ categories" className="absolute inset-0 h-full w-full object-contain" />{collectionItems.map((it,i)=><a key={i} href={it.href} target="_blank" rel="noreferrer" className="absolute z-10 overflow-hidden" style={{left:pct(it.x,1920),top:pct(it.y,913),width:pct(it.w,1920),height:pct(it.h,913)}}><img src={it.img} alt="category" className="h-full w-full object-contain" /></a>)}</div></div></section>

    {categoryPages.map(page=><section key={page.name} className="bg-white"><div className="relative mx-auto overflow-hidden" style={{aspectRatio:`1920 / ${page.h}`}}><img src={page.bg} alt={page.name} className="absolute inset-0 h-full w-full object-contain" />{page.links.map((l,i)=><a key={i} href={l.href} target="_blank" rel="noreferrer" className="absolute z-10" style={{left:pct(l.x,1920),top:pct(l.y,page.h),width:pct(l.w,1920),height:pct(l.h,page.h)}} aria-label={`${page.name}-${i+1}`} />)}</div></section>)}

    <section id="about-us" className="scroll-mt-24 relative overflow-hidden bg-white" style={{aspectRatio:'1920 / 2020'}}>
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

    <section id="quality" className="scroll-mt-24 bg-white"><img src={certificateImage} alt="JAMOOZ certificates" className="block h-auto w-full" /></section>

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
