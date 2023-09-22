"use client"

import ExternalLink from "@components/link/ExternalLink"
import Image from "next/image"
import { styled } from "styled-components"
import { motion } from "framer-motion"

// Styles
import { duration, ease } from "@styles/animation"

export const List = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-large);
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled(motion.li)``

export const ItemLink = styled(ExternalLink)`
  display: block;
  opacity: 0.3;
  filter: grayscale(1);
  transition:
    opacity ${duration.slow}s ${ease.cubic},
    filter ${duration.slow}s ${ease.cubic};

  &:hover,
  &:focus-visible {
    opacity: 1;
    filter: grayscale(0);
  }
`

export const ItemImage = styled(Image)`
  width: auto;
  max-height: var(--spacing-large);
`
