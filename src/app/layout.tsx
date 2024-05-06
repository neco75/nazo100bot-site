import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NAZO 100 BOT",
  description: "「Project COLD2.0」の謎100ガチャの二次利用サイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} text-green-500`} style={{ backgroundColor: 'black' }}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
        </body>
    </html>
  );
}
