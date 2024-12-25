import { gruzAbout } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      {gruzAbout}
    </section>
  )
}

export default AboutMe
