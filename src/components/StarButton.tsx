import React, { useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa6"

const StarButton = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(true)
  }
  return (
    <a
      className="px-3 py-1.5 border border-zinc-700 hidden md:flex items-center gap-2 rounded-[9px] bg-zinc-900 hover:bg-zinc-900/60 transition-all duration-200"
      target="_blank"
      onClick={handleClick}
      href="https://github.com/rinkitadhana/Switchfolio"
    >
      {click ? (
        <FaStar className="size-[17px] text-yellow-300" />
      ) : (
        <FaRegStar className="size-[17px]" />
      )}

      <span className="text-sm">{click ? "Starred" : "Star"}</span>
      <span className="bg-zinc-800 rounded-xl px-3 py-0.5 text-xs font-medium">
        {click ? "15" : "14"}
      </span>
    </a>
  )
}

export default StarButton
