import Banner from "@/components/Banner"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"

const Home = () => {
  return (
    <>
      <MainScreen>
        <Banner />
        <Screen>
          <div>Home Page</div>
        </Screen>
      </MainScreen>
    </>
  )
}

export default Home
