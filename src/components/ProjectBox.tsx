import React from "react"
import { FaEye } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { LuLink } from "react-icons/lu"
import { InfoTipProjects } from "./InfoTipProjects"

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
  return (
    <div className=" flex flex-row bg-zinc-900 border border-zinc-700 rounded-md break-all">
      <div className=" basis-2/5 p-2 select-none ">
        <img
          className="rounded-md h-[160px] w-full object-cover "
          src="https://media.licdn.com/dms/image/D4E12AQH8RK6Rn-O4Mg/article-cover_image-shrink_720_1280/0/1683802599512?e=2147483647&v=beta&t=BBGU2Gpv_wm2-S_UJSf9W_X8UMVcnxdGKYnd_qVPPlc"
        />
      </div>
      <div className=" basis-3/5 p-2">
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
            <InfoTipProjects text="Preview">
              <a
                target="_blank"
                className="hover:text-zinc-500 transition-colors duration-100"
                href={preview}
              >
                <FaEye />
              </a>
            </InfoTipProjects>
            <InfoTipProjects text="Live">
              <a
                target="_blank"
                className="hover:text-zinc-500 transition-colors duration-100"
                href={url}
              >
                <LuLink />
              </a>
            </InfoTipProjects>
            <InfoTipProjects text="Github">
              <a
                target="_blank"
                className="hover:text-zinc-500 transition-colors duration-100"
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
  )
}

export default ProjectBox
