import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mkonnkgl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <SEO
        title="Work With Us — Start Your Digital Transformation"
        description="Ready to elevate your digital presence? Contact Thenn today to discuss your website development, UI/UX design, or brand strategy project."
        canonical="/contact"
      />
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Get in Touch
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                Let's start
                <br />
                <span className="text-muted-foreground">something great</span>
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Contact Info (Left Column) */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="text-2xl font-semibold text-foreground mb-8">
                  Prefer to chat directly?
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <a href="https://wa.me/917016565502" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 border border-border/50 rounded-xl bg-card/30 hover:bg-card/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366]/10">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-medium mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">+91 70165 65502</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <a href="mailto:hello@thenn.in"
                    className="group flex items-center gap-4 p-6 border border-border/50 rounded-xl bg-card/30 hover:bg-card/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-medium mb-1 group-hover:text-primary transition-colors">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@thenn.in</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <div className="flex items-center gap-4 p-6 border border-border/50 rounded-xl bg-card/30">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-secondary">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-medium mb-1">
                        Location
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Working remotely, globally
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <div className="relative p-8 border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center"
                      >
                        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                        <button
                          onClick={() => setStatus("idle")}
                          className="text-primary font-medium underline underline-offset-4"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                              className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                              placeholder="Your name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                              className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                              placeholder="you@company.com" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company / Organization</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                            className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Your company name" />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Tell us about your project</label>
                          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                            className="w-full px-4 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="Describe your goals, timeline, and budget range..." />
                        </div>

                        {status === "error" && (
                          <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                        )}

                        <motion.button
                          type="submit"
                          disabled={status === "submitting"}
                          className="group w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 disabled:opacity-70"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;