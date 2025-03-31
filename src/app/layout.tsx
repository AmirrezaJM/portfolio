import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My name is amirreza Jolani Mameghani and this is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "text-white relative -z-10")}>
        <Header />
        <main>
          {children}
           {/* <SpeedInsights /> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
