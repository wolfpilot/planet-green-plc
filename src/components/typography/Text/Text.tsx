import React from "react"

// Styles
import * as S from "./styles"

export type TextSizes = "XS" | "S" | "M" | "L"

interface IProps {
  className?: string
  children: React.ReactNode
  size?: TextSizes
}

const Text: React.FC<IProps> = ({ className, children, size = "S" }) => (
  <S.Wrapper size={size} className={className}>
    {children}
  </S.Wrapper>
)

export default Text
