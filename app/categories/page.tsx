"use client";

import React from "react";
import Link from "next/link";
import { categories } from "../data/data";
import { ArrowRight } from "lucide-react";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header Section */}
      <section className="bg-slate-900 dark:bg-black text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 to-cyan-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-blue-500">Product Range</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive catalog of high-precision industrial machinery, 
             waterproofing systems, and engineering solutions designed for durability and performance.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              href={`/categories/${cat.id}`} 
              key={cat.id}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur-md text-blue-700 dark:text-blue-400 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm border border-blue-100 dark:border-blue-900">
                    {cat.products.length} Items
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors line-clamp-1">
                  {cat.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 line-clamp-3 leading-relaxed flex-1">
                  {cat.description}
                </p>
                
                <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-bold text-xs tracking-wide group-hover:translate-x-1 transition-transform uppercase">
                  View <ArrowRight className="ml-1 w-3 h-3" />
                </div>
              </div>
              
              {/* Bottom Line */}
              <div className="h-0.5 w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
