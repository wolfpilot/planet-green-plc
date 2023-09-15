"use client"

import { useState, useEffect, useRef } from "react"

// Utils
import { easeOutQuad } from "@utils/animation"

export interface Props {
  isInView: boolean
  target: number
  duration: number
}

export const useCountUp = ({ isInView, target, duration }: Props) => {
  const startTime = useRef<number | undefined>()
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    if (!isInView) return

    const tick = (timestamp: number) => {
      // Assign start time on first call
      if (!startTime.current) {
        startTime.current = timestamp
      }

      const elapsed = timestamp - startTime.current
      const progress = easeOutQuad(elapsed / duration)

      setValue(progress * target)

      elapsed < duration
        ? // Loop
          window.requestAnimationFrame(tick)
        : // Default to final value
          setValue(target)
    }

    window.requestAnimationFrame(tick)
  }, [isInView, target, duration])

  return Math.floor(value)
}
