import { gruzSkills } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"

const Skills = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title="Skills & Tools" />
      <div className=" flex flex-wrap gap-1.5">
        {gruzSkills.map((skill) => (
          <a key={skill.id} className="skills-card">
            <skill.icon />
            {skill.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Skills
