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
    title: "Brand Strategy & Identity",
    description: "We distill your vision into a clear, compelling brand identity and strategic positioning that resonates with your target audience.",
    deliverables: [
      "Brand positioning",
      "Visual identity",
      "Brand guidelines",
      "Messaging framework",
    ],
    link: "/branding",
  },
  {
    id: "02",
    title: "Premium Web Design",
    description: "Bespoke, high-performance UI/UX designs that capture attention, tell your story, and convert visitors into customers.",
    deliverables: [
      "User research",
      "Wireframing",
      "Visual design",
      "Prototyping",
    ],
    link: "/ui-ux-design",
  },
  {
    id: "03",
    title: "Full-Stack Development",
    description: "Clean, performant code using modern frameworks like React and Next.js to bring your digital presence to life with speed and reliability.",
    deliverables: [
      "Frontend development",
      "CMS integration",
      "Performance optimization",
      "Responsive implementation",
    ],
    link: "/website-development",
  },
  {
    id: "04",
    title: "Custom Web Apps",
    description: "Developing powerful, scalable web applications that solve complex business challenges through custom software architecture.",
    deliverables: [
      "SaaS platforms",
      "Admin dashboards",
      "API integrations",
      "Real-time analytics",
    ],
    link: "/custom-web-apps",
  },
  {
    id: "05",
    title: "Maintenance & Support",
    description: "Peace of mind for your digital presence. We ensure your website remains secure, fast, and fully functional with ongoing support.",
    deliverables: [
      "Security monitoring",
      "Performance tuning",
      "Content updates",
      "Technical support",
    ],
    link: "/maintenance-support",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Digital Agency Services — Web Development & UI/UX Design"
        description="Comprehensive digital solutions including brand strategy, premium website development, high-performance UI/UX design, and motion design in India."
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
                <Link to={service.link} className="group block">
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 lg:pb-24 border-b border-border/50 last:border-none relative transition-all duration-500"
                  >
                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 -mx-6 rounded-2xl transition-opacity duration-500" />

                    {/* Number */}
                    <div className="lg:col-span-2 relative z-10">
                      <span className="text-6xl lg:text-7xl font-bold text-foreground/10 group-hover:text-primary/10 transition-colors duration-500">
                        {service.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                          {service.title}
                        </h2>
                        <ArrowRight className="w-6 h-6 text-primary scale-0 -translate-x-4 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-4 relative z-10">
                      <h3 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                        Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Link>
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
