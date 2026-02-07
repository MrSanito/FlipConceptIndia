"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, Briefcase, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial Protection"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/60 via-gray-900/80 to-gray-950" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            Leading the Way in <span className="text-blue-500">Industrial Protection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
          >
            Over 25 years of excellence in engineering-grade waterproofing and high-performance industrial coatings.
          </motion.p>
        </div>
      </section>

      {/* Legacy & Stats Section */}
      <section className="py-24 relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100 dark:border-gray-800">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Legacy of Excellence</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light italic">
                "We don't just apply coatings; we engineer solutions that stand the test of time."
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded with a vision to revolutionize industrial protection, Flip Concept India has grown from a specialized local service to a nationwide leader. Our commitment to using cutting-edge technology and engineering-grade materials has made us the trusted partner for massive infrastructure, commercial, and residential projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact">
                   <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 h-auto text-lg hover:scale-105 transition-transform">
                     Contact Our Experts
                   </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Years Experience", value: "25+", icon: <Award className="text-blue-600" /> },
                { label: "Projects Done", value: "500+", icon: <Briefcase className="text-blue-600" /> },
                { label: "Happy Clients", value: "100+", icon: <Users className="text-blue-600" /> },
                { label: "Expert Team", value: "50+", icon: <CheckCircle2 className="text-blue-600" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 text-center"
                >
                   <div className="flex justify-center mb-3">{stat.icon}</div>
                   <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                   <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-100 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide the highest standard of structural protection through innovative engineering, high-performance materials, and unmatched workmanship, ensuring every structure we touch is built to last for generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the global benchmark for industrial and commercial protection systems, recognized for our commitment to sustainable engineering and technical excellence in the waterproofing industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Core Values</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide every project we undertake and every solution we engineer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Reliability", 
                desc: "We deliver on our promises with consistent quality and dependable long-term protection.",
                icon: <Shield className="w-10 h-10" />
              },
              { 
                title: "Innovation", 
                desc: "Constantly integrating the latest lab-tested chemicals and application techniques.",
                icon: <Target className="w-10 h-10" />
              },
              { 
                title: "Integrity", 
                desc: "Transparent processes and honest consultations to give your structure the best possible care.",
                icon: <Users className="w-10 h-10" />
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white dark:bg-gray-900 rounded-3xl text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-6 inline-block text-blue-600 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Protect Your Structure?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light">
            Consult with our engineering experts today for a comprehensive site visit and technical report.
          </p>
          <div className="flex justify-center gap-4">
             <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 py-6 h-auto text-lg font-bold shadow-xl">
                    Get a Technical Consultation
                </Button>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
