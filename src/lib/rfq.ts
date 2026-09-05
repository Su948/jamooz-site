export const oemOptions = [
  "No customization required",
  "OEM — Logo / Packaging",
  "ODM — Product Customization",
  "Not sure — Need recommendation",
] as const;

export type RfqSubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  oem: (typeof oemOptions)[number];
  message: string;
  sourcePage: string;
  startedAt: number;
  website: string;
};

type ValidationResult =
  | { ok: true; data: RfqSubmission }
  | { ok: false; message: string };

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim().slice(0, maxLength);
}

function isBusinessEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value) && value.length <= 254;
}

export function validateRfqSubmission(value: unknown): ValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, message: "Invalid inquiry data." };
  }

  const raw = value as Record<string, unknown>;
  const name = cleanText(raw.name, 100);
  const company = cleanText(raw.company, 160);
  const email = cleanText(raw.email, 254).toLowerCase();
  const phone = cleanText(raw.phone, 80);
  const product = cleanText(raw.product, 180);
  const quantity = cleanText(raw.quantity, 80);
  const oem = cleanText(raw.oem, 80);
  const message = cleanText(raw.message, 3000);
  const sourcePage = cleanText(raw.sourcePage, 240);
  const website = cleanText(raw.website, 240);
  const startedAt = typeof raw.startedAt === "number" ? raw.startedAt : Number(raw.startedAt);

  if (!name || !company || !email || !product) {
    return { ok: false, message: "Please complete all required fields." };
  }

  if (!isBusinessEmail(email)) {
    return { ok: false, message: "Please enter a valid business email." };
  }

  if (!oemOptions.includes(oem as RfqSubmission["oem"])) {
    return { ok: false, message: "Please select a valid OEM / ODM option." };
  }

  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return { ok: false, message: "Please refresh the page and try again." };
  }

  return {
    ok: true,
    data: { name, company, email, phone, product, quantity, oem: oem as RfqSubmission["oem"], message, sourcePage, startedAt, website },
  };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character] ?? character;
  });
}
