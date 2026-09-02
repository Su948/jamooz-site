import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreviewContactSection from "@/components/PreviewContactSection";
import { companyFacts } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(companyFacts.website),
  title: "Jamooz | Professional Recovery & Wellness Technology",
  description: "Jamooz delivers science-backed recovery and scalp care devices for global B2B wellness brands, with OEM/ODM customization and scalable manufacturing.",
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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <PreviewContactSection />
        <Footer />
      </body>
    </html>
  );
}
