import type { Metadata } from "next";
import { Geist, Geist_Mono, Amarante, Playfair_Display, Source_Sans_3 } from "next/font/google";
// import { Geist, Geist_Mono, Amarante, Playfair_Display, Alice } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/uiwidget/footer";
import Header from "@/components/uiwidget/header";
import BackToTop from "@/components/uiwidget/toTop";



const head = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-amarante",
});



export const metadata: Metadata = {
  title: "Md Kzaman Chowdhury",
  description: "Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${amarante.variable} ${head.variable} ${body.variable} antialiased w-full overflow-x-hidden`}>

        <Header />
        <BackToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
