"use client"

import Image from "next/image"
import styled from "styled-components"

// Styles
import { textStyles } from "@styles/textStyles"
import { duration, ease } from "@styles/animation"

// Components
import InternalLink from "@components/link/InternalLink"

export const Slider = styled.div``

export const SlideLink = styled(InternalLink)``

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

export const SliderWrapper = styled.div`
  .swiper {
    &-wrapper {
      margin-bottom: var(--spacing-medium);
    }

    &-slide {
      overflow: hidden;
      border-top-left-radius: var(--border-radius-large);
      border-bottom-right-radius: var(--border-radius-large);
      border: 1px solid var(--c-neutral3);
      transition:
        border-radius ${duration.slow}s ${ease.cubic},
        border-color ${duration.slow}s ${ease.cubic};

      &:hover {
        border-radius: 0;
        border-color: var(--c-accent3);

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

      &:hover {
        background-color: var(--c-accent3);
      }
    }
  }
`
