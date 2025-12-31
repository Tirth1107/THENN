import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";

const appFeatures = [
    "Custom SaaS platform development",
    "Interactive dashboards & admin panels",
    "Real-time data visualization",
    "Secure user authentication & roles",
    "Scalable cloud-ready architectures",
    "Progressive Web Apps (PWA)",
];

const CustomWebApps = () => {
    return (
        <Layout>
            <SEO
                title="Custom Web Application Development — React Web Apps"
                description="Thenn specialises in custom web application development, including complex React web apps, dashboards, and internal admin panels."
                canonical="/custom-web-apps"
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
                                Custom
                                <br />
                                <span className="text-muted-foreground">Web Apps</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                We build powerful web applications that solve complex business challenges.
                                From robust internal tools to consumer-facing SaaS platforms.
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
                                Software that works as hard as you do.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Moving beyond simple websites, we develop applications that handle complex logic
                                and heavy data. Our team ensures your app is fast, secure, and intuitive.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                By leveraging modern tech stacks like React, Node, and Supabase, we deliver
                                high-concurrency apps that provide a smooth, app-like experience in the browser.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {appFeatures.map((feature, index) => (
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

export default CustomWebApps;
