// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import FactItem from "./FactItem"

// Animation
import { listMotionProps } from "./animation"

const Facts: React.FC<Props> = ({ items }) => {
  if (!items?.length) return null

  return (
    <S.Wrapper>
      <Container>
        <S.List {...listMotionProps}>
          {items.map((item, index) => (
            <FactItem
              key={index}
              amount={item.amount}
              description={item.description}
            />
          ))}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}

export default Facts
