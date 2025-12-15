import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your brand, goals, and audience to understand what makes you unique.",
  },
  {
    number: "02",
    title: "Design",
    description: "Strategic wireframes evolve into stunning visual concepts that capture your brand essence.",
  },
  {
    number: "03",
    title: "Build",
    description: "Clean, performant code transforms designs into seamless digital experiences.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing ensures a flawless launch, with ongoing support to keep you ahead.",
  },
];

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 lg:py-44 bg-card/30 relative overflow-hidden">
      {/* Background number */}
      <motion.div
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30rem] font-bold text-foreground/[0.01] select-none pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
      >
        04
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6 block">
              Our Process
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
              From vision
              <br />
              <span className="text-muted-foreground">to reality</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-8 lg:left-8 top-0 bottom-0 w-px bg-border/20 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/50 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1} y={80}>
                <motion.div 
                  className="flex gap-8 lg:gap-16 items-start group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full border-2 border-primary/30 bg-background relative z-10 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-sm font-bold text-primary">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <motion.h3 
                      className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
