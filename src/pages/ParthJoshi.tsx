import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Instagram } from "lucide-react";

const ParthJoshi = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Parth Joshi",
        "jobTitle": "CFO",
        "url": "https://www.thenn.in/founders/parth-joshi",
        "image": "https://www.thenn.in/logo.jpg",
        "sameAs": [
            "https://www.linkedin.com/in/parth-joshi",
            "https://instagram.com/parthjoshi"
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
                title="Parth Joshi | CFO — THENN"
                description="Meet Parth Joshi, CFO of THENN. Managing client-side operations and ensuring financial stability and smooth project delivery."
                canonical="/founders/parth-joshi"
                structuredData={personSchema}
            />

            {/* Hero Section */}
            <section className="pt-32 lg:pt-48 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 block">
                                CFO
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] mb-8">
                                Parth <span className="text-muted-foreground/40 italic font-light">Joshi</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                                "Building strong relationships and maintaining operational excellence to ensure every client gets a smooth experience."
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
                                    <p className="font-medium">CFO, Thenn</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                                    <p className="font-medium">Will Update Soon</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection />
        </Layout>
    );
};

export default ParthJoshi;
