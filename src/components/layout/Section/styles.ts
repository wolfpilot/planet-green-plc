"use client"

import { styled } from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

// Components
import Text from "@components/typography/Text/Text"
import Heading from "@components/typography/Heading/Heading"

export const Wrapper = styled.section`
  padding-top: var(--spacing-medium);
  padding-bottom: var(--spacing-large);
`

export const Header = styled.header`
  margin-bottom: var(--spacing-medium);
  text-align: center;
`

export const Content = styled.div``

export const AnimTaglineWrapper = styled(motion.div)`
  margin-bottom: var(--spacing-default);
`

export const Tagline = styled(Text)`
  color: var(--c-neutral5);
`

export const AnimDividerWrapper = styled(motion.div)`
  margin-bottom: 8px;
`

export const Divider = styled(Image)`
  width: auto;
  height: var(--spacing-xSmall);
`

export const AnimTitleWrapper = styled(motion.div)``

export const Title = styled(Heading)`
  color: var(--c-black);
`
