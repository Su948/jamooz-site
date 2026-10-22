import type { ProductDetailConfig, ProductSpec } from '@/lib/product-detail';

const specs = (rows: readonly (readonly [string,string])[]): ProductSpec[] => rows.map(([item,value])=>({item,value,status:'Confirmed'}));
const gallery = (slug:string, alts:readonly string[]) => alts.map((alt,i)=>({src:`/products/${slug}/${String(i+1).padStart(2,'0')}-${i===0?'hero':'detail'}.webp`,alt}));
const inquiryCopy = 'Share your quantity, destination market and branding or packaging requirements. We will confirm the final specification, MOQ, lead time and quotation before ordering.';
const customizationOptions = ['Logo & Branding','Colors & Materials','Retail Packaging','Order Quantity'].map(title=>({title,copy:'Requirements and minimum quantity confirmed with your quotation.'}));
const relatedLinks = [{href:'/custom',eyebrow:'OEM / ODM',name:'Product customization',detail:'Discuss branding, packaging and order requirements.',linkLabel:'Explore Customization'}];

export const jmz723: ProductDetailConfig = {
  slug:'jmz-723',model:'JMZ-723',category:'Waist Massagers',
  name:'Rechargeable EMS & Heated Waist Belt',eyebrow:'EMS BELT FOR OEM / ODM PROJECTS',
  description:'An adjustable EMS waist belt with seven pulse modes, 15 intensity levels, two warming settings and a handheld remote. A detachable main unit and supplied arm and extension straps support flexible daily use.',
  seoDescription:'Explore the JMZ-723 rechargeable EMS waist belt with seven modes, 15 intensity levels, adjustable heat, remote control and OEM branding options.',
  badges:['7 EMS Modes','15 Intensity Levels','2 Heat Settings','Remote Control'],
  gallery:gallery('jmz-723',[
    'JMZ-723 red EMS waist belt with detachable controller and handheld remote',
    'JMZ-723 supplied straps and skin-contact setup illustration',
    'JMZ-723 inner EMS contact surface and arm strap contact layout',
    'JMZ-723 curved belt shape shown from a three-quarter angle',
    'JMZ-723 detachable main unit shown from multiple angles',
    'JMZ-723 handheld remote controls and charging port',
    'JMZ-723 belt and accessory strap wearing illustrations',
    'JMZ-723 belt, controller, remote and supplied accessories',
    'JMZ-723 25-minute automatic session illustration',
    'JMZ-723 six-zone inner contact layout illustration',
  ]),
  priceRange:'$19.80–23.00 / pc',samplePrice:'$28.00',moq:'Order quantity confirmed with quotation',
  priceTiers:[{quantity:'50–500 pcs',price:'$23.00 / pc'},{quantity:'500–3,000 pcs',price:'$21.50 / pc'},{quantity:'3,000–5,000 pcs',price:'$20.50 / pc'},{quantity:'Over 5,000 pcs',price:'$19.80 / pc'}],
  customizationOptions:[{title:'Custom Logo',copy:'MOQ 500 pcs'},{title:'Custom Color',copy:'MOQ 500 pcs per color'},{title:'Color Box',copy:'MOQ 500 pcs'},{title:'Corrugated Box',copy:'MOQ 300 pcs'}],
  featuresLabel:'EMS & warmth',featuresTitle:'Adjustable Waist Comfort with Remote Control',
  featuresIntro:'Choose a pulse pattern, adjust the intensity gradually and add warmth to suit your daily routine.',
  features:[{title:'Seven pulse modes',copy:'Seven EMS patterns and 15 intensity levels provide adjustable stimulation.'},{title:'Two warming settings',copy:'Select warmth from the remote. The supplied specification lists a maximum temperature of 50°C.'},{title:'Rechargeable system',copy:'A 2000mAh main unit and 300mAh remote provide rechargeable operation.'},{title:'Flexible straps',copy:'The set includes a waist belt, extension strap and smaller arm strap.'}],
  specsIntro:'Dimensions and operating details follow the supplied specification sheet. Model JMZ-723 is retained as confirmed by the manufacturer. Exact quantity breakpoints and final commercial terms are confirmed in the quotation.',
  specs:specs([['Model','JMZ-723'],['Functions','EMS / heating'],['Input','DC 5 V / 2 A'],['Battery','Main unit 2000mAh / remote 300mAh'],['Material','Lycra'],['EMS Modes / Intensity','7 modes / 15 levels'],['Heating','2 warming settings; maximum 50°C'],['Control','Handheld remote control'],['Session','25 minutes with automatic end'],['EMS Output','Maximum 4.1mA'],['Waist Belt','930 × 135 mm'],['Arm Strap','445 × 120 mm'],['Extension Strap','350 × 75 mm'],['Product Weight','Approx. 290 g; weighing scope not specified'],['Charging Time','Main unit approx. 120 min / remote approx. 60 min'],['Supplied Set','Main controller, waist belt, extension strap, arm strap, remote, charging cable and user manual']]),
  relatedLinks,inquiryCopy,
};

export const jmzCspl003: ProductDetailConfig = {
  slug:'jmz-cspl003',model:'JMZ-CSPL003',category:'Neck & Shoulder',
  name:'Mini Kneading Neck Massage Pillow',eyebrow:'COMPACT NECK PILLOW FOR OEM / ODM',
  description:'A compact cordless neck massage pillow combining four-point kneading with independently controlled warmth. Its curved shape, button controls and rechargeable battery make it practical for everyday reclining relaxation.',
  seoDescription:'Discover the JMZ-CSPL003 mini neck massage pillow with kneading, adjustable intensity, independent warmth, a 2000mAh battery and custom quotation.',
  badges:['4-Point Kneading','2 Intensity Levels','Independent Warmth','2000mAh Battery'],customPricing:true,customizationOptions,
  gallery:gallery('jmz-cspl003',[
    'JMZ-CSPL003 light gray mini kneading neck massage pillow',
    'JMZ-CSPL003 multiple views and product dimensions',
    'JMZ-CSPL003 four-point kneading contact illustration',
    'JMZ-CSPL003 bidirectional kneading motion illustration',
    'JMZ-CSPL003 two selectable kneading intensity levels',
    'JMZ-CSPL003 independent warmth illustration',
    'JMZ-CSPL003 curved neck support shown in reclining use',
    'JMZ-CSPL003 cordless 2000mAh battery illustration',
    'JMZ-CSPL003 removable cover, zipper and material details',
    'JMZ-CSPL003 button controls, charging port and specification overview',
    'JMZ-CSPL003 25-minute session illustration',
  ]),
  featuresLabel:'Compact kneading',featuresTitle:'Four-Point Kneading in a Compact Pillow',
  featuresIntro:'The supplied product notes describe bidirectional kneading, two intensity settings and separately controlled warmth.',
  features:[{title:'Four-point kneading',copy:'Four contacts work beneath the knitted surface to create a coordinated kneading rhythm.'},{title:'Choose the intensity',copy:'Two intensity levels and forward or reverse operation offer different kneading feels.'},{title:'Independent warmth',copy:'Use the dedicated heat button to add or switch off warmth.'},{title:'Compact cordless design',copy:'A 2000mAh battery, three-button panel and removable cover support everyday use and care.'}],
  specsIntro:'Electrical and dimensional values follow the supplied product information. Packaging weight, packing dimensions and final commercial terms are available on request.',
  specs:specs([['Model','JMZ-CSPL003'],['Functions','Kneading / heating'],['Charging Input','DC 5 V / 2 A'],['Battery Voltage','DC 7.4 V'],['Battery Capacity','2000mAh'],['Rated Power','20 W'],['Control','Physical buttons'],['Product Size','330 × 232 × 85 mm']]),relatedLinks,inquiryCopy,
};

export const jmz727: ProductDetailConfig = {
  slug:'jmz-727',model:'JMZ-727',category:'Waist Massagers',
  name:'EMS, Heat & Near-Infrared Waist Belt',eyebrow:'RECHARGEABLE WAIST BELT FOR OEM / ODM',
  description:'A flexible waist belt combining EMS stimulation, near-infrared and heating functions. Eight EMS modes, a rechargeable main unit and a handheld remote offer convenient control for a personalized daily comfort routine.',
  seoDescription:'Explore the JMZ-727 EMS waist belt with eight pulse modes, near-infrared, heat, a 2500mAh main unit and rechargeable remote. Request a custom quote.',
  badges:['8 EMS Modes','Heating','Near-Infrared','Rechargeable Remote'],customPricing:true,customizationOptions,
  gallery:gallery('jmz-727',[
    'JMZ-727 waist belt with main unit and handheld remote',
    'JMZ-727 EMS, heat and near-infrared functions illustration',
    'JMZ-727 EMS mode and intensity controls illustration',
    'JMZ-727 main-unit buttons and handheld remote controls',
    'JMZ-727 detachable main unit and guided connector',
    'JMZ-727 waist belt shown in use',
    'JMZ-727 setup and wearing sequence illustration',
    'JMZ-727 belt dimensions and separate extension strap',
    'JMZ-727 main unit and remote charging illustration',
    'JMZ-727 supplied accessories and specification overview',
    'JMZ-727 curved exterior and surface texture',
  ]),
  featuresLabel:'Three functions',featuresTitle:'EMS, Warmth and Near-Infrared in One Belt',
  featuresIntro:'A flexible wrap and removable controller keep the system straightforward to wear, adjust and store.',
  features:[{title:'Eight EMS modes',copy:'Select one of eight EMS pulse patterns for a different stimulation rhythm.'},{title:'Warmth and near-infrared',copy:'Heating and near-infrared functions complement the EMS system.'},{title:'Convenient controls',copy:'Adjust operation with the main-unit buttons or supplied handheld remote.'},{title:'Rechargeable design',copy:'The main unit contains a 2500mAh battery; the remote contains a 400mAh battery.'}],
  specsIntro:'Review the JMZ-727 electrical and dimensional specifications below. Please contact us for rated power, product weight and packing weight before ordering.',
  specs:specs([['Model','JMZ-727'],['Functions','EMS / near-infrared / heating'],['Input','5 V / 2 A'],['EMS Modes','8 modes'],['Battery','Main unit 2500mAh / remote 400mAh'],['Control','Buttons with handheld remote'],['Belt Size','930 × 135 mm'],['Color Box Size','512 × 137 × 49 mm']]),relatedLinks,inquiryCopy,
};

export const jmz818: ProductDetailConfig = {
  slug:'jmz-818',model:'JMZ-818',category:'Body Care',
  name:'Cordless Air Compression Calf Massagers',eyebrow:'CALF MASSAGERS FOR B2B PROJECTS',
  description:'A pair of cordless calf wraps combining rhythmic air compression, three warmth settings and removable raised-contact pads. Adjustable hook-and-loop closures and USB-C charging support everyday leg relaxation.',
  seoDescription:'Explore JMZ-818 cordless calf massagers with three compression modes, five intensity levels, three heat settings and removable pads. Contact JAMOOZ for order terms.',
  badges:['3 Compression Modes','5 Intensity Levels','3 Heat Settings','Cordless Pair'],customPricing:true,customizationOptions,
  gallery:gallery('jmz-818',[
    'JMZ-818 pair of navy calf wraps with blue control units',
    'JMZ-818 calf wraps shown worn around the lower legs',
    'JMZ-818 rhythmic air compression working principle illustration',
    'JMZ-818 three compression modes and five intensity levels',
    'JMZ-818 three selectable warmth levels',
    'JMZ-818 detachable raised-contact gua sha pad',
    'JMZ-818 fabric layers and adjustable hook-and-loop closures',
    'JMZ-818 calf air chamber zones illustration',
    'JMZ-818 cordless operation and USB-C charging',
    'JMZ-818 dual charging cable shown with both calf massagers',
  ]),
  featuresLabel:'Calf comfort',featuresTitle:'Rhythmic Compression with Adjustable Warmth',
  featuresIntro:'Choose a compression program and intensity, then add warmth to suit your relaxation routine.',
  features:[{title:'Three modes, five levels',copy:'Three compression patterns and five intensity levels provide selectable massage settings.'},{title:'Three warmth settings',copy:'Add gentle, medium or high warmth alongside compression.'},{title:'Removable contact pads',copy:'Raised-contact pads provide focused pressure and can be removed for a softer feel.'},{title:'Cordless paired wraps',copy:'Adjust the closures around the calves and recharge both units with the supplied dual charging cable.'}],
  specsIntro:'Technical values follow the supplied specification sheet, with the JAMOOZ model retained as JMZ-818. Weight is stated per set. Battery capacity and power are quoted as supplied; per-unit allocation, fit range and packing details are confirmed before ordering.',
  specs:specs([['Model','JMZ-818'],['Product Type','Pair of cordless calf air-compression wraps'],['Compression Modes','3 modes'],['Intensity','5 levels'],['Heating','3 settings'],['Contact Pads','Detachable raised-contact pads'],['Closure','Adjustable hook-and-loop fastening'],['Charging','USB-C; dual charging cable'],['Control','Touch controls'],['Battery Capacity','3000mAh'],['Rated Input','DC 5 V / 2 A'],['Power Consumption','10 W'],['Weight','Approx. 924 g per set'],['Product Size','Approx. 630 × 340 × 50 mm'],['Country of Origin','China']]),relatedLinks,inquiryCopy,
};

export const octoberProducts = [jmz723,jmzCspl003,jmz727,jmz818] as const;
export const octoberProductCards = octoberProducts.map(product=>({
  model:product.model,category:product.category,name:product.name,description:product.description,
  image:product.gallery[0].src,href:`/products/${product.slug}`,
  price:product.priceRange??(product.slug==='jmz-818'?'Contact for Pricing':'Custom Quote'),
  moq:product.moq??'Quantity confirmed with quotation',features:product.badges,
}));
