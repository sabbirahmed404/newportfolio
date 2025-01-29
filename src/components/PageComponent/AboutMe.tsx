"use client"
import { gruzAbout } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { rinkitAbout, rinkitMoreAbout } from "@/data/RinkitData/data"
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

const AboutMe = () => {
  const { isSwitchOn } = useSwitch()
  const [click, setClick] = useState(false)

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: isSwitchOn
              ? gruzAbout
              : click
              ? rinkitMoreAbout
              : rinkitAbout,
          }}
          className="flex flex-col gap-1"
        />
        {!isSwitchOn && (
          <div
            onClick={() => setClick((prev) => !prev)}
            className=" w-fit group opacity-70 hover:opacity-100  flex items-center gap-1 transition-all duration-100 cursor-pointer"
          >
            <span>{click ? "Show less about me" : "Show more about me"}</span>
            <span className="group-hover:-rotate-45 transform transition-all duration-100">
              <BsArrowRight />
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

export default AboutMe
