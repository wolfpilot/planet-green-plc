import { css } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import {
  MAX_CONTENT_WIDTH,
  borderRadius,
  columns,
  offset,
  gutter,
  spacing,
} from "@styles/layout"
import { colors, gradients } from "@styles/colors"
import { weights } from "@styles/typography"
import { textStyles } from "./textStyles"

export const base: any = css`
  :root {
    // Layout
    --max-content-width: ${MAX_CONTENT_WIDTH};
    --border-radius-small: ${borderRadius.S};
    --border-radius-medium: ${borderRadius.M};
    --border-radius-large: ${borderRadius.L};

    // Spacing
    --spacing-default: ${spacing.default};
    --spacing-xSmall: ${spacing.xSmall.base};
    --spacing-small: ${spacing.small.base};
    --spacing-medium: ${spacing.medium.base};
    --spacing-large: ${spacing.large.base};
    --spacing-xLarge: ${spacing.xLarge.base};

    /**
     * @NOTE: IE 11 doesn't support vars, so just use the equivalent vw values
     * 1 col in a 3 col grid = 33.33vw
     * 1 col in a 6 col grid = 16.66vw
     * 1 col in a 12 col grid = 8.33vw
     */
    /* Set the default nr. of columns, gutter, etc. */
    --grid-columns: ${columns.XS};
    --grid-offset-size: ${offset.XS};
    --grid-gutter-size: ${gutter.XS};

    /**
      * To calculate the column size:
      * - Take the total width of the screen
      * - Subtract the scrollbar
      * - Subtract the two offsets
      * - Subtract the gaps
      * - Divide the result by the number of columns
      */

    // prettier-ignore
    --grid-column-size: calc(
        (100vw
        - var(--scrollbar-width)
        - (2 * var(--grid-offset-size))
        - ((var(--grid-columns) - 1) * var(--grid-gutter-size))
        ) / var(--grid-columns)
    );

    ${mq.from.S`
      --grid-columns: ${columns.S};
      --grid-offset-size: ${offset.S};
      --grid-gutter-size: ${gutter.S};
      --spacing-xSmall: ${spacing.xSmall.S};
      --spacing-small: ${spacing.small.S};
      --spacing-medium: ${spacing.medium.S};
      --spacing-large: ${spacing.large.S};
      --spacing-xLarge: ${spacing.xLarge.S};
    `}

    ${mq.from.M`
      --grid-columns: ${columns.M};
      --grid-offset-size: ${offset.M};
      --grid-gutter-size: ${gutter.M};
      --spacing-xSmall: ${spacing.xSmall.M};
      --spacing-small: ${spacing.small.M};
      --spacing-medium: ${spacing.medium.M};
      --spacing-large: ${spacing.large.M};
      --spacing-xLarge: ${spacing.xLarge.M};
    `}

    ${mq.from.L`
      --grid-columns: ${columns.L};
      --grid-offset-size: ${offset.L};
      --grid-gutter-size: ${gutter.L};
      --spacing-xSmall: ${spacing.xSmall.L};
      --spacing-small: ${spacing.small.L};
      --spacing-medium: ${spacing.medium.L};
      --spacing-large: ${spacing.large.L};
      --spacing-xLarge: ${spacing.xLarge.L};
    `}

    ${mq.from.XL`
      --grid-columns: ${columns.XL};
      --grid-offset-size: ${offset.XL};
      --grid-gutter-size: ${gutter.XL};
      --grid-column-size: calc(
        (${MAX_CONTENT_WIDTH}
        - (2 * var(--grid-offset-size))
        - ((var(--grid-columns) - 1) * var(--grid-gutter-size))
        ) / var(--grid-columns)
      );
    `}

    // Colors
    --c-black: ${colors.black};
    --c-white: ${colors.white};
    --c-neutral1: ${colors.neutral1};
    --c-neutral2: ${colors.neutral2};
    --c-neutral3: ${colors.neutral3};
    --c-neutral4: ${colors.neutral4};
    --c-neutral5: ${colors.neutral5};
    --c-accent1: ${colors.accent1};
    --c-accent2: ${colors.accent2};
    --c-accent3: ${colors.accent3};
    --c-accent4: ${colors.accent4};
    --c-accent4: ${colors.accent5};
    --c-success: ${colors.success};
    --c-error: ${colors.error};
    --c-textHighlight: ${colors.textHighlight};
    --c-gridBgColor: ${colors.gridBgColor};
    --c-gridColumnBgColor: ${colors.gridColumnBgColor};
    --c-gridTextColor: ${colors.gridTextColor};

    // Gradients
    --g-light-haze: ${gradients.lightHaze};
  }

  /* Custom text highlighting */
  ::selection {
    background-color: var(--c-textHighlight);
    color: var(--c-black);
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;
  }

  body {
    ${textStyles.copyM};

    position: relative;
    color: var(--c-black);
    background: var(--c-pageColor);
    font-weight: ${weights.light};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  q,
  caption {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${weights.light};

    b {
      ${textStyles.boldText};
    }
  }

  h1 {
    ${textStyles.headingL};
  }

  h2 {
    ${textStyles.headingM};
  }

  h3 {
    ${textStyles.headingS};
  }

  a {
    text-decoration: none;
  }

  p a {
    ${textStyles.hyperlink};
  }

  p b {
    ${textStyles.boldText};
  }

  button {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  picture {
    line-height: 0;
  }

  img {
    max-width: 100%;
    margin-bottom: 0;
    line-height: 0;
  }

  video {
    cursor: pointer;
  }
`
