import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
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
    <section className="py-32 lg:py-44 bg-card/30 relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute right-20 top-20 w-[300px] h-[300px] rounded-full border border-primary/5"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute right-32 top-32 w-[200px] h-[200px] rounded-full border border-primary/10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6 block">
              Who We Help
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Built for those who
              <br />
              <span className="text-muted-foreground">demand excellence</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Audience Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {audiences.map((audience, index) => (
            <StaggerItem key={audience.title}>
              <motion.div
                className="group text-center p-10 lg:p-12 border border-border/30 rounded-2xl bg-background/50 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon */}
                <motion.div 
                  className="relative inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-primary/10 border border-primary/20"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <audience.icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="relative text-xl lg:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "50%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
