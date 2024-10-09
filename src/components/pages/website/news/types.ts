import { ImageProps } from "next/image"

// Types
import { Props as ContentRowProps } from "@components/layout/Content/ContentRow/types"

export interface Item {
  id: string
  title: string
  image: ImageProps
}

export interface Props extends ContentRowProps {
  items: Item[]
}
