import { sanitize } from "isomorphic-dompurify"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

const Banner: React.FC<Props> = ({ children, title }) => {
  if (!title) return null

  return (
    <S.Wrapper>
      <Container>
        <S.Title level="h3">
          <span dangerouslySetInnerHTML={{ __html: sanitize(title) }}></span>
        </S.Title>
        <S.Content>{children}</S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Banner
