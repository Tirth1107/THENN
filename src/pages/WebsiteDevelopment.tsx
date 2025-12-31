import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";

const features = [
    "High-performance React & Next.js development",
    "Responsive & mobile-first architecture",
    "SEO-optimized codebase for search visibility",
    "Scalable & maintainable digital foundations",
    "Custom API & CMS integrations",
    "Speed & performance optimization",
];

const WebsiteDevelopment = () => {
    return (
        <Layout>
            <SEO
                title="Website Development Agency — High-Performance React Solutions"
                description="Thenn is a premier web development company specialising in high-performance business website design and modern React website development."
                canonical="/website-development"
            />

            {/* Hero Section */}
            <section className="pt-32 lg:pt-40 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl">
                        <ScrollReveal>
                            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                                Expertise
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                                Website
                                <br />
                                <span className="text-muted-foreground">Development</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                We build high-performance websites that serve as the digital backbone of your business.
                                Focused on speed, scalability, and seamless user experiences.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32 lg:pb-40">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal>
                            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-8">
                                Turning complex requirements into elegant digital solutions.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Our web development process is built around modern technologies and industry best practices.
                                We don't just write code; we architect solutions that grow with your business.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From simple business websites to complex digital ecosystems, we ensure every line of code
                                is optimized for performance, security, and search engine visibility.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <ScrollReveal key={index} delay={0.1 + index * 0.05}>
                                    <div className="flex items-center gap-4 p-5 border border-border/30 rounded-xl bg-card/30 backdrop-blur-sm">
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground font-medium">{feature}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </Layout>
    );
};

export default WebsiteDevelopment;
