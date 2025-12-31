import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SEO from "@/components/SEO";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Vision",
    description: "Every great project begins with deep understanding. We immerse ourselves in your brand, goals, and audience through collaborative discovery sessions.",
    details: [
      "Brand immersion workshops",
      "Competitor analysis",
      "User research & interviews",
      "Goals & KPI definition",
    ],
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Crafting the Experience",
    description: "Strategic wireframes evolve into stunning visual concepts. Every element is purposefully designed to resonate with your audience.",
    details: [
      "Information architecture",
      "Wireframing & prototyping",
      "Visual design exploration",
      "Design system creation",
    ],
    duration: "2-4 weeks",
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Bringing It to Life",
    description: "Clean, performant code transforms designs into seamless digital experiences. We build for speed, accessibility, and scalability.",
    details: [
      "Frontend development",
      "CMS integration",
      "Performance optimization",
      "Quality assurance",
    ],
    duration: "3-6 weeks",
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Ready for the World",
    description: "Rigorous testing ensures a flawless launch. We don't just hand off—we partner with you for ongoing success and support.",
    details: [
      "Cross-browser testing",
      "Performance audits",
      "Launch coordination",
      "Post-launch support",
    ],
    duration: "1 week",
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <Layout>
      <SEO
        title="Our Process — How We Build High-Performance Websites"
        description="Discover our proven methodology for delivering exceptional digital experiences, from strategic discovery and UI/UX design to robust web development and launch."
        canonical="/process"
      />
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Our Process
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                How we
                <br />
                <span className="text-muted-foreground">work</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A proven methodology refined over years of delivering
                exceptional digital experiences for ambitious brands.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={containerRef} className="pb-32 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 lg:left-[calc(16.666%-2rem)] top-0 bottom-0 w-px bg-border/30 hidden md:block">
              <motion.div
                className="w-full bg-primary origin-top"
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            <div className="space-y-24 lg:space-y-32">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.05}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
                    {/* Number */}
                    <div className="lg:col-span-2 flex items-start">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary bg-background">
                        <span className="text-sm font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5">
                      <span className="text-sm font-medium text-primary mb-2 block">
                        {step.subtitle}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                        {step.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-5">
                      <div className="p-8 rounded-2xl border border-border/50 bg-card/30">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                          Key Activities
                        </h3>
                        <ul className="space-y-4">
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-3 text-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Process;
