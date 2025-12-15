import { ScrollReveal, Magnetic } from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} className="py-32 lg:py-44">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-secondary/20 to-card border border-border/30 p-12 lg:p-24"
          style={{ y, opacity }}
        >
          {/* Animated glows */}
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative z-10 max-w-3xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-8 block">
                Ready to Start?
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-8">
                Let's create something
                <br />
                <span className="text-primary">extraordinary</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
                Your brand deserves a digital presence that sets you apart. 
                Let's discuss how we can bring your vision to life.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic strength={0.15}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <motion.div
                      className="absolute inset-0 bg-foreground"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <a
                    href="https://wa.me/917016565502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-foreground font-medium border border-border rounded-full overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">Chat on WhatsApp</span>
                    <motion.div
                      className="absolute inset-0 bg-[#25D366]"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </a>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
