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

export const Wrapper = styled.div`
  padding: var(--spacing-xSmall) 0;
  background-color: var(--c-black);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing-xSmall);

  ${mq.from.L`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Meta = styled.div`
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

export const Copyright = styled.div`
  ${textStyles.copyS};
  color: var(--c-white);
  font-weight: ${weights.bold};
`

export const ExtraLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xSmall);

  ${mq.from.L`
    flex-direction: row;
  `}
`

export const ExtraLink = styled(InternalLink)`
  ${textStyles.copyS};
  color: var(--c-white);
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover,
  &:focus-visible {
    color: var(--c-accent2);
  }
`

export const SocialLinksGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xSmall);

  ${mq.from.L`
    justify-content: flex-end;
  `}
`

export const SocialLinkIcon = styled(Icon)`
  fill: var(--c-white);
  transition: fill ${duration.medium}s ${ease.cubic};
`

export const SocialLink = styled(ExternalLink)`
  &:hover,
  &:focus-visible {
    ${SocialLinkIcon} {
      fill: var(--c-accent2);
    }
  }
`
