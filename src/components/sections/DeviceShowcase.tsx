"use client";

import Image from "next/image";

const devices = [
  { image: "/devices/Amazfit T Rex.png",       brand: "Amazfit",    model: "T Rex",          category: "Smart Watch"  },
  { image: "/devices/Fire Boltt Snapp.png",     brand: "Fire-Boltt", model: "Snapp",          category: "Smart Watch"  },
  { image: "/devices/JBL Tws 130.png",          brand: "JBL",        model: "TWS 130",        category: "TWS / Earbuds"},
  { image: "/devices/JBL Tws 230.png",          brand: "JBL",        model: "TWS 230",        category: "TWS / Earbuds"},
  { image: "/devices/JBL wave beam.png",        brand: "JBL",        model: "Wave Beam",      category: "TWS / Earbuds"},
  { image: "/devices/Sony WF 1000xm3.png",      brand: "Sony",       model: "WF-1000XM3",     category: "TWS / Earbuds"},
  { image: "/devices/Sony WF 1000xm4.png",      brand: "Sony",       model: "WF-1000XM4",     category: "TWS / Earbuds"},
  { image: "/devices/Jabra Evolve 20.png",      brand: "Jabra",      model: "Evolve 20",      category: "Headphones"   },
  { image: "/devices/JBL Charge 5.png",         brand: "JBL",        model: "Charge 5",       category: "Speaker"      },
  { image: "/devices/JBL Boom box 1.png",       brand: "JBL",        model: "Boombox 1",      category: "Speaker"      },
  { image: "/devices/Marshall Emberton 2.png",  brand: "Marshall",   model: "Emberton II",    category: "Speaker"      },
  { image: "/devices/Boat Stone 1000.png",      brand: "boAt",       model: "Stone 1000",     category: "Speaker"      },
];

const categoryColor: Record<string, string> = {
  "Smart Watch":   "bg-purple-50 text-purple-600 border-purple-200",
  "TWS / Earbuds": "bg-blue-50 text-blue-600 border-blue-200",
  "Headphones":    "bg-green-50 text-green-600 border-green-200",
  "Speaker":       "bg-orange-50 text-orange-600 border-orange-200",
};

const doubled = [...devices, ...devices];

function DeviceCard({ device }: { device: typeof devices[0] }) {
  return (
    <div className="w-44 shrink-0 mx-3 group cursor-default">
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200">
        <div className="relative w-full h-28 mb-3">
          <Image
            src={device.image}
            alt={`${device.brand} ${device.model}`}
            fill
            className="object-contain"
            sizes="176px"
          />
        </div>
        <p className="text-gray-900 font-semibold text-xs text-center leading-tight">{device.brand}</p>
        <p className="text-gray-500 text-xs text-center mt-0.5">{device.model}</p>
        <div className="flex justify-center mt-2">
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${categoryColor[device.category]}`}>
            {device.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DeviceShowcase() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 text-center mb-10">
        <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Devices We Repair</span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-2">
          Recognise Your Device?
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          We service all these models and many more. Use Quick Check below to confirm your exact device.
        </p>
      </div>

      <div className="relative">
        <div className="flex marquee-left">
          {doubled.map((device, i) => (
            <DeviceCard key={i} device={device} />
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
