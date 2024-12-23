import Banner from "@/components/Banner"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"

const Home = () => {
  return (
    <>
      <MainScreen>
        <Banner />

        <IndexPage />
      </MainScreen>
    </>
  )
}

export default Home
