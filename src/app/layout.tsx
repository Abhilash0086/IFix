import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/ui/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iFix Bluetooth & Neckband Service Center | Coimbatore",
  description:
    "Expert repair for Smart Watches, TWS Earbuds, Neckbands, Headphones & Bluetooth Speakers in Coimbatore. Transparent pricing, same-day service, 30-day warranty.",
  keywords: "bluetooth repair coimbatore, earbuds repair, smartwatch repair, neckband repair, headphone repair",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
