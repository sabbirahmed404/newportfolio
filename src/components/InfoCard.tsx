import { gruzBio, gruzImage, gruzLink, gruzName } from "@/data/GruzData/data"
import React from "react"
const InfoCard: React.FC = () => {
  return (
    <section className=" py-10">
      <div className=" flex gap-3 items-center">
        <div className=" select-none">
          <img src={gruzImage} alt="Profile Picture" className="pro-pic" />
        </div>
        <div className=" flex flex-col gap-1.5">
          <h1 className=" head-name ">{gruzName}</h1>
          <p className="">{gruzBio}</p>
          <div className=" flex flex-wrap gap-1.5">
            {gruzLink.map((link) => (
              <a
                className="social-card"
                key={link.name}
                href={link.link}
                target="_blank"
              >
                {<link.icon />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoCard
