import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jamooz | Leading B2B Massage Products & Equipment Supplier in China",
  description: "Jamooz is a premier China massage manufacturer providing high-quality B2B massage products. Specialized in OEM/ODM massage devices, neck massagers, and recovery solutions.",
  keywords: "B2B massage products, Massage equipment supplier, OEM/ODM massage device, China massage manufacturer, Jamooz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-20 bg-white text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
