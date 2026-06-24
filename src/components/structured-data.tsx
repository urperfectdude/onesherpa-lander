/**
 * JSON-LD for the landing page. Describes OneSherpa as a software product
 * built on top of ERPNext for search engines.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OneSherpa",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "OneSherpa is an AI-native admin and configuration console for ERPNext. Configure and run your ERP by describing what you want in plain language.",
    offers: {
      "@type": "Offer",
      category: "SaaS",
    },
    publisher: {
      "@type": "Organization",
      name: "OneSherpa",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
