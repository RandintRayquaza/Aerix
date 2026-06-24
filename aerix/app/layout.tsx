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

export const metadata: Metadata = {
  metadataBase: new URL("https://aerix.live"),
  title: {
    default: "Aerix",
    template: "%s | Aerix",
  },
  description:
    "Create a polished public profile with social links, media, videos, branding, analytics, and a shareable Aerix page.",
  applicationName: "Aerix",
  authors: [{ name: "Aerix" }],
  creator: "Aerix",
  publisher: "Aerix",
  openGraph: {
    title: "Aerix",
    description:
      "A creator identity platform for social links, featured content, media, videos, and personal branding.",
    url: "https://aerix.live",
    siteName: "Aerix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerix",
    description:
      "A creator identity platform for social links, featured content, media, videos, and personal branding.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink">{children}</body>
    </html>
  );
}
