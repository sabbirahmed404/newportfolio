import { gruzAbout } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"

const Skills = () => {
  return (
    <div className="flex flex-col gap-0.5">
      <SectionTitle title="Skills & Tools" />
      {gruzAbout}
    </div>
  )
}

export default Skills
