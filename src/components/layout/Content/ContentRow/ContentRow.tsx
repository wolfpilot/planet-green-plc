import { sanitize } from "isomorphic-dompurify"

// Assets
import LogoDividerSrc from "@public/media/svgs/logo-waves.svg"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

// Animation
import {
  taglineMotionProps,
  dividerMotionProps,
  titleMotionProps,
} from "@components/layout/Content/ContentRow/animation"

const ContentRow: React.FC<Props> = ({
  className,
  children,
  tagline,
  title,
}) => {
  if (!title) return null

  return (
    <S.Wrapper className={className}>
      <S.Header>
        <Container>
          {tagline && (
            <S.AnimTaglineWrapper {...taglineMotionProps}>
              <S.Tagline size="M">{tagline}</S.Tagline>
            </S.AnimTaglineWrapper>
          )}

          <S.AnimDividerWrapper {...dividerMotionProps}>
            <S.Divider
              src={LogoDividerSrc}
              alt="Planet Blue logo consisting of waves crossing each other"
            />
          </S.AnimDividerWrapper>

          <S.AnimTitleWrapper {...titleMotionProps}>
            <S.Title level="h3">
              <span dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
            </S.Title>
          </S.AnimTitleWrapper>
        </Container>
      </S.Header>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default ContentRow
