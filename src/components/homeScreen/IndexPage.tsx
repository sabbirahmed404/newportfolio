import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"
import ReachOut from "../PageComponent/ReachOut"
import Blog from "../PageComponent/Blog"

const IndexPage = () => {
  return (
    <>
      <Screen>
        <div className="flex flex-col gap-5 ">
          <InfoCard />
          <AboutMe />
          <Skills />
          <Projects />
          <Blog />
          <ReachOut />
        </div>
        <Footer />
      </Screen>
    </>
  )
}

export default IndexPage
