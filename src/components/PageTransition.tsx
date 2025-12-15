import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

// Curtain reveal transition for dramatic effect
const curtainVariants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

export const PageCurtain = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] origin-top bg-primary"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
};
