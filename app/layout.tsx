import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muhammed Salih - Photographer & Content Creator",
  description:
    "Portfolio of Muhammed Salih, a professional photographer, videographer and social media influencer specializing in captivating visual storytelling.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-quaternary text-primary`}>{children}</body>
    </html>
  )
}



import './globals.css'