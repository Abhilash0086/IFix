"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, MessageCircle, IndianRupee, ChevronRight, RotateCcw, AlertTriangle, Camera } from "lucide-react";
import {
  CHECKER_CATEGORIES,
  CHECKER_BRANDS,
  CHECKER_ISSUES,
  CHECKER_HIDDEN_ISSUES,
  getCheckResult,
  type CheckerCategory,
} from "@/lib/checker-data";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Step = "category" | "brand" | "issue" | "result";

export default function DeviceChecker() {
  const [step, setStep] = useState<Step>("category");
  const [category, setCategory] = useState<CheckerCategory | null>(null);
  const [brand, setBrand] = useState("");
  const [issue, setIssue] = useState("");

  const result = category && brand && (issue || brand.startsWith("✗"))
    ? getCheckResult(category, brand, issue)
    : null;

  const reset = () => {
    setStep("category");
    setCategory(null);
    setBrand("");
    setIssue("");
  };

  const stepIndex = { category: 0, brand: 1, issue: 2, result: 3 }[step];

  return (
    <section id="checker" className="py-24 bg-indigo-100">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Quick Check</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3">
            Do We Fix Your Device?
          </h2>
          <p className="text-gray-500">
            Select your device, brand and issue — find out instantly if we service it and what it costs.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {["Device", "Brand", "Issue", "Result"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                i < stepIndex ? "bg-blue-600 text-white" :
                i === stepIndex ? "bg-blue-600 text-white ring-4 ring-blue-100" :
                "bg-gray-100 text-gray-400"
              )}>
                {i < stepIndex ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
              </div>
              <span className={cn("text-xs hidden sm:block", i === stepIndex ? "text-gray-900 font-medium" : "text-gray-400")}>
                {label}
              </span>
              {i < 3 && <ChevronRight className="w-4 h-4 text-gray-300" />}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white border border-indigo-100 rounded-2xl p-6 md:p-8 min-h-[320px] flex flex-col shadow-sm">
          <AnimatePresence mode="wait">

            {/* Step 1 — Category */}
            {step === "category" && (
              <motion.div key="category" {...fadeSlide}>
                <p className="text-gray-500 text-sm mb-5">What type of device do you want to repair?</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {CHECKER_CATEGORIES.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => { setCategory(cat.label); setStep("brand"); }}
                      className={cn(
                        "flex flex-col items-center gap-2 p-3 rounded-xl border bg-white text-center transition-all hover:scale-[1.03] hover:shadow-md overflow-hidden w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)]",
                        cat.lightColor
                      )}
                    >
                      <div className={`relative w-full h-20 rounded-lg overflow-hidden ${cat.bg}`}>
                        <Image
                          src={cat.image}
                          alt={cat.label}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                      <span className="text-gray-800 text-sm font-medium leading-tight">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 — Brand */}
            {step === "brand" && category && (
              <motion.div key="brand" {...fadeSlide} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">What brand is your {category.toLowerCase()}?</p>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 text-xs flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" /> Start over
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CHECKER_BRANDS[category].map((b) => {
                    const isUnsupported = b.startsWith("✗");
                    const displayName = isUnsupported ? b.slice(2) : b;
                    const isOther = displayName === "Other Brands";
                    return (
                      <button
                        key={b}
                        onClick={() => { setBrand(b); setIssue(""); setStep(isUnsupported ? "result" : "issue"); }}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all",
                          isUnsupported
                            ? "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                            : "border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700",
                          isOther && "col-span-2 sm:col-span-3"
                        )}
                      >
                        <span>{displayName}</span>
                        {isUnsupported
                          ? <XCircle className="w-4 h-4 flex-shrink-0" />
                          : <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        }
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 3 — Issue */}
            {step === "issue" && category && (
              <motion.div key="issue" {...fadeSlide} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">What&apos;s the issue with your device?</p>
                  <button onClick={() => setStep("brand")} className="text-gray-400 hover:text-gray-600 text-xs flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 rotate-180" /> Back
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CHECKER_ISSUES[category]
                    .filter((iss) => !CHECKER_HIDDEN_ISSUES[category]?.includes(iss))
                    .map((iss) => (
                      <button
                        key={iss}
                        onClick={() => { setIssue(iss); setStep("result"); }}
                        className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all text-left"
                      >
                        <span>{iss}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                      </button>
                    ))}
                </div>
              </motion.div>
            )}

            {/* Step 4 — Result */}
            {step === "result" && result && (
              <motion.div key="result" {...fadeSlide} className="flex flex-col gap-5">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{category}</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{brand.startsWith("✗") ? brand.slice(2) : brand}</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{issue}</span>
                </div>

                {/* Result card */}
                {result.type === "exact" && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-green-700 font-bold text-lg">Yes, we fix this!</p>
                        <p className="text-gray-500 text-sm">We&apos;ve repaired this exact issue before.</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1">
                        <IndianRupee className="w-3.5 h-3.5" /> Estimated Cost
                      </div>
                      <p className="text-gray-900 font-bold text-xl">{result.price}</p>
                      {result.note && <p className="text-gray-400 text-xs mt-1">{result.note}</p>}
                    </div>

                    {result.photoRequired && (
                      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-700">
                        <Camera className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
                        A photo of your device is required when booking this repair type.
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <a
                        href={`/?category=${encodeURIComponent(category!)}&brand=${encodeURIComponent(brand.replace("✗ ", ""))}&issue=${encodeURIComponent(issue)}&source=checker#contact`}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                      >
                        Book Repair Now
                      </a>
                      <a
                        href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi, I need to repair my ${brand.replace("✗ ", "")} ${category} — Issue: ${issue}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 border border-green-300 text-green-700 font-semibold py-3 rounded-xl transition-colors text-sm"
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                )}

                {result.type === "limited" && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-amber-700 font-bold text-lg">Brand Not in Our Service List</p>
                        <p className="text-gray-500 text-sm mt-1">{result.message}</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi, I want to check if you service my ${category} — Brand: (my brand). Can you confirm?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp to Confirm
                    </a>
                  </div>
                )}

                {result.type === "general" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-blue-700 font-bold text-lg">We can help!</p>
                        <p className="text-gray-500 text-sm">{result.message}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <a
                        href={`/?category=${encodeURIComponent(category!)}&brand=${encodeURIComponent(brand)}&issue=${encodeURIComponent(issue)}&source=checker#contact`}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                      >
                        Book Repair Now
                      </a>
                      <a
                        href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi, I need to repair my ${brand.replace("✗ ", "")} ${category} — Issue: ${issue}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 border border-green-300 text-green-700 font-semibold py-3 rounded-xl transition-colors text-sm"
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                )}

                {result.type === "no" && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                      <div>
                        <p className="text-red-700 font-bold text-lg">Not Serviceable</p>
                        <p className="text-gray-500 text-sm">{result.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-500" />
                      We specialise in Indian and mid-range Bluetooth brands. Check our other services below.
                    </div>
                    <a
                      href="/#services"
                      className="flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-400 text-gray-600 hover:text-blue-600 font-semibold py-3 rounded-xl transition-colors text-sm"
                    >
                      View All Services
                    </a>
                  </div>
                )}

                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 text-sm transition-colors mx-auto"
                >
                  <RotateCcw className="w-4 h-4" /> Check another device
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const fadeSlide = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -20 },
  transition: { duration: 0.2 },
};
