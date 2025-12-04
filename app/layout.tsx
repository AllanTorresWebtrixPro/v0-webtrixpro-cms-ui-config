import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { QueryProvider } from "@/lib/providers/QueryProvider"
import { Toaster } from "sonner"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebtrixPro - Smart Software. AI-Powered",
  description:
    "Empowering businesses to work smarter, not harder through AI-powered automation, custom software, and strategic technology solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        <QueryProvider>
          {children}
          <Toaster position="top-right" richColors />
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
