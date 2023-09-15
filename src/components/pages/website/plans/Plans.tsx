import { sanitize } from "isomorphic-dompurify"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import PlanItem from "./PlanItem"

const Plans: React.FC<Props> = ({
  title,
  description,
  items,
  footnote,
  bgImage,
}) => {
  if (!items?.length) return null

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Header>
            {title && (
              <S.Title level="h3">
                <span dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
              </S.Title>
            )}
            {description && (
              <S.Description size="L">
                <span
                  dangerouslySetInnerHTML={{ __html: sanitize(description) }}
                />
              </S.Description>
            )}
          </S.Header>

          <S.List>
            {items.map((item, index) => (
              <PlanItem key={index} {...item} />
            ))}
          </S.List>

          {footnote && (
            <S.Footer>
              <S.Footnote size="S">
                <span
                  dangerouslySetInnerHTML={{ __html: sanitize(footnote) }}
                />
              </S.Footnote>
            </S.Footer>
          )}
        </S.Content>
      </Container>

      {bgImage?.src && (
        <S.BgImageWrapper>
          <S.BgImage src={bgImage.src} alt={bgImage.alt || ""} fill />
        </S.BgImageWrapper>
      )}
    </S.Wrapper>
  )
}

export default Plans
