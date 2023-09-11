"use client"

import { useState, useEffect } from "react"

const easeOutQuad = (t: number) => t * (2 - t)

// Assume a standard 60Hz display
const FRAME_DURATION = 1000 / 60

export const useCountUp = ({
  target,
  duration,
}: {
  target: number
  duration: number
}) => {
  const [value, setValue] = useState<number>(0)

  // TODO: totalUpdates
  const totalFrames = Math.round(duration / FRAME_DURATION)

  useEffect(() => {
    let frame = 0

    const counter: ReturnType<typeof setInterval> = setInterval(() => {
      frame += 1

      const progress = easeOutQuad(frame / totalFrames)

      setValue(progress * target)

      // Ensure new value does not overshoot the target
      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, FRAME_DURATION)
  }, [target, duration, totalFrames])

  return Math.floor(value)
}
