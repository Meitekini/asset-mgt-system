import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/header/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "AssetFlow - Professional Asset Management",
  description: "Empowering your financial future with expert asset management solutions",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-heading: ${montserrat.style.fontFamily};
  --font-body: ${openSans.style.fontFamily};
}
        `}</style>
      </head>
    
      <body>
         
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
