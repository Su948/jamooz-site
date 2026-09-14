export const jmzR006Gallery = [
  { src: "/products/jmz-r006/JMZ-R006-02-hero.png", alt: "JMZ-R006 rechargeable neck and shoulder massager in ivory and grey" },
  { src: "/products/jmz-r006/JMZ-R006-03-front.png", alt: "Front view of the JMZ-R006 U-shaped neck massager" },
  { src: "/products/jmz-r006/JMZ-R006-04-side-controls.png", alt: "Side view showing the JMZ-R006 three-button control panel" },
  { src: "/products/jmz-r006/JMZ-R006-05-opposite-side.png", alt: "Opposite side profile of the JMZ-R006 massager" },
  { src: "/products/jmz-r006/JMZ-R006-06-top-view.png", alt: "Top view of the U-shaped support and massage structure" },
  { src: "/products/jmz-r006/JMZ-R006-07-kneading-heads.png", alt: "Close-up of the JMZ-R006 3D kneading massage heads" },
  { src: "/products/jmz-r006/JMZ-R006-08-type-c.png", alt: "JMZ-R006 Type-C rechargeable port and construction details" },
  { src: "/products/jmz-r006/JMZ-R006-09-lanyard.png", alt: "JMZ-R006 double lanyard and material details" },
  { src: "/products/jmz-r006/JMZ-R006-10-lifestyle.png", alt: "JMZ-R006 worn around the neck in a home relaxation setting" },
] as const;

export const jmzR006Prices = [
  { quantity: "50–499 pcs", price: "US$22.50 / pc" },
  { quantity: "500–2,999 pcs", price: "US$21.60 / pc" },
  { quantity: "3,000–4,999 pcs", price: "US$21.00 / pc" },
  { quantity: "5,000+ pcs", price: "US$20.90 / pc" },
] as const;

export type JmzR006SpecStatus = "Confirmed" | "TBC";

export const jmzR006Specs: ReadonlyArray<{ item: string; value: string; status: JmzR006SpecStatus }> = [
  { item: "Model", value: "JMZ-R006", status: "Confirmed" },
  { item: "Product Type", value: "U-shaped neck and shoulder massager", status: "Confirmed" },
  { item: "Massage Area", value: "Neck and shoulder", status: "Confirmed" },
  { item: "Working Functions", value: "Heating, kneading, 3D kneading movement and timing control", status: "Confirmed" },
  { item: "Power Source", value: "USB rechargeable", status: "Confirmed" },
  { item: "Charging Port", value: "Type-C", status: "Confirmed" },
  { item: "Materials", value: "PU leather and ABS plastic", status: "Confirmed" },
  { item: "Shown Color", value: "Ivory and light grey", status: "Confirmed" },
  { item: "Place of Origin", value: "Fujian, China", status: "Confirmed" },
  { item: "Single Package Size", value: "25.5 × 23.5 × 12.5 cm", status: "Confirmed" },
  { item: "Product Size / N.W.", value: "To be confirmed", status: "TBC" },
  { item: "Battery / Rated Power", value: "Capacity, voltage and power to be confirmed", status: "TBC" },
  { item: "Master Carton", value: "Quantity, size and G.W. to be confirmed", status: "TBC" },
  { item: "Standard Set", value: "Final accessories to be confirmed", status: "TBC" },
] as const;

