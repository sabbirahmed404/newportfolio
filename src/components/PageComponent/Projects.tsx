"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 2)
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className=" flex flex-col gap-2">
        {visibleProjects.map((project) => (
          <ProjectBox
            key={project.id}
            title={project.title}
            img={project.img}
            content={project.content}
            status={project.status}
            skill={project.skill}
            url={project.url || ""}
            github={project.github}
            preview={project.preview}
            remove={project.remove}
          />
        ))}
      </div>
      <div>
        <button
          className=" showMore-btn "
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? (
            <div className="flex gap-0.5 justify-center items-center">
              <div className=" animate-pulse">
                <MdKeyboardDoubleArrowUp />
              </div>
              Show less
            </div>
          ) : (
            <div className="flex gap-0.5 justify-center items-center">
              <div className=" animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </div>
              Show all
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Projects
