"use client"

import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { weights } from "@styles/typography"
import { textStyles } from "@styles/textStyles"

export const Wrapper = styled.div``

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--grid-gutter-size));
  list-style: none;
  margin-top: var(--spacing-xLarge);
  margin-bottom: var(--spacing-large);

  ${mq.from.M`
    flex-direction: row;
    gap: var(--grid-gutter-size);
  `}
`

export const Item = styled.li`
  flex: 1;
  text-align: center;
`

export const ItemValue = styled.div`
  ${textStyles.headingL};
  margin-bottom: var(--spacing-default);
  color: var(--c-accent3);
  font-weight: ${weights.light};
`

export const ItemDescription = styled.div`
  ${textStyles.copyL};
`
