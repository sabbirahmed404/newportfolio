import LocalTime from "@/utils/LocalTime"
import React from "react"

const Banner: React.FC = () => {
  return (
    <section className="flex w-full items-center justify-between px-8 select-none">
      <a
        href="https://www.google.com/search?q=time"
        target="_blank"
        className=" flex gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium"
      >
        <span>Local time</span>
        <div className=" text-sm">
          <LocalTime />
        </div>
      </a>
    </section>
  )
}

export default Banner
