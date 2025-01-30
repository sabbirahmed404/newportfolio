import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  icons: {
    icon: ["./assets/Images/icon/icon.png"],
    shortcut: ["./assets/Images/icon/icon.png"],
  },
  openGraph: {
    title: "Rinkit Adhana",
    description: "Portfolio",
    url: "https://www.rinkit.tech",
    siteName: "Switchfolio",
    images: [{ url: "./assets/Images/OG/og.png", width: 1200, height: 630 }],
    locale: "en-IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
