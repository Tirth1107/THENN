export interface ServiceItem {
  id: string;
  category: string;
  name: string;
  price: string;
  billingType: string;
  subCategory: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  // --- Development Services ---
  {
    id: "dev-01",
    category: "Development Services",
    name: "Custom Website Development",
    price: "₹12,000+",
    billingType: "One-time",
    subCategory: "Website",
    description: "Bespoke website tailored to your brand, optimized for performance and conversion."
  },
  {
    id: "dev-02",
    category: "Development Services",
    name: "E-commerce Website Development",
    price: "₹60,000+",
    billingType: "One-time",
    subCategory: "E-Commerce",
    description: "High-performance online store with secure checkout, product catalog, and admin portal."
  },
  {
    id: "dev-03",
    category: "Development Services",
    name: "Web Application Development",
    price: "₹12,000+",
    billingType: "One-time",
    subCategory: "Web App",
    description: "Interactive, feature-rich web applications built using cutting-edge JS/TS frameworks."
  },
  {
    id: "dev-04",
    category: "Development Services",
    name: "Mobile App Development (Android/iOS)",
    price: "₹50,000 - ₹75,000",
    billingType: "One-time",
    subCategory: "Mobile",
    description: "Cross-platform mobile apps providing native performance and seamless user experience."
  },
  {
    id: "dev-05",
    category: "Development Services",
    name: "Progressive Web App (PWA)",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Web App",
    description: "Web apps with native mobile feels, offline capabilities, and push notifications."
  },
  {
    id: "dev-06",
    category: "Development Services",
    name: "SaaS Development",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "SaaS",
    description: "Multi-tenant software-as-a-service platforms with subscription and user management."
  },
  {
    id: "dev-07",
    category: "Development Services",
    name: "CRM Development",
    price: "₹1,50,000+",
    billingType: "One-time",
    subCategory: "CRM",
    description: "Custom Customer Relationship Management tools to streamline your sales and pipelines."
  },
  {
    id: "dev-08",
    category: "Development Services",
    name: "ERP Development (Business Mgmt)",
    price: "₹1,00,000 - ₹3,00,000",
    billingType: "One-time",
    subCategory: "ERP",
    description: "Enterprise Resource Planning software to centralize operations, human resources, and finance."
  },
  {
    id: "dev-09",
    category: "Development Services",
    name: "API Development",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "API",
    description: "Secure, RESTful, or GraphQL APIs to connect applications and expose service logic."
  },
  {
    id: "dev-10",
    category: "Development Services",
    name: "Third-Party API Integration",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "API",
    description: "Connect external services (CRMs, analytics, communications) to your existing stack."
  },
  {
    id: "dev-11",
    category: "Development Services",
    name: "Payment Gateway Integration",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Integration",
    description: "Seamless checkout integration supporting UPI, credit cards, Stripe, Razorpay, etc."
  },
  {
    id: "dev-12",
    category: "Development Services",
    name: "Custom Dashboard Development",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Dashboard",
    description: "Bespoke admin panels, metrics tracking, and visualization pipelines."
  },
  {
    id: "dev-13",
    category: "Development Services",
    name: "Software Maintenance",
    price: "Custom Quote",
    billingType: "Recurring",
    subCategory: "Maintenance",
    description: "Periodic dependency updates, bug fixes, and security patches to keep software running."
  },
  {
    id: "dev-14",
    category: "Development Services",
    name: "Small Business Website",
    price: "₹25,000+",
    billingType: "One-time",
    subCategory: "Website",
    description: "Responsive informational websites tailored to get small business establishments online."
  },
  {
    id: "dev-15",
    category: "Development Services",
    name: "Corporate Website",
    price: "₹30,000+",
    billingType: "One-time",
    subCategory: "Website",
    description: "Highly professional web presence built for enterprise authority and scaling."
  },
  {
    id: "dev-16",
    category: "Development Services",
    name: "UI/UX Design",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Design",
    description: "Interactive Figma designs, user personas, wireframes, and design system creation."
  },
  {
    id: "dev-17",
    category: "Development Services",
    name: "Landing Page Development",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Website",
    description: "High-converting, performance-optimized single landing pages for campaigns."
  },
  {
    id: "dev-18",
    category: "Development Services",
    name: "MVP Development for Startups",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Web App",
    description: "Rapid development of Minimum Viable Product to test business theories in the market."
  },
  {
    id: "dev-19",
    category: "Development Services",
    name: "Website Redesign",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Website",
    description: "Modern UI facelift and performance optimization of legacy platforms."
  },
  {
    id: "dev-20",
    category: "Development Services",
    name: "Progressive Web App Conversion",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Web App",
    description: "Retrofit existing React/Next apps with service workers and offline behaviors."
  },
  {
    id: "dev-21",
    category: "Development Services",
    name: "Admin Panel Development",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Web App",
    description: "Custom admin interface to manage application database collections."
  },
  {
    id: "dev-22",
    category: "Development Services",
    name: "Internal Business Tools",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Web App",
    description: "Bespoke tools to automate tasks and connect internal team pipelines."
  },

  // --- Mobile App Services ---
  {
    id: "mob-01",
    category: "Mobile App Services",
    name: "Mobile App Development (Android/iOS)",
    price: "₹50,000 - ₹75,000",
    billingType: "One-time",
    subCategory: "Development",
    description: "Bespoke React Native or Flutter mobile applications."
  },
  {
    id: "mob-02",
    category: "Mobile App Services",
    name: "App Maintenance",
    price: "Custom Quote",
    billingType: "Recurring",
    subCategory: "Maintenance",
    description: "OS updates compliance, version updates, and app store SDK maintenance."
  },
  {
    id: "mob-03",
    category: "Mobile App Services",
    name: "App Store Optimization (ASO)",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Marketing",
    description: "Optimize keywords, description, and screenshots to rank higher in app stores."
  },
  {
    id: "mob-04",
    category: "Mobile App Services",
    name: "Play Store Listing Setup",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Manage privacy policies, asset uploads, and developer account configurations."
  },
  {
    id: "mob-05",
    category: "Mobile App Services",
    name: "App Performance Optimization",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Optimization",
    description: "Decrease app bundle size, optimize rendering cycles, and memory leak analysis."
  },
  {
    id: "mob-06",
    category: "Mobile App Services",
    name: "App Publishing",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Complete setup and submission guidance for App Store & Google Play reviews."
  },
  {
    id: "mob-07",
    category: "Mobile App Services",
    name: "New App Platform Setup",
    price: "₹25,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Create Apple/Google developer accounts, configure certificates, and push setups."
  },
  {
    id: "mob-08",
    category: "Mobile App Services",
    name: "App UI Fixes",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "UI/UX",
    description: "Refining visual bugs, alignment issues, and UI component styling in mobile viewports."
  },
  {
    id: "mob-09",
    category: "Mobile App Services",
    name: "App Analytics Setup",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Analytics",
    description: "Integrate Firebase Analytics or Mixpanel to monitor user events."
  },
  {
    id: "mob-10",
    category: "Mobile App Services",
    name: "App Crash Analytics",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Analytics",
    description: "Setup Crashlytics and error boundary reporting for instant alert tracking."
  },

  // --- Technical & Setup Services ---
  {
    id: "tech-01",
    category: "Technical & Setup Services",
    name: "Backend Integration",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "Integration",
    description: "Connect your frontend with custom REST APIs, Express/Node.js, or Supabase backends."
  },
  {
    id: "tech-02",
    category: "Technical & Setup Services",
    name: "Hosting Setup",
    price: "₹3,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Deploy websites to Vercel, Netlify, Hostinger, or VPS systems."
  },
  {
    id: "tech-03",
    category: "Technical & Setup Services",
    name: "Database Integration",
    price: "₹8,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Integrate MySQL, PostgreSQL, MongoDB, or Redis caches."
  },
  {
    id: "tech-04",
    category: "Technical & Setup Services",
    name: "AI Chatbot Integration",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "AI Integration",
    description: "Embed custom LLM agents or third-party chatbots into your customer-facing pages."
  },
  {
    id: "tech-05",
    category: "Technical & Setup Services",
    name: "DNS Setup",
    price: "₹2,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Configure custom domains, nameservers, MX records, and SSL cert bindings."
  },
  {
    id: "tech-06",
    category: "Technical & Setup Services",
    name: "WhatsApp / Other API Integration",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Integration",
    description: "Connect business automation tools like WhatsApp Cloud API for user notifications."
  },
  {
    id: "tech-07",
    category: "Technical & Setup Services",
    name: "AI WhatsApp Reply Bot",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "AI Bot",
    description: "Run automated conversational bots inside WhatsApp business channels using LLMs."
  },
  {
    id: "tech-08",
    category: "Technical & Setup Services",
    name: "WordPress Fixes",
    price: "₹2,000+",
    billingType: "One-time",
    subCategory: "WordPress",
    description: "Resolve plugin conflicts, database errors, and visual CSS bugs in WordPress."
  },
  {
    id: "tech-09",
    category: "Technical & Setup Services",
    name: "WordPress Hosting Setup",
    price: "₹3,000",
    billingType: "One-time",
    subCategory: "WordPress",
    description: "Configure high-speed hostings (Hostinger, SiteGround) for stable WordPress operations."
  },
  {
    id: "tech-10",
    category: "Technical & Setup Services",
    name: "WordPress UI Customization",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "WordPress",
    description: "Custom CSS adjustments, layout edits, and page builder customization."
  },
  {
    id: "tech-11",
    category: "Technical & Setup Services",
    name: "Website UI Refinement",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "UI/UX",
    description: "Clean up layout inconsistencies, responsive behavior, and visual balance."
  },
  {
    id: "tech-12",
    category: "Technical & Setup Services",
    name: "App UI Fixes",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "UI/UX",
    description: "Fix rendering glitches, alignment, and theme variables inside custom applications."
  },
  {
    id: "tech-13",
    category: "Technical & Setup Services",
    name: "New App Platform Setup",
    price: "₹25,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Set up staging and production environments on cloud servers."
  },
  {
    id: "tech-14",
    category: "Technical & Setup Services",
    name: "App Publishing",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Guidance and coordination to pass App Store/Play Store review phases."
  },
  {
    id: "tech-15",
    category: "Technical & Setup Services",
    name: "AI Calling Setup",
    price: "₹10,000 - ₹15,000",
    billingType: "One-time",
    subCategory: "AI",
    description: "Integrate synthetic voice bots (like Vapi, Retell) for telephonic automation."
  },
  {
    id: "tech-16",
    category: "Technical & Setup Services",
    name: "Email Setup",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Configure Google Workspace or Microsoft 365 setups for enterprise emails."
  },
  {
    id: "tech-17",
    category: "Technical & Setup Services",
    name: "Custom Domain Email",
    price: "₹2,500",
    billingType: "One-time",
    subCategory: "Setup",
    description: "Setup custom email records (MX, SPF, DKIM) for secure, non-spam delivery."
  },
  {
    id: "tech-18",
    category: "Technical & Setup Services",
    name: "SEO Refinement",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "SEO",
    description: "Improve core meta tags, schema validation, and index status across pages."
  },
  {
    id: "tech-19",
    category: "Technical & Setup Services",
    name: "SEO From Scratch",
    price: "₹10,000/month",
    billingType: "Monthly",
    subCategory: "SEO",
    description: "Ongoing keyword optimization, backlink strategies, and search dashboard setups."
  },
  {
    id: "tech-20",
    category: "Technical & Setup Services",
    name: "Blog Posting",
    price: "₹500/post",
    billingType: "Per Post",
    subCategory: "Content",
    description: "Structure and publish SEO-optimized blogs with semantic formatting."
  },
  {
    id: "tech-21",
    category: "Technical & Setup Services",
    name: "Blog Feature Addition",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Content",
    description: "Add category filters, tag pages, and search inputs to your blog system."
  },
  {
    id: "tech-22",
    category: "Technical & Setup Services",
    name: "App Analytics Setup",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Analytics",
    description: "Configure click tracking, funnel analysis, and conversions in apps."
  },
  {
    id: "tech-23",
    category: "Technical & Setup Services",
    name: "App Crash Analytics",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "Analytics",
    description: "Deploy real-time stack trace logging for software crashes."
  },
  {
    id: "tech-24",
    category: "Technical & Setup Services",
    name: "Website Analytics Setup",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "Analytics",
    description: "Setup Google Analytics 4, Tag Manager, and privacy consent overlays."
  },
  {
    id: "tech-25",
    category: "Technical & Setup Services",
    name: "Web/App Recovery",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Recovery",
    description: "Restore corrupted data layers, server crashes, and broken server states."
  },
  {
    id: "tech-26",
    category: "Technical & Setup Services",
    name: "Database Recovery",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Recovery",
    description: "Recover lost SQL tables, fix corrupted databases, and restore backup snapshots."
  },
  {
    id: "tech-27",
    category: "Technical & Setup Services",
    name: "Scaling Services",
    price: "₹20,000",
    billingType: "One-time",
    subCategory: "Infrastructure",
    description: "Optimize server resources, upgrade memory bounds, and database optimizations."
  },
  {
    id: "tech-28",
    category: "Technical & Setup Services",
    name: "AWS Setup",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Cloud",
    description: "Configure clean EC2 instances, S3 buckets, and basic network firewalls."
  },

  // --- AI & Automation Services ---
  {
    id: "ai-01",
    category: "AI & Automation Services",
    name: "AI Chatbot",
    price: "₹20,000",
    billingType: "One-time",
    subCategory: "Chatbot",
    description: "Context-aware conversational bot with database search capabilities."
  },
  {
    id: "ai-02",
    category: "AI & Automation Services",
    name: "WhatsApp API Integration",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Integration",
    description: "Setup and register official WhatsApp Cloud business channels."
  },
  {
    id: "ai-03",
    category: "AI & Automation Services",
    name: "AI Voice Calling System",
    price: "₹80,000",
    billingType: "One-time",
    subCategory: "Voice AI",
    description: "Real-time AI voice agents for automated outbound calling and inbound query answers."
  },
  {
    id: "ai-04",
    category: "AI & Automation Services",
    name: "AI Lead Qualification Bot",
    price: "₹25,000",
    billingType: "One-time",
    subCategory: "Lead Gen",
    description: "Automated AI conversational flows to filter leads before CRM logging."
  },
  {
    id: "ai-05",
    category: "AI & Automation Services",
    name: "AI Appointment Booking System",
    price: "₹20,000",
    price_corrected: "₹30,000",
    price_val: "₹30,000",
    billingType: "One-time",
    subCategory: "Booking",
    description: "AI conversational booking integrated with Google Calendar/Cal.com."
  },
  {
    id: "ai-06",
    category: "AI & Automation Services",
    name: "AI Customer Support Agent",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Support",
    description: "Custom-trained customer agent reading private documentation pages."
  },
  {
    id: "ai-07",
    category: "AI & Automation Services",
    name: "AI Content Generation System",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Content",
    description: "Generate marketing copies, blog drafts, or assets based on templates."
  },
  {
    id: "ai-08",
    category: "AI & Automation Services",
    name: "AI Email Automation",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Automation",
    description: "AI-driven response parsing and drafts generation for inbound sales emails."
  },
  {
    id: "ai-09",
    category: "AI & Automation Services",
    name: "AI Workflow Automation",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Automation",
    description: "Make or Zapier automations parsing inputs and forwarding to database tables."
  },
  {
    id: "ai-10",
    category: "AI & Automation Services",
    name: "AI CRM",
    price: "₹35,000",
    billingType: "One-time",
    subCategory: "CRM",
    description: "Bespoke database logic that clusters and tags clients based on chat context."
  },
  {
    id: "ai-11",
    category: "AI & Automation Services",
    name: "AI Sales Assistant",
    price: "Custom Quote",
    billingType: "One-time",
    subCategory: "Sales",
    description: "Interactive helper suggesting contextual items to close leads during pitches."
  },

  // --- Cloud & Infrastructure ---
  {
    id: "cloud-01",
    category: "Cloud & Infrastructure",
    name: "AWS Setup & Management",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "AWS",
    description: "Optimize AWS configurations, scale instances, and setup secure networking."
  },
  {
    id: "cloud-02",
    category: "Cloud & Infrastructure",
    name: "Azure Cloud Setup",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Azure",
    description: "Setup and configure databases and microservices on Microsoft Azure."
  },
  {
    id: "cloud-03",
    category: "Cloud & Infrastructure",
    name: "Google Cloud Setup",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "GCP",
    description: "Deploy scalable platforms on Google Cloud and manage Kubernetes clusters."
  },
  {
    id: "cloud-04",
    category: "Cloud & Infrastructure",
    name: "VPS Setup",
    price: "₹5,000",
    billingType: "One-time",
    subCategory: "VPS",
    description: "Provision and secure virtual private servers (Linode, DigitalOcean, Hostinger)."
  },
  {
    id: "cloud-05",
    category: "Cloud & Infrastructure",
    name: "Dedicated Server Management",
    price: "Custom Quote",
    billingType: "Recurring",
    subCategory: "Server",
    description: "Maintain bare metal server configurations and manage resources."
  },
  {
    id: "cloud-06",
    category: "Cloud & Infrastructure",
    name: "Cloud Migration",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "Migration",
    description: "Seamlessly move physical servers or old hosts to public cloud architectures."
  },
  {
    id: "cloud-07",
    category: "Cloud & Infrastructure",
    name: "Load Balancer Configuration",
    price: "₹10,000",
    billingType: "One-time",
    subCategory: "Config",
    description: "Distribute user traffic across clusters for maximum server availability."
  },
  {
    id: "cloud-08",
    category: "Cloud & Infrastructure",
    name: "CDN Configuration",
    price: "₹25,000",
    billingType: "One-time",
    subCategory: "Config",
    description: "Configure Cloudflare or AWS CloudFront to serve assets globally at sub-second speed."
  },
  {
    id: "cloud-09",
    category: "Cloud & Infrastructure",
    name: "DevOps Setup",
    price: "₹15,000",
    billingType: "One-time",
    subCategory: "DevOps",
    description: "Setup CI/CD pipelines (GitHub Actions) for automatic testing and deployments."
  },
  {
    id: "cloud-10",
    category: "Cloud & Infrastructure",
    name: "Backup & Disaster Recovery",
    price: "₹15,000+",
    billingType: "One-time",
    subCategory: "Recovery",
    description: "Setup cron-jobs to backup databases hourly to offsite secure cloud systems."
  },

  // --- Security Services ---
  {
    id: "sec-01",
    category: "Security Services",
    name: "Website Security Audit",
    price: "₹10,000 - ₹25,000",
    billingType: "One-time",
    subCategory: "Audit",
    description: "Deep vulnerability scan, penetration check, and detailed threat reporting."
  },
  {
    id: "sec-02",
    category: "Security Services",
    name: "SSL Setup",
    price: "₹2,000 - ₹10,000",
    billingType: "One-time",
    subCategory: "SSL",
    description: "Configure Let's Encrypt or custom wildcard TLS certificates."
  },
  {
    id: "sec-03",
    category: "Security Services",
    name: "Malware Removal",
    price: "₹5,000 - ₹20,000",
    billingType: "One-time",
    subCategory: "Removal",
    description: "Identify and purge malicious shell scripts, injections, and tracking pixels."
  },
  {
    id: "sec-04",
    category: "Security Services",
    name: "Website Hardening",
    price: "₹10,000 - ₹25,000",
    billingType: "One-time",
    subCategory: "Hardening",
    description: "Block directory listing, disable XML-RPC, and secure database entry permissions."
  },
  {
    id: "sec-05",
    category: "Security Services",
    name: "Firewall Configuration",
    price: "₹10,000 - ₹1,00,000",
    billingType: "One-time",
    subCategory: "Firewall",
    description: "Deploy Cloudflare WAF or ModSecurity to actively intercept DDoS attacks."
  },
  {
    id: "sec-06",
    category: "Security Services",
    name: "Security Monitoring",
    price: "₹10,000 - ₹30,000",
    billingType: "Monthly",
    subCategory: "Monitoring",
    description: "Active system audits, live threat detection, and logs verification."
  },
  {
    id: "sec-07",
    category: "Security Services",
    name: "Data Protection Implementation",
    price: "₹20,000 - ₹1,00,000",
    billingType: "One-time",
    subCategory: "Compliance",
    description: "Implement field-level encryption, user permissions tracking, and compliance logs."
  },
  {
    id: "sec-08",
    category: "Security Services",
    name: "Security Compliance Consultancy",
    price: "₹10,000 - ₹50,000+",
    billingType: "One-time",
    subCategory: "Consultancy",
    description: "Preparation for standard ISO 27001 or SOC 2 information audits."
  },

  // --- WordPress Services ---
  {
    id: "wp-01",
    category: "WordPress Services",
    name: "WordPress Development",
    price: "₹15,000 - ₹1,50,000",
    billingType: "One-time",
    subCategory: "Development",
    description: "Complete business websites built on clean, customized WordPress setups."
  },
  {
    id: "wp-02",
    category: "WordPress Services",
    name: "Custom Theme Development",
    price: "₹20,000 - ₹1,50,000",
    billingType: "One-time",
    subCategory: "Theme",
    description: "Bespoke PHP themes coded strictly to WordPress standards without page bloat."
  },
  {
    id: "wp-03",
    category: "WordPress Services",
    name: "Plugin Development",
    price: "₹15,000 - ₹2,00,000",
    billingType: "One-time",
    subCategory: "Plugin",
    description: "Custom functionality wrapped in secure, modular WordPress plugins."
  },
  {
    id: "wp-04",
    category: "WordPress Services",
    name: "WooCommerce Development",
    price: "₹15,000 - ₹70,000",
    billingType: "One-time",
    subCategory: "E-Commerce",
    description: "Set up and customize online retail stores using WooCommerce frameworks."
  },
  {
    id: "wp-05",
    category: "WordPress Services",
    name: "WordPress Migration",
    price: "₹5,000 - ₹50,000",
    billingType: "One-time",
    subCategory: "Migration",
    description: "Move databases, posts, media files, and active users to a new host with zero downtime."
  },
  {
    id: "wp-06",
    category: "WordPress Services",
    name: "Speed Optimization",
    price: "₹5,000 - ₹35,000",
    billingType: "One-time",
    subCategory: "Optimization",
    description: "Configure caching, database indexing, and image compressions to load fast."
  },
  {
    id: "wp-07",
    category: "WordPress Services",
    name: "WordPress Security",
    price: "₹5,000 - ₹50,000",
    billingType: "One-time",
    subCategory: "Security",
    description: "Implement custom database prefixes, disable API endpoints, and setup security logs."
  },
  {
    id: "wp-08",
    category: "WordPress Services",
    name: "WordPress Maintenance",
    price: "₹3,000 - ₹25,000",
    billingType: "Monthly",
    subCategory: "Maintenance",
    description: "Weekly plugin updates, database optimization, and cloud backups monitoring."
  },

  // --- AMC & Support ---
  {
    id: "amc-01",
    category: "AMC & Support",
    name: "AMC Package",
    price: "₹10,000 - ₹2,00,000",
    billingType: "Annual",
    subCategory: "AMC",
    description: "Annual Maintenance Contract offering complete developer hours and checks."
  },
  {
    id: "amc-02",
    category: "AMC & Support",
    name: "Technical Support",
    price: "₹500 - ₹2,500",
    billingType: "Per Hour",
    subCategory: "Support",
    description: "Hourly consulting, debugging, and feature updates on demand."
  },
  {
    id: "amc-03",
    category: "AMC & Support",
    name: "Website Monitoring",
    price: "₹2,000 - ₹10,000",
    billingType: "Monthly",
    subCategory: "Monitoring",
    description: "24/7 uptime checkups with automatic paging alerts to developers."
  },
  {
    id: "amc-04",
    category: "AMC & Support",
    name: "Performance Optimization",
    price: "₹5,000 - ₹50,000",
    billingType: "One-time",
    subCategory: "Optimization",
    description: "Optimize assets, clean old DB logs, and enable server cache layers."
  },
  {
    id: "amc-05",
    category: "AMC & Support",
    name: "Emergency Recovery",
    price: "₹10,000 - ₹1,00,000",
    billingType: "One-time",
    subCategory: "Recovery",
    description: "Priority SLA support to restore offline or hacked applications."
  }
];
