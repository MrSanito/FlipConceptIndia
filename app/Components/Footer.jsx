import React from "react";
import Link from "next/link";
import { categories } from "../data/data.ts";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0d1321] text-gray-600 dark:text-gray-300 py-12 px-6 md:px-16 transition-colors duration-300">
      <div className="grid md:grid-cols-4 gap-12 border-b border-gray-200 dark:border-gray-700 pb-10">
        {/* Left Section */}
        <div>
          <h2 className="text-gray-900 dark:text-white font-bold text-lg flex items-center gap-2 mb-4">
            <span className="text-blue-600 dark:text-blue-500 text-2xl">🛡️</span> Flip Concept India
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Engineering-grade waterproofing and high-performance industrial coating solutions.
            Protecting your assets with cutting-edge technology and certified expertise for over 25 years.
          </p>
          
          <div className="mb-6 space-y-4">
             <div>
                <h4 className="text-gray-900 dark:text-white text-sm font-semibold">Vadodara</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  FF-5, AB Tower, Shriji Gold, Laxmipura Road, Gorwa, Vadodara, Gujarat 390016
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Ph: +91 88660 02566</p>
             </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white p-2 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.id}>
                <Link href={`/categories/${cat.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Roof Waterproofing", href: "/categories/waterproofing-systems" },
              { name: "Basement Protection", href: "/categories/waterproofing-systems" },
              { name: "Industrial Coatings", href: "/categories/protective-industrial-coatings" },
              { name: "Floor Coatings", href: "/categories/chemical-industrial-flooring" },
              { name: "Insulation Services", href: "/categories/insulation-services" }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About Us", href: "/#WhyChooseUs_Section" },
              { name: "Products", href: "/categories" },
              { name: "Services", href: "/#Services_Section" },
              { name: "Quality Assurance", href: "/#WhyChooseUs_Section" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Flip Concept India. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
