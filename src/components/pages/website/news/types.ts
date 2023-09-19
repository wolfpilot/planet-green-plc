import { ImageProps } from "next/image"

// Types
import { Props as SectionHeaderProps } from "@components/layout/Section/types"

export interface Item {
  id: string
  title: string
  image: ImageProps
}

export interface Props extends SectionHeaderProps {
  items: Item[]
}
