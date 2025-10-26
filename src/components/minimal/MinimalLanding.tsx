"use client"

import { useState, useRef, useLayoutEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/Common/data"
import { ArrowRight, ExternalLink, Briefcase, Mail, Home, BookOpen, GraduationCap } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

interface Project {
  id: number
  img: string
  title: string
  status: boolean
  content: string
  url?: string
  github?: string
  skill: string[]
  preview?: string
  caseStudy?: string
}

interface Publication {
  id: number
  title: string
  description: string
  details: string
  github?: string
  skills: string[]
  year: string
}

type Section = "home" | "projects" | "experience" | "publication" | "qualifications" | "contact"

// Fixed vintage color palette - nostalgic, warm, Mexico-inspired
const COLORS = {
  bg: "#EDE5D8",        // Warm darker cream background
  card: "#E8DCC4",      // Sand card background
  text: "#2D1F1A",      // Dark brown text
  textSecondary: "#2D1F1ACC", // Text with opacity
  accent: "#B87333",    // Copper accent
  border: "#2D1F1A15",  // Subtle border
}

// Publication data
const publications: Publication[] = [
  {
    id: 1,
    title: "3D Deep Learning for Brain Lesion Detection with YOLO & U-Net",
    description: "Researched 3D medical image segmentation using YOLO & U-Net in PyTorch. Optimized data pipelines for multi-modal MRI and PET scans to improve lesion detection accuracy.",
    details: "This research addresses a critical gap in medical imaging detection by developing a unified model capable of detecting brain tumors from both MRI and PET scans. Traditional approaches often focused on single modality detection, limiting diagnostic accuracy. Our multi-modal approach leverages the complementary strengths of both imaging techniques MRI's superior soft tissue contrast and PET's metabolic activity visualization to achieve more comprehensive and accurate lesion detection. The implementation combines YOLO's real-time detection capabilities with U-Net's precise segmentation architecture, optimized for 3D medical imaging workflows.",
    github: "https://github.com/sabbirahmed404/Brain_Tumor_Detection_Using_YOLO",
    skills: ["PyTorch", "YOLO", "U-Net", "Medical Imaging", "3D Deep Learning", "Python", "MRI", "PET Scans"],
    year: "2024"
  }
]

export default function MinimalLanding() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)

  const handleSectionChange = (section: Section) => {
    if (section === activeSection) return
    setActiveSection(section)
    setSelectedProject(null)
    setSelectedPublication(null)
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handlePublicationClick = (publication: Publication) => {
    setSelectedPublication(publication)
  }

  const handleBack = () => {
    setSelectedProject(null)
    setSelectedPublication(null)
  }

  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Subtle texture overlay (disabled on small screens for performance) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          willChange: 'opacity',
          contain: 'paint',
        }}
      />

      {/* Main container */}
      <div className="relative z-10 flex h-screen">
        {/* Left content area with internal scroll */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-12 md:py-16 pb-24 md:pb-16 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedProject ? `project-${selectedProject.id}` : selectedPublication ? `publication-${selectedPublication.id}` : `section-${activeSection}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.25,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-full max-w-2xl max-h-full overflow-y-auto scrollbar-thin pb-20 md:pb-0"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: `${COLORS.accent}40 transparent`,
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                willChange: 'transform',
                transform: 'translateZ(0)',
                contain: 'content',
                overscrollBehavior: 'contain',
              }}
            >
              {selectedProject ? (
                <ProjectDetail
                  project={selectedProject}
                  onBack={handleBack}
                />
              ) : selectedPublication ? (
                <PublicationDetail
                  publication={selectedPublication}
                  onBack={handleBack}
                />
              ) : (
                <SectionContent
                  section={activeSection}
                  onProjectClick={handleProjectClick}
                  onPublicationClick={handlePublicationClick}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right navigation sidebar - Always render, use CSS for responsive */}
        <DesktopNavigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>

      {/* Mobile navigation - Always render, use CSS for responsive */}
      <MobileNavigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  )
}

// Shared navigation items
const navItems = [
  { id: "home" as Section, label: "Home", icon: Home },
  { id: "projects" as Section, label: "Projects", icon: ArrowRight },
  { id: "experience" as Section, label: "Experience", icon: Briefcase },
  { id: "publication" as Section, label: "Publication", icon: BookOpen },
  { id: "qualifications" as Section, label: "Qualifications", icon: GraduationCap },
  { id: "contact" as Section, label: "Contact", icon: Mail },
]

// Desktop Navigation Component
function DesktopNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (section: Section) => void
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorTop, setIndicatorTop] = useState<number | null>(null)

  // Use layoutEffect to calculate position before paint
  useLayoutEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection)
    const button = buttonRefs.current[activeIndex]

    if (button) {
      const buttonTop = button.offsetTop
      const buttonHeight = button.offsetHeight
      const top = buttonTop + buttonHeight / 2 - 24
      setIndicatorTop(top)
    }
  }, [activeSection])

  return (
    <nav className="hidden md:flex flex-col items-center justify-center gap-6 w-24 relative">
      {/* Full height border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: COLORS.border }}
      />

      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <button
            key={item.id}
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
            onClick={() => onSectionChange(item.id)}
            className="group relative flex flex-col items-center gap-2 px-4 py-3 transition-all duration-200"
            style={{
              color: isActive ? COLORS.accent : COLORS.text,
              opacity: isActive ? 1 : 0.5,
            }}
          >
            <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        )
      })}

      {/* Active indicator - only show when position is calculated */}
      {indicatorTop !== null && (
        <div
          className="absolute left-0 w-1 h-12 rounded-r-full transition-all duration-200 pointer-events-none"
          style={{
            backgroundColor: COLORS.accent,
            top: `${indicatorTop}px`,
          }}
        />
      )}
    </nav>
  )
}

// Mobile Navigation Component
function MobileNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (section: Section) => void
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [indicatorLeft, setIndicatorLeft] = useState<number | null>(null)

  // Function to update indicator position
  const updateIndicatorPosition = useCallback(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection)
    const button = buttonRefs.current[activeIndex]
    const container = scrollContainerRef.current

    if (button && container) {
      const buttonLeft = button.offsetLeft
      const buttonWidth = button.offsetWidth
      const scrollLeft = container.scrollLeft
      // Calculate position relative to viewport, accounting for scroll
      const left = buttonLeft - scrollLeft + buttonWidth / 2
      setIndicatorLeft(left)
    }
  }, [activeSection])

  // Use layoutEffect to calculate position before paint and scroll active item into view
  useLayoutEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection)
    const button = buttonRefs.current[activeIndex]

    if (button && scrollContainerRef.current) {
      // Scroll active item into view
      button.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })

      // Update indicator position after scroll completes
      setTimeout(() => {
        updateIndicatorPosition()
      }, 300)
    }
  }, [activeSection, updateIndicatorPosition])

  // Update indicator position on scroll
  useLayoutEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      updateIndicatorPosition()
    }

    container.addEventListener('scroll', handleScroll)
    updateIndicatorPosition() // Initial position

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection, updateIndicatorPosition])

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-lg z-50"
      style={{
        backgroundColor: `${COLORS.bg}F5`,
      }}>
      <nav className="relative">
        {/* Top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: COLORS.border }}
        />

        {/* Active indicator - only show when position is calculated */}
        {indicatorLeft !== null && (
          <div
            className="absolute top-0 h-1 w-12 rounded-b-full transition-all duration-200 pointer-events-none"
            style={{
              backgroundColor: COLORS.accent,
              left: `${indicatorLeft}px`,
              transform: 'translateX(-50%)',
            }}
          />
        )}

        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-1 px-4 py-3 overflow-x-auto scrollbar-thin"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: `${COLORS.accent}40 transparent`,
            WebkitOverflowScrolling: 'touch',
            scrollPaddingInline: '1rem',
          }}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                ref={(el) => {
                  buttonRefs.current[index] = el
                }}
                onClick={() => onSectionChange(item.id)}
                className="flex flex-col items-center gap-1 px-3 py-2 transition-all duration-200 flex-shrink-0"
                style={{
                  color: isActive ? COLORS.accent : COLORS.text,
                  opacity: isActive ? 1 : 0.6,
                  minWidth: '72px',
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium whitespace-nowrap">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

// Section Content Component
function SectionContent({
  section,
  onProjectClick,
  onPublicationClick,
}: {
  section: Section
  onProjectClick: (project: Project) => void
  onPublicationClick: (publication: Publication) => void
}) {
  if (section === "home") {
    return (
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div 
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden"
            style={{ backgroundColor: COLORS.card }}
          >
            <Image
              src="/assets/Images/pfps/sabbir.png"
              alt="Sabbir Ahmed"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 flex-1">
          <div className="space-y-4 text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight"
              style={{ color: COLORS.text }}
            >
              Sabbir Ahmed
            </h1>
            <p className="text-lg max-w-lg leading-relaxed mx-auto md:mx-0" style={{ color: `${COLORS.text}CC` }}>
              Engineer & full-stack builder. I create web applications and solve complex problems with clean, efficient code.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start" style={{ color: COLORS.text }}>
            <a
              href="https://x.com/Minhajeez"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: COLORS.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
            >
              X (Twitter)
            </a>
            <a
              href="https://github.com/sabbirahmed404"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: COLORS.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/msabbir-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: COLORS.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
            >
              LinkedIn
            </a>
            <a
              href="mailto:msa29.cse@gmail.com"
              className="transition-colors duration-200"
              style={{ color: COLORS.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (section === "projects") {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Projects
        </h2>
        <div className="space-y-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    )
  }

  if (section === "experience") {
    const experiences = [
      {
        year: "Jan 2024 - Present",
        title: "Lead Software Engineer",
        company: "Codemypixel",
        location: "Remote",
        description: [
          "• With a committed small team, I cultivate active listening and bold goal-setting, harnessing AI to fast-track iteration and produce production-grade MVP software that drives real impact",
          "• Seek opportunity to optimize engineering processes and culture. Believer in the Growth Mindset",
          "• Developed projects through pair programming and managed complex SaaS and AI agent initiatives as a Project Manager, overseeing end-to-end planning and roadmap creation for cross-functional teams",
          "• Managed client relationships & communications with professionalism, consistently achieving successful results",
        ],
      },
      {
        year: "Aug 2024 - Dec 2024",
        title: "Full-Stack Developer",
        company: "Uvoy",
        location: "Remote",
        description: "Developed and maintained a Full-stack E-commerce platform.",
      },
    ]

    // Old experiences (commented out)
    // const experiences = [
    //   {
    //     year: "2018 - Present",
    //     title: "Back-End Developer",
    //     company: "Tripian Inc.",
    //     location: "Remote (Toronto, Canada)",
    //     description: "Core team member. Backend with PHP/Python, API design, React/Vue.js frontend, AWS infrastructure.",
    //   },
    //   {
    //     year: "2016 - Present",
    //     title: "Full-Stack Developer",
    //     company: "RadKod",
    //     location: "Freelance/Open Source",
    //     description: "Founded developer collective. Flutter apps, web games, backend services. Active GitHub contributor.",
    //   },
    //   {
    //     year: "2015 - 2017",
    //     title: "Back-End Developer",
    //     company: "AvantajBizde",
    //     location: "Izmir, Turkey",
    //     description: "C2C e-commerce platform with Laravel, ORM, and domain-driven design.",
    //   },
    //   {
    //     year: "2015",
    //     title: "Back-End Developer",
    //     company: "Promega",
    //     location: "Izmir, Turkey",
    //     description: "PHP backend modules, algorithm and data structure implementation.",
    //   },
    //   {
    //     year: "2014 - 2015",
    //     title: "Back-End Developer",
    //     company: "TurkWebAjans",
    //     location: "Izmir, Turkey",
    //     description: "Client websites using classic ASP and Adobe Flash. Junior developer role.",
    //   },
    // ]

    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Experience
        </h2>

        {/* Mini Overview */}
        <div className="space-y-3 pb-2">
          <p className="text-sm" style={{ color: `${COLORS.text}CC` }}>
            <span style={{ color: COLORS.accent }} className="font-semibold">Years</span> of building scalable web applications
          </p>

          {/* Languages */}
          <div className="space-y-1">
            <p className="text-xs font-medium" style={{ color: `${COLORS.text}80` }}>
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Typescript", "Node.js", "PyTorch", "Javascript", "C", "SQL", "LaTeX"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${COLORS.accent}15`,
                    color: COLORS.accent,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-1">
            <p className="text-xs font-medium" style={{ color: `${COLORS.text}80` }}>
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {["REST API", "Github", "Supabase", "Next.js", "Vercel", "Firebase", "noSQL", "Telnyx", "OpenAI", "Stripe", "Make", "n8n", "Twilio", "Overleaf", "Cursor", "Claude", "Microsoft Graph API", "MongoDB", "Hugging Face", "Docker", "Canva"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${COLORS.accent}15`,
                    color: COLORS.accent,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="space-y-1">
            <p className="text-xs font-medium" style={{ color: `${COLORS.text}80` }}>
              Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning", "Data Analysis", "Vibe coding", "Prompt Engineering", "Model Context Protocol (MCP)", "Retrieval-Augmented Generation (RAG)", "AI Agent", "Low Code"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${COLORS.accent}15`,
                    color: COLORS.accent,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 1200px' }}>
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: COLORS.border }}
          />

          <div className="space-y-6 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS.accent }}
                />

                <div className="space-y-1">
                  <p className="text-xs font-medium" style={{ color: COLORS.accent }}>
                    {exp.year}
                  </p>
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: `${COLORS.text}CC` }}>
                    {exp.company}
                  </p>
                  <p className="text-xs" style={{ color: `${COLORS.text}80` }}>
                    {exp.location}
                  </p>
                  {Array.isArray(exp.description) ? (
                    <ul className="text-sm leading-relaxed pt-1 space-y-1" style={{ color: `${COLORS.text}99` }}>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed pt-1" style={{ color: `${COLORS.text}99` }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership and Volunteering Section */}
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl font-bold" style={{ color: COLORS.text }}>
            Leadership & Volunteering
          </h3>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ backgroundColor: COLORS.border }}
            />

            <div className="space-y-6 pl-8">
              {/* IEEE Student Branch GUB */}
              <div className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS.accent }}
                />

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                    Executive Committee Member
                  </h3>
                  <p className="text-sm font-medium" style={{ color: `${COLORS.text}CC` }}>
                    IEEE Student Branch GUB
                  </p>
                  <ul className="text-sm leading-relaxed pt-1 space-y-1" style={{ color: `${COLORS.text}99` }}>
                    <li>• Awarded IEEE Student Branch GUB chapter Best Executive of the Year</li>
                    <li>• Organized, photographed, and designed for over 25 high-profile events within a single year as a core volunteer contributor</li>
                  </ul>
                </div>
              </div>

              {/* Green University Photography Club */}
              <div className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS.accent }}
                />

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                    General Secretary
                  </h3>
                  <p className="text-sm font-medium" style={{ color: `${COLORS.text}CC` }}>
                    Green University Photography Club
                  </p>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: `${COLORS.text}99` }}>
                    My work has stretched from organizing the committee and serving as the key organizer of numerous creative events, including exhibitions, competitions, and workshops
                  </p>
                </div>
              </div>

              {/* AI Agent Hackathons and Programming Competitions */}
              <div className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS.accent }}
                />

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                    Competitions & Hackathons
                  </h3>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: `${COLORS.text}99` }}>
                    Participated in AI Agent Hackathons and Programming Competitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (section === "publication") {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Publications
        </h2>
        <div className="space-y-3">
          {publications.map((publication) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              onClick={() => onPublicationClick(publication)}
            />
          ))}
        </div>
      </div>
    )
  }

  if (section === "qualifications") {
    const certifications = [
      {
        title: "Google Data Analytics Specialization",
        date: "Feb 2024",
        provider: "Coursera, 9 course series, by Google Career Certificates",
        link: "https://www.coursera.org/account/accomplishments/specialization/E72WSQMVB35K"
      },
      {
        title: "Hugging Face AI Agents Fundamentals",
        date: "Feb 2025",
        provider: "Hugging Face",
        link: "https://cas-bridge.xethub.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/11e3162415a6d51dff5a3f71798e6938a582e686b0af0263f11696b9e50430a9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20251026%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251026T093739Z&X-Amz-Expires=3600&X-Amz-Signature=9755839edb8a84b052c802491e5f2699a1a6bd62&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=6698c4b81a3a4e51e734acfc&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-02-20.png%3B+filename%3D%222025-02-20.png%22%3B&response-content-type=image%2Fpng&x-id=GetObject&Expires=1761475059&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2MTQ3NTA1OX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82N2E0NzAzNzc0OWVhMmM0YjlmYWZkNGIvMTFlMzE2MjQxNWE2ZDUxZGZmNWEzZjcxNzk4ZTY5MzhhNTgyZTY4NmIwYWYwMjYzZjExNjk2YjllNTA0MzBhOSoifV19&Signature=WYDEaKQwzz5z1JX8xKLxnpHBjH22mI95RxIaMxu52dJ78rKnmJbUmWKluilhMwQPcvj0KTNcdE6VlVT33H-lA0D-rre2JzQLR2Hvzri8P4LNoUEosdvV7llPBM40pkpXpqUnmTn8Off%7EFRR9PMYErtVs6pb9EgoXmtqDWUcEgfx6L18X%7ELY82TfqTlcbg24J%7EiZxlDnRf387I-VDd9lhR89aMYhCSZlAxU9B2%7EePhRB3jZfRl9BKTok3nPcADnXAJxrFBN5ftdlaHrSZNNURwMimwCeb4mzxIXkef-tkdZ1rQWmhbC7%7EO3oh-IH-4WISB5r5P4E164n8EJGAZD8Kdw__&Key-Pair-Id=K2L8F4GPSG1IFC"
      },
      {
        title: "IBM PY0101EN: Python 101 for Data Science",
        date: "Aug 2023",
        provider: "IBM Cognitive Class",
        link: "https://courses.cognitiveclass.ai/certificates/528cbee0ff0d45b3bd989ac9d6825980"
      }
    ]

    return (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Qualifications
        </h2>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold" style={{ color: COLORS.text }}>
            Education
          </h3>
          <div 
            className="p-5 rounded-lg"
            style={{ backgroundColor: `${COLORS.card}80` }}
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                Green University of Bangladesh
              </h4>
              <p className="text-base font-medium" style={{ color: `${COLORS.text}CC` }}>
                BSc in Computer Science and Engineering
              </p>
              <p className="text-sm" style={{ color: COLORS.accent }}>
                Feb 2022 – Feb 2026
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold" style={{ color: COLORS.text }}>
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-lg transition-all duration-200"
                style={{ backgroundColor: `${COLORS.card}80` }}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold mb-1" style={{ color: COLORS.text }}>
                        {cert.title}
                      </h4>
                      <p className="text-sm mb-2" style={{ color: `${COLORS.text}CC` }}>
                        {cert.provider}
                      </p>
                      <p className="text-sm font-medium" style={{ color: COLORS.accent }}>
                        {cert.date}
                      </p>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-shrink-0 p-2 rounded-md transition-colors duration-200"
                      style={{ color: COLORS.accent }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${COLORS.accent}20`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                      }}
                      aria-label="View certificate"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (section === "contact") {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Get in Touch
        </h2>
        <div className="space-y-4" style={{ color: `${COLORS.text}CC` }}>
          <p className="leading-relaxed">
            I&apos;m currently available for freelance projects and consulting opportunities.
            Feel free to reach out if you&apos;d like to work together.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="mailto:msa29.cse@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 w-fit"
              style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.text
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}

// Project Card Component
function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left p-5 rounded-lg transition-all duration-200"
      style={{
        backgroundColor: `${COLORS.card}80`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.card
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${COLORS.card}80`
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3
            className="text-xl font-semibold mb-1 transition-colors duration-200"
            style={{ color: COLORS.text }}
          >
            {project.title}
          </h3>
          <p className="text-sm line-clamp-1" style={{ color: `${COLORS.text}B3` }}>
            {project.content}
          </p>
        </div>
        <ArrowRight
          className="w-5 h-5 flex-shrink-0 ml-4 transition-all duration-200 group-hover:translate-x-1"
          style={{ color: COLORS.accent }}
        />
      </div>
    </button>
  )
}

// Project Detail Component
function ProjectDetail({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 transition-colors duration-200"
        style={{ color: COLORS.text }}
        onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
        onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
      >
        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back</span>
      </button>

      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold" style={{ color: COLORS.text }}>
          {project.title}
        </h2>

        {project.status && (
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ backgroundColor: `${COLORS.accent}20` }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: COLORS.accent }}
            />
            <span className="text-sm" style={{ color: COLORS.text }}>
              Live
            </span>
          </div>
        )}
      </div>

      <p className="text-lg leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
        {project.content}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.skill.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-md"
            style={{ backgroundColor: COLORS.card, color: COLORS.text }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200"
            style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.text
            }}
          >
            <span>Visit Site</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        )}
        {project.caseStudy && (
          <a
            href={project.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200"
            style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.text
            }}
          >
            <span>Case Study</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md border transition-colors duration-200"
            style={{ borderColor: COLORS.text, color: COLORS.text }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.card
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            <FaGithub className="w-4 h-4" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  )
}

// Publication Card Component
function PublicationCard({
  publication,
  onClick,
}: {
  publication: Publication
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left p-5 rounded-lg transition-all duration-200"
      style={{
        backgroundColor: `${COLORS.card}80`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.card
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${COLORS.card}80`
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3
              className="text-xl font-semibold transition-colors duration-200"
              style={{ color: COLORS.text }}
            >
              {publication.title}
            </h3>
          </div>
          <p className="text-sm line-clamp-2 mb-2" style={{ color: `${COLORS.text}B3` }}>
            {publication.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium" style={{ color: COLORS.accent }}>
              {publication.year}
            </span>
            {publication.github && (
              <span className="text-xs" style={{ color: `${COLORS.text}80` }}>
                • GitHub Available
              </span>
            )}
          </div>
        </div>
        <ArrowRight
          className="w-5 h-5 flex-shrink-0 ml-4 transition-all duration-200 group-hover:translate-x-1"
          style={{ color: COLORS.accent }}
        />
      </div>
    </button>
  )
}

// Publication Detail Component
function PublicationDetail({
  publication,
  onBack,
}: {
  publication: Publication
  onBack: () => void
}) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 transition-colors duration-200"
        style={{ color: COLORS.text }}
        onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
        onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
      >
        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back</span>
      </button>

      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.text }}>
          {publication.title}
        </h2>

        <div className="flex items-center gap-3">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}
          >
            {publication.year}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.text }}>
            Research Summary
          </h3>
          <p className="text-base leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
            {publication.description}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.text }}>
            Impact & Innovation
          </h3>
          <p className="text-base leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
            {publication.details}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: `${COLORS.text}80` }}>
          Technologies & Methods
        </h3>
        <div className="flex flex-wrap gap-2">
          {publication.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-md"
              style={{ backgroundColor: COLORS.card, color: COLORS.text }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {publication.github && (
        <div className="pt-4">
          <a
            href={publication.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md border transition-colors duration-200"
            style={{ borderColor: COLORS.text, color: COLORS.text }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.card
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            <FaGithub className="w-4 h-4" />
            <span>View Repository</span>
          </a>
        </div>
      )}
    </div>
  )
}
