"use client"
import { rinkitShortName } from "@/data/RinkitData/data"
import React, { useState, useEffect } from "react"
import { useSwitch } from "../Context/SwitchContext"
import { gruzName } from "@/data/GruzData/data"
import LocalTime from "@/utils/LocalTime"
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { AnimatePresence, motion } from "motion/react"

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
          {isSwitchOn && (
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer border border-zinc-700 rounded-md p-2 bg-zinc-800 banner-button"
            >
              {open ? <FaHeart /> : <FaRegHeart />}
            </button>
          )}

          <div
            onClick={() => {
              toggleSwitch()
            }}
            className="group/ms  flex gap-1 justify-center cursor-pointer border border-zinc-700 rounded-md py-1 px-1.5  bg-zinc-800"
          >
            Meet
            <div className="relative  w-[50px] flex justify-center overflow-hidden">
              <div className=" absolute group-hover/ms:translate-x-0 translate-x-full inset-0 bg-mainWhite rounded-md transition duration-300 ease-in-out"></div>
              <span className=" relative font-semibold group-hover/ms:text-mainBlack transition duration-300 ease-in-out px-1 z-10">
                {isSwitchOn ? rinkitShortName : gruzName}
              </span>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className=" overflow-hidden bg-zinc-800 absolute flex flex-col gap-0.5 right-8 mt-2.5 border border-zinc-700 p-2 items-center rounded-md w-[150px]"
          >
            {list.map((list) => (
              <a
                className="w-full  text-center rounded-md cursor-pointer p-1 hover:bg-zinc-900 transition duration-100"
                key={list.id}
              >
                {list.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Banner
