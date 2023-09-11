"use client"

import { sanitize } from "isomorphic-dompurify"

// Types
import { Props, Item } from "./types"

// Utils
import { useCountUp } from "@utils/hooks/useCountUp"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

// TODO: add delay on loop
// TODO: give it a time to count in, say, 2s
// TODO: rAF
// TODO: update numbers ... how many times per second? How to figure this out?
// TODO: only integers

// TODO: ease function? I already have the values in styles/animation, maybe move them to utils

// !: Move to a util or hook

// Setup
const DEFAULT_DURATION = 2000
// const DEFAULT_DELAY = 0.2

const FactItem: React.FC<Item> = ({ value, description }) => {
  const countValue = useCountUp({
    duration: DEFAULT_DURATION,
    target: parseInt(value, 10),
  })

  console.log("count", countValue)

  return (
    <S.Item>
      <S.ItemValue>{countValue}</S.ItemValue>
      <S.ItemDescription
        dangerouslySetInnerHTML={{ __html: sanitize(description) }}
      />
    </S.Item>
  )
}

const Facts: React.FC<Props> = ({ items }) => {
  if (!items?.length) return null

  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {items.map((item, index) => (
            <FactItem key={index} {...item} />
          ))}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}

export default Facts
