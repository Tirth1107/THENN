import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const footerLinks = {
  navigation: [
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Founders", href: "/founders" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/website-development" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "Branding", href: "/branding" },
    { name: "Custom Web Apps", href: "/custom-web-apps" },
    { name: "Maintenance", href: "/maintenance-support" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/thenn.in" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <ScrollReveal className="lg:col-span-3">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-foreground">
              Thenn
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
              Crafting digital experiences that elevate brands and inspire audiences.
              Premium design and high-performance development.
            </p>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <h4 className="text-sm font-medium text-foreground mb-4">Experience</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <h4 className="text-sm font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Connect */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <h4 className="text-sm font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3} className="lg:col-span-2">
            <h4 className="text-sm font-medium text-foreground mb-4">Contact</h4>
            <a
              href="https://wa.me/917016565502"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 70165 65502
            </a>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <ScrollReveal delay={0.4} className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Thenn. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with ❤️ and precision by Thenn.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
