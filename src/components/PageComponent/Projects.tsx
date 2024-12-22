import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"

const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className=" flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectBox
            key={project.id}
            title={project.title}
            img={project.img}
            content={project.content}
            status={project.status}
            skill={project.skill}
            url={project.url}
            github={project.github}
            preview={project.preview}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
