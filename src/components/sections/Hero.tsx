"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Wrench, Shield, Star, Truck, SearchCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const stats = [
  { icon: Wrench,      value: 5000, suffix: "+", label: "Repairs Done" },
  { icon: Star,        value: 4.9,  suffix: "★", label: "Customer Rating", decimal: true },
  { icon: Shield,      value: null, display: "30-Day",   label: "Repair Warranty" },
  { icon: Truck,       value: null, display: "All India", label: "Courier Pickup & Delivery" },
  { icon: SearchCheck, value: null, display: "Free",      label: "Diagnosis & Transparent Pricing" },
];

const photos = [
  { src: "/hero/repair-1.jpg", alt: "Technician repairing a device" },
  { src: "/hero/repair-2.jpg", alt: "Electronics repair close-up" },
  { src: "/hero/repair-3.jpg", alt: "Device repair in progress" },
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
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Main content row — stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-10 lg:py-16">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-block bg-blue-100 border border-blue-200 text-blue-600 text-sm px-4 py-1.5 rounded-full mb-5 font-medium"
            >
              India&apos;s Trusted Bluetooth &amp; Neckband Repair Experts
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight"
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
              transition={{ delay: 0.4 }}
              className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Smart Watches, TWS Earbuds, Neckbands, Headphones & Speakers —
              professional diagnosis, genuine parts, warranty on every repair.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
              >
                <Wrench className="w-5 h-5" />
                Book a Repair
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-600/30"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-[45%] flex-shrink-0"
          >
            {/* Mobile: 2-column grid */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {photos.slice(0, 2).map((p, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="50vw" />
                </div>
              ))}
            </div>

            {/* Desktop: staggered 3-photo layout */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {/* Tall left photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-md row-span-2" style={{ height: "400px" }}>
                <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" sizes="22vw" />
              </div>
              {/* Two smaller right photos */}
              <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ height: "192px" }}>
                <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover" sizes="22vw" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ height: "192px" }}>
                <Image src={photos[2].src} alt={photos[2].alt} fill className="object-cover" sizes="22vw" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats bar — full width, below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
        >
          {stats.map(({ icon: Icon, value, suffix, label, display, decimal }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm overflow-hidden group hover:shadow-md hover:border-blue-200 transition-all text-center"
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
    </section>
  );
}
