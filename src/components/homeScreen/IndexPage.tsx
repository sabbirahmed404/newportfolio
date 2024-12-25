import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"
import ReachOut from "../PageComponent/ReachOut"
import Writings from "../PageComponent/Writings"

const IndexPage = () => {
  return (
    <>
      <Screen>
        <div className="flex flex-col gap-5 ">
          <InfoCard />
          <AboutMe />
          <Skills />
          <Projects />
          <Writings />
          <ReachOut />
        </div>
        <Footer />
      </Screen>
    </>
  )
}

export default IndexPage
