import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Hero Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)] py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4AB8D6]/10 rounded-md border border-[#4AB8D6]/20">
              <svg className="w-5 h-5 text-[#4AB8D6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[#0A1E3C]">ISO Certified Waterproofing Experts</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#0A1E3C] leading-tight">
              Professional Waterproofing Solutions for Your Property
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Heavy-duty, engineering-grade protection for roofs, basements, terraces, and commercial buildings. Trusted by 500+ clients across India.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4AB8D6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1E3C]">15+ Years Experience</h3>
                  <p className="text-sm text-gray-600">Industry expertise</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4AB8D6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1E3C]">10 Year Warranty</h3>
                  <p className="text-sm text-gray-600">On all services</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4AB8D6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1E3C]">Certified Team</h3>
                  <p className="text-sm text-gray-600">Trained applicators</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4AB8D6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1E3C]">Fair Pricing</h3>
                  <p className="text-sm text-gray-600">Transparent quotes</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-8 py-4 bg-[#4AB8D6] text-white font-semibold rounded-lg hover:bg-[#3da7c5] transition-colors duration-200 shadow-md hover:shadow-lg">
                Get Free Inspection
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#0A1E3C] text-[#0A1E3C] font-semibold rounded-lg hover:bg-[#0A1E3C] hover:text-white transition-colors duration-200">
                Call: +91-XXXXXXXXXX
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4AB8D6]">500+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4AB8D6]">4.8★</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4AB8D6]">100%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
                alt="Professional Waterproofing Work"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#4AB8D6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A1E3C]">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600">Premium waterproofing materials</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#4AB8D6]/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0A1E3C]/5 rounded-full -z-10"></div>
          </div>

        </div>
      </div>

      {/* Services Strip */}
      <div className="bg-[#0A1E3C] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl mb-2">🏠</div>
              <div className="font-semibold">Roof Waterproofing</div>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">🏢</div>
              <div className="font-semibold">Basement Protection</div>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">🚿</div>
              <div className="font-semibold">Bathroom Sealing</div>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">🏗️</div>
              <div className="font-semibold">Terrace Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection