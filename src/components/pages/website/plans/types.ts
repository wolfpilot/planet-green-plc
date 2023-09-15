import { ImageProps } from "next/image"

export interface Item {
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
