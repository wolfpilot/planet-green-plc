import { sanitize } from "isomorphic-dompurify"

// Types
import { Props } from "./types"

// Styles
import * as S from "./styles"

// Components
import Section from "@components/layout/Section/Section"

// Animation
import {
  itemMotionProps,
  itemTextMotionProps,
  itemImageMotionProps,
} from "./animation"

const TextMedia: React.FC<Props> = ({ tagline, title, items }) => {
  if (!title || !items?.length) return null

  return (
    <Section title={title} tagline={tagline}>
      <S.List>
        {items.map((item, index) => (
          <S.Item key={index} {...itemMotionProps}>
            <S.ItemContentWrapper {...itemTextMotionProps}>
              <S.ItemContent>
                {item.title && (
                  <S.ItemTitle level="h3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: sanitize(item.title),
                      }}
                    />
                  </S.ItemTitle>
                )}
                {item.copy && <S.ItemCopy size="M">{item.copy}</S.ItemCopy>}
              </S.ItemContent>
            </S.ItemContentWrapper>

            <S.ItemImageWrapper {...itemImageMotionProps}>
              <S.ItemImage {...item.image} />
            </S.ItemImageWrapper>
          </S.Item>
        ))}
      </S.List>
    </Section>
  )
}

export default TextMedia
