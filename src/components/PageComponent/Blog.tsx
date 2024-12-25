"use client"
import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import BlogBox from "../BlogBox"
import { writings } from "@/data/Common/data"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"

const Blog = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleWritings = showAll ? writings : writings.slice(0, 2)
  return (
    <section className="flex flex-col gap-3">
      <SectionTitle title="Writings" />
      <div className=" flex flex-col gap-2">
        {visibleWritings.map((writings) => (
          <BlogBox
            key={writings.id}
            img={writings.img}
            head={writings.head}
            des={writings.des}
          />
        ))}
      </div>
      <button
        className=" showMore-btn "
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

export default Blog
