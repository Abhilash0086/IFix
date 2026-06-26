"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Eye, Target } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">About iFix Bluetooth</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-blue-400" />
                <h3 className="text-white font-semibold text-lg">Our Vision</h3>
              </div>
              <p className="text-gray-400">
                To be Coimbatore&apos;s most trusted and accessible Bluetooth device repair center —
                delivering honest, expert, and affordable service to every customer.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-blue-400" />
                <h3 className="text-white font-semibold text-lg">Our Mission</h3>
              </div>
              <p className="text-gray-400">
                Extend the life of your Bluetooth devices through precise diagnosis, quality repairs,
                and transparent pricing — reducing e-waste one repair at a time.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
              <div className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>{BUSINESS.hours}</span>
              </div>
              <div className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-blue-400 transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  {BUSINESS.instagram}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-96 lg:h-auto border border-gray-700/50"
          >
            <iframe
              src={BUSINESS.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="iFix Bluetooth Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
