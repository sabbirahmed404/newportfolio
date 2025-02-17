import { gruzImage, gruzName } from "@/data/GruzData/data"
import { useSwitch } from "../Context/SwitchContext"
import { rinkitImage, rinkitShortName } from "@/data/RinkitData/data"
import Image from "next/image"
import { navLinks } from "@/data/Common/data"

const Nav = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
      <div className="bg-mainBlack border border-zinc-700 px-3 py-2 rounded-xl flex items-center gap-3">
        <div className=" flex gap-0.5 items-center">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              title={nav.name}
              target="_blank"
              className="  p-2 hover:bg-zinc-800 transition duration-100 rounded-md"
              href={nav.link}
            >
              {<nav.icon />}
            </a>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-zinc-500  mr-1"></div>
        <div
          className="rounded-md hover:brightness-75 cursor-pointer"
          onClick={toggleSwitch}
        >
          <Image
            src={isSwitchOn ? rinkitImage : gruzImage}
            alt="Profile Picture"
            className="rounded-md"
            width={35}
            height={35}
            title={isSwitchOn ? rinkitShortName : gruzName}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
