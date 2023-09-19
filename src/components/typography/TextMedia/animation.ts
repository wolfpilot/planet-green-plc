import { Variants, MotionProps } from "framer-motion"

// Styles
import { duration } from "@styles/animation"

// Item
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.medium,
      delay: duration.slow,
      when: "beforeChildren",
    },
  },
}

export const itemMotionProps: MotionProps = {
  variants: itemVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}

// Item Text
const itemTextVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      duration: duration.slow,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: duration.slow,
    },
  },
}

export const itemTextMotionProps: MotionProps = {
  variants: itemTextVariants,
}

// Item Image
const itemImageVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "saturate(0)",
    transition: {
      duration: duration.slow,
    },
  },
  visible: {
    opacity: 1,
    filter: "saturate(1)",
    transition: {
      duration: duration.slow,
    },
  },
}

export const itemImageMotionProps: MotionProps = {
  variants: itemImageVariants,
}
