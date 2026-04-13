import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labour Law— India's Labour Law Advisory",
  description: "Expert labour law compliance and advisory services in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable} antialiased`}>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}