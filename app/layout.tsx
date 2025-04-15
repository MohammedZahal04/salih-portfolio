import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Muhammed Salih - Photographer & Content Creator",
    template: "%s | Muhammed Salih"
  },
  description: "Portfolio of Muhammed Salih, a professional photographer, videographer and social media influencer specializing in captivating visual storytelling.",
  keywords: ["photography", "videography", "content creation", "social media", "portfolio", "visual storytelling"],
  authors: [{ name: "Muhammed Salih" }],
  creator: "Muhammed Salih",
  generator: "Next.js",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammedsalih.com",
    title: "Muhammed Salih - Photographer & Content Creator",
    description: "Portfolio of Muhammed Salih, a professional photographer, videographer and social media influencer specializing in captivating visual storytelling.",
    siteName: "Muhammed Salih Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Salih - Photographer & Content Creator",
    description: "Portfolio of Muhammed Salih, a professional photographer, videographer and social media influencer specializing in captivating visual storytelling.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'