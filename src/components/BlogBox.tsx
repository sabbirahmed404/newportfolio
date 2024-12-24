import { gruzImage } from "@/data/GruzData/data"
import React from "react"

const BlogBox = () => {
  return (
    <div className=" blog-post flex  items-center gap-2">
      <img
        className="size-16 rounded-md"
        src={gruzImage}
        alt="Profile Picture"
      />
      <div className="flex flex-col ">
        <h1>
          A Step-by-Step Guide to Advanced Task Scheduling using Celery Beat and
          Django
        </h1>
        <p className=" text-xs text-zinc-400">
          Let me take you back to when the world seemed upside down during the
          late 2020s, with the coronavirus causing chaos everywhere. At 17, I
          dipped my toes into the world of coding
        </p>
      </div>
    </div>
  )
}

export default BlogBox
