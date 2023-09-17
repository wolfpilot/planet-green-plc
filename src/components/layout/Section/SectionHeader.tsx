import { sanitize } from "isomorphic-dompurify"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

const SectionHeader: React.FC<Props> = ({ className, tagline, title }) => {
  if (!title) return null

  return (
    <S.Wrapper className={className}>
      {tagline && <S.Tagline size="M">{tagline}</S.Tagline>}
      <S.Title level="h3">
        <span dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
      </S.Title>
    </S.Wrapper>
  )
}

export default SectionHeader
