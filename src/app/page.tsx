import Banner from "@/components/Banner"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"

const Home = () => {
  return (
    <>
      <MainScreen>
        <Banner />
        <Screen>
          <IndexPage />
        </Screen>
      </MainScreen>
    </>
  )
}

export default Home
