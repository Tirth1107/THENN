import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, GraduationCap, LayoutPanelLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gamify IAS Academy",
    category: "Full-Scale EdTech Transformation",
    year: "2025",
    description: "A complete digital overhaul for a premier UPSC institute. We built a high-conversion ecosystem that bridges the gap between traditional coaching and modern digital learning.",
    services: ["Brand Strategy", "Next.js", "UI/UX Design"],
    color: "from-blue-600/30 to-indigo-600/10",
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    link: "https://gamifyias.com/secondmom", // ADD YOUR LINK HERE
  },
  {
    id: 2,
    title: "LMS",
    category: "Infrastructure Development",
    year: "2024",
    description: "A robust Learning Management System and high-concurrency Examination Engine. Built to simulate exact UPSC conditions with real-time analytics.",
    services: ["LMS Architecture", "Supabase", "Real-time Testing"],
    color: "from-emerald-600/30 to-teal-600/10",
    icon: <LayoutPanelLeft className="w-8 h-8 text-emerald-400" />,
    link: "https://gamifyiaslms.vercel.app", // ADD YOUR LINK HERE
  },
  {
    id: 3,
    title: "Gamify AI Test Series",
    category: "Infrastructure Development",
    year: "2024",
    description: "A robust Learning Management System and high-concurrency Examination Engine. Built to simulate exact UPSC conditions with real-time analytics.",
    services: ["LMS Architecture", "Supabase", "Real-time Testing"],
    color: "from-emerald-600/30 to-teal-600/10",
    icon: <LayoutPanelLeft className="w-8 h-8 text-emerald-400" />,
    link: "https://gamifyiastest.web.app", // ADD YOUR LINK HERE
  },
  {
    id: 4,
    title: "Gamify AI Assistant",
    category: "AI Integration",
    year: "2025",
    description: "An intelligent study partner that provides instant doubt clearance and personalized study paths integrated directly into the student dashboard.",
    services: ["AI Training", "LLM Integration", "NLP"],
    color: "from-purple-600/30 to-violet-600/10",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    link: "https://gamifyiasai.web.app", // ADD YOUR LINK HERE
  },
];

const Work = () => {
  return (
    <Layout>
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
                  <div className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <motion.div
                      className="relative z-10 p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
                      whileHover={{ scale: 1.05, rotate: -2 }}
                    >
                      {project.icon}
                    </motion.div>
                    <span className="absolute bottom-6 left-8 text-6xl font-black text-white/5 select-none">
                      0{project.id}
                    </span>
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