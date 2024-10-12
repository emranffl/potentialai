import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.scss"
import { Navbar } from "./Components/Navbar"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  subsets: ["latin-ext"],
  fallback: ["sans-serif"],
})

// + metadata
export const metadata: Metadata = {
  title: "Personal Portfolio Landing Page",
  description: "A personal portfolio landing page built with Next.js and Tailwind CSS",
  keywords: ["personal", "portfolio", "landing page", "next.js", "tailwind css"],
  robots: "noindex, nofollow",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   images: {
  //     url: "/images/hero.png",
  //     width: 1200,
  //     height: 630,
  //     alt: "Personal Portfolio Landing Page",
  //   },
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
