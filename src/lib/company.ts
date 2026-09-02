export const companyFacts = {
  brandName: "JAMOOZ",
  displayName: "Jamooz",
  website: "https://www.jmz.global",
  location: {
    city: "Xiamen",
    country: "China",
    label: "Xiamen, China",
  },
  contact: {
    email: "lee@jamooz.cn",
    whatsappNumber: "8615659835571",
    whatsappDisplay: "+86 156 5983 5571",
  },
} as const;

export const contactLinks = {
  email: `mailto:${companyFacts.contact.email}`,
  whatsapp: (message: string) =>
    `https://wa.me/${companyFacts.contact.whatsappNumber}?text=${encodeURIComponent(message)}`,
} as const;
