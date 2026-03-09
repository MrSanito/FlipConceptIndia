"use client";
import React from "react";
import { Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const WhatsAppButton = () => {
  const { theme, toggleTheme } = useTheme();
  const email = "contact@flipconceptindia.com";
  const subject = "Website Inquiry";
  const body = "Hi, I visited your website and have an inquiry.";

  const handleClick = () => {
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* Email Button */}
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 active:scale-90 transition-all duration-300 animate-bounce-slow group relative"
        aria-label="Email Us"
      >
        <Mail className="w-8 h-8 text-white" />
        
        {/* Tooltip / Label */}
        <span className="absolute left-16 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
