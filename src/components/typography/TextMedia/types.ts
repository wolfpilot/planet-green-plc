import { ImageProps } from "next/image"

// Types
import { Props as SectionProps } from "@components/layout/Section/types"

export interface Item {
  image: ImageProps
  title: string
  copy: string
}

export interface Props extends SectionProps {
  items: Item[]
}
