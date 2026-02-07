import HeroSection from "./Components/HeroSection";
import ProductCategories from "./Components/ProductCategories";
import WhyChooseUs from "./Components/WhyChooseUs";
import StatsSection from "./Components/StatsSection";
import ServicesStrip from "./Components/ServicesStrip";

export default function Home() {
  const structuredData = {
    // ... (keep structured data as is, or maybe move to a separate file if it gets too long, but for now just cleanup imports)
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flip Concept India",
    "image": "https://flipconceptindia.com/logo-transparent.png", // Updated logo path too
    "@id": "https://flipconceptindia.com",
    "url": "https://flipconceptindia.com",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "XXXXXX",
      "addressCountry": "IN"
    },
    // ...
    "description": "Leading waterproofing company in India offering heavy-duty, engineering-grade industrial protection. Expert waterproofing services for roofs, basements, terraces, and commercial buildings.",
    // ...
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection/>
      <ServicesStrip />
      <ProductCategories/>
      <WhyChooseUs />
      <StatsSection />
    </>
  );
}
