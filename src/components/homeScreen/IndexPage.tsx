import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"
import ReachOut from "../PageComponent/ReachOut"
import Writings from "../PageComponent/Writings"
import HireMe from "../PageComponent/HireMe"
import AnimatedWrapper from "@/utils/AnimatedWrapper"

const IndexPage = () => {
  return (
    <>
      <Screen>
        <div className="flex flex-col gap-5">
          <AnimatedWrapper threshold={0.5} delay={0}>
            <InfoCard />
          </AnimatedWrapper>
          <AnimatedWrapper threshold={0.5} delay={0.15}>
            <AboutMe />
          </AnimatedWrapper>
          <AnimatedWrapper threshold={0.5} delay={0.25}>
            <HireMe />
          </AnimatedWrapper>
          <AnimatedWrapper threshold={0.5} delay={0.35}>
            <Skills />
          </AnimatedWrapper>
          <Projects />
          <Writings />
          <AnimatedWrapper threshold={0.5} delay={0.45}>
            <ReachOut />
          </AnimatedWrapper>
        </div>
        <Footer />
      </Screen>
    </>
  )
}

export default IndexPage
