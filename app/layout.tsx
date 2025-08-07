import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integrative Oncology Webinar Series | Vitazan Professional & NFH",
  description:
    "Explore integrative approaches to oncology with leading experts. Register for our free webinar series featuring top naturopathic doctors, clinical researchers, and practical strategies for patient care.",
  generator: "Vitazan Professional",
  keywords: [
    "integrative oncology", "webinar", "naturopathic medicine", "cancer care", "functional medicine", "Vitazan", "NFH", "natural health", "oncology series", "doctor webinar", "clinical research"
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
        alt: "Integrative Oncology Series Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrative Oncology Webinar Series | Vitazan Professional & NFH",
    description:
      "Explore integrative approaches to oncology with leading experts. Register for our free webinar series featuring top naturopathic doctors, clinical researchers, and practical strategies for patient care.",
    images: ["/logosupdown.webp"]
  }
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