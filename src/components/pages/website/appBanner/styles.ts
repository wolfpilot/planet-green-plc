"use client"

import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { Theme, ctaRoundedStyles } from "@styles/ctas"

// Components
import ExternalLink from "@components/link/ExternalLink"

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xSmall);

  ${mq.from.S`
    flex-direction: row;
  `}
`

export const Link = styled(ExternalLink)<{ theme: Theme }>`
  ${ctaRoundedStyles};

  display: flex;
  align-items: center;
  gap: 8px;
`
