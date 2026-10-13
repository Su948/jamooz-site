export type FaqLink = {
  label: string;
  href: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
  link?: FaqLink;
};

/**
 * Visible FAQ content, kept in one place so the same question cannot drift
 * between pages (D033 defines the questions; D020 §10.1 asks for a single
 * registry rather than per-page copies).
 *
 * Only answers backed by published facts belong here. Specifications that are
 * still unconfirmed are described as such instead of being given a value, and
 * no rating, review or medical wording is used.
 */
export const productFaqs: Record<string, readonly FaqEntry[]> = {
  "jmz-901": [
    {
      question: "How do I clean an electric scalp massager?",
      answer:
        "Clean the contact head and the brush pads after each use, and keep the electrode area clean and dry. Do not rinse the whole device: the water resistance rating is still to be confirmed. Clean the ampoule tank and its channel as described in the supplied instructions.",
    },
    {
      question: "How do I use the serum tank?",
      answer:
        "The JMZ-901 has a refillable 5 mL ampoule tank. Follow the filling and cleaning steps in the supplied instructions.",
    },
    {
      question: "What is the MOQ and what can be customised?",
      answer:
        "MOQ is 50 pcs. Logo, colour and retail packaging can be customised: logo 500 pcs, colour 500 pcs per colour, colour box 500 pcs, corrugated box 300 pcs. Smaller customised runs can be discussed with an additional charge. Changes to the product structure are confirmed project by project.",
    },
  ],
  "jmz-729s": [
    {
      question: "How do I clean the massage pillow cover?",
      answer:
        "The cover has a removable zip closure and can be taken off for cleaning. Follow the supplied instructions for the cleaning method and water temperature. Whether the cover is machine washable is still to be confirmed.",
    },
    {
      question: "What is the MOQ for a heated neck massage pillow?",
      answer:
        "MOQ is 50 pcs, with volume prices from US$28.30–32.00 per piece. Lead time and payment terms are confirmed with the quotation.",
    },
  ],
  "jmz-807p": [
    {
      question: "Why do heat levels matter, and how many does this model have?",
      answer:
        "The JMZ-807P has 3 heat levels, measured at approximately 38°C, 40°C and 45°C, and it switches off automatically after 15 minutes. Heat levels are specified per model, so buyers can compare the warmth settings across the range before choosing.",
    },
  ],
  "jmz-706w": [
    {
      question: "How is this different from the cordless four-point model?",
      answer:
        "The JMZ-706W has 4 massage points (2 large, 2 small), 4 modes and 3 speed levels, 2 heat levels and a 7.4V / 3500 mAh battery. The four-point model it is compared with, JMZ-706H, has 4 points, 3 intensity levels and an elastic back strap.",
      link: { label: "See the JMZ-706H four-point model", href: "/products/jmz-706h" },
    },
  ],
  "jmz-908": [
    {
      question: "How long is one eye massager session?",
      answer: "One working cycle runs for 15 minutes.",
    },
    {
      question: "How many heating levels does it have?",
      answer:
        "It has 2 heating levels, at approximately 36°C and 42°C, and heating can be switched off.",
    },
    {
      question: "How do I clean the contact surface?",
      answer:
        "Clean the contact surface as described in the supplied instructions. Do not immerse the whole device in water: the water resistance rating is still to be confirmed.",
    },
  ],
  "jmz-802": [
    {
      question: "How do the pressure levels differ?",
      answer:
        "It has 5 air pressure levels, from gentler to firmer. It also provides two-way kneading with 3 speed levels, reversing direction approximately every 5 seconds.",
    },
  ],
  "jmz-903": [
    {
      question: "How many suction levels are there?",
      answer:
        "There are 0–12 suction levels. Heating also has 0–12 levels at approximately 41–48°C, and EMS has 0–12 levels. The device switches off automatically after 20 minutes.",
    },
    {
      question: "What is the price and MOQ?",
      answer: "Volume prices range from US$8.40–9.40 per piece, with MOQ 50 pcs. A sample is US$14.",
    },
  ],
};

/**
 * FAQ content for the decision guides, keyed by guide slug.
 *
 * One question that the source brief marked as awaiting business confirmation
 * ("Do you also make vibration scalp massagers?") is deliberately absent, as
 * instructed: the capability is not confirmed, so the question is not published.
 */
export const guideFaqs: Record<string, readonly FaqEntry[]> = {
  "ems-vs-vibration-scalp-massager": [
    {
      question: "Which one does JAMOOZ currently manufacture?",
      answer:
        "JMZ-901 — a rotating scalp massager with a 2-level EMS function, red LED light and a refillable 5 mL ampoule tank.",
    },
    {
      question: "Does an EMS scalp massager pass current through the skin?",
      answer:
        "Yes — the EMS function works through electrodes in contact with the skin, and intensity is selected by level (2 levels on JMZ-901). Vibration devices do not pass current to the skin.",
    },
    {
      question: "What is the MOQ and price for the EMS model?",
      answer: "50 pcs; US$14.80–19.00 per piece, with volume tiers from 50 to 5,000+ pcs.",
    },
    {
      question: "Can the structure be customised for our brand?",
      answer:
        "Logo, colour and retail packaging are standard customisations (from 500 pcs; corrugated box from 300 pcs). Structural changes are evaluated per project as ODM.",
    },
    {
      question: "How should the device be cleaned?",
      answer:
        "Follow the supplied instructions. The electrode area should be kept clean and dry; the ampoule tank and channels (when present) need cleaning according to the manual. Water resistance is TBC and is not claimed on this page.",
    },
  ],
  "choose-scalp-massager-supplier": [
    {
      question: "What is the MOQ for a scalp massager?",
      answer: "50 pcs for JMZ-901.",
    },
    {
      question: "What is the minimum order for each customisation?",
      answer:
        "Logo 500 pcs, colour 500 pcs per colour, colour box 500 pcs, corrugated box 300 pcs. Smaller customised runs can be discussed with an additional charge.",
    },
    {
      question: "How much does a sample cost?",
      answer:
        "The JMZ-901 sample price is US$30.00; shipping is quoted separately and all figures are confirmed in the quotation.",
    },
    {
      question: "What is your lead time and payment term?",
      answer:
        "These are confirmed with the quotation and order terms — we do not publish a fixed figure.",
    },
    {
      question: "What documents can you provide?",
      answer:
        "Product specification sheets and manuals, plus documentation according to the model and destination market. Please contact us to confirm the applicable files before ordering.",
    },
    {
      question: "Do you accept ODM (product-level) customisation?",
      answer:
        "Structural and functional customisation is evaluated per project — please send your requirement and we will confirm feasibility, tooling and minimum quantity.",
    },
    {
      question: "Can I get the packaging specification before ordering?",
      answer:
        "Outer-carton volume and weight are measured per order (Carton Spec) and used for sea/air freight quotations, so the exact box specification is confirmed with the order.",
    },
  ],
};

export const customFaqs: readonly FaqEntry[] = [
  {
    question: "What can be customised without new tooling?",
    answer:
      "Logo, colour and packaging: the standard minimums are 500 pcs for a custom logo, 500 pcs per colour, 500 pcs for a colour box and 300 pcs for a corrugated box. Changes to the product structure are assessed project by project.",
  },
  {
    question: "Is a smaller first order possible?",
    answer:
      "Smaller customised runs can be discussed and carry an additional charge. Mixed batches and the minimum carton quantity are still to be confirmed.",
  },
];
