import { ImageProps } from "next/image"

export interface Item {
  image: ImageProps
  title: string
  copy: string
}

export interface Props {
  tagline?: string
  title: string
  items: Item[]
}
