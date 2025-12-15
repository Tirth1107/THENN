import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/scroll-reveal";

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const line1 = "We design websites";
  const line2 = "that define brands.";

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase text-primary border border-primary/20 rounded-full backdrop-blur-sm">
              Digital Design Agency
            </span>
          </motion.div>

          {/* Main Headline - Line 1 */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-semibold tracking-tight text-foreground leading-[1.05]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            >
              {line1.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.03,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Main Headline - Line 2 */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-semibold tracking-tight text-foreground leading-[1.05]"
            >
              {line2.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + i * 0.03,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Premium web experiences for brands that refuse to blend in. 
            Crafted with precision, delivered with purpose.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic strength={0.2}>
              <Link
                to="/contact"
                className="group relative flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 bg-foreground"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                to="/work"
                className="group relative flex items-center gap-3 px-8 py-4 text-foreground font-medium border border-border rounded-full overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">View Our Work</span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex items-start justify-center p-2">
              <motion.div 
                className="w-1 h-2 bg-primary rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
