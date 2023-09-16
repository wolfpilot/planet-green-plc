import { Variants, MotionProps } from "framer-motion"

// Styles
import { duration } from "@styles/animation"

// Header & Footer
const genericContentVariants: Variants = {
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

export const genericContentMotionProps: MotionProps = {
  variants: genericContentVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    margin: "-25% 0%",
  },
}

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
      staggerChildren: duration.medium,
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
