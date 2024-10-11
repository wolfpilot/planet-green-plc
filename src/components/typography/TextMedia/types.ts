import { ImageProps } from "next/image"

// Types
import { Props as ContentRowProps } from "@components/layout/Content/ContentRow/types"

export interface Item {
  image: ImageProps
  title: string
  copy: string
}

export interface Props extends ContentRowProps {
  items: Item[]
}
