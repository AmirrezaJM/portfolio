import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";


const degular = localFont({
  src: [
    { path: "../../public/fonts/Degular-Thin.woff", weight: "100", style: "normal" },
    { path: "../../public/fonts/Degular-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/Degular-Medium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/Degular-Semibold.woff", weight: "600", style: "normal" },
    { path: "../../public/fonts/Degular-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/DegularDisplay-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/DegularDisplay-Semibold.woff", weight: "600", style: "normal" },
    { path: "../../public/fonts/DegularDisplay-Bold.woff", weight: "700", style: "normal" },
    // Optional fallback source:

    { path: "../../public/fonts/Degular-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/Degular-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Degular-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Degular-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Degular-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/DegularDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/DegularDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/DegularDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-degular",
  display: "swap",
  fallback: ["Degular Bold Placeholder", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Portfolio | Amirreza Jolani Mameghani",
  description:
    "Full-stack developer portfolio showcasing projects built with Next.js, React, and Tailwind CSS.",
  keywords: ["Amirreza Jolani Mameghani", "portfolio", "Next.js", "React", "Tailwind CSS", "web developer"],
  authors: [{ name: "Amirreza Jolani Mameghani", url: "https://yourdomain.com" }],
  applicationName: "AJM Portfolio",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/myself.webp", sizes: "16x16", type: "image/webp" },
      { url: "/myself.webp", sizes: "32x32", type: "image/webp" },
      { url: "/myself.webp", sizes: "192x192", type: "image/webp" },
      { url: "/myself.webp", sizes: "512x512", type: "image/webp" }
    ],
    shortcut: "/myself.webp",
    apple: "/myself.webp",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Portfolio | Amirreza Jolani Mameghani",
    description:
      "Full-stack developer portfolio showcasing projects built with Next.js, React, and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "AJM Portfolio",
    images: [{ url: "https://yourdomain.com/og-image.jpg", width: 1200, height: 630, alt: "Screenshot of AJM Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Amirreza Jolani Mameghani",
    description:
      "Full-stack developer portfolio showcasing projects built with Next.js, React, and Tailwind CSS.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
    creator: "@amirreza",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/myself.webp"
          type="image/webp"
          sizes="16x16 32x32 48x48 64x64 128x128 192x192 256x256 384x384 512x512"
        />
      </head>
      {/* expose all font variables on <body> */}
      <body
        className={twMerge(
          degular.variable,
          "text-white relative -z-10"
        )}
      >
        <main className="bg-background text-foreground">{children}</main>
      </body>
    </html>
  );
}
