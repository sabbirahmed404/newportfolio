"use client"
import { useEffect } from "react"

export const TitleUpdater = () => {
  useEffect(() => {
    document.title = "Sabbir Ahmed"
  }, [])

  return null
}
