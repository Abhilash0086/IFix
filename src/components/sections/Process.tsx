"use client";

import { motion } from "framer-motion";
import { ClipboardList, Search, IndianRupee, Wrench, CheckCircle, Truck } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Submit Request", desc: "Fill the repair form or WhatsApp us with your device details and issue." },
  { icon: Search, step: "02", title: "Diagnosis", desc: "Our technician inspects the device and identifies the root cause." },
  { icon: IndianRupee, step: "03", title: "Cost Estimate", desc: "We share a transparent quote — no hidden charges, you decide to proceed." },
  { icon: Wrench, step: "04", title: "Repair", desc: "Skilled repair using quality components with careful handling." },
  { icon: CheckCircle, step: "05", title: "Quality Check", desc: "Multi-point QC test before handing over your device." },
  { icon: Truck, step: "06", title: "Delivery", desc: "Collect in-store or we arrange delivery. 30-day repair warranty included." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Our Repair Process</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Simple, transparent, and hassle-free — from inquiry to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-500 font-bold text-sm">{s.step}</span>
                <s.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
