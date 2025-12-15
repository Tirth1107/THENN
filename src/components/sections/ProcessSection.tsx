import { ScrollReveal } from "@/components/ui/scroll-reveal";
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

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
              Our Process
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              From vision
              <br />
              <span className="text-muted-foreground">to reality</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/50 hidden lg:block">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <div className="flex gap-8 lg:gap-16 items-start">
                  {/* Number */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full border border-primary/30 bg-background relative z-10">
                    <span className="text-sm font-semibold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
