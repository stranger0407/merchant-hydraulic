import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/chatbot/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Merchant Hydraulic | Hydraulic Power Packs & Cylinders Manufacturer",
    template: "%s | Merchant Hydraulic",
  },
  description: "Manufacturing hydraulic power packs, hydraulic cylinders, and custom hydraulic solutions for industrial applications. 25+ years of engineering excellence. Based in Ahmedabad, India.",
  keywords: ["hydraulic power packs", "hydraulic cylinders", "custom hydraulic solutions", "hydraulic manufacturer", "Ahmedabad", "India"],
  authors: [{ name: "Merchant Hydraulic" }],
  creator: "Merchant Hydraulic",
  metadataBase: new URL("https://merchanthydraulic.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Merchant Hydraulic | Hydraulic Power Packs & Cylinders",
    description: "Manufacturing hydraulic power packs, hydraulic cylinders, and custom hydraulic solutions for industrial applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
