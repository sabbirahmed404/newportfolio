import MinimalLanding from "@/components/minimal/MinimalLanding"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sabbir Ahmed - Software Engineer | CSE Graduate | Full Stack Developer",
  description: "Sabbir Ahmed is a Software Engineer and CSE graduate who builds scalable web applications. Expert in full-stack development with React, Next.js, Node.js, Python. Sabbir specializes in backend engineering, automation, and modern software solutions.",
  keywords: ["Sabbir", "Sabbir Ahmed", "Sabbir Software Engineer", "Sabbir CSE", "Sabbir Engineer", "Software Engineer", "Full Stack Developer", "CSE Graduate", "Web Developer", "Backend Engineer"],
  openGraph: {
    title: "Sabbir Ahmed - Software Engineer | CSE Graduate | Full Stack Developer",
    description: "Sabbir Ahmed is a Software Engineer and CSE graduate who builds scalable web applications with React, Next.js, Node.js, and Python.",
    type: "website",
  },
}

export default function Home() {
  return <MinimalLanding />
}
