import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    title: "Clarity Over Complexity",
    description: "We believe the best solutions are often the simplest. Every design decision serves a purpose.",
  },
  {
    title: "Quality Without Compromise",
    description: "We never cut corners. Every pixel, every line of code, every interaction matters.",
  },
  {
    title: "Partnership, Not Transaction",
    description: "We invest in relationships. Your success is our success, and we're here for the long term.",
  },
  {
    title: "Continuous Evolution",
    description: "The digital landscape evolves, and so do we. We stay ahead so you stay relevant.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                About Theन्न
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                We craft digital
                <br />
                <span className="text-muted-foreground">experiences</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A design-first agency obsessed with creating digital experiences
                that elevate brands and inspire audiences.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-32 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* <ScrollReveal>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl font-bold text-foreground/5">T</span>
                </div>
              </div>
            </ScrollReveal> */}

            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-8">
                  Design is not just what it looks like.
                  Design is how it works.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Theन्न was founded with a simple belief: exceptional design is the
                  foundation of every successful brand. In a world saturated with noise,
                  we create clarity.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We're a small team of strategists, designers, and developers who
                  believe in doing fewer things, but doing them exceptionally well.
                  Quality over quantity, always.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every project we take on receives our full attention. We partner
                  with brands we believe in and invest ourselves in their success.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 lg:py-40 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Our Values
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                What we
                <br />
                <span className="text-muted-foreground">stand for</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="p-8 lg:p-10 border border-border/50 rounded-2xl bg-card/50">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default About;
