import { ScrollReveal, StaggerContainer, StaggerItem, Magnetic } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Design that elevates, not just decorates",
  "Clarity in communication, always",
  "Pixel-perfect execution on every project",
  "Strategic thinking behind every decision",
  "Long-term partnerships, not transactions",
  "Results that speak louder than promises",
];

export const WhyThennSection = () => {
  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10"
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: "-30%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6 block">
                Why Theन्न
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-8">
                Quality is not
                <br />
                <span className="text-muted-foreground">negotiable</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe exceptional design is the foundation of every successful brand.
                Every pixel, every interaction, every detail matters.
              </p>
            </ScrollReveal>
          </div>

          {/* Right */}
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {reasons.map((reason, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group flex items-center gap-4 p-5 border border-border/30 rounded-xl bg-card/30 backdrop-blur-sm cursor-pointer"
                  whileHover={{ x: 8, backgroundColor: "hsl(var(--card) / 0.6)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {reason}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
