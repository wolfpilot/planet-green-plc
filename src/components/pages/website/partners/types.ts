import { ImageProps } from "next/image"

// Types
import { Props as SectionHeaderProps } from "@components/layout/Section/types"

export interface Item {
  image: ImageProps
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export interface Props extends SectionHeaderProps {
  items: Item[]
}
