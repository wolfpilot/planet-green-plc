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
      duration: duration.slow,
      delay: duration.slow,
    },
  },
}

export const listMotionProps: MotionProps = {
  variants: listVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
}
