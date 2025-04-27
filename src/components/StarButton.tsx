import React from "react"

const StarButton = () => {
  return (
    <a
      className=" hover:underline text-white/75 hover:text-yellow-400 font-medium"
      target="_blank"
      href="https://github.com/rinkitadhana/Switchfolio"
    >
      <span className="hidden md:block text-sm">Star on GitHub</span>
      <span className="md:hidden">Star</span>
    </a>
  )
}

export default StarButton
