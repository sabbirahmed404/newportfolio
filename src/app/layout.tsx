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
    default: "Sabbir Ahmed - Software Engineer | CSE Graduate | Full Stack Developer",
    template: "%s | Sabbir Ahmed - Software Engineer"
  },
  description: "Sabbir Ahmed is a Software Engineer and CSE graduate specializing in full-stack development, backend engineering, and automation. Expert in React, Next.js, Node.js, Python, and modern web technologies. Sabbir builds scalable software solutions with expertise in SQL, serverless architecture, and low-code automation.",
  keywords: [
    // Primary keywords
    "Sabbir",
    "Sabbir Ahmed",
    "Sabbir Software",
    "Sabbir Engineer",
    "Sabbir CSE",
    "Sabbir Ahmed Software Engineer",
    "Sabbir Ahmed Engineer",
    "Sabbir Ahmed CSE",
    
    // Professional titles
    "Software Engineer",
    "Full Stack Developer",
    "Backend Software Developer",
    "Backend Engineer",
    "CSE Graduate",
    "Computer Science Engineer",
    
    // Technical skills
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    
    // Technologies
    "React", "Next.js", "Node.js", "Python", "JavaScript", "TypeScript",
    "SQL", "Vue.js", "Express.js", "serverless", "AWS", "API Development",
    "n8n", "low code", "automation", "REST API", "GraphQL",
    
    // Portfolio related
    "Portfolio", "Developer Portfolio", "Software Engineer Portfolio",
    "Web Developer", "Sabbir Ahmed Portfolio"
  ],
  authors: [{ name: "Sabbir Ahmed", url: "https://sabbir.uvoystore.com" }],
  creator: "Sabbir Ahmed",
  publisher: "Sabbir Ahmed",
  metadataBase: new URL("https://sabbir.uvoystore.com"),
  alternates: {
    canonical: "https://sabbir.uvoystore.com",
  },
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
    apple: "/assets/Images/icon/icon-light.png",
  },
  openGraph: {
    title: "Sabbir Ahmed - Software Engineer | CSE Graduate | Full Stack Developer",
    description: "Sabbir Ahmed is a Software Engineer and CSE graduate specializing in full-stack development, backend engineering, and automation. Expert in React, Next.js, Node.js, Python, and modern web technologies.",
    url: "https://sabbir.uvoystore.com",
    siteName: "Sabbir Ahmed - Software Engineer Portfolio",
    images: [
      {
        url: "/assets/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Sabbir Ahmed - Software Engineer, CSE Graduate, Full Stack Developer"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Ahmed - Software Engineer | CSE Graduate",
    description: "Sabbir Ahmed is a Software Engineer and CSE graduate specializing in full-stack development, backend engineering, and modern web technologies.",
    images: ["/assets/Images/banner.png"],
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code", // Optional
    // bing: "your-bing-verification-code", // Optional
  },
  category: "Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sabbir Ahmed",
    alternateName: ["Sabbir", "Sabbir Ahmed CSE", "Sabbir Software Engineer"],
    jobTitle: "Software Engineer",
    description: "Software Engineer and CSE graduate specializing in full-stack development, backend engineering, and automation",
    url: "https://sabbir.uvoystore.com",
    image: "https://sabbir.uvoystore.com/assets/Images/banner.png",
    sameAs: [
      "https://x.com/Minhajeez",
      "https://github.com/sabbirahmed404",
      "https://linkedin.com/in/msabbir-ahmed",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Computer Science and Engineering"
    },
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Backend Development",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Automation",
      "Low Code Development",
      "Web Development",
      "API Development"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Global"
      },
      skills: "React, Next.js, Node.js, Python, JavaScript, TypeScript, SQL, Backend Development, Full Stack Development, Automation"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="author" content="Sabbir Ahmed" />
        <meta name="subject" content="Software Engineer Portfolio - Sabbir Ahmed" />
        <meta name="classification" content="Software Development, Web Development, Engineering" />
        <meta name="reply-to" content="contact@sabbir.uvoystore.com" />
        <link rel="canonical" href="https://sabbir.uvoystore.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
