"use client"

import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"
import { weights } from "@styles/typography"
import { duration, ease } from "@styles/animation"

// Components
import InternalLink from "@components/link/InternalLink"
import ExternalLink from "@components/link/ExternalLink"
import Icon from "@components/icons/Icon"

export const Wrapper = styled.footer``

export const Top = styled.div``

export const TopContactInfo = styled.div``

export const TopLinks = styled.div``

export const Bottom = styled.div`
  padding: var(--spacing-xSmall) 0;
  background-color: var(--c-black);
`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing-xSmall);

  ${mq.from.L`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const BottomMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-medium);
  text-align: center;

  ${mq.from.L`
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  `}
`

export const BottomCopyright = styled.div`
  ${textStyles.copyS};
  color: var(--c-white);
  font-weight: ${weights.bold};
`

export const BottomExtraLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xSmall);

  ${mq.from.L`
    flex-direction: row;
  `}
`

export const BottomExtraLink = styled(InternalLink)`
  ${textStyles.copyS};
  color: var(--c-white);
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover,
  &:focus-visible {
    color: var(--c-accent2);
  }
`

export const BottomSocialLinksGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xSmall);

  ${mq.from.L`
    justify-content: flex-end;
  `}
`

export const BottomSocialLinkIcon = styled(Icon)`
  fill: var(--c-white);
  transition: fill ${duration.medium}s ${ease.cubic};
`

export const BottomSocialLink = styled(ExternalLink)`
  &:hover,
  &:focus-visible {
    ${BottomSocialLinkIcon} {
      fill: var(--c-accent2);
    }
  }
`
