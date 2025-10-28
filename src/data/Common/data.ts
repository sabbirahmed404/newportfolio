import { BiLogoPostgresql, BiLogoPhp } from "react-icons/bi"
import { FaGithub, FaLinkedinIn, FaPython, FaXTwitter } from "react-icons/fa6"
import { FaVuejs, FaLaravel, FaAws, FaDocker, FaGitAlt } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { IoLogoNodejs } from "react-icons/io5"
import { SiFlutter, SiScrapy, SiSelenium } from "react-icons/si"

import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDjango,
  SiMysql,
} from "react-icons/si"
import {
  TbBrandTypescript,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

const skills = [
  { id: 1, icon: BiLogoPhp, text: "PHP" },
  { id: 2, icon: FaPython, text: "Python" },
  { id: 3, icon: IoLogoNodejs, text: "Node.js" },
  { id: 4, icon: FaLaravel, text: "Laravel" },
  { id: 5, icon: SiDjango, text: "Django" },
  { id: 6, icon: SiExpress, text: "Express" },
  { id: 7, icon: RiReactjsLine, text: "React" },
  { id: 8, icon: FaVuejs, text: "Vue.js" },
  { id: 9, icon: RiNextjsLine, text: "Next.js" },
  { id: 10, icon: SiFlutter, text: "Flutter" },
  { id: 11, icon: FaAws, text: "AWS" },
  { id: 12, icon: SiMysql, text: "MySQL" },
  { id: 13, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 14, icon: SiMongodb, text: "MongoDB" },
  { id: 15, icon: SiRedis, text: "Redis" },
  { id: 16, icon: SiScrapy, text: "Scrapy" },
  { id: 17, icon: SiSelenium, text: "Selenium" },
  { id: 18, icon: DiJavascript, text: "JavaScript" },
  { id: 19, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 20, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 21, icon: FaDocker, text: "Docker" },
  { id: 22, icon: FaGitAlt, text: "Git" },
  { id: 23, icon: FaGithub, text: "GitHub" },
  { id: 24, icon: VscTerminalLinux, text: "Linux" },
  { id: 25, icon: SiPostman, text: "Postman" },
]
const projects = [
  {
    id: 1,
    img: "/assets/Images/project/onvyo.png",
    title: "Devrachtpatser Onvyo ERP",
    status: true,
    content:
      "A full ERP system developed from scratch with real time admin dashboards for HR, finance, lead, and customer management. Features scheduling and email reminders, with a CPQ tool that automated lead generation and quotation workflows to boost sales efficiency.",
    url: "https://leads-patser.vercel.app/",
    github: "",
    skill: ["ERP", "Dashboard", "CPQ", "Real-time", "Next.js", "Node.js", "Vercel", "React", "Supabase"],
    preview: "",
    caseStudy: "",
  },
  {
    id: 2,
    img: "/assets/Images/project/textgpt.png",
    title: "TextGPT & IQR Codes",
    status: true,
    content:
      "An AI text service for automated text generation and texting workflows, built to be white labeled and integrated for commercial use. Features <2 minutes end to end ingestion for 10MB PDFs, <1s vector retrieval at p95, and 95%+ OCR accuracy on scans with 100% multi tenant data isolation.",
    url: "",
    github: "",
    skill: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Postgres", "pgvector", "Vercel", "Mistral AI", "OpenAI", "Stripe", "Telnyx SMS"],
    preview: "",
    caseStudy: "https://codemypixel.com/textgpt-case-study/",
  },
  {
    id: 3,
    img: "/assets/Images/project/topfloor.png",
    title: "Top Floor Trends",
    status: true,
    content:
      "A complete web and content update focused on improving search visibility and user experience. Built an AI pipeline that converts 180 minutes of footage into 20+ short reels automatically, with Google Ads API integration for programmatic campaign deployment, reducing publish time to under 60 seconds.",
    url: "",
    github: "",
    skill: ["Next.js 15", "React 19", "Tailwind CSS", "Firebase", "NextAuth", "OpenAI API", "Google Ads API", "YouTube API", "TikTok API", "Spotify API", "Stripe", "Vercel Cron"],
    preview: "",
    caseStudy: "https://codemypixel.com/top-floor-trends-case-study/",
  },
  {
    id: 4,
    img: "/assets/Images/project/vidalsigns.png",
    title: "VidalSigns",
    status: true,
    content:
      "An AI powered medical assistant that converts complex lab reports into simple, actionable explanations for patients, with an emphasis on secure HIPAA style handling of medical data. Achieved 98% OCR accuracy on reports with <2s average AI response time and 100% HIPAA aligned data purge.",
    url: "",
    github: "",
    skill: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vector Search", "Generative AI", "Advanced OCR", "Stripe", "Vercel"],
    preview: "",
    caseStudy: "https://codemypixel.com/vidalsigns-case-study/",
  },
  {
    id: 5,
    img: "/assets/Images/project/vidalsigns.png",
    title: "Uvoy",
    status: true,
    content:
      "Developed a full-stack e-commerce platform for a local fashion brand, featuring user and admin dashboards, multi-channel payments, and scalable order management.",
    url: "https://www.uvoystore.com/",
    github: "",
    skill: ["E-commerce", "Full-stack", "Payment Integration", "Dashboard", "Next.js", "React", "Node.js"],
    preview: "",
    caseStudy: "",
  },
  {
    id: 6,
    img: "/assets/Images/project/vidalsigns.png",
    title: "Offshore CMP",
    status: true,
    content:
      "Developed and implemented a new offshore business model for CodeMyPixel, connecting U.S. clients with managed Bangladeshi development teams to deliver AI, SaaS, and automation solutions at 88% reduced cost.",
    url: "https://hire.codemypixel.com/",
    github: "https://github.com/sabbirahmed404/cmp-offshore",
    skill: ["Business Model", "Offshore", "SaaS", "AI Solutions", "Automation", "Node.js", "Next.js", "React"],
    preview: "",
    caseStudy: "",
  },
]

// Old projects (commented out)
// const projects = [
//   {
//     id: 1,
//     img: "/assets/Images/project/parolla.png",
//     title: "parolla.app",
//     status: true,
//     content:
//       "Solve daily puzzles and compete with others. Create your own question-answer sets and solve fun quizzes created by players. A Turkish word game platform built with Vue.js and Laravel.",
//     url: "https://parolla.app/",
//     github: "",
//     skill: ["Vue.js", "Laravel", "MySQL", "AWS"],
//     preview: "",
//   },
//   {
//     id: 2,
//     img: "/assets/Images/project/sanalyer.png",
//     title: "sanalyer.com",
//     status: true,
//     content:
//       "Telling stories that mainstream media won't. A modern content platform covering technology, travel, and software development with original research, in-depth analysis, and unique perspectives on Turkish tech ecosystem.",
//     github: "",
//     url: "https://sanalyer.com/",
//     skill: ["WordPress", "PHP", "MySQL"],
//     preview: "",
//   },
//   {
//     id: 3,
//     img: "/assets/Images/project/old-portfolio.png",
//     title: "Old Portfolio",
//     status: true,
//     content:
//       "My previous portfolio website built with React, featuring a cyberpunk-inspired design aesthetic. Includes sections for blog posts, projects showcase, and about me. Dark theme with neon accents and futuristic UI elements.",
//     github: "https://github.com/apo-bozdag/apo-bozdag.github.io",
//     url: "https://apo-bozdag.github.io/",
//     skill: ["React", "CSS", "JavaScript"],
//     preview: "",
//   },
// ]

const writings = [
  // Add your blog posts or articles here
  // Example:
  // {
  //   id: 1,
  //   img: "/assets/Images/writing/example.png",
  //   head: "Your Article Title",
  //   des: "Article description",
  //   link: "https://your-blog-link.com",
  // },
]

const hireText =
  "I'm currently available for freelance projects and consulting opportunities. With 8+ years of experience in backend and full-stack development, I can help bring your ideas to life with scalable, efficient solutions."

const emailLink =
  "mailto:abdullah@radkod.com?subject=Interested%20in%20Working%20Together"

const navLinks = [
  {
    id: 1,
    name: "Lab",
    link: "/lab",
    icon: ImLab,
  },
  {
    id: 2,
    name: "X",
    link: "https://x.com/apo_bozdag",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/apo-bozdag",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/apo-bozdag",
    icon: FaLinkedinIn,
  },
]

const supportText =
  "If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work."

const newsText =
  "Subscribe to my newsletter to get updates on my latest projects, blogs, and news. Stay connected and be the first to know what I’m working on!"
export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
}
