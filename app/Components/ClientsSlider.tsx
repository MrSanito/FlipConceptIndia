import React from 'react';
import Image from 'next/image';

const clients = [
  { name: 'ICICI Bank', logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 60'%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-weight='900' font-size='36' fill='%23f37021'%3EICICI%3Ctspan fill='%2300356b'%3E Bank%3C/tspan%3E%3C/text%3E%3C/svg%3E" },
  { name: 'Dena Bank', logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 60'%3E%3Crect x='5' y='10' width='40' height='40' fill='%23005da3' rx='5'/%3E%3Ctext x='14' y='40' font-family='Arial' font-weight='900' font-size='32' fill='%23fff'%3ED%3C/text%3E%3Ctext x='55' y='40' font-family='Arial, sans-serif' font-weight='bold' font-size='28' fill='%23005da3'%3EDENA%3Ctspan fill='%23ec1c24'%3E BANK%3C/tspan%3E%3C/text%3E%3C/svg%3E" },
  { name: 'HDFC Bank', logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 60'%3E%3Crect x='10' y='10' width='40' height='40' fill='%23004b87'/%3E%3Crect x='15' y='15' width='12' height='12' fill='%23ed1c24'/%3E%3Crect x='33' y='15' width='12' height='12' fill='%23ed1c24'/%3E%3Crect x='15' y='33' width='12' height='12' fill='%23ed1c24'/%3E%3Crect x='33' y='33' width='12' height='12' fill='%23ed1c24'/%3E%3Ctext x='60' y='40' font-family='Arial, sans-serif' font-weight='900' font-size='30' fill='%23004b87'%3EHDFC BANK%3C/text%3E%3C/svg%3E" },
  { name: 'Bank of Baroda', logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 60'%3E%3Ccircle cx='30' cy='30' r='20' fill='%23f16a22'/%3E%3Ctext x='18' y='38' font-family='Arial, sans-serif' font-weight='bold' font-size='24' fill='%23fff' transform='scale(0.8, 1)'%3EB%3C/text%3E%3Ctext x='26' y='38' font-family='Arial, sans-serif' font-weight='bold' font-size='24' fill='%23fff' transform='scale(0.8, 1)'%3EB%3C/text%3E%3Ctext x='60' y='38' font-family='Arial, sans-serif' font-weight='bold' font-size='22' fill='%23f16a22'%3EBank of Baroda%3C/text%3E%3C/svg%3E" },
  { name: 'Asian Paints', logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 60'%3E%3Ctext x='10' y='40' font-family='Arial, sans-serif' font-weight='900' font-size='30' fill='%23fbbf24' stroke='%23fbbf24' stroke-width='1'%3Easian%3Ctspan fill='%23ef4444' stroke='%23ef4444'%3Epaints%3C/tspan%3E%3C/text%3E%3C/svg%3E" },
];

// Duplicate the array to create a seamless infinite loop
const sliderItems = [...clients, ...clients, ...clients];

const ClientsSlider = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
          Our Clients
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-linear-to-r before:from-white before:to-transparent dark:before:from-gray-950 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-linear-to-l after:from-white after:to-transparent dark:after:from-gray-950">
        <div className="flex w-max animate-marquee space-x-6 px-4 hover:pause-animation">
          {sliderItems.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[200px] h-[100px] bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow shrink-0"
            >
              <div className="relative w-full h-full hover:grayscale transition-all duration-300 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-[60px] max-w-[150px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default ClientsSlider;
