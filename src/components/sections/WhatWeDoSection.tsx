import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "We distill your vision into a clear, compelling brand identity that resonates.",
  },
  {
    number: "02",
    title: "Web Design",
    description: "Bespoke designs that capture attention and convert visitors into customers.",
  },
  {
    number: "03",
    title: "Development",
    description: "Clean, performant code that brings your digital presence to life.",
  },
  {
    number: "04",
    title: "Motion Design",
    description: "Subtle animations that add depth and delight to every interaction.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
              What We Do
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              End-to-end digital
              <br />
              <span className="text-muted-foreground">solutions</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 0.1}>
              <motion.div
                className="group p-8 lg:p-10 border border-border/50 rounded-2xl bg-card/50 hover:bg-card transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-medium text-primary mb-6 block">
                  {service.number}
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
