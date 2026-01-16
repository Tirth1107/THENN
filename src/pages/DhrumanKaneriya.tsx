import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, MessageCircle, Instagram, ShieldCheck, PieChart, Users } from "lucide-react";

const DhrumanKaneriya = () => {
    return (
        <Layout>
            <SEO
                title="Dhruman Kaneriya | Co-Founder & CFO — THENN"
                description="Meet Dhruman Kaneriya, Co-Founder & CFO of THENN. Managing client-side operations and ensuring financial stability and smooth project delivery."
                canonical="/founders/dhruman-kaneriya"
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
                                Co-Founder & CFO
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] mb-8">
                                Dhruman <span className="text-muted-foreground/40 italic font-light">Kaneriya</span>
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
                                    <p className="font-medium">Co-Founder & CFO, Thenn</p>
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

            {/* About & Content Sections */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-12">
                            <ScrollReveal>
                                <h2 className="text-4xl font-semibold tracking-tight">About Me</h2>
                                <div className="mt-6 space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                                    <p>
                                        I handle the non-technical side of the company that keeps everything organized and professional.
                                        From client coordination to financial management, my goal is to make sure every client gets a smooth experience and the company operates efficiently.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <h2 className="text-4xl font-semibold tracking-tight">What I Do at THENN</h2>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light mb-8">
                                    As Co-Founder & CFO, I take care of the operational and financial backbone of THENN.
                                </p>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { icon: MessageCircle, title: "Client Communication", desc: "Ensuring clear and consistent communication from start to finish." },
                                        { icon: ShieldCheck, title: "Project Coordination", desc: "Keeping everything on track and managing follow-ups." },
                                        { icon: PieChart, title: "Finance Management", desc: "Budgeting and planning for healthy business growth." },
                                        { icon: Users, title: "Operational Decisions", desc: "Developing efficient workflows and proper documentation." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors group">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/2 border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                                                <p className="text-muted-foreground font-light">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="space-y-12 lg:pl-12">
                            <ScrollReveal>
                                <h2 className="text-4xl font-semibold tracking-tight">Work Style</h2>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light mb-8">
                                    I believe in keeping things clear, professional, well-managed, and structured.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Clear & Professional", "Well-managed", "Client-focused", "Transparent", "Efficient", "Reliable"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/40">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <div className="p-8 md:p-10 rounded-3xl bg-foreground text-background relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                                    <h3 className="text-3xl font-bold mb-4">Vision</h3>
                                    <p className="text-lg leading-relaxed opacity-90 font-light">
                                        My vision is to help THENN grow into a trusted brand known for professional service, strong client relationships, and long-term reliability.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Connect */}
            {/* <section className="py-24">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-semibold mb-12">Let's Connect</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://wa.me/919999999999"
                                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 bg-card/50"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-medium">WhatsApp</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="https://instagram.com/dhrumankaneriya"
                                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 bg-card/50"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="font-medium">Instagram</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5 }}
                                href="mailto:dhruman@thenn.in"
                                className="flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background hover:bg-primary transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="font-medium text-background group-hover:text-primary-foreground">Email Me</span>
                            </motion.a>
                        </div>
                    </ScrollReveal>
                </div>
            </section> */}

            <CTASection />
        </Layout>
    );
};

export default DhrumanKaneriya;
