import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import Header from "@/components/landing/Header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
