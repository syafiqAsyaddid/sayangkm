import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react";
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BEM KM IPB 2025/2026",
  description: "Badan Eksekutif Mahasiswa Keluarga Mahasiswa IPB",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
