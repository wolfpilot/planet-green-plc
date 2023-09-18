"use client"

import Image from "next/image"
import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { imageLightHazeEffect } from "@styles/effects"
import { textStyles } from "@styles/textStyles"
import { weights } from "@styles/typography"
import { duration, ease } from "@styles/animation"

// Components
import InternalLink from "@components/link/InternalLink"
import Heading from "@components/typography/Heading/Heading"
import Text from "@components/typography/Text/Text"

export const Wrapper = styled.div`
  position: relative;
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-xLarge);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled(motion.header)`
  margin-bottom: var(--spacing-large);
  text-align: center;

  ${mq.from.M`
    width: calc(6 * var(--grid-column-size) + 5 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(8 * var(--grid-column-size) + 7 * var(--grid-gutter-size));
  `}
`

export const Title = styled(Heading)`
  margin-bottom: var(--spacing-xSmall);

  b,
  strong {
    color: var(--c-accent3);
  }
`

export const Description = styled(Text)``

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: var(--grid-gutter-size);
  list-style: none;
  margin: 0 0 var(--spacing-medium);
  padding: 0;

  ${mq.from.L`
    flex-direction: row;
  `}
`

export const Footer = styled(motion.footer)`
  ${mq.from.M`
    width: calc(6 * var(--grid-column-size) + 5 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(8 * var(--grid-column-size) + 7 * var(--grid-gutter-size));
  `}
`

export const Footnote = styled(Text)`
  text-align: center;

  b,
  strong {
    color: var(--c-accent3);
  }
`

export const BgImageWrapper = styled.div`
  ${imageLightHazeEffect};
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const BgImage = styled(Image)`
  object-fit: cover;
`

export const Item = styled(motion.li)<{ $isHighlighted: boolean }>`
  position: relative;
  overflow: hidden;
  flex: 1;
  flex-basis: calc(100% / 3);
  border-radius: var(--border-radius-medium);
  transition: transform ${duration.slow}s ${ease.cubic};

  ${({ $isHighlighted }) =>
    $isHighlighted
      ? `
      background-color: var(--c-accent3);
    `
      : `
      background-color: var(--c-neutral2);
    `}

  &:hover {
    transform: translateY(-20px);
  }
`

export const ItemLink = styled(InternalLink)<{ $isHighlighted: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  padding: var(--spacing-xSmall) var(--spacing-xSmall) var(--spacing-medium)
    var(--spacing-xSmall);
  border-radius: var(--border-radius-medium);
  border: 2px solid var(--c-accent3);

  ${({ $isHighlighted }) =>
    $isHighlighted
      ? `
      color: var(--c-white);
    `
      : `
      color: var(--c-black);
    `}
`

export const ItemBanner = styled.div`
  ${textStyles.copyXS};
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 40px;
  background-color: var(--c-accent2);
  color: var(--c-white);
  font-weight: ${weights.bold};
  transform: rotate(45deg) translate(30%, -30%);
  transform-origin: center center;
`

export const ItemCost = styled.div`
  margin-bottom: var(--spacing-medium);
`

export const ItemCostValue = styled.span`
  ${textStyles.headingS};
`

export const ItemCostUnit = styled.span`
  ${textStyles.copyM};
`

export const ItemTitle = styled(Heading)`
  margin-bottom: var(--spacing-xSmall);
`

export const ItemDescription = styled(Text)``
