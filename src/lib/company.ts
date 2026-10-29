export const companyFacts = {
  brandName: "JAMOOZ",
  displayName: "Jamooz",
  legalName: "Jamooz (Xiamen) Technology Co., Ltd.",
  chineseLegalName: "佳木子（厦门）科技有限公司",
  foundingDate: "2019-05-23",
  website: "https://www.jmz.global",
  marketplaceProfile: "https://jamooz.en.alibaba.com",
  location: {
    city: "Xiamen",
    district: "Tong'an District",
    region: "Fujian Province",
    country: "China",
    countryCode: "CN",
    label: "Xiamen, China",
    streetAddress:
      "201A, No. 19, Siming Industrial Park, Meixi Road, Tong'an District",
    fullAddress:
      "201A, No. 19, Siming Industrial Park, Meixi Road, Tong'an District, Xiamen City, Fujian Province, China",
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
