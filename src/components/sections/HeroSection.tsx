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

  const line1 = "High-performance websites";
  const line2 = "for ambitious brands.";

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 pt-20 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center glass-morphism p-8 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl">

          {/* Main Headline - Line 1 */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              {line1.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0, rotateX: 45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Main Headline - Line 2 */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              {line2.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-gradient"
                  initial={{ y: "100%", opacity: 0, rotateX: -45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + i * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Thenn is a premium <strong>website development & digital design agency</strong> crafting bespoke experiences that refuse to blend in.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <Magnetic strength={0.2}>
              <Link
                to="/contact"
                className="group relative flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="relative z-10 text-sm md:text-base">Start Your Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link
                to="/work"
                className="group relative flex items-center gap-3 px-8 py-4 text-foreground font-bold border border-foreground/10 glass-morphism rounded-full overflow-hidden transition-all duration-300 hover:bg-foreground/5 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-sm md:text-base">View Our Work</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10"
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
          transition={{ duration: 0.8, delay: 2.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Scroll</span>
            <div className="w-5 h-9 border-2 border-muted-foreground/20 rounded-full flex items-start justify-center p-1.5">
              <motion.div
                className="w-1 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};