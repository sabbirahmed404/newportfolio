"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

const AnimatedReveal = ({
  children,
  delay = 0,
  duration = 0.5,
}: AnimatedRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedReveal
