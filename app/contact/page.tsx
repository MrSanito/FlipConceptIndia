"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";

const InquireModal = dynamic(() => import("../Components/InquireModal"), {
  ssr: false,
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Contact Form Submission from ' + formData.name,
          message: `Phone: ${formData.phone}\n\nMessage:\n${formData.message}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/40" />
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50" />
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
          >
            Get in <span className="text-blue-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Reach out to our team of experts for projects in Vadodara, Gujarat, or anywhere in India. We provide custom technical consultations and engineering-grade solutions nationwide.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
             <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transition-all"
             >
                Get Instant Quote via WhatsApp
             </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-blue-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white flex flex-col justify-between h-full relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group/item">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md group-hover/item:bg-white/20 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Office Location</h3>
                    <p className="text-blue-50 leading-relaxed text-sm">
                      FLIP CONCEPT INDIA PRIVATE LIMITED<br />
                      FF-5, First Floor, AB Tower, Shriji Gold,<br />
                      Laxmipura Road, Sona Party Plot Vibhag 2,<br />
                      Gorwa, Vadodara, Gujarat, 390016
                    </p>
                    <p className="text-blue-200 text-sm mt-1">Phone: +91 88660 02566</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md group-hover/item:bg-white/20 transition-colors">
                    <Phone className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Contact Number</h3>
                    <p className="text-blue-50">+91 88660 02566</p>
                    <p className="text-blue-200 text-sm mt-1">Mon-Sat 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md group-hover/item:bg-white/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Email Address</h3>
                    <p className="text-blue-50">contact@flipconceptindia.com</p>
                  </div>
                </div>
                 
                 <div className="flex items-start gap-5 group/item">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md group-hover/item:bg-white/20 transition-colors">
                    <Clock className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 mb-1">Business Hours</h3>
                    <p className="text-blue-50">Available 24/7 for Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-full">
                     <ShieldCheck className="w-5 h-5 text-green-300" />
                  </div>
                  <p className="text-blue-100 text-sm font-medium">
                    Certified Professional Waterproofing
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex justify-between items-center mb-2">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/20"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-green-500/10">
                  <Send className="w-10 h-10 text-green-600 dark:text-green-300 transform -rotate-45 translate-x-1" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Message Sent!</h3>
                <p className="text-green-600 dark:text-green-400 max-w-xs mx-auto">
                    Thank you for reaching out. Our team will contact you shortly.
                </p>
                <Button 
                   onClick={() => setSubmitted(false)}
                   className="mt-6 bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                >
                   Send Another Message
                </Button>
              </motion.div>
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
                      className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 transition-all h-12 rounded-xl"
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
                      className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 transition-all h-12 rounded-xl"
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
                    className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 transition-all h-12 rounded-xl"
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
                    className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 flex min-h-[120px] w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-3 text-base shadow-sm focus-visible:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all resize-none"
                  />
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-7 text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 rounded-xl"
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
                 <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Need immediate assistance?</p>
                 <Button 
                    variant="outline"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl h-12"
                 >
                    Chat with us via WhatsApp
                 </Button>
            </div>

          </motion.div>
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
