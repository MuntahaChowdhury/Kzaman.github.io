import type { Metadata } from "next";
import { Geist, Geist_Mono, Amarante, Combo  } from "next/font/google";
import "@/styles/globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable} ${amarante.variable} ${combo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
