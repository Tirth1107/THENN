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
    const fullDescription = description || "Thenn is a premium digital agency specialising in high-performance website development, brand strategy, and immersive digital experiences.";
    const baseUrl = "https://thenn.in";
    const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Thenn",
        "alternateName": "Thenn",
        "url": "https://thenn.in",
        "logo": "https://thenn.in/logo.jpg",
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

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
