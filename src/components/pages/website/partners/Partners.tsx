// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import ContentRow from "@components/layout/Content/ContentRow/ContentRow"

// Animation
import { listMotionProps } from "./animation"

const Partners: React.FC<Props> = ({ tagline, title, items }) => {
  if (!title || !items?.length) return null

  return (
    <ContentRow title={title} tagline={tagline}>
      <Container>
        <S.List {...listMotionProps}>
          {items.map((item, index) => (
            <S.Item key={index}>
              <S.ItemLink {...item.link}>
                <S.ItemImage {...item.image} />
              </S.ItemLink>
            </S.Item>
          ))}
        </S.List>
      </Container>
    </ContentRow>
  )
}

export default Partners
