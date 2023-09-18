import { sanitize } from "isomorphic-dompurify"

// Assets
import LogoDividerSrc from "@public/media/svgs/logo-waves.svg"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Animation
import {
  taglineMotionProps,
  dividerMotionProps,
  titleMotionProps,
} from "@components/layout/Section/animation"

const SectionHeader: React.FC<Props> = ({ className, tagline, title }) => {
  if (!title) return null

  return (
    <S.Wrapper className={className}>
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
    </S.Wrapper>
  )
}

export default SectionHeader
