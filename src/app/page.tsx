import Banner from "@/components/Banner"
import InfoCard from "@/components/InfoCard"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"

const Home = () => {
  return (
    <>
      <MainScreen>
        <Banner />
        <Screen>
          <InfoCard />
        </Screen>
      </MainScreen>
    </>
  )
}

export default Home
