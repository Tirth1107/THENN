import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, MessageCircle, Instagram } from "lucide-react";

const TirthJoshi = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Tirth Joshi",
        "jobTitle": "Founder & CEO",
        "url": "https://www.thenn.in/founders/tirth-joshi",
        "image": "https://www.thenn.in/logo.jpg",
        "sameAs": [
            "https://www.linkedin.com/in/tirth-joshi",
            "https://twitter.com/tirthjoshi",
            "https://instagram.com/justtirthjoshi"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Thenn",
            "url": "https://www.thenn.in"
        }
    };

    return (
        <Layout>
            <SEO
                title="Tirth Joshi | Founder & CEO — THENN"
                description="Meet Tirth Joshi, Founder & CEO of THENN. Leading the mission to help businesses build a powerful and professional online presence through modern digital solutions."
                canonical="/founders/tirth-joshi"
                structuredData={personSchema}
            />

            {/* Hero Section */}
            <section className="pt-32 lg:pt-48 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 block">
                                Founder & CEO
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] mb-8">
                                Tirth <span className="text-muted-foreground/40 italic font-light">Joshi</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                                "Every business deserves a digital identity that looks premium, works smoothly, and creates real impact."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Profile Info Card */}
            <section className="pb-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 rounded-3xl border border-border/40 bg-card/20 backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                                    <p className="font-medium">Rajkot, Gujarat, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Role</p>
                                    <p className="font-medium">Founder & CEO, Thenn</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                                    <p className="font-medium">joshitirth1107@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* About & Content Sections */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-12">
                            <ScrollReveal>
                                <h2 className="text-4xl font-semibold tracking-tight">About Me</h2>
                                <div className="mt-6 space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                                    <p>
                                        I’m a developer and creator who enjoys building clean, modern, and performance-focused digital products.
                                        I focus on quality, clarity, and long-term value — not shortcuts.
                                    </p>
                                    <p className="text-foreground font-medium border-l-2 border-primary pl-6 italic">
                                        "For me, a website is not just a design. It’s a brand experience."
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <h2 className="text-4xl font-semibold tracking-tight">Why I Built THENN</h2>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light mb-8">
                                    Many businesses face problems like outdated websites, slow performance, weak branding, and lack of support.
                                    THENN was built to solve these problems with a professional process and real attention to detail.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Premium design", "Fast & responsive", "Clean user experience", "Strong communication", "Long-term support"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-background/50">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="space-y-12 lg:pl-12">
                            <ScrollReveal>
                                <h2 className="text-4xl font-semibold tracking-tight">My Role</h2>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light mb-8">
                                    As Founder & CEO, I personally lead the strategic and creative direction of every project.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Planning and strategy",
                                        "Website and brand direction",
                                        "Development and implementation",
                                        "Performance optimization",
                                        "Final quality checks",
                                        "Client support and guidance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-muted-foreground">
                                            <span className="text-primary font-mono text-xs">0{i + 1}</span>
                                            <span className="text-lg font-light tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <div className="p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                                    <h3 className="text-3xl font-bold mb-4">Vision</h3>
                                    <p className="text-lg leading-relaxed opacity-90 font-light">
                                        My vision is to make THENN a brand known for trust, premium quality, and genuine client relationships.
                                        I want every client to feel confident that their brand is in the right hands.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Connect */}
            <section className="py-24">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-semibold mb-12">Let's Connect</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://instagram.com/justtirthjoshi"
                                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 bg-card/50"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="font-medium">Instagram</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="mailto:joshitirth1107@gmail.com"
                                className="flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="font-medium">Email Me</span>
                            </motion.a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection />
        </Layout>
    );
};

export default TirthJoshi;
