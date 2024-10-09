import { ImageProps } from "next/image"

// Types
import { Props as ContentRowProps } from "@components/layout/Content/ContentRow/types"

export interface Item {
  image: ImageProps
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export interface Props extends ContentRowProps {
  items: Item[]
}
