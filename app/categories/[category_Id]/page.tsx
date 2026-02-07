import React from "react";
import { categories } from "../../data/data";
import ProductCard from "../components/ProductCard";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Define types for params
type Props = {
  params: Promise<{ category_Id: string }>;
};

// Generate MetaData for SEO
export async function generateMetadata({ params }: Props) {
  // Await params if necessary (Next.js 15+ compatibility)
  const { category_Id } = await params;
  const category = categories.find((c) => c.id === category_Id);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const productNames = category.products.map(p => p.name).join(", ");

  return {
    title: `${category.name} | Flip Concept India`,
    description: `Explore our range of ${category.name} including ${productNames}. High-quality industrial manufacturing.`,
    keywords: [category.name, ...category.products.map(p => p.name), "Industrial Machinery", "Waterproofing", "Coating", "Flip Concept India"],
    openGraph: {
      title: `${category.name} | Flip Concept Enterprise`,
      description: category.description,
      images: [
        {
          url: category.image && category.image.startsWith('/') ? category.image : '/Hero.jpg',
          width: 800,
          height: 600,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  // Await params for server component
  const { category_Id } = await params;
  const category = categories.find((c) => c.id === category_Id);

  // Fallback for not found
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 text-center px-4 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Category Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">We couldn't find the category you're looking for.</p>
        <Link 
          href="/categories"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
        >
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* Dynamic Hero Section with Parallax Effect */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gray-900">
         <div className="absolute inset-0">
            <Image 
              src={category.image && category.image.startsWith('/') ? category.image : '/Hero.jpg'} 
              alt={category.name}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/40 to-transparent" />
         </div>
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-xs md:text-sm text-blue-300 mb-3 font-medium backdrop-blur-sm bg-black/30 w-fit px-3 py-1 rounded-full border border-white/10">
                  <Link href="/" className="hover:text-white transition">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link href="/categories" className="hover:text-white transition">Categories</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white">{category.name}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
                    {category.name}
                </h1>
                <p className="text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-md">
                    {category.description}
                </p>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 relative -mt-10 z-30">
        
        {/* Sidebar Navigation - Sticky */}
        <aside className="lg:w-80 flex-shrink-0 order-2 lg:order-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 overflow-hidden sticky top-24">
            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <h2 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                    Product Categories
                </h2>
            </div>
            <nav className="p-4 space-y-1 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  scroll={false}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    cat.id === category_Id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                      : "text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300"
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  {cat.id === category_Id && <ChevronRight className="w-4 h-4" />}
                </Link>
              ))}
            </nav>
            
            <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
                <Link href="/contact" className="block w-full py-3 px-4 bg-gray-900 dark:bg-blue-600 text-white text-center rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Request Custom Quote
                </Link>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                   Need help? Call our support team.
                </p>
            </div>
          </div>
        </aside>

        {/* Main Content - Product Grid */}
        <main className="flex-1 order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Available Solutions
                   </h2>
                   <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Showing {category.products.length} premium products in this category.
                   </p>
                </div>
                {/* Optional Filter/Sort could go here */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ // ... skipping large JSON block for replacement brevity if not changing logic

            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://vishaltoolsenterprise.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Categories",
                    "item": "https://vishaltoolsenterprise.com/categories"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": category.name,
                    "item": `https://vishaltoolsenterprise.com/categories/${category.id}`
                  }
                ]
              },
              {
                "@type": "ItemList",
                "itemListElement": category.products.map((product, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Product",
                        "name": product.name,
                        "description": `High-quality ${product.name} from Vishal Tools Enterprise.`,
                        "image": product.image && product.image.startsWith('/') ? `https://vishaltoolsenterprise.com${product.image}` : product.image || "https://vishaltoolsenterprise.com/Hero.jpg",
                         "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "priceCurrency": "INR",
                            "price": "0" // 0 implies 'contact for price' usually, or use AggregateOffer
                        }
                    }
                }))
              }
            ]
          }),
        }}
      />
    </div>
  );
};
