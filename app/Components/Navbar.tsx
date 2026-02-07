"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg border-gray-200/50 dark:border-gray-800/50 ${
        scrolled ? "h-16" : "h-17"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-48 transition-transform group-hover:scale-105">
            <Image
              src="/logo-transparent.png"
              alt="Flip Concept India"
              width={192} 
              height={48}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </Link>

            {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Products", href: "/categories" },
            { name: "Services", href: "/#Services_Section" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
              <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              {item.name}
            </Link>
          ))}

          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-105">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle text-gray-900 dark:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white dark:bg-gray-950 shadow-2xl z-50 flex flex-col p-6 border-l border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-circle"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Products", href: "/categories" },
                  { name: "Services", href: "/#Services_Section" },
                  { name: "Contact", href: "/contact" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 group transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600">
                      {item.name}
                    </span>
                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="btn w-full rounded-xl py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white border-none shadow-lg shadow-blue-500/30">
                    Get a Quote Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
