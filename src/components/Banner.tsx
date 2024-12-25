"use client"
import { rinkitShortName } from "@/data/RinkitData/data"
import LocalTime from "@/utils/LocalTime"
import React from "react"
import { useSwitch } from "./Context/SwitchContext"
import { gruzName } from "@/data/GruzData/data"

const Banner: React.FC = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  return (
    <section className="flex w-full items-center justify-between md:px-8 px-4 select-none">
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
      <div
        onClick={toggleSwitch}
        className=" group/ms flex gap-1 cursor-pointer border border-zinc-700 rounded-md py-1 px-1 bg-zinc-800"
      >
        Meet
        <div className="relative overflow-hidden">
          <div className=" absolute group-hover/ms:translate-x-0 translate-x-full inset-0 bg-mainWhite rounded-md transition duration-300 ease-in-out"></div>
          <span className=" relative font-semibold group-hover/ms:text-mainBlack transition duration-300 ease-in-out px-1 z-10">
            {isSwitchOn ? rinkitShortName : gruzName}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Banner
