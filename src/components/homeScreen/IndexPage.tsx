"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimation, Variant } from "framer-motion"
import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"
import ReachOut from "../PageComponent/ReachOut"
import Writings from "../PageComponent/Writings"
import HireMe from "../PageComponent/HireMe"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay: number
  className?: string
}

// Custom hook for intersection observer
const useInView = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useRef(false)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation once
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true
          controls.start("visible")
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return { ref, controls }
}

// Animation variants
const variants = {
  hidden: { opacity: 0, y: -30 } as Variant,
  visible: { opacity: 1, y: 0 } as Variant,
}

export const AnimatedSection = ({
  children,
  delay,
  className = "",
}: AnimatedSectionProps) => {
  const { ref, controls } = useInView()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const IndexPage = () => {
  return (
    <Screen>
      <div className="flex flex-col gap-5">
        <AnimatedSection delay={0}>
          <InfoCard />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <AboutMe />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <HireMe />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <Writings />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <ReachOut />
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.7}>
        <Footer />
      </AnimatedSection>
    </Screen>
  )
}

export default IndexPage
