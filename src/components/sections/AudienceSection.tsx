import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Building2, Sparkles, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Small Businesses",
    description: "Established businesses ready to elevate their digital presence and compete at the next level.",
  },
  {
    icon: Sparkles,
    title: "Creators",
    description: "Individuals with a vision who need a platform that matches their creative ambition.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Fast-moving teams that need premium design without the enterprise timeline.",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
              Who We Help
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Built for those who
              <br />
              <span className="text-muted-foreground">demand excellence</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={index * 0.1}>
              <motion.div
                className="text-center p-8 lg:p-10 border border-border/50 rounded-2xl bg-card/50 hover:bg-card transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-primary/10">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
