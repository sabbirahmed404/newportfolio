"use client"
import { gruzBio, gruzImage, gruzLink, gruzName } from "@/data/GruzData/data"
import React from "react"
import { InfoTip } from "../InfoTip"
import Available from "../Available"
import { useSwitch } from "../Context/SwitchContext"
import { rinkitBio, rinkitImage, rinkitLink, rinkitName } from "@/data/RinkitData/data"
const InfoCard: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const socialLink = isSwitchOn ? gruzLink : rinkitLink
  return (
    <section>
      <div className=" flex flex-col gap-2">
        <div className=" block md:hidden">
          <Available text="Available" />
        </div>

        <div className=" flex gap-3 items-center">
          <div className="select-none w-1/3 md:w-auto">
            <img
              src={isSwitchOn ? gruzImage : rinkitImage}
              alt="Profile Picture"
              className="pro-pic"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h1 className=" head-name ">
                {isSwitchOn ? gruzName : rinkitName}
              </h1>
              <div className=" md:block hidden">
                <Available text="Available" />
              </div>
            </div>
            <p>{isSwitchOn ? gruzBio :rinkitBio }</p>
            <div className="flex flex-wrap gap-1.5">
              {socialLink.map((link) => (
                <InfoTip key={link.id} text={link.name}>
                  <a className="social-card" href={link.link} target="_blank">
                    {<link.icon />}
                  </a>
                </InfoTip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoCard
