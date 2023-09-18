// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import SectionHeader from "@components/layout/Section/SectionHeader"

// Animation
import { listMotionProps } from "./animation"

const Partners: React.FC<Props> = ({ tagline, title, items }) => {
  if (!title || !items?.length) return null

  return (
    <S.Wrapper>
      <Container>
        <SectionHeader title={title} tagline={tagline} />

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
    </S.Wrapper>
  )
}

export default Partners
