"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Watch, Headphones, Speaker, Radio, Ear } from "lucide-react";

const services = [
  {
    icon: Watch,
    title: "Smart Watches",
    description: "Display replacement, charging fixes, strap repairs, sensor issues & more.",
    href: "/services/smart-watches",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Ear,
    title: "TWS / Earbuds",
    description: "One-side dead, case charging issues, mic problems & connectivity fixes.",
    href: "/services/tws-earbuds",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Radio,
    title: "Neckbands",
    description: "Wire cuts, driver replacement, battery issues, mic & button repairs.",
    href: "/services/neckbands",
    color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Headphones,
    title: "Headphones",
    description: "Ear cup & headband repairs, driver replacement, ANC fixes & more.",
    href: "/services/headphones",
    color: "from-green-500/20 to-green-600/10 border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Speaker,
    title: "Bluetooth Speakers",
    description: "No sound, charging port, battery swap, distortion & physical damage.",
    href: "/services/bluetooth-speakers",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/20",
    iconColor: "text-orange-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">What We Fix</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Our Repair Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Specialized repair for every type of Bluetooth device — all brands, all models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className={`block bg-gradient-to-br ${service.color} border rounded-2xl p-6 hover:scale-[1.02] transition-transform`}
              >
                <service.icon className={`w-10 h-10 ${service.iconColor} mb-4`} />
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
                <span className="inline-block mt-4 text-sm text-blue-400 font-medium">
                  View pricing →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
