"use client"

import Image from "next/image"
import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"
import { duration, ease } from "@styles/animation"

// Components
import InternalLink from "@components/link/InternalLink"

export const Slider = styled.div``

export const SlideLinkWrapper = styled(motion.div)``

export const SlideLink = styled(InternalLink)`
  display: block;
  overflow: hidden;
  border-top-left-radius: var(--border-radius-large);
  border-bottom-right-radius: var(--border-radius-large);
  border: 1px solid var(--c-neutral3);
  transition:
    border-radius ${duration.slow}s ${ease.cubic},
    border-color ${duration.slow}s ${ease.cubic};
`

export const SlideImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--g-diagonal-accent);
    mix-blend-mode: color;
    opacity: 0;
    transition: opacity ${duration.slow}s ${ease.cubic};
  }
`

export const SlideImage = styled(Image)`
  width: 100%;
  height: auto;
  transition: transform ${duration.slow}s ${ease.cubic};
`

export const SlideContent = styled.div`
  padding: var(--spacing-xSmall) var(--spacing-default) var(--spacing-default);
`

export const SlideTitle = styled.h4`
  ${textStyles.copyM};
  margin-bottom: var(--spacing-default);
  color: var(--c-black);
`

export const SlideCta = styled.div`
  ${textStyles.copyS};
  color: var(--c-accent2);
  transition: color ${duration.slow}s ${ease.cubic};
`

export const SliderWrapper = styled(motion.div)`
  .swiper {
    &-wrapper {
      margin-bottom: var(--spacing-medium);
    }

    &-slide {
      /**
       * Fix FOUC showing on initial load
       *
       * @see: https://github.com/nolimits4web/swiper/discussions/6828
       */
      ${mq.from.S`
        flex-basis: calc(50% - 5px);
      `}

      ${mq.from.L`
        flex-basis: calc(25% - 15px);
      `}
      
      &:hover,
      &:focus-within {
        ${SlideLink} {
          border-radius: 0;
          border-color: var(--c-accent3);
        }

        ${SlideImageWrapper} {
          &::after {
            opacity: 0.6;
          }
        }

        ${SlideImage} {
          transform: scale(1.1);
        }

        ${SlideCta} {
          color: var(--c-accent3);
        }
      }
    }

    &-pagination {
      position: relative;
    }

    &-pagination-bullet {
      transition: background-color ${duration.slow}s ${ease.cubic};

      &:hover,
      &:focus-within {
        background-color: var(--c-accent3);
      }
    }
  }
`
