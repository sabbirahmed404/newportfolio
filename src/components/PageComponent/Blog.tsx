import React from "react"
import SectionTitle from "../SectionTitle"
import BlogBox from "../BlogBox"

const Blog = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionTitle title="Blogs" />
      <BlogBox />
    </section>
  )
}

export default Blog
