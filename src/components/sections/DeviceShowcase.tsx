"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, Zap } from "lucide-react";

const devices = [
  { image: "/devices/Amazfit T Rex.png",       brand: "Amazfit",    model: "T Rex",          category: "Smart Watch"       },
  { image: "/devices/Fire Boltt Snapp.png",     brand: "Fire-Boltt", model: "Snapp",          category: "Smart Watch"       },
  { image: "/devices/JBL Tws 130.png",          brand: "JBL",        model: "TWS 130 NC",     category: "TWS / Earbuds"     },
  { image: "/devices/JBL Tws 230.png",          brand: "JBL",        model: "TWS 230 NC",     category: "TWS / Earbuds"     },
  { image: "/devices/JBL wave beam.png",        brand: "JBL",        model: "Wave Beam",      category: "TWS / Earbuds"     },
  { image: "/devices/Sony WF 1000xm3.png",      brand: "Sony",       model: "WF-1000XM3",     category: "TWS / Earbuds"     },
  { image: "/devices/Sony WF 1000xm4.png",      brand: "Sony",       model: "WF-1000XM4",     category: "TWS / Earbuds"     },
  { image: "/devices/Jabra Evolve 20.png",      brand: "Jabra",      model: "Evolve 20",      category: "Headphones"        },
  { image: "/devices/JBL Charge 5.png",         brand: "JBL",        model: "Charge 5",       category: "Bluetooth Speaker" },
  { image: "/devices/JBL Boom box 1.png",       brand: "JBL",        model: "Boombox 1",      category: "Bluetooth Speaker" },
  { image: "/devices/Marshall Emberton 2.png",  brand: "Marshall",   model: "Emberton II",    category: "Bluetooth Speaker" },
  { image: "/devices/Boat Stone 1000.png",      brand: "boAt",       model: "Stone 1000",     category: "Bluetooth Speaker" },
];

const categoryStyle: Record<string, { pill: string; border: string }> = {
  "Smart Watch":        { pill: "bg-purple-50 text-purple-600 border-purple-200", border: "hover:border-purple-300" },
  "TWS / Earbuds":      { pill: "bg-blue-50 text-blue-600 border-blue-200",       border: "hover:border-blue-300"   },
  "Headphones":         { pill: "bg-green-50 text-green-600 border-green-200",     border: "hover:border-green-300"  },
  "Bluetooth Speaker":  { pill: "bg-orange-50 text-orange-600 border-orange-200",  border: "hover:border-orange-300" },
};

const categoryHref: Record<string, string> = {
  "Smart Watch":        "/services/smart-watches",
  "TWS / Earbuds":      "/services/tws-earbuds",
  "Headphones":         "/services/headphones",
  "Bluetooth Speaker":  "/services/bluetooth-speakers",
};

function enquireUrl(category: string, brand: string) {
  return `/?category=${encodeURIComponent(category)}&brand=${encodeURIComponent(brand)}#contact`;
}

export default function DeviceShowcase() {
  return (
    <section className="py-20 bg-blue-50 border-b border-blue-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Zap className="w-3.5 h-3.5" />
            Ready Within 24 Hours
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Express Repair Service
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The devices below are our speciality — diagnosed, repaired, and returned to you within 24 hours.
          </p>
        </div>

        {/* Device grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {devices.map((device, i) => {
            const style = categoryStyle[device.category];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`bg-white border border-gray-200 ${style.border} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col`}
              >
                {/* Image */}
                <div className="relative w-full h-32 mb-3">
                  <Image
                    src={device.image}
                    alt={`${device.brand} ${device.model}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Stamp overlay */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center rotate-12 pointer-events-none select-none">
                    <div className="w-full h-full rounded-full border-[2.5px] border-dashed border-green-600/50 bg-white/60 flex flex-col items-center justify-center">
                      <span className="text-green-700 font-black text-[8px] uppercase tracking-tight leading-none">We</span>
                      <span className="text-green-700 font-black text-[8px] uppercase tracking-tight leading-none">Fix</span>
                      <span className="text-green-700 font-black text-[8px] uppercase tracking-tight leading-none">This</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <p className="text-gray-900 font-semibold text-sm text-center leading-tight">{device.brand}</p>
                <p className="text-gray-500 text-xs text-center mt-0.5 mb-2">{device.model}</p>
                <div className="flex justify-center mb-4">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${style.pill}`}>
                    {device.category}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href={enquireUrl(device.category, device.brand)}
                    className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    Enquire Now
                  </a>
                  <Link
                    href={categoryHref[device.category]}
                    className="flex items-center justify-center gap-1.5 bg-white border border-gray-200 hover:border-blue-400 text-gray-600 hover:text-blue-600 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                  >
                    More Details
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
