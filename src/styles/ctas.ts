"use client"

import { css } from "styled-components"

// Styles
import { textStyles } from "@styles/textStyles"
import { ease, duration } from "@styles/animation"

export type Theme = "primary" | "secondary"

export const sharedCtaStyles = css`
  ${textStyles.copyS};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding-right: 32px;
  padding-left: 32px;
  transition:
    background-color ${ease.elastic} ${duration.slow}s,
    color ${ease.elastic} ${duration.slow}s,
    border-radius ${ease.elastic} ${duration.slow}s;

  span,
  img {
    transition: transform ${ease.elastic} ${duration.slow}s;
  }
`

export const ctaRoundedStyles = css<{ theme: Theme }>`
  ${sharedCtaStyles};

  border-radius: 22px;

  ${({ theme }) =>
    theme === "primary"
      ? `
        background-color: var(--c-accent3);
        border: 1px solid var(--c-accent3);
        color: var(--c-white);

        &:hover,
        &:focus-visible {
            background-color: transparent;
            color: var(--c-accent3);
        }
    `
      : `
        background-color: var(--c-white);
        border: 1px solid var(--c-white);
        color: var(--c-black);

        &:hover,
        &:focus-visible {
          span {
            transform: translateX(8px);
          }
        }
  `}
`

export const ctaLeafStyles = css<{ theme: Theme }>`
  ${sharedCtaStyles};

  border-top-left-radius: 32px;
  border-bottom-right-radius: 32px;

  ${({ theme }) =>
    theme === "primary"
      ? `
        background-color: var(--c-accent1);
        border: 1px solid var(--c-accent1);
        color: var(--c-black);

        &:hover,
        &:focus-visible {
            border-radius: 0;
            background-color: transparent;
            color: var(--c-accent1);
        }
    `
      : `
        background-color: transparent;
        border: 1px solid var(--c-white);
        color: var(--c-white);

        &:hover,
        &:focus-visible {
            border-radius: 0;
        }
  `}
`
