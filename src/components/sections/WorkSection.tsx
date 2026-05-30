import { ScrollReveal, StaggerContainer, StaggerItem, Magnetic } from "@/components/ui/scroll-reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// Updated with your real project data
const projects = [
  {
    id: 1,
    title: "Anrixh Studio",
    category: "Branding & Web Presence",
    description: "A premium portfolio and branding website for a creative design studio. Focuses on immersive visuals and seamless animations.",
    color: "from-rose-600/20 to-pink-600/5",
    link: "https://www.anrixhstudio.com/"
  },
  {
    id: 2,
    title: "KK Fireworks",
    category: "E-Commerce",
    description: "A dynamic online storefront for a fireworks retailer, built for performance, scale, and high-volume traffic.",
    color: "from-orange-600/20 to-red-600/5",
    link: "https://www.kkfireworks.com/"
  },
  {
    id: 3,
    title: "Gamify IAS Core",
    category: "Digital Platform",
    description: "The main gateway for India's premier UPSC coaching institute, featuring high-conversion landing pages and student resources.",
    color: "from-blue-600/20 to-indigo-600/5",
    link: "https://gamifyias.in"
  },
  {
    id: 4,
    title: "Gamify Exam Engine",
    category: "Testing Infrastructure",
    description: "A high-concurrency Examination Engine built to simulate exact UPSC testing conditions with real-time analytics.",
    color: "from-red-600/20 to-rose-600/5",
    link: "https://test.gamifyias.in"
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="group relative overflow-hidden rounded-[2rem] bg-card/30 backdrop-blur-sm border border-white/10 cursor-pointer h-full"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Visual Header / Image Placeholder */}
      <div className={`aspect-[16/8] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        <img 
            src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=1000`} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10" 
            loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-8 lg:p-10 relative z-20">
        <div className="flex items-center justify-between mb-4">
          <motion.span
            className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/80"
            style={{ translateZ: 30 }}
          >
            {project.category}
          </motion.span>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="p-2 rounded-full border border-white/5 transition-colors duration-300"
            style={{ translateZ: 40 }}
          >
            <ArrowUpRight className="w-5 h-5 text-foreground/70 group-hover:text-primary" />
          </motion.div>
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3" style={{ translateZ: 20 }}>
          {project.title}
        </h3>
        
        <p className="text-muted-foreground/70 leading-relaxed max-w-md" style={{ translateZ: 10 }}>
          {project.description}
        </p>
      </div>

      {/* Interactive Hover Shine */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        initial={{ backgroundPosition: "200% 0%" }}
        whileHover={{ backgroundPosition: "-200% 0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export const WorkSection = () => {
  return (
    <section className="py-32 lg:py-44 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 block">
                Portfolio
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Case Studies <br />
                <span className="text-muted-foreground/50">of Innovation.</span>
              </h2>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.2}>
            <Magnetic>
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-sm font-medium">Explore All Work</span>
                <motion.div
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </motion.div>
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" 
          staggerDelay={0.15}
        >
          {projects.map((project, index) => (
            <StaggerItem 
              key={project.id}
              // If it's the 3rd project (index 2), make it span both columns on large screens
              className={index === 2 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};