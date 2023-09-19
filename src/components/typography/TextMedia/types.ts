import { ImageProps } from "next/image"

// Types
import { Props as SectionHeaderProps } from "@components/layout/Section/types"

export interface Item {
  image: ImageProps
  title: string
  copy: string
}

export interface Props extends SectionHeaderProps {
  items: Item[]
}
