import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yieldedcircle.tech"),
  title: "Yielded Circle Tech | End-to-End Software Development",
  description:
    "We help founders validate & build software that actually works. From idea to MVP — before you spend too much money building the wrong thing. Fintech, healthcare, and edtech specialists.",
  keywords:
    "software development, MVP validation, full-stack development, fintech, healthcare, edtech",
  authors: [{ name: "Yielded Circle Tech", url: "https://yieldedcircle.tech" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yielded Circle Tech | End-to-End Software Development",
    description:
      "We help founders validate & build software that actually works.",
    url: "https://yieldedcircle.tech",
    siteName: "Yielded Circle Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fcf9ff" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
