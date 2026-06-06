import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/sections/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Sparkles, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SEO from "@/components/SEO";
import { servicesData } from "@/data/servicesData";

const coreServices = [
  {
    id: "01",
    title: "Brand Strategy & Identity",
    description: "We distill your vision into a clear, compelling brand identity and strategic positioning that resonates with your target audience.",
    deliverables: [
      "Brand positioning",
      "Visual identity",
      "Brand guidelines",
      "Messaging framework",
    ],
    link: "/branding",
  },
  {
    id: "02",
    title: "Premium Web Design",
    description: "Bespoke, high-performance UI/UX designs that capture attention, tell your story, and convert visitors into customers.",
    deliverables: [
      "User research",
      "Wireframing",
      "Visual design",
      "Prototyping",
    ],
    link: "/ui-ux-design",
  },
  {
    id: "03",
    title: "Full-Stack Development",
    description: "Clean, performant code using modern frameworks like React and Next.js to bring your digital presence to life with speed and reliability.",
    deliverables: [
      "Frontend development",
      "CMS integration",
      "Performance optimization",
      "Responsive implementation",
    ],
    link: "/website-development",
  },
  {
    id: "04",
    title: "Custom Web Apps",
    description: "Developing powerful, scalable web applications that solve complex business challenges through custom software architecture.",
    deliverables: [
      "SaaS platforms",
      "Admin dashboards",
      "API integrations",
      "Real-time analytics",
    ],
    link: "/custom-web-apps",
  },
  {
    id: "05",
    title: "Maintenance & Support",
    description: "Peace of mind for your digital presence. We ensure your website remains secure, fast, and fully functional with ongoing support.",
    deliverables: [
      "Security monitoring",
      "Performance tuning",
      "Content updates",
      "Technical support",
    ],
    link: "/maintenance-support",
  },
];

const categories = [
  "All Services",
  "Development Services",
  "Mobile App Services",
  "Technical & Setup Services",
  "AI & Automation Services",
  "Cloud & Infrastructure",
  "Security Services",
  "WordPress Services",
  "AMC & Support",
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === "All Services" ||
        service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedServices = useMemo(() => {
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(12); // Reset page count on category change
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(12); // Reset page count on search change
  };

  return (
    <Layout>
      <SEO
        title="Digital Agency Services — Web Development & UI/UX Design"
        description="Comprehensive digital solutions including brand strategy, premium website development, high-performance UI/UX design, and motion design in India."
        canonical="/services"
      />
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                What we
                <br />
                <span className="text-muted-foreground">deliver</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                End-to-end digital solutions, from strategy to launch.
                Every service is tailored to your unique needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-foreground mb-12 border-b border-border/30 pb-4">
              Core Expertise
            </h2>
          </ScrollReveal>
          <div className="space-y-16 lg:space-y-24">
            {coreServices.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.05}>
                <Link to={service.link} className="group block">
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 lg:pb-24 border-b border-border/50 last:border-none relative transition-all duration-500"
                  >
                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 -mx-6 rounded-2xl transition-opacity duration-500" />

                    {/* Number */}
                    <div className="lg:col-span-2 relative z-10">
                      <span className="text-6xl lg:text-7xl font-bold text-foreground/10 group-hover:text-primary/10 transition-colors duration-500">
                        {service.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                          {service.title}
                        </h2>
                        <ArrowRight className="w-6 h-6 text-primary scale-0 -translate-x-4 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-4 relative z-10">
                      <h3 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                        Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Detailed Catalog Section */}
      <section className="py-20 bg-card/10 border-t border-border/30 relative">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16 max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium tracking-widest uppercase text-primary">
                  Detailed Services & Pricing
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Explore our full service suite
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                Filter and search through our comprehensive catalog of 100+ specialized services. 
                Find exactly what you need with clear, transparent base pricing.
              </p>
            </ScrollReveal>
          </div>

          {/* Search & Filter Bar */}
          <div className="mb-12 space-y-6">
            <ScrollReveal>
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services, technologies, or tags..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 placeholder:text-muted-foreground/50"
                />
              </div>
            </ScrollReveal>

            {/* Category Filter Horizontal Scroll */}
            <ScrollReveal delay={0.1}>
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                      selectedCategory === category
                        ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/10"
                        : "bg-background/40 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Catalog Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative p-6 border border-border/30 bg-background/30 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col justify-between hover:border-primary/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-500"
                >
                  <div>
                    {/* Header tags */}
                    <div className="flex justify-between items-start gap-2 mb-4">
                      <span className="text-[10px] tracking-wider font-semibold uppercase text-primary/80 px-2.5 py-1 rounded-md bg-primary/5 border border-primary/10">
                        {service.subCategory}
                      </span>
                      <span className="text-[10px] tracking-wider text-muted-foreground px-2 py-0.5 rounded border border-border/40">
                        {service.billingType}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/20">
                    <div>
                      <span className="text-[10px] text-muted-foreground block uppercase tracking-widest mb-0.5">
                        Base Price
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {service.price}
                      </span>
                    </div>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="flex items-center gap-2 text-xs font-semibold text-foreground group-hover:text-primary group-hover:gap-3 transition-all duration-300"
                    >
                      Inquire
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border border-dashed border-border/50 rounded-2xl bg-card/5"
            >
              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-1">No services found</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Try adjusting your search terms or selecting a different category.
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredServices.length > visibleCount && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="px-8 py-3.5 bg-background border border-border/60 text-foreground text-sm font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Load More Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Services;
