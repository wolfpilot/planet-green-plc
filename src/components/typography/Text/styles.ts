"use client"

import styled from "styled-components"

// Types
import { TextSizes } from "./Text"

// Styles
import { textStyles } from "@styles/textStyles"

export const Wrapper = styled.p<{ size: TextSizes }>`
  ${({ size }) =>
    size && size === "L"
      ? textStyles.copyL
      : size === "M"
      ? textStyles.copyM
      : textStyles.copyS};

  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }
`
