"use client"

import { useRef, useEffect } from "react"
import { sanitize } from "isomorphic-dompurify"
import { useInView } from "framer-motion"

// Types
import { Item as Props } from "./types"

// Utils
import { useCountUp } from "@utils/hooks/useCountUp"

// Styles
import * as S from "./styles"

// Animation
import { itemMotionProps } from "./animation"

// Setup
const COUNT_DURATION = 2000

const FactItem: React.FC<Props> = ({ amount, description }) => {
  const isInitialRender = useRef<boolean>(true)
  const wrapperRef = useRef<HTMLLIElement | null>(null)

  const isInView = useInView(wrapperRef, { once: true })

  const countValue = useCountUp({
    isInView,
    target: amount.value,
    duration: COUNT_DURATION,
  })

  /**
   * Ensure hydrated value is the same on both server and client
   */
  const finalAmountValue = isInitialRender.current ? amount.value : countValue

  // Hooks
  useEffect(() => {
    isInitialRender.current = false
  }, [isInitialRender])

  return (
    <S.Item ref={wrapperRef} {...itemMotionProps}>
      <S.ItemAmount>
        {amount.prefix}
        {finalAmountValue.toLocaleString("en-NL")}
        {amount.suffix}
      </S.ItemAmount>
      <S.ItemDescription
        dangerouslySetInnerHTML={{ __html: sanitize(description) }}
      />
    </S.Item>
  )
}

export default FactItem
