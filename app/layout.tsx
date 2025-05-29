// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { ThemeProvider } from "next-themes"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Integrative Oncology Webinar Series | New Roots Herbal",
//   description:
//     "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           <div className="flex flex-col min-h-screen">
//             <Header />
//             <div className="flex-grow">{children}</div>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }




//new


import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integrative Oncology Series",
  description:
    "Join our expert-led webinar series on integrative approaches to oncology, featuring leading naturopathic doctors and researchers.",
  generator: "Saloni",
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



// import './globals.css'
// import { Inter } from 'next/font/google'
// import { ThemeProvider } from 'next-themes'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'My Site',
//   description: 'My description',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
//           <div className="flex flex-col min-h-screen">
//             {children}
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
