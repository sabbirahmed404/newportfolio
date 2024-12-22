import AboutMe from "../PageComponent/AboutMe"
import InfoCard from "../PageComponent/InfoCard"
import Skills from "../PageComponent/Skills"

const IndexPage = () => {
  return (
    <div className="flex flex-col gap-5 py-10">
      <InfoCard />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default IndexPage
