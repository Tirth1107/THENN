import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";

const supportServices = [
    "24/7 uptime monitoring & alerts",
    "Regular security audits & patching",
    "Performance monitoring & tuning",
    "Content updates & management",
    "Ongoing bug fixes & improvements",
    "Hosting & infrastructure management",
];

const MaintenanceSupport = () => {
    return (
        <Layout>
            <SEO
                title="Website Maintenance & Support Services — Reliable Digital Care"
                description="Thenn is a dedicated website maintenance services and support agency, ensuring your digital presence remains secure, fast, and up-to-date."
                canonical="/maintenance-support"
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
                                Maintenance
                                <br />
                                <span className="text-muted-foreground">& Support</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                Peace of mind for your digital presence.
                                We ensure your website stays secure, fast, and fully functional.
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
                                Your digital partner for the long term.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Launching is just the beginning. Our maintenance and support services are
                                designed to keep your digital assets performing at their peak day after day.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From incremental updates to proactive security monitoring, we take care
                                of the technical details so you can focus on running your business.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {supportServices.map((service, index) => (
                                <ScrollReveal key={index} delay={0.1 + index * 0.05}>
                                    <div className="flex items-center gap-4 p-5 border border-border/30 rounded-xl bg-card/30 backdrop-blur-sm">
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground font-medium">{service}</span>
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

export default MaintenanceSupport;
