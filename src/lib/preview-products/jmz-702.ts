export const jmz702Gallery = [
  { src: "/products/jmz-702/JMZ-702-02-hero.webp", alt: "JMZ-702 heated vibration egg massage chair in a three-quarter view" },
  { src: "/products/jmz-702/JMZ-702-03-front.webp", alt: "JMZ-702 egg massage chair viewed from the front" },
  { src: "/products/jmz-702/JMZ-702-04-rear-controls.webp", alt: "Rear view of the JMZ-702 showing its three-button control panel and Type-C port" },
  { src: "/products/jmz-702/JMZ-702-05-three-quarter.webp", alt: "JMZ-702 egg massage chair viewed from the opposite side" },
  { src: "/products/jmz-702/JMZ-702-06-seat-top.webp", alt: "Top view of the contoured JMZ-702 seat cushion" },
  { src: "/products/jmz-702/JMZ-702-07-control-panel.webp", alt: "Close-up of the JMZ-702 heating, vibration and power controls" },
  { src: "/products/jmz-702/JMZ-702-08-material-detail.webp", alt: "Close-up of the JMZ-702 seat surface, mesh cover and zipper detail" },
  { src: "/products/jmz-702/JMZ-702-09-set-contents.webp", alt: "JMZ-702 product set with Type-C cable and user manual" },
] as const;

export const jmz702Prices = [
  { quantity: "50–499 pcs", price: "US$33.00 / pc" },
  { quantity: "500–2,999 pcs", price: "US$31.50 / pc" },
  { quantity: "3,000–4,999 pcs", price: "US$29.50 / pc" },
  { quantity: "5,000+ pcs", price: "US$27.50 / pc" },
] as const;

export type Jmz702SpecStatus = "Confirmed" | "TBC";

export const jmz702Specs: ReadonlyArray<{ item: string; value: string; status: Jmz702SpecStatus }> = [
  { item: "Model", value: "JMZ-702", status: "Confirmed" },
  { item: "Product Type", value: "Egg-shaped heated vibration massage chair", status: "Confirmed" },
  { item: "Working Functions", value: "Heating and vibration only; no airbag function", status: "Confirmed" },
  { item: "Vibration Intensity", value: "3 levels", status: "Confirmed" },
  { item: "Heating Levels", value: "Approx. 40°C / 45°C / 50°C", status: "Confirmed" },
  { item: "Automatic Timer", value: "15 minutes", status: "Confirmed" },
  { item: "Power Input", value: "DC 5 V / up to 2 A", status: "Confirmed" },
  { item: "Rated Power", value: "10 W", status: "Confirmed" },
  { item: "Charging Port", value: "Type-C", status: "Confirmed" },
  { item: "Controls", value: "Heating, vibration and power buttons", status: "Confirmed" },
  { item: "Shown Color", value: "Dark blue and grey", status: "Confirmed" },
  { item: "Standard Set", value: "JMZ-702 chair, Type-C cable and user manual", status: "Confirmed" },
  { item: "Product Size / N.W.", value: "To be confirmed", status: "TBC" },
  { item: "Color Box / Master Carton", value: "Size, quantity and G.W. to be confirmed", status: "TBC" },
] as const;
