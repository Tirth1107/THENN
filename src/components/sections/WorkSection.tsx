import { ScrollReveal, StaggerContainer, StaggerItem, Magnetic } from "@/components/ui/scroll-reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

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

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image placeholder */}
      <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-primary/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="w-full h-full flex items-center justify-center">
          <motion.span
            className="text-7xl lg:text-8xl font-bold text-foreground/5"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            {project.id.toString().padStart(2, "0")}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <motion.span
            className="text-xs font-medium tracking-[0.15em] uppercase text-primary"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            {project.category}
          </motion.span>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
        }}
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export const WorkSection = () => {
  return (
    <section className="py-32 lg:py-44">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6 block">
                Selected Work
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Projects that
                <br />
                <span className="text-muted-foreground">speak volumes</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Magnetic>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                View All Projects
                <motion.span
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.2}>
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
