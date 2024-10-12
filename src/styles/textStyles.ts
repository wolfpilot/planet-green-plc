import { css } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { weights } from "./typography"

/**
 * Keeping global text styles here for a quick overview
 */
export const textStyles = {
  copyXS: css`
    font-size: 14px;
    line-height: 1.4;
  `,
  copyS: css`
    font-size: 16px;
    line-height: 1.4;
  `,
  copyM: css`
    font-size: 18px;
    line-height: 1.4;

    ${mq.from.L`
      font-size: 20px;
    `}
  `,
  copyL: css`
    font-size: 20px;
    line-height: 1.4;

    ${mq.from.S`
      font-size: 22px;
    `}

    ${mq.from.L`
      font-size: 24px;
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
  boldText: css`
    font-weight: ${weights.bold};
  `,
  navLink: css`
    font-size: 16px;

    ${mq.from.M`
      font-size: 18px;
    `}

    ${mq.from.L`
      font-size: 20px;
    `}
  `,
  hyperlink: css`
    color: var(--c-accent3);
    font-weight: ${weights.bold};

    &:hover,
    &:focus-within {
      outline: none;
      text-decoration: underline;
    }
  `,
}
