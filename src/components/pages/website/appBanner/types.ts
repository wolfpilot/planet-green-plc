// Types
import { ImageProps } from "next/image"
import { Props as BannerProps } from "@components/banners/types"

export interface Cta {
  title: string
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>
  image: ImageProps
}

export interface Props extends BannerProps {
  ctas: Cta[]
}
