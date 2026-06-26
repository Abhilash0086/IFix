"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Wrench, Shield, Clock, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const stats = [
  { icon: Wrench, value: "5000+", label: "Repairs Done" },
  { icon: Star, value: "4.9★", label: "Customer Rating" },
  { icon: Clock, value: "Same Day", label: "Service Available" },
  { icon: Shield, value: "30-Day", label: "Repair Warranty" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative container mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6">
            Coimbatore&apos;s Trusted Bluetooth &amp; Neckband Repair Experts
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert Repair for All
            <br />
            <span className="text-blue-400">Bluetooth Devices</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Smart Watches, TWS Earbuds, Neckbands, Headphones & Speakers — professional
            diagnosis, genuine parts, warranty on every repair.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Wrench className="w-5 h-5" />
              Book a Repair
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
            >
              <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-white font-bold text-xl">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
