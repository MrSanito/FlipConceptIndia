import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)] py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* ... (Trust Badge and Content remain mostly same, just checking container) ... */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-blue-900 dark:text-blue-200">ISO Certified Waterproofing Experts</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              India's Leading Waterproofing Experts in Vadodara
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Professional heavy-duty, engineering-grade protection for roofs, basements, and industrial structures. Serving clients across Vadodara, Gujarat, and throughout India with premium quality and a 10-year warranty.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {[
                { title: "15+ Years Experience", subtitle: "Industry expertise" },
                { title: "10 Year Warranty", subtitle: "On all services" },
                { title: "Certified Team", subtitle: "Trained applicators" },
                { title: "Fair Pricing", subtitle: "Transparent quotes" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40">
                  Get Free Inspection
                </button>
              </Link>
              <a href="tel:+918866002566" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
                  Call: +91-8866002566
                </button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              {[
                { value: "500+", label: "Projects" },
                { value: "4.8★", label: "Rating" },
                { value: "100%", label: "Satisfaction" }
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-gray-300 dark:bg-gray-700"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:h-[600px] h-[400px]">
             {/* Background Decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-900/5 rounded-full -z-10"></div>

            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional Waterproofing Work"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-800 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Premium waterproofing materials</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection