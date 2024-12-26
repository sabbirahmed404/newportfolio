"use client"
import { gruzFooterLink, gruzName } from "@/data/GruzData/data"
import { useSwitch } from "../Context/SwitchContext"
import { rinkitFooterLink, rinkitShortName } from "@/data/RinkitData/data"

const Footer = () => {
  const { isSwitchOn } = useSwitch()
  const footerLinks = isSwitchOn ? gruzFooterLink : rinkitFooterLink
  return (
    <footer>
      <div className=" border-t border-zinc-700 my-6" />
      <div className=" flex flex-col gap-2.5 items-center">
        <div className=" flex flex-wrap gap-2 md:gap-4 items-center md:text-base text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              className=" select-none hover:text-zinc-400 flex gap-1 items-center"
              target="_blank"
              href={link.link}
            >
              <link.icon /> {link.name}
            </a>
          ))}
        </div>
        <p className="text-sm">
          © 2024 {isSwitchOn ? gruzName : rinkitShortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
