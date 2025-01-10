import Banner from "@/components/PageComponent/Banner"
import { SwitchProvider } from "@/components/Context/SwitchContext"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import { TitleUpdater } from "@/utils/TitleUpdater"

const Home = () => {
  return (
    <SwitchProvider>
      <MainScreen>
        <TitleUpdater />
        <Banner />
        <IndexPage />
      </MainScreen>
    </SwitchProvider>
  )
}

export default Home

// export const metadata: Metadata = {
//   openGraph: {
//     url: "therinkit.online",
//     siteName: "Portfolio Website",
//     images: [
//       getCldOgImageUrl({
//         src: `my-store_t4rgo2`,
//       }),
//     ],
//   },
// }
