import JsonLd from "@/components/JsonLd";
import ProductCatalogDirectory from "@/components/ProductCatalogDirectory";
import { octoberProductCards } from "@/lib/october-products";
import { hubCategoryOrder, liveCategoryFor } from "@/lib/product-categories";

const products = [
  ...octoberProductCards,
  {
    model: "JMZ-702",
    category: "Massage Chairs",
    name: "Heated Vibration Egg Massage Chair",
    description: "A compact egg-shaped massage seat combining three-level vibration and adjustable warming for home, office and everyday relaxation settings.",
    image: "/products/jmz-702/JMZ-702-01-home-card.webp",
    href: "/products/jmz-702",
    price: "US$27.50–33.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["Heating", "Vibration", "3 Heat Levels", "15-Min Auto-Off"],
  },
  {
    model: "JMZ-R006",
    category: "Neck & Shoulder",
    name: "3D Kneading Neck & Shoulder Massager",
    description: "A rechargeable U-shaped neck massager with 3D kneading movement, warming care, timing control and adjustable double lanyards.",
    image: "/products/jmz-r006/JMZ-R006-01-home-card.webp",
    href: "/products/jmz-r006",
    price: "US$20.90–22.50 / pc",
    moq: "MOQ 50 pcs",
    features: ["3D Kneading", "Heating", "Type-C", "Timing Control"],
  },
  {
    model: "JMZ-729S",
    category: "Neck & Shoulder",
    name: "Contoured Electric Neck Massage Pillow",
    description: "A full-size contoured neck pillow with three massage programs, two warming levels and a rechargeable integrated control design.",
    image: "/products/jmz-729s/01-hero.webp",
    href: "/products/jmz-729s",
    price: "US$28.30–32.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["3 Massage Modes", "2 Heat Levels", "2000mAh", "Removable Cover"],
  },
  {
    model: "JMZ-908",
    category: "Eye Care",
    name: "EMS Air Compression Eye Massager with Heat",
    description: "A customizable rechargeable eye massager combining air compression, two-level heating, EMS and vibration.",
    image: "/products/jmz-908/01-hero.webp",
    href: "/products/jmz-908",
    price: "Custom Quote",
    moq: "OEM / ODM",
    features: ["3 Air Modes", "2 Heat Levels", "EMS", "Vibration"],
  },
  {
    model: "JMZ-802",
    category: "Hand, Wrist & Elbow",
    name: "3-in-1 Air Pressure Hand & Wrist Massager",
    description: "A rechargeable hand and wrist massager with five-level air pressure, bidirectional kneading and three-level warming.",
    image: "/products/jmz-802/01-hero.webp",
    href: "/products/jmz-802",
    price: "US$13.30–15.10 / pc",
    moq: "MOQ 50 pcs",
    features: ["5 Pressure Levels", "3-Speed Kneading", "3 Heat Levels", "USB-C"],
  },
  {
    model: "JMZ-903",
    category: "Body Care",
    name: "3-in-1 Suction, Heat & EMS Gua Sha Massager",
    description: "A portable body-care device with 12-level suction, adjustable warming, 12-level EMS and a 20-minute cycle.",
    image: "/products/jmz-903/01-hero.webp",
    href: "/products/jmz-903",
    price: "US$8.40–9.40 / pc",
    moq: "MOQ 50 pcs",
    features: ["12-Level Suction", "41–48°C Heat", "12-Level EMS", "20-Min Auto-Off"],
  },
  {
    model: "JMZ-807P",
    category: "Neck & Shoulder",
    name: "Cloud Plus Heated Neck Massage Pillow",
    description: "A compact rechargeable neck pillow with three massage modes, three warming levels and layered contact panels.",
    image: "/products/jmz-807p/01-hero.webp",
    href: "/products/jmz-807p",
    price: "US$19.60–23.90 / pc",
    moq: "MOQ 50 pcs",
    features: ["3 Massage Modes", "3 Heat Levels", "2600mAh", "15-Min Auto-Off"],
  },
  {
    model: "JMZ-706W",
    category: "Neck & Shoulder",
    name: "4-Point Heated Neck & Trapezius Massage Pillow",
    description: "Four-point kneading with four massage modes, three speeds and two warming levels.",
    image: "/products/jmz-706w/01-hero.webp",
    href: "/products/jmz-706w",
    price: "US$17.80–21.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["4-Point Kneading", "4 Modes", "3 Speeds", "2 Heat Levels"],
  },
  {
    model: "JMZ-706H",
    category: "Neck & Shoulder",
    name: "Cordless 4-Point Heated Neck Massage Pillow",
    description: "A four-point kneading pillow with adjustable intensity, two warming settings and a chair strap.",
    image: "/products/jmz-706h/01-hero.webp",
    href: "/products/jmz-706h",
    price: "US$21.50–26.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["4-Point Kneading", "4 Modes", "3 Intensity Levels", "Chair Strap"],
  },
  {
    model: "JMZ-901",
    category: "Head & Scalp",
    name: "Rotating EMS Scalp Massager with LED Light",
    description: "A handheld scalp massager with two-speed rotation, two EMS levels, red LED light and a 5 mL tank.",
    image: "/products/jmz-901/01-hero.webp",
    href: "/products/jmz-901",
    price: "US$14.80–19.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["2-Speed Rotation", "2-Level EMS", "Red LED", "5 mL Tank"],
  },
  {
    model: "JMZ-722",
    category: "Hand, Wrist & Elbow",
    name: "3-in-1 Elbow Massager",
    description: "A wearable elbow wrap combining EMS stimulation, warming and air compression, controlled from the display panel on the main unit.",
    image: "/products/jmz-722/01-hero.webp",
    href: "/products/jmz-722",
    price: "US$18.00–21.00 / pc",
    moq: "MOQ 50 pcs",
    features: ["EMS", "Air Compression", "Warming", "Integrated Display"],
  },
  {
    model: "JMZ-801",
    category: "Neck & Shoulder",
    name: "Cloud Neck Support Pillow",
    description: "A foldable electric neck support pillow with three selectable modes, one-button control and a 15-minute auto-off.",
    image: "/products/jmz-801/01-hero.webp",
    href: "/products/jmz-801",
    price: "US$13.80–16.80 / pc",
    moq: "MOQ 50 pcs",
    features: ["3 Modes", "Cordless", "15-Min Auto-Off", "Foldable"],
  },
  {
    model: "JMZ-CSPL002",
    category: "Neck & Shoulder",
    name: "Neck Pinch Massage Pillow",
    description: "A neck pillow with pinch-style kneading, two speeds, forward and reverse rotation and a removable cover.",
    image: "/products/jmz-cspl002/01-hero.webp",
    href: "/products/jmz-cspl002",
    price: "US$19.80–23.50 / pc",
    moq: "MOQ 50 pcs",
    features: ["Pinch Kneading", "2 Speeds", "Forward & Reverse", "Removable Cover"],
  },
] as const;

const orderedCategories = [
  ...hubCategoryOrder,
  ...Array.from(new Set(products.map((product) => product.category))).filter((category) => !hubCategoryOrder.includes(category)),
];

const categoryGroups = orderedCategories
  .map((category) => {
    const page = liveCategoryFor(category);
    return {
      category,
      label: page?.label ?? category,
      page,
      items: products.filter((product) => product.category === category),
    };
  })
  .filter((group) => group.items.length > 0);

const catalogLabels: Readonly<Record<string, string>> = {
  "Neck & Shoulder": "Neck & Shoulder Massagers",
  "Head & Scalp": "Scalp & Hair Care",
};

export default function ProductsPage() {
  return (
      <><JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList",
        itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: `${product.model} ${product.name}`, url: `https://www.jmz.global${product.href}` })),
      }} /><ProductCatalogDirectory
        groups={categoryGroups.map((group) => ({
          category: group.category,
          label: catalogLabels[group.category] ?? group.label,
          items: group.items.map((product) => ({
            model: product.model,
            category: group.category,
            categoryLabel: catalogLabels[group.category] ?? group.label,
            name: product.name,
            description: product.description,
            image: product.image,
            href: product.href,
            price: product.price,
            moq: product.moq,
            features: product.features,
          })),
        }))}
      /></>
  );
}
