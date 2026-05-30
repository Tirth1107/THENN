import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, GraduationCap, LayoutPanelLeft, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";

const projects = [
  {
    id: 1,
    title: "Anrixh Studio",
    category: "Branding & Web Presence",
    year: "2026",
    description: "A premium portfolio and branding website for a creative design studio. Focuses on immersive visuals and seamless animations.",
    services: ["Brand Strategy", "Next.js", "UI/UX Design"],
    color: "from-rose-600/30 to-pink-600/10",
    icon: <LayoutPanelLeft className="w-8 h-8 text-rose-400" />,
    link: "https://www.anrixhstudio.com/",
  },
  {
    id: 2,
    title: "KK Fireworks",
    category: "E-Commerce",
    year: "2026",
    description: "A dynamic online storefront for a fireworks retailer, built for performance, scale, and high-volume traffic.",
    services: ["E-Commerce", "React", "Payment Integration"],
    color: "from-orange-600/30 to-red-600/10",
    icon: <ExternalLink className="w-8 h-8 text-orange-400" />,
    link: "https://www.kkfireworks.com/",
  },
  {
    id: 3,
    title: "Gamify IAS Core",
    category: "Digital Platform",
    year: "2026",
    description: "The main gateway for India's premier UPSC coaching institute, featuring high-conversion landing pages and student resources.",
    services: ["Web Architecture", "UI/UX Design", "Frontend"],
    color: "from-blue-600/30 to-indigo-600/10",
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    link: "https://gamifyias.in",
  },
  {
    id: 4,
    title: "Gamify AI Assistant",
    category: "AI Integration",
    year: "2026",
    description: "An intelligent, real-time study partner providing instant doubt clearance and personalized study paths.",
    services: ["AI Training", "LLM Integration", "NLP"],
    color: "from-purple-600/30 to-violet-600/10",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    link: "https://ai.gamifyias.in",
  },
  {
    id: 5,
    title: "Gamify PDF AI",
    category: "AI Document Analysis",
    year: "2026",
    description: "A specialized AI tool that allows students to interactively chat with and extract insights from dense PDF study materials.",
    services: ["Document Parsing", "RAG Pipeline", "AI Integration"],
    color: "from-cyan-600/30 to-blue-600/10",
    icon: <LayoutPanelLeft className="w-8 h-8 text-cyan-400" />,
    link: "https://pdf.ai.gamifyias.in",
  },
  {
    id: 6,
    title: "Gamify Support",
    category: "Customer Service Portal",
    year: "2026",
    description: "A streamlined contact and support hub designed to handle high volumes of student inquiries efficiently.",
    services: ["Support Systems", "Frontend", "API Integration"],
    color: "from-emerald-600/30 to-teal-600/10",
    icon: <ExternalLink className="w-8 h-8 text-emerald-400" />,
    link: "https://contact.gamifyias.in",
  },
  {
    id: 7,
    title: "Gamify LMS",
    category: "Learning Management",
    year: "2026",
    description: "A robust Learning Management System built to deliver video lectures, notes, and progress tracking to thousands of aspirants.",
    services: ["LMS Architecture", "Backend Engineering", "Video Streaming"],
    color: "from-amber-600/30 to-yellow-600/10",
    icon: <GraduationCap className="w-8 h-8 text-amber-400" />,
    link: "https://lms.gamifyias.in",
  },
  {
    id: 8,
    title: "Gamify Exam Engine",
    category: "Testing Infrastructure",
    year: "2026",
    description: "A high-concurrency Examination Engine built to simulate exact UPSC testing conditions with real-time analytics.",
    services: ["Real-time Testing", "Data Analytics", "Scalable Infrastructure"],
    color: "from-red-600/30 to-rose-600/10",
    icon: <LayoutPanelLeft className="w-8 h-8 text-red-400" />,
    link: "https://test.gamifyias.in",
  }
];

const Work = () => {
  return (
    <Layout>
      <SEO
        title="Expert Website Development & Digital Design Portfolio"
        description="Explore Thenn's portfolio of selected projects, featuring high-performance websites, AI integrations, and strategic brand transformations for modern education and tech leaders."
        canonical="/work"
      />
      {/* Hero Section */}
      <section className="pt-40 lg:pt-52 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                  Featured Case Studies
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95] mb-8">
                Crafting the future <br />
                <span className="text-muted-foreground/40 italic">of learning.</span>
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <StaggerContainer className="space-y-12 lg:space-y-20" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 rounded-[2.5rem] bg-card/20 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  {/* Project Visual side */}
                  <div className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                    <img 
                        src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=1000`} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                        loading="lazy"
                    />
                  </div>

                  {/* Project Content side */}
                  <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                        {project.category}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground/50">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-semibold mb-6 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.services.map((service) => (
                        <span key={service} className="px-4 py-1.5 text-[11px] font-semibold text-foreground/70 bg-white/5 border border-white/10 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* NEW: Updated Link Section */}
                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group/btn"
                      >
                        Visit Live Project
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>

                      <div className="hidden sm:block">
                        <span className="text-[10px] text-muted-foreground/40 font-mono uppercase">
                          Direct Access Enabled
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h3 className="text-3xl lg:text-4xl font-semibold mb-8">Ready to launch your vision?</h3>
            <button className="px-10 py-5 bg-foreground text-background rounded-full font-bold hover:bg-primary transition-colors duration-300">
              Start a Conversation
            </button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Work;