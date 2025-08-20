import type { Metadata } from "next";
import { Geist, Geist_Mono, Amarante, Combo, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/uiwidget/footer";
import Header from "@/components/uiwidget/header";
import BackToTop from "@/components/uiwidget/toTop";

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-amarante",
});

const combo = Combo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-combo",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Kzaman Chowdhury",
  description: "Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${amarante.variable} ${combo.variable} ${playfair.variable} antialiased`}>

        <Header />
        <BackToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
