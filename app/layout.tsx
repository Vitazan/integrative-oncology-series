import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://integrative-oncology-series.com"),
  title: {
    default: "Integrative Oncology Webinar Series | Vitazan Professional & NFH",
    template: `%s | Integrative Oncology Webinar Series`,
  },
  description:
    "Explore integrative approaches to oncology with leading experts. Register for our free webinar series featuring top naturopathic doctors, clinical researchers, and practical strategies for patient care.",
  applicationName: "Integrative Oncology Series",
  referrer: "origin-when-cross-origin",
  keywords: [
    "integrative oncology",
    "webinar",
    "naturopathic medicine",
    "cancer care",
    "functional medicine",
    "Vitazan",
    "NFH",
    "natural health",
    "oncology series",
    "doctor webinar",
    "clinical research",
  ],
  authors: [{ name: "Vitazan Professional" }, { name: "NFH" }],
  creator: "Vitazan Professional & NFH",
  publisher: "Vitazan Professional & NFH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: "Integrative Oncology Webinar Series | Vitazan Professional & NFH",
    description:
      "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
    url: "https://integrative-oncology-series.com/",
    siteName: "Integrative Oncology Series",
    images: [
      {
        url: "/logosupdown.webp",
        width: 1200,
        height: 630,
        alt: "Integrative Oncology Series Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrative Oncology Webinar Series | Vitazan Professional & NFH",
    description:
      "Explore integrative approaches to oncology with leading experts. Register for our free webinar series featuring top naturopathic doctors, clinical researchers, and practical strategies for patient care.",
    images: ["/logosupdown.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}