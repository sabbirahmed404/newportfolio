"use client"
import React, { useState, useEffect } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { LuLink, LuShare } from "react-icons/lu"
import { InfoTipProjects } from "./InfoTipProjects"
import { AnimatePresence, motion } from "motion/react"

interface ProjectBoxProps {
  img: string
  status: boolean
  title: string
  content: string
  url: string
  github: string
  skill: string[]
  preview: string
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  img,
  status,
  title,
  content,
  url,
  github,
  skill,
  preview,
}) => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".project-box")) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <div className="project-box bg-zinc-900 hover:bg-zinc-800/75 transition-colors duration-100 border border-zinc-700 rounded-md">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.3 }}
            className=" overflow-hidden"
          >
            <div className="p-2">
              <video className="rounded-md w-full" loop autoPlay controls>
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex md:flex-row flex-col gap-3 p-2">
        {/* Rest of the component remains the same */}
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer basis-[22%] p-1 select-none"
        >
          <img
            className="rounded-md md:h-[130px] h-[200px] w-full object-cover"
            src={img}
            alt="Project Image"
          />
        </div>
        <div className="basis-[78%] flex flex-col md:gap-0 gap-1">
          <div className="flex justify-between items-center">
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer flex gap-2 items-center truncate"
            >
              <h1 className="text-2xl font-semibold">{title}</h1>
              {status ? (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-400/10 text-green-400">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Live
                </div>
              ) : (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-red-400/10 text-red-400">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Building
                </div>
              )}
            </div>
            <div className="select-none flex gap-2 px-2 text-base">
              {show ? (
                <InfoTipProjects text="Close">
                  <a
                    onClick={() => setShow((prev) => !prev)}
                    target="_blank"
                    className="cursor-pointer hover:text-zinc-400 transition-colors duration-100"
                  >
                    <FaEyeSlash />
                  </a>
                </InfoTipProjects>
              ) : (
                <InfoTipProjects text="Preview">
                  <a
                    onClick={() => setShow((prev) => !prev)}
                    target="_blank"
                    className="cursor-pointer hover:text-zinc-400 transition-colors duration-100"
                  >
                    <FaEye />
                  </a>
                </InfoTipProjects>
              )}
              {url && (
                <InfoTipProjects text="Live">
                  <a
                    target="_blank"
                    className="hover:text-zinc-400 transition-colors duration-100"
                    href={url}
                  >
                    <LuLink />
                  </a>
                </InfoTipProjects>
              )}
              <InfoTipProjects text="Github">
                <a
                  target="_blank"
                  className="hover:text-zinc-400 transition-colors duration-100"
                  href={github}
                >
                  <FiGithub />
                </a>
              </InfoTipProjects>
            </div>
          </div>
          <p
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer opacity-80"
          >
            {content}
          </p>
        </div>
        <div className="md:hidden flex flex-wrap gap-1.5 select-none">
          {skill.map((skill, index) => (
            <p
              key={index}
              className="border border-zinc-700 px-2 py-0.5 rounded-md text-sm"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.3 }}
            className=" overflow-hidden"
          >
            <div className="flex border-t border-zinc-700 w-[97%] mt-3 md:mt-0 mx-auto" />
            <div className="flex md:justify-between justify-end items-center md:py-2 py-3 px-3 transition-all duration-100">
              <div className="hidden md:flex flex-wrap gap-1.5 select-none">
                {skill.map((skill, index) => (
                  <p
                    key={index}
                    className="border border-zinc-700 px-2 py-0.5 rounded-md text-sm"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 items-center md:px-2 px-2.5 md:text-lg text-xl">
                <div
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100"
                  onClick={() => navigator.share({ url: url ? url : github })}
                >
                  <LuShare />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectBox
