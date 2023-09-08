"use client"

import Image from "next/image"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Heading from "@components/typography/Heading/Heading"
import Text from "@components/typography/Text/Text"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  margin-bottom: var(--spacingL);
  color: var(--c-white);

  ${mq.from.L`
    width: calc(10 * var(--grid-column-size) + 9 * var(--grid-gutter-size));
    margin: 0 auto var(--spacingL);
  `}
`

export const Title = styled(Heading)`
  margin-bottom: 32px;
`

export const Tagline = styled(Text)`
  margin-bottom: 20px;
`

export const BackgroundImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
