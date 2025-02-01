import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const StarButton = () => {
  return (
    <motion.a
      href="https://github.com/rinkitadhana/Switchfolio"
      target="_blank"
      initial={{ width: "40px" }}
      whileHover={{
        width: "160px",
        transition: { duration: 0.3 },
      }}
      className=" group hidden md:flex items-center gap-2 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded-md text-white cursor-pointer overflow-hidden"
    >
      <Star
        className="min-w-6 h-5 group-hover:fill-yellow-400 group-hover:text-yellow-400"
        strokeWidth={1.5}
      />
      <span className="font-medium whitespace-nowrap">Star on GitHub</span>
    </motion.a>
  )
}

export default StarButton
