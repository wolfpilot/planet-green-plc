import { css } from "styled-components"

export const imageLightHazeEffect = css`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--g-light-haze);
    mix-blend-mode: lighten;
    opacity: 0.9;
  }
`
