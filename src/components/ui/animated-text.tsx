import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  as: Component = "p",
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * staggerDelay,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Component>
  );
};

interface AnimatedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export const AnimatedLines = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  staggerDelay = 0.15,
}: AnimatedLinesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            initial={{ y: "110%", opacity: 0, rotateX: -20 }}
            animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: "110%", opacity: 0, rotateX: -20 }}
            transition={{
              duration: 0.8,
              delay: delay + i * staggerDelay,
              ease: "easeOut",
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// Character by character reveal
interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const CharReveal = ({ text, className = "", delay = 0 }: CharRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const chars = text.split("");

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.02,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// Sliding text reveal with mask
interface TextMaskRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export const TextMaskReveal = ({ children, className = "", delay = 0 }: TextMaskRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
