import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Apex Ventures",
    category: "Venture Capital",
    year: "2024",
    description: "Complete brand identity and web presence for a leading investment firm focused on early-stage technology companies.",
    services: ["Brand Strategy", "Web Design", "Development"],
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Modo Studio",
    category: "Architecture",
    year: "2024",
    description: "Minimalist portfolio website showcasing award-winning architectural designs with immersive visual storytelling.",
    services: ["Web Design", "Development", "Motion Design"],
    color: "from-secondary to-card",
  },
  {
    id: 3,
    title: "Pulse Health",
    category: "Healthcare Tech",
    year: "2023",
    description: "Digital platform connecting patients with specialists, featuring intuitive booking and consultation management.",
    services: ["UX Design", "Web Design", "Development"],
    color: "from-muted to-background",
  },
  {
    id: 4,
    title: "Nova Finance",
    category: "Fintech",
    year: "2023",
    description: "Modern banking dashboard with real-time analytics and seamless transaction management for digital-first users.",
    services: ["Brand Strategy", "Web Design", "Development"],
    color: "from-primary/15 to-secondary",
  },
  {
    id: 5,
    title: "Zenith Gallery",
    category: "Art & Culture",
    year: "2023",
    description: "Virtual exhibition space for contemporary artists featuring immersive viewing experiences and collector tools.",
    services: ["Web Design", "Development", "Motion Design"],
    color: "from-card to-muted",
  },
  {
    id: 6,
    title: "Craft Coffee",
    category: "Hospitality",
    year: "2023",
    description: "E-commerce platform for specialty coffee roasters with subscription management and brewing guides.",
    services: ["Brand Strategy", "Web Design", "Development"],
    color: "from-secondary/50 to-background",
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Our Work
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                Selected
                <br />
                <span className="text-muted-foreground">projects</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A curated collection of our finest work. Each project represents 
                a unique challenge and a tailored solution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.05}>
                <motion.div
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 border border-border/50 rounded-2xl bg-card/30 hover:bg-card/60 transition-all duration-500"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className={`lg:col-span-5 aspect-[16/10] rounded-xl bg-gradient-to-br ${project.color} overflow-hidden`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-7xl lg:text-8xl font-bold text-foreground/5">
                        {project.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium tracking-widest uppercase text-primary">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h2>
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 text-xs font-medium text-muted-foreground border border-border/50 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
