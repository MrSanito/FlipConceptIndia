"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

import dynamic from "next/dynamic";

const InquireModal = dynamic(() => import("../Components/InquireModal"), {
  ssr: false,
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log("Form Submitted:", formData);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/20" />
           {/* Abstract background pattern could go here */}
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out to our team of experts for a custom quote or consultation.
          </p>
          <div className="mt-8">
             <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"
             >
                Get Instant Quote via WhatsApp
             </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information Card */}
          <div className="bg-blue-600 rounded-2xl shadow-xl shadow-blue-900/20 p-8 md:p-12 text-white flex flex-col justify-between h-full transform transition-transform hover:scale-[1.01] duration-300">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Head Office (Mumbai)</h3>
                    <p className="text-blue-50 leading-relaxed text-sm">
                      Shop No 2, Gurukrupa Chs,<br />
                      Ekvira Darshan, Virar East,<br />
                      Maharashtra 401305
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Branch Office (Vadodara)</h3>
                    <p className="text-blue-50 leading-relaxed text-sm">
                      FLIP CONCEPT INDIA PRIVATE LIMITED<br />
                      FF-5, First Floor, AB Tower, Shriji Gold,<br />
                      Laxmipura Road, Sona Party Plot Vibhag 2,<br />
                      Gorwa, Vadodara, Gujarat, 390016
                    </p>
                    <p className="text-blue-200 text-sm mt-1">Phone: +91 88660 02566</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Contact Numbers</h3>
                    <p className="text-blue-50">+91 91635 37788 (HQ)</p>
                    <p className="text-blue-50">+91 88660 02566 (Vadodara)</p>
                    <p className="text-blue-200 text-sm mt-1">Mon-Sat 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Email Address</h3>
                    <p className="text-blue-50">contact@flipconceptindia.com</p>
                  </div>
                </div>
                 
                 <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Clock className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Business Hours</h3>
                    <p className="text-blue-50">Available 24/7 for Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-blue-100 text-sm">
                Connect with us on social media for latest updates.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 p-8 md:p-12 border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-2">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-2">
                  <Send className="w-8 h-8 text-green-600 dark:text-green-300 transform -rotate-45 translate-x-1" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Message Sent!</h3>
                <p className="text-green-600 dark:text-green-400 max-w-xs mx-auto">
                    Thank you for reaching out. Our team will contact you shortly.
                </p>
                <Button 
                   onClick={() => setSubmitted(false)}
                   className="mt-6 bg-green-600 hover:bg-green-700 text-white"
                >
                   Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 transition-colors h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 transition-colors h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 transition-colors h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-3 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors resize-none"
                  />
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                           Sending...
                        </>
                    ) : (
                        <>
                           Send Message
                           <Send className="w-5 h-5 ml-2" />
                        </>
                    )}
                </Button>
              </form>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                 <p className="text-gray-500 dark:text-gray-400 mb-4">Prefer WhatsApp?</p>
                 <Button 
                    variant="outline"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                 >
                    Chat with us via WhatsApp
                 </Button>
            </div>

          </div>
        </div>
      </div>
      
      <InquireModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={undefined}
      />
    </div>
  );
}
