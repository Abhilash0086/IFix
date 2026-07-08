"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Watch, Headphones, Speaker, Radio, Ear, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Watch,
    title: "Smart Watch Repair",
    href: "/services/smart-watches",
    priceFrom: "₹600",
    tat: "Within 24 hrs",
    accent: "purple",
    issues: ["Not turning on / dead watch", "Battery draining fast", "Charging not working", "Sensor & display issues", "Button not working"],
  },
  {
    icon: Ear,
    title: "TWS & Earbuds Repair",
    href: "/services/tws-earbuds",
    priceFrom: "₹99",
    tat: "30 min – 1 day",
    accent: "blue",
    issues: ["One side not working", "Both sides dead", "Low volume / muffled audio", "Connectivity & pairing issues", "Charging case problems"],
  },
  {
    icon: Radio,
    title: "Neckband Repair",
    href: "/services/neckbands",
    priceFrom: "₹150",
    tat: "Within 24 hrs",
    accent: "cyan",
    issues: ["Wire cut or broken", "One side no sound", "Mic not working", "Button & control issues", "Battery not charging"],
  },
  {
    icon: Headphones,
    title: "Headphone Repair",
    href: "/services/headphones",
    priceFrom: "₹480",
    tat: "Within 2 days",
    accent: "green",
    issues: ["Ear cup or headband damage", "One or both sides dead", "Mic not picking up voice", "ANC not working", "Charging port damage"],
  },
  {
    icon: Speaker,
    title: "Bluetooth Speaker Repair",
    href: "/services/bluetooth-speakers",
    priceFrom: "₹299",
    tat: "Within 24 hrs – 3 days",
    accent: "orange",
    issues: ["No sound output", "Distorted / crackling audio", "Not turning on", "Charging pin damage", "Battery draining fast"],
  },
];

const accentMap: Record<string, { bg: string; border: string; icon: string; badge: string; bullet: string; cta: string }> = {
  purple: { bg: "bg-purple-50",  border: "border-purple-200 hover:border-purple-400", icon: "text-purple-600", badge: "bg-purple-50 border-purple-200 text-purple-700",  bullet: "text-purple-500", cta: "text-purple-600 hover:text-purple-800" },
  blue:   { bg: "bg-blue-50",    border: "border-blue-200 hover:border-blue-400",     icon: "text-blue-600",   badge: "bg-blue-50 border-blue-200 text-blue-700",         bullet: "text-blue-500",   cta: "text-blue-600 hover:text-blue-800"   },
  cyan:   { bg: "bg-cyan-50",    border: "border-cyan-200 hover:border-cyan-400",     icon: "text-cyan-600",   badge: "bg-cyan-50 border-cyan-200 text-cyan-700",         bullet: "text-cyan-500",   cta: "text-cyan-600 hover:text-cyan-800"   },
  green:  { bg: "bg-green-50",   border: "border-green-200 hover:border-green-400",   icon: "text-green-600",  badge: "bg-green-50 border-green-200 text-green-700",      bullet: "text-green-500",  cta: "text-green-600 hover:text-green-800"  },
  orange: { bg: "bg-orange-50",  border: "border-orange-200 hover:border-orange-400", icon: "text-orange-600", badge: "bg-orange-50 border-orange-200 text-orange-700",   bullet: "text-orange-500", cta: "text-orange-600 hover:text-orange-800" },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">What We Fix</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Repair Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Transparent pricing, fast turnaround. Click any service to see the full pricing table.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={s.href}
                  className={`group flex flex-col sm:flex-row items-start gap-5 bg-white border ${a.border} rounded-2xl p-6 hover:shadow-md transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center`}>
                    <s.icon className={`w-7 h-7 ${a.icon}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-gray-900 font-bold text-lg">{s.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${a.badge}`}>
                        From {s.priceFrom}
                      </span>
                      <span className="text-xs text-gray-400 border border-gray-200 px-2.5 py-1 rounded-full">
                        ⏱ {s.tat}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                      {s.issues.map((issue) => (
                        <li key={issue} className="flex items-center gap-2 text-gray-500 text-sm">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${a.bullet}`} />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className={`flex-shrink-0 flex items-center gap-1 text-sm font-semibold ${a.cta} self-center transition-all`}>
                    View pricing
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
