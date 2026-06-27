"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Watch, Headphones, Speaker, Radio, Ear } from "lucide-react";

const services = [
  { icon: Watch,       title: "Smart Watches",       description: "Display replacement, charging fixes, strap repairs, sensor issues & more.",     href: "/services/smart-watches",       color: "from-purple-500/20 to-purple-600/10 border-purple-500/20 hover:border-purple-400/40", iconColor: "text-purple-400", glow: "group-hover:shadow-purple-500/20" },
  { icon: Ear,         title: "TWS / Earbuds",        description: "One-side dead, case charging issues, mic problems & connectivity fixes.",         href: "/services/tws-earbuds",         color: "from-blue-500/20 to-blue-600/10 border-blue-500/20 hover:border-blue-400/40",     iconColor: "text-blue-400",   glow: "group-hover:shadow-blue-500/20"   },
  { icon: Radio,       title: "Neckbands",            description: "Wire cuts, driver replacement, battery issues, mic & button repairs.",             href: "/services/neckbands",           color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 hover:border-cyan-400/40",     iconColor: "text-cyan-400",   glow: "group-hover:shadow-cyan-500/20"   },
  { icon: Headphones,  title: "Headphones",           description: "Ear cup & headband repairs, driver replacement, ANC fixes & more.",               href: "/services/headphones",          color: "from-green-500/20 to-green-600/10 border-green-500/20 hover:border-green-400/40", iconColor: "text-green-400",  glow: "group-hover:shadow-green-500/20"  },
  { icon: Speaker,     title: "Bluetooth Speakers",  description: "No sound, charging port, battery swap, distortion & physical damage.",             href: "/services/bluetooth-speakers",  color: "from-orange-500/20 to-orange-600/10 border-orange-500/20 hover:border-orange-400/40", iconColor: "text-orange-400", glow: "group-hover:shadow-orange-500/20" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">What We Fix</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Our Repair Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Specialized repair for every type of Bluetooth device — all brands, all models.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Link
                href={service.href}
                className={`group block bg-gradient-to-br ${service.color} border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${service.glow}`}
              >
                <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
                  <service.icon className={`w-10 h-10 ${service.iconColor} mb-4`} />
                </motion.div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-blue-400 font-medium group-hover:gap-2 transition-all">
                  View pricing <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
