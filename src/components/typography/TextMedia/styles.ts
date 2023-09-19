"use client"

import Image from "next/image"
import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Heading from "@components/typography/Heading/Heading"
import Text from "@components/typography/Text/Text"

/**
 * The content is 50% width, so the middle gap will always need to be divided in half
 * which is why we don't always have round numbers for spacing.
 */

export const Wrapper = styled.div`
  padding-top: var(--spacing-medium);
  padding-bottom: var(--spacing-large);
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ItemImageWrapper = styled(motion.div)`
  // Remove white space that would otherwise offset the images
  line-height: 0;

  ${mq.from.M`
    flex: 1;
    width: 50%;
  `}
`

export const ItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 640px;
  object-fit: cover;
`

export const ItemContentWrapper = styled(motion.div)`
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-large);

  ${mq.from.M`
    flex: 1;
    display: flex;
    align-items: center;
    width: 50%;
  `}
`

export const ItemContent = styled.div`
  ${mq.from.L`
    width: calc(6 * var(--grid-column-size) + 6.5 * var(--grid-gutter-size));
  `}
`

export const ItemTitle = styled(Heading)`
  margin-bottom: var(--spacing-default);

  b,
  strong {
    color: var(--c-accent2);
  }
`

export const ItemCopy = styled(Text)``

export const Item = styled(motion.li)`
  display: flex;
  flex-direction: column-reverse;

  &:nth-child(odd) {
    ${ItemContent} {
      padding-left: var(--grid-gutter-size);
      padding-right: calc(0.5 * var(--grid-gutter-size));
    }

    ${mq.from.M`
        flex-direction: row;

        ${ItemImage} {
          border-top-left-radius: var(--border-radius-large);
        }

        ${ItemContentWrapper} {
          justify-content: flex-end;
        }
    `}

    ${mq.from.L`
      ${ItemContent} {
        padding-left: calc(var(--grid-column-size) + 2 * var(--grid-gutter-size));
        padding-right: calc(var(--grid-column-size) + 1.5 * var(--grid-gutter-size));
      }    
    `}
  }

  &:nth-child(even) {
    ${ItemContent} {
      padding-left: calc(0.5 * var(--grid-gutter-size));
      padding-right: var(--grid-gutter-size);
    }

    ${mq.from.M`
        flex-direction: row-reverse;

        ${ItemImage} {
          border-bottom-right-radius: var(--border-radius-large);
        }
        
        ${ItemContentWrapper} {
          justify-content: flex-start;
        }
    `}

    ${mq.from.L`
      ${ItemContent} {
        padding-left: calc(var(--grid-column-size) + 1.5 * var(--grid-gutter-size));
        padding-right: calc(var(--grid-column-size) + 2 * var(--grid-gutter-size));
      }    
    `}
  }
`
