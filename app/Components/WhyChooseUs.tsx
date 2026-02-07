import React from 'react';
import { ShieldCheck, Clock, Award, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "15+ Years Experience",
      description: "Deep industry expertise in industrial and commercial waterproofing solutions."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "10-Year Warranty",
      description: "We stand by our quality with comprehensive warranties on all our services."
    },
    {
      icon: <Wrench className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Advanced Technology",
      description: "Using the latest engineering-grade materials for long-lasting protection."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Timely Execution",
      description: "Efficient project management ensuring on-time completion with minimal disruption."
    }
  ];

  return (
    <section id="WhyChooseUs_Section" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Flip Concept India?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We deliver engineering-grade waterproofing solutions that protect your investments for decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 text-center group"
            >
              <div className="mb-6 inline-block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
