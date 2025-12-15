import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border/50 p-12 lg:p-20">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-6 block">
                Ready to Start?
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                Let's create something
                <br />
                <span className="text-primary">extraordinary</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Your brand deserves a digital presence that sets you apart. 
                Let's discuss how we can bring your vision to life.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/917016565502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-foreground font-medium border border-border rounded-full hover:bg-secondary transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
