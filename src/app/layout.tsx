import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Swap to the real production domain when known.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://onesherpa.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "onesherpa: ERPNext without the complexity",
    template: "%s · onesherpa",
  },
  description:
    "onesherpa is an AI-native admin console for ERPNext. Configure and manage your ERP by talking to it. Implement, customize, and run, all from one clean dashboard.",
  keywords: [
    "ERPNext",
    "ERPNext configuration",
    "Frappe",
    "Frappe Partner",
    "AI ERP",
    "ERP admin console",
    "ERP implementation",
    "no-code ERP",
    "onesherpa",
  ],
  applicationName: "onesherpa",
  authors: [{ name: "onesherpa" }],
  creator: "onesherpa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "onesherpa",
    title: "onesherpa: ERPNext without the complexity",
    description:
      "Configure your ERPNext system by describing it in plain language. Implement, customize, and run, all from one clean, AI-native cockpit.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "onesherpa, an AI-native admin console for ERPNext",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "onesherpa: ERPNext without the complexity",
    description:
      "Configure your ERPNext system by describing it in plain language. Implement, customize, and run, all from one clean, AI-native cockpit.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
