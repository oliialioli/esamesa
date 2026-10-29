import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Public URL of the deployed site, used for canonical and Open Graph links. The
// deploy workflow sets it from GitHub Pages, so it follows a custom domain as
// soon as one is configured in the repo's Pages settings.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oliialioli.github.io/esamesa";

const title = "esamesa — Muy pronto";
const description = "esamesa. Algo está en camino. Muy pronto.";

// Share preview (public/og.jpg), resolved against metadataBase.
const shareImage = { url: "/og.jpg", width: 1200, height: 630, alt: title };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "esamesa",
    locale: "es_MX",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
