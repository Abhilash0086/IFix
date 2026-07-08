"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Search, IndianRupee, Wrench, CheckCircle, Truck } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Submit Request",  desc: "Fill the repair form or WhatsApp us with your device details and issue.", color: "text-blue-600",   bg: "bg-blue-50 border-blue-200" },
  { icon: Search,        step: "02", title: "Diagnosis",       desc: "Our technician inspects the device and identifies the root cause.",       color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
  { icon: IndianRupee,   step: "03", title: "Cost Estimate",   desc: "We share a transparent quote — no hidden charges, you decide to proceed.", color: "text-cyan-600",   bg: "bg-cyan-50 border-cyan-200" },
  { icon: Wrench,        step: "04", title: "Repair",          desc: "Skilled repair using quality components with careful handling.",           color: "text-green-600",  bg: "bg-green-50 border-green-200" },
  { icon: CheckCircle,   step: "05", title: "Quality Check",   desc: "Multi-point QC test before handing over your device.",                    color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" },
  { icon: Truck,         step: "06", title: "Delivery",        desc: "Collect in-store or we arrange delivery. 30-day repair warranty included.",color: "text-orange-600", bg: "bg-orange-50 border-orange-200" },
];

function TimelineStep({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center gap-0">
      <div className={`flex-1 ${isLeft ? "pr-8 text-right" : "pl-8 opacity-0 pointer-events-none"}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`inline-block border rounded-2xl p-5 text-left ${step.bg} max-w-xs ml-auto shadow-sm`}
          >
            <step.icon className={`w-6 h-6 ${step.color} mb-3`} />
            <h3 className="text-gray-900 font-semibold text-base mb-1">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        )}
      </div>

      <div className="relative flex flex-col items-center" style={{ width: 56 }}>
        {index > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{ originY: 0 }}
            className="w-0.5 h-10 bg-gradient-to-b from-gray-200 to-gray-300"
          />
        )}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, delay: index * 0.1 + 0.1 }}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${step.bg} shrink-0`}
        >
          <span className={`text-sm font-bold ${step.color}`}>{step.step}</span>
        </motion.div>
        {index < total - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            style={{ originY: 0 }}
            className="w-0.5 flex-1 h-10 bg-gradient-to-b from-gray-300 to-gray-200"
          />
        )}
      </div>

      <div className={`flex-1 ${!isLeft ? "pl-8" : "pr-8 opacity-0 pointer-events-none"}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`inline-block border rounded-2xl p-5 ${step.bg} max-w-xs shadow-sm`}
          >
            <step.icon className={`w-6 h-6 ${step.color} mb-3`} />
            <h3 className="text-gray-900 font-semibold text-base mb-1">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-24 bg-sky-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Repair Process</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Simple, transparent, and hassle-free — from inquiry to delivery.</p>
        </motion.div>

        <div className="hidden md:block max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <TimelineStep key={step.step} step={step} index={i} total={steps.length} />
          ))}
        </div>

        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`border rounded-2xl p-5 flex gap-4 items-start ${step.bg} shadow-sm`}
            >
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${step.bg}`}>
                <span className={`text-xs font-bold ${step.color}`}>{step.step}</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
