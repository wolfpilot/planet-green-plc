"use client"

import { css } from "styled-components"

// Styles
import { textStyles } from "@styles/textStyles"
import { ease, duration } from "@styles/animation"

export type Theme = "primary" | "secondary"

export const leafCtaStyles = css<{ theme: Theme }>`
  ${textStyles.copyS};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding-right: 32px;
  padding-left: 32px;
  border-top-left-radius: 32px;
  border-bottom-right-radius: 32px;
  transition:
    background-color ${ease.elastic} ${duration.slow}s,
    color ${ease.elastic} ${duration.slow}s,
    border-radius ${ease.elastic} ${duration.slow}s;

  ${({ theme }) =>
    theme === "primary"
      ? `
        background-color: var(--c-accent1);
        border: 1px solid var(--c-accent1);
        color: var(--c-black);

        &:hover {
            border-radius: 0;
            background-color: transparent;
            color: var(--c-accent1);
        }
    `
      : `
        background-color: transparent;
        border: 1px solid var(--c-white);
        color: var(--c-white);

        &:hover {
            border-radius: 0;
        }
  `}
`
