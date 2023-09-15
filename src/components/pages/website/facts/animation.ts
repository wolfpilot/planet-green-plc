import { Variants, MotionProps } from "framer-motion"

// Styles
import { duration } from "@styles/animation"

// List
const listVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.medium,
      when: "beforeChildren",
      staggerChildren: duration.slow,
    },
  },
}

export const listMotionProps: MotionProps = {
  variants: listVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}

// Item
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: duration.verySlow,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.verySlow,
    },
  },
}

export const itemMotionProps: MotionProps = {
  variants: itemVariants,
}
