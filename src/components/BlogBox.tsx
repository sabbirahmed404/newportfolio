import React from "react"

const BlogBox = () => {
  return (
    <div className=" blog-post flex  items-center gap-2">
      <img
        className="size-[68px] object-cover select-none rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Q3Hv7-rg8dfuKPn-r79jjVJEQaeg7g17mA&s"
        alt="Profile Picture"
      />
      <div className="flex flex-col ">
        <h1>
          A Step-by-Step Guide to Advanced Task Scheduling using Celery Beat and
          Django
        </h1>
        <p className=" text-sm text-zinc-400">
          Let me take you back to when the world seemed upside down during the
          late 2020s, with the coronavirus causing chaos everywhere. At 17, I
          dipped my toes into the world of coding
        </p>
      </div>
    </div>
  )
}

export default BlogBox
