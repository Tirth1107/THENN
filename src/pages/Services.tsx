import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description: "We distill your vision into a clear, compelling brand identity that sets you apart from the competition.",
    deliverables: [
      "Brand positioning",
      "Visual identity",
      "Brand guidelines",
      "Messaging framework",
    ],
  },
  {
    id: "02",
    title: "Web Design",
    description: "Bespoke designs that capture attention, tell your story, and convert visitors into loyal customers.",
    deliverables: [
      "User research",
      "Wireframing",
      "Visual design",
      "Prototyping",
    ],
  },
  {
    id: "03",
    title: "Development",
    description: "Clean, performant code that brings your digital presence to life with speed and reliability.",
    deliverables: [
      "Frontend development",
      "CMS integration",
      "Performance optimization",
      "Responsive implementation",
    ],
  },
  {
    id: "04",
    title: "Motion Design",
    description: "Subtle, purposeful animations that add depth and delight to every interaction.",
    deliverables: [
      "Micro-interactions",
      "Page transitions",
      "Scroll animations",
      "Loading experiences",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Our Services — Digital Excellence"
        description="Comprehensive digital solutions inclusive of brand strategy, premium web design, high-performance development, and motion design."
        canonical="/services"
      />
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                What we
                <br />
                <span className="text-muted-foreground">deliver</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                End-to-end digital solutions, from strategy to launch.
                Every service is tailored to your unique needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-32 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.05}>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 lg:pb-24 border-b border-border/50 last:border-none"
                >
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <span className="text-6xl lg:text-7xl font-bold text-foreground/10">
                      {service.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-4">
                    <h3 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                      Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Services;
