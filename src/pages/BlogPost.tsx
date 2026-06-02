import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { blogs } from "@/data/blogs";
import NotFound from "./NotFound";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <NotFound />;
  }

  // Simple parser to convert our basic markdown string into styled HTML
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4 text-foreground">{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} className="text-3xl font-bold mt-12 mb-6 text-foreground">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(i => i.startsWith('- ')).map(i => i.replace('- ', ''));
        return (
          <ul key={idx} className="list-disc pl-6 mb-6 text-muted-foreground/90 space-y-2 text-lg">
            {items.map((item, i) => {
                const parts = item.split('**');
                return (
                    <li key={i}>
                        {parts.map((part, index) => index % 2 === 1 ? <strong key={index} className="text-foreground">{part}</strong> : part)}
                    </li>
                );
            })}
          </ul>
        );
      }
      
      let p = paragraph.trim();
      if (!p) return null;
      
      const parts = p.split('`');
      const formatted = parts.map((part, index) => index % 2 === 1 ? <code key={index} className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm">{part}</code> : part);

      return <p key={idx} className="text-lg text-muted-foreground/90 leading-relaxed mb-6">{formatted}</p>;
    });
  };

  return (
    <Layout>
      <SEO
        title={`${blog.title}`}
        description={blog.excerpt}
        canonical={`/blog/${blog.slug}`}
      />
      <article className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {blog.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="text-foreground font-semibold">{blog.author}</p>
                <p className="text-muted-foreground">{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          </div>

          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-none">
            {renderContent(blog.content)}
          </div>
          
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
