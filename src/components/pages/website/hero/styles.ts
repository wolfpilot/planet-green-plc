"use client"

import Image from "next/image"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { leafCtaStyles, Theme as LeafCtaTheme } from "@styles/ctas"

// Components
import Heading from "@components/typography/Heading/Heading"
import Text from "@components/typography/Text/Text"
import InternalLink from "@components/link/InternalLink"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  margin-bottom: var(--spacing-small);
  color: var(--c-white);

  ${mq.from.L`
    width: calc(10 * var(--grid-column-size) + 9 * var(--grid-gutter-size));
    margin-right: auto;
    margin-left: auto
  `}
`

export const Title = styled(Heading)`
  margin-bottom: 32px;
`

export const Tagline = styled(Text)`
  margin-bottom: 20px;
`

export const CtaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${mq.from.S`
    flex-direction: row;
  `}
`

export const Cta = styled(InternalLink)<{ theme: LeafCtaTheme }>`
  ${leafCtaStyles};
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
