import React from "react"
interface BlogBoxProps {
  img: string
  head: string
  des: string
}

const BlogBox: React.FC<BlogBoxProps> = ({ img, head, des }) => {
  return (
    <div className=" blog-post flex  items-center gap-2">
      <img
        className="size-[68px] object-cover select-none rounded-md"
        src={img}
        alt="Profile Picture"
      />
      <div className="flex flex-col ">
        <h1>{head}</h1>
        <p className=" text-sm text-zinc-400">{des}</p>
      </div>
    </div>
  )
}

export default BlogBox
