import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Why Thenn
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
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
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} delay={0.1 + index * 0.05}>
                <div className="flex items-center gap-4 p-5 border border-border/50 rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
