// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

const Facts: React.FC<Props> = ({ items }) => {
  if (!items?.length) return null

  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {items.map((item, index) => (
            <S.Item key={index}>
              <S.ItemValue>{item.value}</S.ItemValue>
              <S.ItemDescription>{item.description}</S.ItemDescription>
            </S.Item>
          ))}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}

export default Facts
