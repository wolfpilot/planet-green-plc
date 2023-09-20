import { ImageProps } from "next/image"

// Types
import { Props as SectionProps } from "@components/layout/Section/types"

export interface Item {
  id: string
  title: string
  image: ImageProps
}

export interface Props extends SectionProps {
  items: Item[]
}
