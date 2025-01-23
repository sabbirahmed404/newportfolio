"use client"
import { rinkitShortName } from "@/data/RinkitData/data"
import React, { useState, useEffect } from "react"
import { useSwitch } from "../Context/SwitchContext"
import { gruzName } from "@/data/GruzData/data"
import LocalTime from "@/utils/LocalTime"
import { FaRegStar, FaStar } from "react-icons/fa6"

const Banner: React.FC = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".banner-button")) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  const list = [
    {
      id: 1,
      name: "Gruz",
    },
    {
      id: 2,
      name: "Rinkit",
    },
    {
      id: 3,
      name: "Chinese",
    },
    {
      id: 4,
      name: "Chumui",
    },
  ]

  return (
    <>
      <section className="flex w-full items-center justify-between md:px-8 px-4 select-none">
        <a
          href="https://www.google.com/search?q=time"
          target="_blank"
          className="  flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium"
        >
          <span className=" hidden md:block">Local time</span>
          <span className=" md:hidden block">LT</span>
          <span className="md:text-sm text-base">
            <LocalTime />
          </span>
        </a>
        <div className=" flex gap-2.5 items-center">
          <a
            href="https://github.com/rinkitadhana/Switchfolio"
            target="_blank"
            className="  flex gap-2 items-center group cursor-pointer border border-zinc-700 rounded-md px-2 py-1.5 bg-zinc-800 banner-button"
          >
            <span className="text-lg md:group-hover:hidden">
              <FaRegStar />
            </span>

            <span className="text-lg hidden md:group-hover:block text-yellow-400">
              <FaStar />
            </span>

            <span className=" text-sm font-medium hidden md:group-hover:block">
              Star on GitHub
            </span>
          </a>

          <div
            onClick={() => {
              toggleSwitch()
            }}
            className="group/ms flex gap-1 justify-center cursor-pointer border border-zinc-700 rounded-md py-1 px-1.5  bg-zinc-800"
          >
            Meet
            <div className="relative  w-[50px] flex justify-center overflow-hidden">
              <div className=" absolute md:group-hover/ms:translate-x-0 md:translate-x-full translate-x-0 inset-0 bg-mainWhite rounded-md transition duration-300 ease-in-out"></div>
              <span className=" relative font-semibold md:group-hover/ms:text-mainBlack md:text-white text-mainBlack transition-all duration-300 ease-in-out px-1 z-10">
                {isSwitchOn ? rinkitShortName : gruzName}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
