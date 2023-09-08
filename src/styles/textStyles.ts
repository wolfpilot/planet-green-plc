import { css } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

/**
 * Keeping global text styles here for a quick overview
 */
export const textStyles = {
  copyS: css`
    font-size: 16px;
  `,
  copyM: css`
    font-size: 20px;
  `,
  copyL: css`
    font-size: 24px;
  `,
  headingL: css`
    font-size: 40px;

    ${mq.from.S`
      font-size: 48px;
    `}

    ${mq.from.M`
      font-size: 64px;
    `}

    ${mq.from.L`
      font-size: 80px;
    `}
  `,
  headingM: css`
    font-size: 32px;

    ${mq.from.S`
      font-size: 36px;
    `}

    ${mq.from.M`
      font-size: 48px;
    `}

    ${mq.from.L`
      font-size: 64px;
    `}
  `,
  headingS: css`
    font-size: 26px;

    ${mq.from.S`
      font-size: 32px;
    `}

    ${mq.from.M`
      font-size: 36px;
    `}

    ${mq.from.L`
      font-size: 48px;
    `}
  `,
  hyperlink: css`
    color: var(--c-accent3);

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  `,
}
