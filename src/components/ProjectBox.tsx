"use client"
import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { LuLink, LuShare } from "react-icons/lu"
import { InfoTipProjects } from "./InfoTipProjects"
import { RxShare2 } from "react-icons/rx"
import { CiShare1 } from "react-icons/ci"
import { FaRegHeart, FaRegShareFromSquare } from "react-icons/fa6"

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

  return (
    <section className="group/show">
      <div className=" bg-zinc-900 border border-zinc-700 rounded-md">
        {show && (
          <div className="p-2">
            <video className=" rounded-md" width="900" controls>
              <source src={preview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className=" flex flex-row gap-3 p-3">
          <div className=" basis-1/3  select-none ">
            <img
              className="rounded-md h-[140px] w-full object-cover "
              src="https://media.licdn.com/dms/image/D4E12AQH8RK6Rn-O4Mg/article-cover_image-shrink_720_1280/0/1683802599512?e=2147483647&v=beta&t=BBGU2Gpv_wm2-S_UJSf9W_X8UMVcnxdGKYnd_qVPPlc"
            />
          </div>
          <div className=" basis-2/3 ">
            <div className=" flex justify-between items-center">
              <div className=" flex gap-2 items-center">
                <h1 className=" text-2xl font-semibold">{title}</h1>
                {status ? (
                  <div className="select-none font-medium text-xs w-fit   px-1.5 py-0.5 gap-0.5 rounded-md flex  items-center bg-green-400/10 text-green-400">
                    <span className="animate-pulse">
                      <GoDotFill />
                    </span>
                    Live
                  </div>
                ) : (
                  <div className="select-none font-medium text-xs w-fit   px-1.5 py-0.5 gap-0.5 rounded-md flex  items-center bg-red-400/10 text-red-400">
                    <span className="animate-pulse">
                      <GoDotFill />
                    </span>
                    Building
                  </div>
                )}
              </div>
              <div className=" select-none flex gap-2 px-2">
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

                <InfoTipProjects text="Live">
                  <a
                    target="_blank"
                    className="hover:text-zinc-400 transition-colors duration-100"
                    href={url}
                  >
                    <LuLink />
                  </a>
                </InfoTipProjects>
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
            <p>{content}</p>
          </div>
        </div>

        <div className="hidden group-hover/show:flex border-t border-zinc-700 w-[97%] my-1 mx-auto" />
        <div className="   hidden group-hover/show:flex justify-between items-center p-3 transition-all duration-100">
          <div className="flex flex-wrap gap-1.5 select-none">
            {skill.map((skill, index) => (
              <p
                key={index}
                className=" border border-zinc-700 px-2 py-0.5  rounded-md text-sm"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className=" flex gap-3 items-center px-2 text-lg ">
            <InfoTipProjects text="Like">
              <div className=" cursor-pointer">
                <FaRegHeart />
              </div>
            </InfoTipProjects>
            <InfoTipProjects text="Share">
              <div className=" cursor-pointer ">
                <LuShare />
              </div>
            </InfoTipProjects>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBox
