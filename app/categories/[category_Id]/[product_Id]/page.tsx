import React from "react";
import { categories } from "../../../data/data";
import { ChevronRight, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import InquireModalContainer from "./InquireModalContainer";

type Props = {
  params: Promise<{ category_Id: string, product_Id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { category_Id, product_Id } = await params;
  const category = categories.find((c) => c.id === category_Id);
  const product = category?.products.find((p) => p.id === product_Id);

  if (!product || !category) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | ${category.name} | Flip Concept India`,
    description: `${product.name}: ${product.description}. Professional ${category.name} services in Vadodara and across India by Flip Concept India.`,
    keywords: [product.name, category.name, "industrial waterproofing", "Vadodara", "India"],
    openGraph: {
      title: `${product.name} - Flip Concept India`,
      description: product.description,
      images: [{ url: product.image || "/og-image.jpg" }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category_Id, product_Id } = await params;
  const category = categories.find((c) => c.id === category_Id);
  const product = category?.products.find((p) => p.id === product_Id);

  if (!category || !product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 whitespace-nowrap overflow-x-auto pb-2 scrollbar-none">
          <Link href="/categories" className="hover:text-blue-600 transition">Categories</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link href={`/categories/${category.id}`} className="hover:text-blue-600 transition">{category.name}</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link href={`/categories/${category.id}/${product.id}`} className="hover:text-blue-600 transition truncate">{product.name}</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <span className="text-gray-900 dark:text-white font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          
          {/* Product Image */}
          <div className="relative h-[400px] lg:h-full bg-gray-100 dark:bg-gray-800">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
               <Link href={`/categories/${category.id}`} className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white transition shadow-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Back
               </Link>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8 lg:p-12 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full tracking-wider uppercase">
                {category.name}
              </span>
              <button className="p-2 text-gray-400 hover:text-blue-600 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications Table */}
            {product.specifications && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Specifications</h3>
                <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-gray-500 dark:text-gray-400 w-1/3 bg-gray-50/50 dark:bg-gray-800/30">{(value as any)}</td>
                          <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">{key}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Use Cases & Best Usage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {product.useCases && (
                <div className="p-5 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/20">
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-blue-600 rounded-full" />
                    Key Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {product.useCases.map((useCase: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product.bestUsage && (
                <div className="p-5 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-gray-400 rounded-full" />
                    Best Usage Tip
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                    "{product.bestUsage}"
                  </p>
                </div>
              )}
            </div>

            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pricing Status</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{product.price !== "₹---" ? product.price : "Quote on Request"}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Service Coverage</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">All India Nationwide</p>
                </div>
              </div>
              
              <InquireModalContainer product={product} />
            </div>
          </div>
        </div>

        {/* Similar Products or Related Info */}
        <div className="mt-16">
           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              Other {category.name} Solutions
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
                 <Link 
                    key={related.id} 
                    href={`/categories/${category.id}/${related.id}`}
                    className="group bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition"
                 >
                    <div className="h-40 rounded-lg overflow-hidden mb-4">
                       <img src={related.image} alt={related.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white transition group-hover:text-blue-600">{related.name}</h3>
                 </Link>
              ))}
           </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": product.image && product.image.startsWith('/') ? `https://www.flipconceptindia.com${product.image}` : product.image || "https://www.flipconceptindia.com/og-image.jpg",
            "brand": {
              "@type": "Brand",
              "name": "Flip Concept India"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://www.flipconceptindia.com/categories/${category.id}/${product.id}`,
              "priceCurrency": "INR",
              "price": "0",
              "availability": "https://schema.org/InStock"
            }
          }),
        }}
      />
    </div>
  );
}
