import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Identity",
    description: "We distill your vision into a clear, compelling brand identity and strategic positioning that resonates with your target audience.",
    link: "/branding",
  },
  {
    number: "02",
    title: "Premium Web Design",
    description: "Bespoke, high-performance UI/UX designs that capture attention and convert visitors into loyal customers.",
    link: "/ui-ux-design",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description: "Clean, performant code using modern frameworks like React and Next.js to bring your digital presence to life.",
    link: "/website-development",
  },
  {
    number: "04",
    title: "Custom Web Apps",
    description: "Developing powerful, scalable web applications that solve complex business challenges through custom software architecture.",
    link: "/custom-web-apps",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-32 lg:py-44 bg-card/30 relative overflow-hidden">
      {/* Decorative element */}
      <motion.div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-border/20"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6 block">
              What We Do
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
              End-to-end digital
              <br />
              <span className="text-muted-foreground">solutions</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <Link to={service.link} className="block group">
                <motion.div
                  className="group relative p-8 lg:p-10 border border-border/30 rounded-2xl bg-background/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-500"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* ... rest remains same ... */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-sm font-medium text-primary">
                        {service.number}
                      </span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ rotate: 45 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
