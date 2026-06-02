import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="Insights & Articles | Thenn Blog"
        description="Explore the latest insights on premium website development, UI/UX design, Artificial Intelligence, and modern brand strategy from the Thenn team."
        canonical="/blog"
      />
      <div className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <ScrollReveal>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Insights &<br />
                <span className="text-muted-foreground">Perspectives.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Deep dives into AI in web development, performance optimization, and crafting premium digital experiences.
              </p>
            </ScrollReveal>
          </div>

          {/* Blog Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <StaggerItem key={blog.id}>
                <Link to={`/blog/${blog.slug}`} className="group block h-full">
                  <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-2">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider rounded-full border border-white/10">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground uppercase tracking-widest">
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-auto text-sm font-semibold">
                        <span>Read Article</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
