import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Apex Ventures",
    category: "Venture Capital",
    description: "Brand identity and web presence for a leading investment firm.",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Modo Studio",
    category: "Architecture",
    description: "Minimalist portfolio showcasing award-winning designs.",
    color: "from-secondary to-card",
  },
  {
    id: 3,
    title: "Pulse Health",
    category: "Healthcare Tech",
    description: "Digital platform connecting patients with specialists.",
    color: "from-muted to-background",
  },
];

export const WorkSection = () => {
  return (
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Selected Work
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Projects that
                <br />
                <span className="text-muted-foreground">speak volumes</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Image placeholder */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-bold text-foreground/5">
                      {project.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
