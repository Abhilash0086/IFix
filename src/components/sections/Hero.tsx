"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Wrench, Shield, Star, Truck, SearchCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const stats = [
  { icon: Wrench,      value: 5000, suffix: "+", label: "Repairs Done" },
  { icon: Star,        value: 4.9,  suffix: "★", label: "Customer Rating", decimal: true },
  { icon: Shield,      value: null, display: "30-Day",    label: "Repair Warranty" },
  { icon: Truck,       value: null, display: "All India",  label: "Courier Pickup & Delivery" },
  { icon: SearchCheck, value: null, display: "Free",       label: "Diagnosis & Transparent Pricing" },
];

function Counter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-gray-900 font-bold text-2xl tabular-nums">
      {decimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light wash overlay so text stays readable */}
        <div className="absolute inset-0 bg-white/82" />
        {/* Subtle blue tint at top and bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-transparent to-indigo-100/50" />
      </div>

      <div className="relative container mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-blue-100 border border-blue-200 text-blue-600 text-sm px-4 py-1.5 rounded-full mb-6 font-medium"
          >
            India&apos;s Trusted Bluetooth &amp; Neckband Repair Experts
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Expert Repair for All
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Bluetooth Devices
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Smart Watches, TWS Earbuds, Neckbands, Headphones & Speakers — professional
            diagnosis, genuine parts, warranty on every repair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <Wrench className="w-5 h-5" />
              Book a Repair
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto"
        >
          {stats.map(({ icon: Icon, value, suffix, label, display, decimal }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm overflow-hidden group hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/60 transition-colors rounded-2xl" />
              <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              {value !== null
                ? <Counter target={value!} suffix={suffix!} decimal={decimal} />
                : <span className="text-gray-900 font-bold text-2xl">{display}</span>
              }
              <div className="text-gray-500 text-sm mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-gray-400 text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
