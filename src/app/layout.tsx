import type { Metadata } from "next";
import { Inter, Lily_Script_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lilyScript = Lily_Script_One({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://esamesa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "esamesa — Coming Soon",
  description: "esamesa. Something is on the way. Coming soon.",
  openGraph: {
    title: "esamesa — Coming Soon",
    description: "esamesa. Something is on the way. Coming soon.",
    url: siteUrl,
    siteName: "esamesa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "esamesa — Coming Soon",
    description: "esamesa. Something is on the way. Coming soon.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lilyScript.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
