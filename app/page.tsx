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
    "description": "#1 Waterproofing company in India and Vadodara. Providing engineering-grade industrial protection, roof waterproofing, and basement leakage solutions across Gujarat and all major Indian cities.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      },
      {
        "@type": "City",
        "name": "Vadodara"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waterproofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Waterproofing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Waterproofing"
          }
        }
      ]
    }
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
