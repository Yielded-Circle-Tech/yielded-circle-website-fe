import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RSS_ALTERNATE } from "@/lib/seo";
import { site, SITE_URL } from "@/lib/site";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Site-wide defaults only. There is deliberately no `alternates.canonical`
 * here: a canonical set at the root is inherited by every page that forgets
 * its own, which marks those pages as duplicates of the homepage. Each page
 * sets its canonical through `pageMetadata()` in lib/seo.ts.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { types: RSS_ALTERNATE },
  openGraph: {
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: site.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [site.ogImage],
  },
  // Add the token from Google Search Console / Bing Webmaster Tools here.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fcf9ff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
