export const jmz906Gallery = [
  { src: "/products/jmz-906/JMZ-906-02-detail-hero.webp", alt: "JMZ-906 cooling, heating, vacuum suction and EMS body massager" },
  { src: "/products/jmz-906/JMZ-906-03-gallery-front.webp", alt: "JMZ-906 front view showing the five-button control panel" },
  { src: "/products/jmz-906/JMZ-906-04-gallery-rear.webp", alt: "JMZ-906 rear housing and ventilation area" },
  { src: "/products/jmz-906/JMZ-906-05-gallery-side.webp", alt: "JMZ-906 tapered handheld profile viewed from the side" },
  { src: "/products/jmz-906/JMZ-906-06-gallery-controls.webp", alt: "JMZ-906 power, intensity, EMS and temperature mode controls" },
  { src: "/products/jmz-906/JMZ-906-07-gallery-type-c.webp", alt: "JMZ-906 Type-C charging port" },
  { src: "/products/jmz-906/JMZ-906-08-gallery-treatment-head.webp", alt: "JMZ-906 treatment head with metal contact points, electrodes and central suction inlet" },
  { src: "/products/jmz-906/JMZ-906-09-gallery-set-contents.webp", alt: "JMZ-906 retail set contents" },
  { src: "/products/jmz-906/JMZ-906-10-gallery-packaging.webp", alt: "JMZ-906 retail color box packaging" },
  { src: "/products/jmz-906/JMZ-906-11-gallery-display-led.webp", alt: "JMZ-906 circular display showing level and operating mode" },
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
  { item: "Product Type", value: "Four-mode vacuum gua sha body massager", status: "Confirmed" },
  { item: "Application", value: "Body-care and massage routines", status: "Confirmed" },
  { item: "Working Modes", value: "Vacuum suction, heating, cooling and EMS", status: "Confirmed" },
  { item: "Suction Intensity", value: "0–12 levels; default level 3; level 0 turns suction off", status: "Confirmed" },
  { item: "EMS Intensity", value: "0–12 levels; press EMS, then adjust with + / −", status: "Confirmed" },
  { item: "Heating Temperature", value: "Approx. 38°C under the supplied 3.7 V test conditions", status: "Confirmed" },
  { item: "Cooling Temperature", value: "Approx. 12.8°C under the supplied 3.7 V test conditions", status: "Confirmed" },
  { item: "Temperature Control", value: "Short-press M to cycle cooling, heating and off", status: "Confirmed" },
  { item: "Power / Quick Release", value: "Hold power for approx. 1.5 seconds; short-press during use for approx. 1-second pressure release", status: "Confirmed" },
  { item: "Work Cycle", value: "10 minutes with automatic shut-off", status: "Confirmed" },
  { item: "Charging Indicator", value: "Red flashes while charging; green remains on when fully charged", status: "Confirmed" },
  { item: "Low-battery Indicator", value: "Red flashes before automatic shut-off", status: "Confirmed" },
  { item: "Battery Capacity", value: "2,000 mAh typical", status: "Confirmed" },
  { item: "Rated Voltage", value: "3.7 V typical", status: "Confirmed" },
  { item: "Input / Charging Port", value: "5 V / Type-C", status: "Confirmed" },
  { item: "Charging Time", value: "Up to 4.5 hours", status: "Confirmed" },
  { item: "Whole-machine Power", value: "3 W typical / 5 W max", status: "Confirmed" },
  { item: "Material", value: "Aluminum alloy + ABS", status: "Confirmed" },
  { item: "OEM / ODM", value: "Supported", status: "Confirmed" },
  { item: "Product Size", value: "200 × 90 × 90 mm", status: "Reference" },
  { item: "Noise Level", value: "To be confirmed", status: "TBC" },
  { item: "Product N.W.", value: "To be confirmed", status: "TBC" },
  { item: "Color Box / Master Carton", value: "Size, quantity and G.W. to be confirmed", status: "TBC" },
] as const;
