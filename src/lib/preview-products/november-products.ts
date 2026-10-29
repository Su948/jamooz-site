import type { ProductDetailConfig, ProductImage } from "@/lib/product-detail";

const gallery = (slug: string, alts: readonly string[]): readonly ProductImage[] =>
  alts.map((alt, index) => ({
    src: `/products/${slug}/${String(index + 1).padStart(2, "0")}.jpg`,
    alt,
  }));

const relatedLinks = [
  {
    href: "/custom",
    eyebrow: "OEM / ODM",
    name: "Product customization",
    detail: "Discuss branding, packaging and order requirements.",
    linkLabel: "Explore Customization",
  },
] as const;

export const jmzCspl005: ProductDetailConfig = {
  slug: "jmz-cspl005",
  model: "JMZ-CSPL005",
  category: "Neck & Shoulder",
  name: "Cordless Heated Kneading Massage Pillow",
  eyebrow: "Neck & Shoulder Massager",
  description:
    "An ergonomic cordless massage pillow combining deep kneading, three intensity levels and two warming settings for neck, shoulder and upper-back relaxation.",
  seoDescription:
    "Explore the JMZ-CSPL005 cordless kneading massage pillow with a 2600mAh battery, three intensity levels, two heat levels and a 15-minute timer.",
  badges: ["3 Intensity Levels", "2 Heat Levels", "2600mAh", "15-Min Auto-Off"],
  gallery: gallery("jmz-cspl005", [
    "JMZ-CSPL005 cordless heated kneading massage pillow side view",
    "JMZ-CSPL005 front and side product view",
    "JMZ-CSPL005 rear construction and fabric view",
    "JMZ-CSPL005 opposite side product view",
    "JMZ-CSPL005 contoured top view",
    "JMZ-CSPL005 breathable checker-knit fabric detail",
    "JMZ-CSPL005 button controls and Type-C charging port",
    "JMZ-CSPL005 English operation guide",
    "JMZ-CSPL005 supplied accessories",
    "JMZ-CSPL005 product specifications",
    "JMZ-CSPL005 product and retail packaging",
  ]),
  customPricing: true,
  moq: "MOQ 50 pcs",
  featuresLabel: "Cordless comfort",
  featuresTitle: "Kneading, Heat and Support in One Pillow",
  featuresIntro:
    "The published functions below are based on the supplied specification sheet. Runtime and charging duration remain unpublished until verified.",
  features: [
    { title: "Deep Kneading", copy: "Ergonomic massage points target the neck, shoulders and upper back." },
    { title: "Three Intensities", copy: "Low, medium and high settings support different comfort preferences." },
    { title: "Two Heat Levels", copy: "Choose approximately 40°C or 45°C warming alongside the massage routine." },
    { title: "Cordless Design", copy: "A 2600mAh rechargeable battery and Type-C port support convenient cordless use." },
    { title: "Ergonomic Support", copy: "The contoured profile supports the head and neck while positioning the massage area." },
    { title: "15-Minute Timer", copy: "The automatic stop provides a defined everyday session." },
    { title: "Textured Fabric", copy: "Breathable checker-knit fabric creates a soft, premium contact surface." },
    { title: "OEM / ODM Ready", copy: "Logo, color and retail packaging options can be discussed for qualified orders." },
  ],
  specsIntro: "Confirmed values from the supplied product specification image and product copy.",
  specs: [
    { item: "Model", value: "JMZ-CSPL005", status: "Confirmed" },
    { item: "Functions", value: "Kneading massage / 2-level heating", status: "Confirmed" },
    { item: "Massage Intensity", value: "3 levels", status: "Confirmed" },
    { item: "Battery Capacity", value: "2600mAh", status: "Confirmed" },
    { item: "Rated Power", value: "19.2W", status: "Confirmed" },
    { item: "Standby Power", value: "0.5W", status: "Confirmed" },
    { item: "Control", value: "Physical buttons", status: "Confirmed" },
    { item: "Product Size", value: "Approx. 560 × 300 × 100mm", status: "Confirmed" },
    { item: "Product Weight", value: "Approx. 2kg", status: "Confirmed" },
    { item: "Color Box Size", value: "585 × 120 × 315mm", status: "Confirmed" },
    { item: "Session", value: "15 minutes with automatic stop", status: "Confirmed" },
  ],
  relatedLinks,
  inquiryCopy: "Tell us your quantity, destination market and logo or packaging requirements for a model-specific quotation.",
};

export const jmzF002: ProductDetailConfig = {
  slug: "jmz-f002",
  model: "JMZ-F002",
  category: "Waist Massagers",
  name: "4-in-1 Pulse Stretch Waist Belt",
  eyebrow: "Waist Care",
  description:
    "A wide rechargeable waist belt combining EMS microcurrent, vibration, adjustable heat and a mechanical pull-ring stretching structure.",
  seoDescription:
    "Explore the JMZ-F002 pulse stretch waist belt with seven EMS modes, three heat levels, three vibration levels and mechanical stretching.",
  badges: ["7 EMS Modes", "3 Heat Levels", "3 Vibration Levels", "Mechanical Stretch"],
  gallery: gallery("jmz-f002", [
    "JMZ-F002 4-in-1 pulse stretch waist belt front view",
    "JMZ-F002 mechanical stretching structure rear view",
    "JMZ-F002 four EMS contact zones",
    "JMZ-F002 control unit and button display",
    "JMZ-F002 waist belt functional modules",
    "JMZ-F002 English quick-start guide",
    "JMZ-F002 product and retail packaging",
  ]),
  customPricing: true,
  moq: "MOQ 50 pcs",
  featuresLabel: "Four care functions",
  featuresTitle: "EMS, Vibration, Heat and Mechanical Stretch",
  featuresIntro:
    "A wide wraparound structure combines adjustable electronic functions with a pull-ring tightening system.",
  features: [
    { title: "Seven EMS Modes", copy: "Seven stimulation programs and fifteen intensity levels support personal adjustment." },
    { title: "Three Heat Levels", copy: "Low, medium and high warming settings provide adjustable everyday comfort." },
    { title: "Three Vibration Levels", copy: "Select the vibration strength independently from the other functions." },
    { title: "Mechanical Stretch", copy: "The pull-ring structure tightens the belt and provides adjustable waist support." },
    { title: "Four Contact Zones", copy: "Four EMS contact areas sit against moistened skin or conductive gel." },
    { title: "Wide Coverage", copy: "The 1000 × 200mm belt offers broad wraparound waist coverage." },
    { title: "Button Control", copy: "Dedicated controls make EMS, heat and vibration settings easy to identify." },
    { title: "Cordless Use", copy: "A built-in 1200mAh rechargeable battery supports portable use." },
  ],
  specsIntro: "Confirmed values from the supplied product brief and prepared product copy.",
  specs: [
    { item: "Model", value: "JMZ-F002", status: "Confirmed" },
    { item: "Functions", value: "EMS / vibration / heating / mechanical stretch", status: "Confirmed" },
    { item: "EMS", value: "7 modes / 15 intensity levels", status: "Confirmed" },
    { item: "Heating", value: "3 levels", status: "Confirmed" },
    { item: "Vibration", value: "3 levels", status: "Confirmed" },
    { item: "Rated Input", value: "3.7V / 1A", status: "Confirmed" },
    { item: "Battery Capacity", value: "1200mAh", status: "Confirmed" },
    { item: "Rated Power", value: "4W", status: "Confirmed" },
    { item: "Control", value: "Physical buttons", status: "Confirmed" },
    { item: "Product Size", value: "1000 × 200 × 20mm", status: "Confirmed" },
    { item: "Color Box Size", value: "368 × 207 × 53mm", status: "Confirmed" },
    { item: "Color Box Gross Weight", value: "To be confirmed", status: "TBC" },
  ],
  relatedLinks,
  inquiryCopy: "Share the target market, order quantity and branding requirements so our team can prepare the correct configuration and quotation.",
};

export const jmzV002: ProductDetailConfig = {
  slug: "jmz-v002",
  model: "JMZ-V002",
  category: "Body Care",
  name: "4-Mode EMS Hip & Body Pad",
  eyebrow: "EMS Body Care",
  description:
    "A flexible four-zone EMS hip and body pad with four modes, ten intensity levels, wireless remote control and integrated 630nm red-light output.",
  seoDescription:
    "Explore the JMZ-V002 four-zone EMS hip and body pad with four modes, ten intensity levels, wireless remote, 15-minute timer and 630nm red light.",
  badges: ["4 EMS Zones", "4 Modes", "10 Levels", "630nm Red Light"],
  gallery: gallery("jmz-v002", [
    "JMZ-V002 EMS hip and body pad with wireless remote",
    "JMZ-V002 pad shown in a three-quarter product view",
    "JMZ-V002 front and low side product views",
    "JMZ-V002 supplied accessories and retail packaging",
    "JMZ-V002 four-zone EMS contacts and 630nm red-light output",
    "JMZ-V002 four modes and ten intensity levels",
    "JMZ-V002 correct seated-use position",
  ]),
  regionalPricing: {
    specialMarkets: ["JP", "KR", "CN", "HK", "MO", "TW"],
    specialMarketLabel: "Japan, South Korea, Mainland China, Hong Kong, Macao & Taiwan",
    defaultMarketLabel: "All other markets",
    currency: "USD",
    defaultPriceTiers: [
      { quantity: "50–499 pcs", price: "70.00" },
      { quantity: "500–2,999 pcs", price: "63.00" },
      { quantity: "3,000–4,999 pcs", price: "53.00" },
      { quantity: "5,000+ pcs", price: "43.00" },
    ],
    specialPriceTiers: [
      { quantity: "50–499 pcs", price: "248.00" },
      { quantity: "500–2,999 pcs", price: "238.00" },
      { quantity: "3,000–4,999 pcs", price: "228.00" },
      { quantity: "5,000+ pcs", price: "218.00" },
    ],
  },
  moq: "MOQ 50 pcs",
  featuresLabel: "Targeted EMS care",
  featuresTitle: "Four Contact Zones with Flexible Control",
  featuresIntro:
    "The main pad combines adjustable EMS stimulation with a complementary central red-light output area. It does not use a mechanical massage motor.",
  features: [
    { title: "Four EMS Zones", copy: "Four contact areas distribute stimulation across the selected body area." },
    { title: "Four Modes", copy: "Four customized programs provide distinct pulse patterns for everyday routines." },
    { title: "Ten Levels", copy: "Intensity can be increased or decreased across ten selectable levels." },
    { title: "Dual Control", copy: "Operate the pad with its three physical buttons or the included wireless remote." },
    { title: "630nm Red Light", copy: "A central 630nm light-output area complements the EMS routine without a medical claim." },
    { title: "15-Minute Timer", copy: "Each session ends automatically after fifteen minutes." },
    { title: "IPX8 Main Pad", copy: "The main pad is rated IPX8; the remote and charging connection must remain dry." },
    { title: "Magnetic Charging", copy: "A 300mAh rechargeable battery uses the supplied magnetic charging cable." },
  ],
  specsIntro: "Confirmed values from the supplied Korean specification sheet and product-page source materials.",
  specs: [
    { item: "Model", value: "JMZ-V002", status: "Confirmed" },
    { item: "Main Function", value: "Four-zone EMS stimulation", status: "Confirmed" },
    { item: "Modes / Intensity", value: "4 modes / 10 levels", status: "Confirmed" },
    { item: "Light Output", value: "Integrated 630nm red light", status: "Confirmed" },
    { item: "Control", value: "On-pad buttons and wireless remote", status: "Confirmed" },
    { item: "Battery Capacity", value: "300mAh", status: "Confirmed" },
    { item: "Rated Voltage", value: "3.7V", status: "Confirmed" },
    { item: "Maximum Current / Power", value: "≤100mA / ≤0.40W", status: "Confirmed" },
    { item: "Waterproof Rating", value: "IPX8 main pad only", status: "Confirmed" },
    { item: "Product Weight", value: "1.1kg", status: "Confirmed" },
    { item: "Product Size", value: "To be confirmed", status: "TBC" },
    { item: "Color Box Size", value: "468 × 409 × 62mm", status: "Confirmed" },
    { item: "Color Box Gross Weight", value: "To be confirmed", status: "TBC" },
    { item: "Session", value: "15 minutes with automatic stop", status: "Confirmed" },
  ],
  relatedLinks,
  inquiryCopy: "Tell us the destination market and order quantity. The displayed market group and final regional price will be included in the quotation context.",
};

export const novemberProductDetails = [jmzCspl005, jmzF002, jmzV002] as const;

export const novemberProductCards = novemberProductDetails.map((product) => ({
  model: product.model,
  category: product.category,
  name: product.name,
  description: product.description,
  image: product.gallery[0].src,
  href: `/products/${product.slug}`,
  price: product.regionalPricing
    ? "Regional Pricing"
    : product.priceRange ?? "Custom Quote",
  moq: product.moq ?? "MOQ 50 pcs",
  features: product.badges,
}));
