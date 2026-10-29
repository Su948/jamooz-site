import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreviewContactSection from "@/components/PreviewContactSection";
import GoogleTagManager from "@/components/GoogleTagManager";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import CookieConsent from "@/components/CookieConsent";
import FloatingContactActions from "@/components/FloatingContactActions";
import { companyFacts } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(companyFacts.website),
  title: "Jamooz | Professional Recovery & Wellness Technology",
  description: "Jamooz develops massage and scalp care devices for global B2B wellness brands, with OEM/ODM customization and scalable manufacturing.",
  keywords: "Jamooz, scalp massager, red light therapy brush, OEM ODM wellness devices, B2B massage products, recovery technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GoogleTagManager />
        <MicrosoftClarity />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${companyFacts.website}/#organization`,
                name: companyFacts.brandName,
                alternateName: [companyFacts.displayName, "佳木子"],
                legalName: companyFacts.legalName,
                url: companyFacts.website,
                logo: {
                  "@type": "ImageObject",
                  url: `${companyFacts.website}/favicon.ico`,
                  width: 256,
                  height: 256,
                },
                image: `${companyFacts.website}/opengraph-image.png`,
                description:
                  "JAMOOZ develops and supplies massage and personal wellness devices for international B2B brands, including OEM, ODM, private-label and packaging support.",
                foundingDate: companyFacts.foundingDate,
                foundingLocation: {
                  "@type": "Place",
                  name: companyFacts.location.label,
                },
                email: companyFacts.contact.email,
                telephone: companyFacts.contact.whatsappDisplay,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: companyFacts.location.streetAddress,
                  addressLocality: companyFacts.location.city,
                  addressRegion: companyFacts.location.region,
                  addressCountry: companyFacts.location.countryCode,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: companyFacts.contact.email,
                  telephone: companyFacts.contact.whatsappDisplay,
                  availableLanguage: ["English", "Chinese"],
                  areaServed: "Worldwide",
                },
                sameAs: [companyFacts.marketplaceProfile],
                knowsAbout: [
                  "Massage devices",
                  "Personal wellness electronics",
                  "OEM and ODM product development",
                  "Private-label manufacturing",
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${companyFacts.website}/#website`,
                url: companyFacts.website,
                name: companyFacts.brandName,
                publisher: { "@id": `${companyFacts.website}/#organization` },
                inLanguage: "en",
              },
            ],
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingContactActions />
        <PreviewContactSection />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
