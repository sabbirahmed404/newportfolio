"use client"
import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import { writings } from "@/data/Common/data"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import WritingsBox from "../WritingsBox"
import StillWorking from "../StillWorking"

const Writings = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleWritings = showAll ? writings : writings.slice(0, 2)
  return (
    <section className="flex flex-col gap-3">
      <SectionTitle title="Writings" />
      <StillWorking />
      <div className=" hidden flex-col gap-2">
        {visibleWritings.map((writings) => (
          <WritingsBox
            key={writings.id}
            img={writings.img}
            head={writings.head}
            des={writings.des}
          />
        ))}
      </div>
      <button
        className=" hidden showMore-btn "
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? (
          <div className="flex gap-0.5 justify-center items-center">
            <div className=" animate-pulse">
              <MdKeyboardDoubleArrowUp />
            </div>
            Show less
          </div>
        ) : (
          <div className="flex gap-0.5 justify-center items-center">
            <div className=" animate-pulse">
              <MdKeyboardDoubleArrowDown />
            </div>
            Show all
          </div>
        )}
      </button>
    </section>
  )
}

export default Writings
