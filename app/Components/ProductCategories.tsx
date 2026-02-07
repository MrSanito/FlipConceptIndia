"use client";
import React from "react";
import Image from "next/image";
import { categories } from "../data/data";
import Link from "next/link";

// Interfaces for type safety
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  products: Product[];
}

const ProductCategories = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center py-4 pt-24">
      <div>
        <h1 className="font-bold text-3xl my-2 text-gray-900 dark:text-white">Product Categories</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our comprehensive range of industrial equipment and machinery
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4 w-full items-stretch max-w-7xl mx-auto">
        {categories.slice(0, 8).map((cat) => ( // limit to 8 for home page if needed, or remove slice if they want all
          <div
            key={cat.id}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] flex justify-center"
          >
            <Card
              name={cat.name}
              desc={cat.description}
              image={cat.image}
              count={cat.products.length}
              id={cat.id}
            />
          </div>
        ))}
      </div>

      <div className="py-12 mt-4">
        <Link href="/categories">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
            See All Categories
          </button>
        </Link>
      </div>
    </div>
  );
};

interface CardProps {
  name: string;
  desc: string;
  image: string;
  count: number;
  id: string;
}

const Card = ({ name, desc, image, count, id }: CardProps) => {
  return (
    <Link href={`/categories/${id}`} className="group relative block w-full max-w-sm h-full perspective-1000">
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)] border border-gray-100 dark:border-gray-800 ring-1 ring-black/5 dark:ring-white/10 flex flex-col">
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
           <Image
              src={image} 
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Badge */}
            <div className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-blue-100 dark:border-blue-900/30">
               {count} Products
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
            {name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6">
            {desc}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
             <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-blue-500 transition-colors">
                View Collection
             </span>
             <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
             </div>
          </div>
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  );
};

export default ProductCategories;
