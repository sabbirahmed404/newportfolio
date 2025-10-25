"use client"
import { useSwitch } from "@/components/Context/SwitchContext"
import { useEffect } from "react"

export const TitleUpdater = () => {
  const { isSwitchOn } = useSwitch()

  useEffect(() => {
    document.title = isSwitchOn ? "Sabbir Ahmed" : "Abdullah Bozdag"
  }, [isSwitchOn])

  return null
}
