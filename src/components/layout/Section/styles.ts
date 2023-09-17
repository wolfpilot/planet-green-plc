"use client"

import { styled } from "styled-components"

// Components
import Text from "@components/typography/Text/Text"
import Heading from "@components/typography/Heading/Heading"

export const Wrapper = styled.header`
  margin-bottom: var(--spacing-medium);
  text-align: center;
`

export const Tagline = styled(Text)`
  margin-bottom: var(--spacing-default);
  color: var(--c-neutral5);
`

export const Title = styled(Heading)`
  color: var(--c-black);
`
