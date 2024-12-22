import { gruzAbout } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      {gruzAbout}
    </div>
  )
}

export default AboutMe
