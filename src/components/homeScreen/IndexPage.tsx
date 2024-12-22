import AboutMe from "../PageComponent/AboutMe"
import DaysICode from "../PageComponent/DaysICode"
import InfoCard from "../PageComponent/InfoCard"
import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"

const IndexPage = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <InfoCard />
      <AboutMe />
      <Skills />
      <Projects />
      <DaysICode />
    </div>
  )
}

export default IndexPage
