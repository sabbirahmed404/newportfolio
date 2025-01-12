"use client"

import React from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  threshold?: number
  once?: boolean
}

const AnimatedWrapper = ({
  children,
  delay = 0,
  threshold = 0.2,
  once = true,
}: AnimatedWrapperProps) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once: once,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{
        duration: 0.35,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
