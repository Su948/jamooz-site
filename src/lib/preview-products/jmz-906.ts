export const jmz906Gallery = [
  { src: "/products/jmz-906/front.jpg", alt: "JMZ-906 front view showing the five-button control panel" },
  { src: "/products/jmz-906/rear-charging.jpg", alt: "JMZ-906 rear view showing the USB-C charging port" },
  { src: "/products/jmz-906/display.jpg", alt: "JMZ-906 circular LED display viewed from above" },
  { src: "/products/jmz-906/controls.jpg", alt: "JMZ-906 power, intensity, EMS and mode controls" },
  { src: "/products/jmz-906/contact-head-with-cover.jpg", alt: "JMZ-906 contact head beside its removable protective cover" },
  { src: "/products/jmz-906/contact-head.jpg", alt: "JMZ-906 skin-contact head with massage rollers, contact pieces and suction area" },
] as const;

export const jmz906Prices = [
  { quantity: "50–500 pcs", price: "US$18.50 / pc" },
  { quantity: "500–3000 pcs", price: "US$17.35 / pc" },
  { quantity: "3000–5000 pcs", price: "US$16.50 / pc" },
  { quantity: "5000+ pcs", price: "US$15.90 / pc" },
] as const;

export type SpecStatus = "Confirmed" | "Reference" | "TBC";

export const jmz906Specs: ReadonlyArray<{ item: string; value: string; status: SpecStatus }> = [
  { item: "Model", value: "JMZ-906", status: "Confirmed" },
  { item: "Product Type", value: "Cooling vacuum gua sha massager", status: "Confirmed" },
  { item: "Application", value: "Body care", status: "Confirmed" },
  { item: "Functional Modes", value: "Suction, heating, cooling and EMS", status: "Confirmed" },
  { item: "Suction Intensity", value: "0–12", status: "Confirmed" },
  { item: "EMS Intensity", value: "0–12", status: "Confirmed" },
  { item: "Work Cycle", value: "10 minutes", status: "Confirmed" },
  { item: "Battery Capacity", value: "2,000 mAh typical", status: "Confirmed" },
  { item: "Rated Voltage", value: "3.7 V typical", status: "Confirmed" },
  { item: "Input / Charging Port", value: "5 V / USB-C", status: "Confirmed" },
  { item: "Charging Time", value: "Up to 4.5 hours", status: "Confirmed" },
  { item: "Whole-machine Power", value: "3 W typical / 5 W max", status: "Confirmed" },
  { item: "Material", value: "Aluminum alloy + ABS", status: "Confirmed" },
  { item: "OEM / ODM", value: "Supported", status: "Confirmed" },
  { item: "Product Size", value: "200 × 90 × 90 mm", status: "Reference" },
  { item: "Cooling Temperature", value: "To be confirmed", status: "TBC" },
  { item: "Continuous Working Time", value: "To be confirmed", status: "TBC" },
  { item: "Noise Level", value: "To be confirmed", status: "TBC" },
  { item: "Product N.W.", value: "To be confirmed", status: "TBC" },
  { item: "Color Box / Master Carton", value: "Size, quantity and G.W. to be confirmed", status: "TBC" },
] as const;
