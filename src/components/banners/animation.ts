import { Variants, MotionProps } from "framer-motion"

// Styles
import { duration } from "@styles/animation"

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
      duration: duration.medium,
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

// Content
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.medium,
    },
  },
}

export const contentMotionProps: MotionProps = {
  variants: contentVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
}
