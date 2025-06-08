import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

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
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Rinkit Adhana",
    description: "This is my portfolio website.",
    url: "https://www.rinkit.tech",
    siteName: "Switchfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dhcocqegu/image/upload/v1749401017/og_k1rjzx.png",
        width: 1200,
        height: 630,
      },
    ],
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
        <Toaster />
        {children}
      </body>
    </html>
  )
}
