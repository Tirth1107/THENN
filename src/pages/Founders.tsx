import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const founders = [
    {
        name: "Tirth Joshi",
        role: "Founder & CEO",
        bio: "Visionary leader focused on the intersection of design, technology, and business growth. Tirth leads the strategic direction of Thenn.",
        slug: "tirth-joshi"
    },
    {
        name: "Dhruman Kaneriya",
        role: "Co-Founder",
        bio: "Design-obsessed strategist ensuring every project at Thenn meets our rigorous standards for visual excellence and brand impact.",
        slug: "dhruman-kaneriya"
    },
];

const Founders = () => {
    return (
        <Layout>
            <SEO
                title="Founders — Tirth Joshi, Dhruman Kaneriya"
                description="Meet the leadership team at Thenn. Tirth Joshi (Founder & CEO) and Dhruman Kaneriya (Co-Founder) carving the future of digital experiences."
                canonical="/founders"
            />

            {/* Hero Section */}
            <section className="pt-32 lg:pt-40 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl">
                        <ScrollReveal>
                            <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                                Leadership
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                                Meet the
                                <br />
                                <span className="text-muted-foreground">Founders</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                The minds behind Thenn. Dedicated to crafting exceptional digital experiences
                                and pushing the boundaries of what's possible on the web.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="pb-32 lg:pb-40">
                <div className="container mx-auto px-6 lg:px-12">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-center" staggerDelay={0.1}>
                        {founders.map((founder, index) => (
                            <StaggerItem key={index}>
                                <Link to={`/founders/${founder.slug}`} className="block group">
                                    <div className="p-8 border border-border/30 rounded-2xl bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50">
                                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 transition-transform duration-500 group-hover:scale-110">
                                            <span className="text-3xl font-bold text-primary">
                                                {founder.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                                            {founder.name}
                                        </h2>
                                        <p className="text-sm font-medium uppercase tracking-widest text-primary/80 mb-6">
                                            {founder.role}
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                                            {founder.bio}
                                        </p>
                                        <div className="flex justify-center">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                                Know More <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </Layout>
    );
};

export default Founders;
