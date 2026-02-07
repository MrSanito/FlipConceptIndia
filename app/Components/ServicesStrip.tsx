import React from 'react';

const ServicesStrip = () => {
  return (
    <div id="Services_Section" className="bg-blue-600 dark:bg-[#0A1E3C] py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
           {[
             { icon: "🏠", label: "Roof Waterproofing" },
             { icon: "🏢", label: "Basement Protection" },
             { icon: "🚿", label: "Bathroom Sealing" },
             { icon: "🏗️", label: "Terrace Solutions" }
           ].map((svc, i) => (
              <div key={i} className="text-white hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-3xl mb-2">{svc.icon}</div>
                <div className="font-semibold">{svc.label}</div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesStrip;
