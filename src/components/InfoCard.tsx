import { gruzBio, gruzImage, gruzLink, gruzName } from "@/data/GruzData/data"
import Image from "next/image"
import React from "react"
const InfoCard: React.FC = () => {
  return (
    <section>
      <div className=" flex gap-1">
        <div>
          <Image
            src={gruzImage}
            alt="Profile Picture"
            width={100}
            height={100}
          />
        </div>
        <div className=" flex flex-col gap">
          <h1>{gruzName}</h1>
          <p>{gruzBio}</p>
          <div className=" flex flex-wrap gap-1">
            {gruzLink.map((link) => (
              <a href={link.link} target="_blank" key={link.name}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoCard
