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
  title: {
    default: "Sabbir Ahmed - Software Engineer",
    template: "%s | Sabbir Ahmed"
  },
  description: "Portfolio of Sabbir Ahmed - Software Engineer with years of full-stack and low code automation experience. Specializing in Next.js, React, Python, Node.js.",
  keywords: ["Sabbir Ahmed", "Portfolio", "Software Engineer", "Backend Software Developer", "Full Stack Developer", "SQL", "React", "next.js", "Node.js", "Vue.js", "serverless", "n8n", "low code", "automation"],
  authors: [{ name: "Sabbir Ahmed" }],
  creator: "Sabbir Ahmed",
  metadataBase: new URL("https://sabbir.uvoystore.com"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Sabbir Ahmed - Software Engineer",
    description: "Portfolio of Sabbir Ahmed - Software Engineer with years of full-stack and low code automation experience. Specializing in Next.js, React, Python, Node.js.",
    url: "https://sabbir.uvoystore.com",
    siteName: "Sabbir Ahmed Portfolio",
    images: [
      {
        url: "/assets/Images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sabbir Ahmed - Software Engineer"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Ahmed - Software Engineer",
    description: "Portfolio of Sabbir Ahmed - Software Engineer with years of backend and full-stack experience.",
    images: ["/assets/Images/og-image.png"],
    creator: "@minhajeez",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
