import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100+", label: "Expert Team Members" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/30">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
