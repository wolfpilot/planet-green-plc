"use client"

import Image from "next/image"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"
import { weights } from "@styles/typography"

export const Wrapper = styled.div`
  padding-top: var(--spacing-medium);
  padding-bottom: var(--spacing-medium);
`

export const Content = styled.div`
  ${mq.from.M`
    display: flex;
    gap: var(--grid-gutter-size);
  `}

  a {
    ${textStyles.copyS};
    color: var(--c-black);
    font-weight: ${weights.normal};

    &:hover,
    &:focus-within {
      text-decoration: underline;
    }
  }
`

export const InfoGroup = styled.div`
  text-align: center;

  ${mq.from.M`
    text-align: initial;
    width: calc(50% - (var(--grid-gutter-size) / 2));
  `}

  &:first-child {
    margin-bottom: var(--spacing-small);

    ${mq.from.L`
      width: calc(4 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
    `}
  }

  &:last-child {
    ${mq.from.L`
      width: calc(8 * var(--grid-column-size) + 7 * var(--grid-gutter-size));
    `}
  }
`

export const Logo = styled(Image)`
  height: auto;
  max-width: 132px;
  margin-bottom: var(--spacing-xSmall);
`

export const NavLinksWrapper = styled.div`
  ${mq.from.M`
    column-count: 2;
  `}
`

export const NavLinks = styled.ul`
  list-style: none;
  margin: 0 0 var(--spacing-small);
  padding: 0;

  ${mq.from.M`
    break-inside: avoid;
  `}
`

export const NavLinksItem = styled.li``

export const NavLinksHeading = styled.h5`
  ${textStyles.copyM};
  margin-bottom: 0;
  font-weight: ${weights.bold};

  ${mq.from.M`
    margin-bottom: var(--spacing-default);
  `}
`
