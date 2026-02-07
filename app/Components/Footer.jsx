import React from "react";
import Link from "next/link";
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
            <span className="text-blue-600 dark:text-blue-500 text-2xl">🏭</span> Flip Concept India
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Leading manufacturer of high-quality industrial machinery and tools.
            Serving industries worldwide with innovative solutions for over 25
            years.
          </p>
          
          <div className="mb-6 space-y-4">
             <div>
                <h4 className="text-gray-900 dark:text-white text-sm font-semibold">Head Office (Mumbai)</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Virar East, Maharashtra 401305</p>
             </div>
             <div>
                <h4 className="text-gray-900 dark:text-white text-sm font-semibold">Branch Office (Vadodara)</h4>
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
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            {["Hammer Mills", "CNC Machines", "Conveyor Systems", "Cutting Tools", "Hydraulic Equipment"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {["Custom Manufacturing", "Maintenance Services", "Technical Support", "Installation", "Training"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {["About Us", "Careers", "News", "Quality", "Contact"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item}</Link>
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
