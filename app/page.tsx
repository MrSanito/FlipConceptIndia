import dynamic from "next/dynamic";
import HeroSection from "./Components/HeroSection";

const ProductCategories = dynamic(() => import("./Components/ProductCategories"), { ssr: true });
const WhyChooseUs = dynamic(() => import("./Components/WhyChooseUs"), { ssr: true });
const StatsSection = dynamic(() => import("./Components/StatsSection"), { ssr: true });

export default function Home() {
  const structuredData = {
    // ... (keep structured data as is, or maybe move to a separate file if it gets too long, but for now just cleanup imports)
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flip Concept India",
    "image": "https://flipconceptindia.com/logo-transparent.png",
    "@id": "https://flipconceptindia.com",
    "url": "https://flipconceptindia.com",
    "telephone": "+918866002566",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "FF-5, AB Tower, Shriji Gold, Laxmipura Road, Gorwa",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390016",
      "addressCountry": "IN"
    },
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
      <ProductCategories/>
      <WhyChooseUs />
      <StatsSection />
    </>
  );
}
