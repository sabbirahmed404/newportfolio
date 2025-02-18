import { gruzImage } from "@/data/GruzData/data"
import { useSwitch } from "../Context/SwitchContext"
import { rinkitImage } from "@/data/RinkitData/data"
import Image from "next/image"
import { navLinks } from "@/data/Common/data"
import { InfoTipNav } from "../InfoTipNav"

const Nav = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
      <div className="bg-mainBlack border border-zinc-700 px-3 py-2 rounded-xl flex items-center gap-3">
        <div className=" flex gap-4 items-center">
          {navLinks.map((nav) => (
            <InfoTipNav key={nav.id} text={nav.name}>
              <a target="_blank" className=" " href={nav.link}>
                {<nav.icon />}
              </a>
            </InfoTipNav>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-zinc-500  mr-1"></div>
        <div
          className="rounded-md md:hover:brightness-75 transition duration-200 cursor-pointer"
          onClick={toggleSwitch}
        >
          <Image
            src={isSwitchOn ? rinkitImage : gruzImage}
            alt="Profile Picture"
            className="rounded-md"
            width={35}
            height={35}
            // title={isSwitchOn ? rinkitShortName : gruzName}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
