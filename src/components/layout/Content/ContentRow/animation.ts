import { Variants, MotionProps } from "framer-motion"

// Styles
import { duration } from "@styles/animation"

// Tagline
const taglineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      delay: duration.slow,
    },
  },
}

export const taglineMotionProps: MotionProps = {
  variants: taglineVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
}

// Divider
const dividerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.slow,
    },
  },
}

export const dividerMotionProps: MotionProps = {
  variants: dividerVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
}

// Title
const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      delay: duration.slow,
    },
  },
}

export const titleMotionProps: MotionProps = {
  variants: titleVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
}
