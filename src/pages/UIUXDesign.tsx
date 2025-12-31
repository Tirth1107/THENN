import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";

const capabilities = [
    "User research & persona mapping",
    "Information architecture & wireframing",
    "High-fidelity visual design",
    "Interactive prototyping",
    "Design system development",
    "Conversion rate optimization (CRO)",
];

const UIUXDesign = () => {
    return (
        <Layout>
            <SEO
                title="UI UX Design Agency — Conversion-Focused Product Design"
                description="Thenn is a leading UI UX design agency specialising in product design and user experience design that drives engagement and conversion."
                canonical="/ui-ux-design"
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
                                UI / UX
                                <br />
                                <span className="text-muted-foreground">Design</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                We design digital products that people love to use.
                                Our approach combines emotional aesthetics with functional efficiency.
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
                                Designing for humans, optimizing for business.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Great design is more than just visuals; it's about solving problems and creating
                                seamless pathways for your users. We dive deep into user behavior to understand
                                what motivates your audience.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Whether it's a mobile app or a complex web dashboard, we focus on clarity,
                                accessibility, and delightful interactions that keep users coming back.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {capabilities.map((capability, index) => (
                                <ScrollReveal key={index} delay={0.1 + index * 0.05}>
                                    <div className="flex items-center gap-4 p-5 border border-border/30 rounded-xl bg-card/30 backdrop-blur-sm">
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground font-medium">{capability}</span>
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

export default UIUXDesign;
