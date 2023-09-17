import { ImageProps } from "next/image"

export type Plan = "fix" | "eol" | "sol"

export interface Item {
  id: Plan
  cost: {
    value: number
    unit: string
  }
  title: string
  description: string
  isHighlighted?: boolean
}

export interface Props {
  title: string
  description: string
  items: Item[]
  footnote?: string
  bgImage: ImageProps
}
