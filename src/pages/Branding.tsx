import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";

const brandingServices = [
    "Visual identity & logo design",
    "Digital branding & strategy",
    "Brand voice & messaging",
    "Brand guidelines & systems",
    "Typography & color palettes",
    "Brand asset creation",
];

const Branding = () => {
    return (
        <Layout>
            <SEO
                title="Branding Agency — Brand Identity & Digital Presence"
                description="Thenn is a premium branding agency specialising in brand identity design and strategic digital branding for ambitious businesses."
                canonical="/branding"
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
                                Brand
                                <br />
                                <span className="text-muted-foreground">Identity</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                We distill your essence into a visual and strategic identity.
                                Creating brands that don't just stand out—they resonate.
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
                                Building more than a logo; building a legacy.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                In a crowded digital landscape, clarity is your greatest competitive advantage.
                                We help brands find their unique voice and express it through cohesive visual systems.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our branding process is collaborative and insightful, ensuring your brand stays
                                consistent across every touchpoint and speaks directly to your audience's needs.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {brandingServices.map((service, index) => (
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

export default Branding;
