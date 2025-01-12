"use client"
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
import { useSwitch } from "../Context/SwitchContext"

const IndexPage = () => {
  const { isSwitchOn } = useSwitch()

  return (
    <>
      <Screen>
        <div className="flex flex-col gap-5">
          <AnimatedWrapper delay={0.15}>
            <InfoCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.25}>
            <AboutMe />
          </AnimatedWrapper>
          {isSwitchOn ? (
            <></>
          ) : (
            <AnimatedWrapper delay={0.35}>
              <HireMe />
            </AnimatedWrapper>
          )}
          <AnimatedWrapper delay={0.45}>
            <Skills />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.55}>
            <Projects />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.65}>
            <Writings />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.75}>
            <ReachOut />
          </AnimatedWrapper>
        </div>
        <AnimatedWrapper delay={0.85}>
          <Footer />
        </AnimatedWrapper>
      </Screen>
    </>
  )
}

export default IndexPage
