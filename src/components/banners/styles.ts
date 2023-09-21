"use client"

import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Heading from "@components/typography/Heading/Heading"

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-large);
  background-color: var(--c-accent3);

  ${mq.from.M`
    padding-left: calc(var(--grid-column-size) + var(--grid-gutter-size));
    padding-right: calc(var(--grid-column-size) +var(--grid-gutter-size));
  `}

  ${mq.from.L`
    padding-left: calc(2 * (var(--grid-column-size) + var(--grid-gutter-size)));
    padding-right: calc(2 * (var(--grid-column-size) + var(--grid-gutter-size)));
  `}
`

export const Title = styled(Heading)`
  color: var(--c-white);
  text-align: center;

  &:not(:last-child) {
    margin-bottom: var(--spacing-small);
  }

  b,
  strong {
    color: var(--c-accent1);
  }
`

export const Content = styled.div``
