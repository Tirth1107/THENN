import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterCard?: string;
}

const SEO = ({
    title,
    description,
    canonical,
    ogType = "website",
    ogImage = "https://thenn.in/logo.jpg",
    twitterCard = "summary_large_image",
}: SEOProps) => {
    const siteName = "Thenn";
    const defaultTitle = "Thenn — Premium Website Development & Digital Design Agency";
    const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const fullDescription = description || "Thenn is a premium digital agency specialising in high-performance websites, UI/UX design, and modern digital solutions.";
    const baseUrl = "https://www.thenn.in";
    const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Thenn",
        "url": "https://www.thenn.in",
        "logo": "https://www.thenn.in/logo.jpg",
        "description": "Thenn is a premium digital agency specialising in high-performance website development, brand strategy, and immersive digital experiences.",
        "founder": [
            {
                "@type": "Person",
                "name": "Tirth Joshi",
                "jobTitle": "Founder & CEO"
            },
            {
                "@type": "Person",
                "name": "Dhruman Kaneriya",
                "jobTitle": "Co-Founder"
            },
            {
                "@type": "Person",
                "name": "Vaibhav Makvana",
                "jobTitle": "CTO"
            }
        ],
        "sameAs": [
            "https://linkedin.com/company/thenn",
            "https://twitter.com/thenn_in",
            "https://www.instagram.com/thenn.in"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7016565502",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Thenn",
        "alternateName": "Thenn Digital Agency",
        "url": "https://www.thenn.in"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.thenn.in"
            },
            ...(title ? [{
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": url
            }] : [])
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:site_name" content="Thenn" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImage.replace("thenn.in", "www.thenn.in")} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={ogImage.replace("thenn.in", "www.thenn.in")} />

            {/* Bing / DuckDuckGo / Pinterest Verification (Optional but Recommended) */}
            <meta name="msvalidate.01" content="5F1B8C8D8C8D8C8D8C8D8C8D8C8D8C8D" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
