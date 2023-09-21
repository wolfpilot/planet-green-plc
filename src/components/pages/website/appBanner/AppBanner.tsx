import Image from "next/image"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Banner from "@components/banners/Banner"

const AppBanner: React.FC<Props> = ({ title, ctas }) => {
  if (!title) return null

  return (
    <Banner title={title}>
      {ctas?.length && (
        <S.LinkGroup>
          {ctas.map((item, index) => {
            if (!item.title || !item.link || !item?.image?.src) return null

            return (
              <S.Link key={index} {...item.link} theme="secondary">
                <Image {...item.image} alt={item.image.alt || ""} />
                <span>{item.title}</span>
              </S.Link>
            )
          })}
        </S.LinkGroup>
      )}
    </Banner>
  )
}

export default AppBanner
