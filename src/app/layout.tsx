import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const siteUrl = "https://esamesa.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "esamesa — Muy pronto",
  description:
    "esamesa es un estudio de diseño. Estamos afinando cada detalle antes de abrir. Muy pronto.",
  keywords: ["esamesa", "estudio", "diseño", "coming soon", "muy pronto"],
  openGraph: {
    title: "esamesa — Muy pronto",
    description:
      "Un estudio de diseño. Estamos afinando cada detalle antes de abrir.",
    url: siteUrl,
    siteName: "esamesa",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "esamesa — Muy pronto",
    description:
      "Un estudio de diseño. Estamos afinando cada detalle antes de abrir.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
