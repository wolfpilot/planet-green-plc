import { ImageProps } from "next/image"

export interface Item {
  image: ImageProps
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export interface Props {
  tagline?: string
  title: string
  items: Item[]
}
