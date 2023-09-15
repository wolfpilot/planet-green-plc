"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { weights } from "@styles/typography"
import { textStyles } from "@styles/textStyles"

export const Wrapper = styled.div`
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-xLarge);
`

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--grid-gutter-size));
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.from.M`
    flex-direction: row;
    gap: var(--grid-gutter-size);
  `}
`

export const Item = styled(motion.li)`
  flex: 1;
  flex-basis: calc(100% / 3);
  text-align: center;
`

export const ItemAmount = styled.div`
  ${textStyles.headingM};
  margin-bottom: var(--spacing-default);
  color: var(--c-accent3);
  font-weight: ${weights.light};
`

export const ItemDescription = styled.div`
  ${textStyles.copyL};
`
