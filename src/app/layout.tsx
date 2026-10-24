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
        <JsonLd data={{
          "@context": "https://schema.org", "@type": "Organization",
          "@id": `${companyFacts.website}/#organization`, name: companyFacts.brandName,
          url: companyFacts.website, email: companyFacts.contact.email,
          telephone: companyFacts.contact.whatsappDisplay,
          address: { "@type": "PostalAddress", addressLocality: companyFacts.location.city, addressCountry: "CN" },
        }} />
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
