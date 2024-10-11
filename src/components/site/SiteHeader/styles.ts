"use client"

import Image from "next/image"
import { styled } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { textStyles } from "@styles/textStyles"
import { ease, duration } from "@styles/animation"

// Components
import InternalLink from "@components/link/InternalLink"

export type Theme = "primary" | "secondary"

export const Wrapper = styled.header`
  position: absolute;
  z-index: ${zIndexes.siteHeader};
  left: 0;
  top: var(--spacing-medium);
  right: 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoLink = styled(InternalLink)`
  transition: opacity ${ease.cubic} ${duration.medium}s;

  &:focus-within,
  &:hover {
    opacity: 0.75;
  }
`

export const Logo = styled(Image)`
  height: auto;
  max-width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));

  ${mq.from.L`
    max-width: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--spacing-xSmall);
  list-style: none;
  padding: 0;
  margin: 0;
`

export const LinksItem = styled.li<{
  variant: "primary" | "secondary"
}>`
  ${({ variant }) =>
    variant === "primary" &&
    `
      display: none;
    `};

  ${mq.from.M`
    display: block;
  `}
`

export const LinksItemAnchor = styled(InternalLink)<{ theme: Theme }>`
  --btn-height: 48px;

  ${textStyles.navLink};
  color: var(--c-white);

  ${({ theme }) =>
    theme === "primary"
      ? `
      transition:
        color ${ease.cubic} ${duration.medium}s;
    `
      : `
        display: flex;
        align-items: center;
        height: var(--btn-height);
        padding-left: var(--spacing-small);
        padding-right: var(--spacing-small);
        background-color: var(--c-accent3);
        border: 2px solid var(--c-accent3);
        transition:
            background-color ${ease.cubic} ${duration.slow}s,
            border-color ${ease.cubic} ${duration.slow}s,
            color ${ease.cubic} ${duration.slow}s,
            border-radius ${ease.elastic} ${duration.slow}s;
    `}

  &:focus-within,
  &:hover {
    ${({ theme }) =>
      theme === "primary"
        ? `
        color: var(--c-accent2);
    `
        : `
        background-color: transparent;
        border-color: var(--c-accent1);
        color: var(--c-accent1);
        border-top-left-radius: calc(var(--btn-height) / 2);
        border-bottom-right-radius: calc(var(--btn-height) / 2);
    `}
  }
`
