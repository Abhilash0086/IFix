import { Watch, Ear, Radio, Headphones, Speaker } from "lucide-react";
import { COMPLAINT_TYPES } from "./constants";

export const CHECKER_CATEGORIES = [
  { label: "Smart Watch",        icon: Watch,       color: "from-purple-500/20 to-purple-600/10 border-purple-500/30", iconColor: "text-purple-400", lightColor: "border-purple-200 hover:border-purple-400", lightIconColor: "text-purple-600" },
  { label: "TWS / Earbuds",      icon: Ear,         color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",       iconColor: "text-blue-400",   lightColor: "border-blue-200 hover:border-blue-400",   lightIconColor: "text-blue-600"   },
  { label: "Neckband",           icon: Radio,       color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30",       iconColor: "text-cyan-400",   lightColor: "border-cyan-200 hover:border-cyan-400",   lightIconColor: "text-cyan-600"   },
  { label: "Headphones",         icon: Headphones,  color: "from-green-500/20 to-green-600/10 border-green-500/30",    iconColor: "text-green-400",  lightColor: "border-green-200 hover:border-green-400", lightIconColor: "text-green-600"  },
  { label: "Bluetooth Speaker",  icon: Speaker,     color: "from-orange-500/20 to-orange-600/10 border-orange-500/30", iconColor: "text-orange-400", lightColor: "border-orange-200 hover:border-orange-400",lightIconColor: "text-orange-600" },
] as const;

export type CheckerCategory = typeof CHECKER_CATEGORIES[number]["label"];

// Brands per category — "✗" prefix = NOT serviceable
export const CHECKER_BRANDS: Record<CheckerCategory, string[]> = {
  "Smart Watch":       ["Amazfit", "Fire-Boltt", "boAt", "Noise", "realme", "Fastrack", "Zebronics", "pTron", "✗ Apple Watch", "✗ Garmin", "✗ Other Brands"],
  "TWS / Earbuds":     ["JBL", "Sony", "boAt", "Noise", "OnePlus", "realme", "Boult", "Zebronics", "pTron", "Portronics", "✗ Apple AirPods", "✗ Samsung Galaxy Buds", "✗ Other Brands"],
  "Neckband":          ["boAt", "realme", "OnePlus", "JBL", "Sony", "Noise", "Boult", "Zebronics", "Skullcandy", "pTron", "✗ Other Brands"],
  "Headphones":        ["Jabra", "Sony", "JBL", "boAt", "Noise", "Sennheiser", "Skullcandy", "Philips", "Zebronics", "✗ Bang & Olufsen", "✗ Other Brands"],
  "Bluetooth Speaker": ["JBL", "Marshall", "boAt", "Sony", "Portronics", "Zebronics", "Philips", "Mivi", "pTron", "✗ Ultimate Ears", "✗ Other Brands"],
};

// Issues per category — mirrors COMPLAINT_TYPES exactly so pre-fill works
export const CHECKER_ISSUES = COMPLAINT_TYPES;

export type CheckResult =
  | { type: "exact";    price: string; time: string; photoRequired?: boolean; note?: string }
  | { type: "general";  message: string; whatsapp: true }
  | { type: "limited";  message: string; whatsapp: true }
  | { type: "no";       reason: string };

// Lookup table: [category]?.[brand]?.[issue] → CheckResult
// Falls back to general "we service this" if no exact match
const EXACT: Partial<Record<CheckerCategory, Record<string, Record<string, CheckResult>>>> = {
  "Smart Watch": {
    Amazfit: {
      "Not turning on":        { type: "exact", price: "₹850 – ₹950", time: "Within 24 hrs" },
      "Battery draining fast": { type: "exact", price: "₹850 – ₹950", time: "Within 24 hrs" },
      "Charging not working":  { type: "exact", price: "₹850 – ₹950", time: "Within 24 hrs" },
    },
    "Fire-Boltt": {
      "Charging not working": { type: "exact", price: "₹600", time: "Within 24 hrs" },
    },
  },
  "TWS / Earbuds": {
    JBL: {
      "One side not working":  { type: "exact", price: "₹350 – ₹400", time: "Within 24 hrs" },
      "Both sides not working":{ type: "exact", price: "₹650 – ₹800", time: "Within 24 hrs" },
      "Connectivity issues":   { type: "exact", price: "₹350 – ₹400 (single) / ₹650 – ₹800 (both)", time: "Within 24 hrs" },
    },
    Sony: {
      "One side not working":  { type: "exact", price: "₹400 – ₹460", time: "Within 24 hrs" },
      "Both sides not working":{ type: "exact", price: "₹800 – ₹920", time: "Within 24 hrs" },
      "Connectivity issues":   { type: "exact", price: "₹400 – ₹460 (single) / ₹800 – ₹920 (both)", time: "Within 24 hrs" },
    },
  },
  "Headphones": {
    Jabra: {
      "Charging not working":  { type: "exact", price: "₹499 – ₹999", time: "Within 2 days" },
      "Physical damage":       { type: "exact", price: "₹499 – ₹999", time: "Within 2 days", photoRequired: true },
      "Mic not working":       { type: "exact", price: "₹499 – ₹999", time: "Within 2 days" },
      "One side not working":  { type: "exact", price: "₹499 – ₹999", time: "Within 2 days" },
    },
  },
  "Bluetooth Speaker": {
    JBL: {
      "No sound":                  { type: "exact", price: "₹3,000 – ₹6,000", time: "Within 24 hrs – 3 days", note: "Varies by model" },
      "Battery issue":             { type: "exact", price: "₹3,000 – ₹6,000", time: "Within 24 hrs – 3 days", note: "Varies by model" },
      "Distorted sound":           { type: "exact", price: "₹3,000 – ₹6,000", time: "Within 24 hrs – 3 days", note: "Varies by model" },
      "Charging not working":      { type: "exact", price: "₹3,000 – ₹6,000", time: "Within 24 hrs – 3 days", note: "Varies by model" },
    },
    Marshall: {
      "No sound":            { type: "exact", price: "₹2,200", time: "Within 2 days" },
      "Battery issue":       { type: "exact", price: "₹2,200", time: "Within 2 days" },
      "Distorted sound":     { type: "exact", price: "₹2,200", time: "Within 2 days" },
    },
    boAt: {
      "No sound":                    { type: "exact", price: "₹750", time: "Within 24 hrs" },
      "Distorted sound":             { type: "exact", price: "₹750", time: "Within 24 hrs" },
      "Charging pin / port damage":  { type: "exact", price: "₹380", time: "Within 24 hrs", photoRequired: true },
    },
  },
};

// Generic issue pricing that applies to ALL brands in a category (fallback)
const GENERIC_ISSUE_PRICE: Partial<Record<CheckerCategory, Record<string, Omit<Extract<CheckResult, { type: "exact" }>, "type">>>> = {
  "TWS / Earbuds": {
    "Low volume": { price: "Starting ₹99", time: "30 min – 1 day", photoRequired: true },
  },
  "Bluetooth Speaker": {
    "Charging pin / port damage": { price: "Starting ₹299", time: "1 – 2 days", photoRequired: true },
  },
  "Headphones": {
    "Physical damage": { price: "₹480 – ₹900", time: "Within 2 days", photoRequired: true },
  },
};

const NOT_SERVICEABLE: Partial<Record<CheckerCategory, Record<string, string>>> = {
  "Smart Watch":       { "✗ Apple Watch": "We don't service Apple Watches.", "✗ Garmin": "We don't service Garmin watches currently.", "✗ Other Brands": "We only service the brands listed above." },
  "TWS / Earbuds":     { "✗ Apple AirPods": "We don't service Apple AirPods.", "✗ Samsung Galaxy Buds": "Samsung Galaxy Buds require proprietary parts — not serviceable.", "✗ Other Brands": "We only service the brands listed above." },
  "Neckband":          { "✗ Other Brands": "We only service the brands listed above." },
  "Headphones":        { "✗ Bang & Olufsen": "Bang & Olufsen devices require authorised service.", "✗ Other Brands": "We only service the brands listed above." },
  "Bluetooth Speaker": { "✗ Ultimate Ears": "Ultimate Ears devices are not serviceable at this time.", "✗ Other Brands": "We only service the brands listed above." },
};

export function getCheckResult(
  category: CheckerCategory,
  brand: string,
  issue: string
): CheckResult {
  // Not serviceable brands (issue may be empty when skipping step)
  const notServ = NOT_SERVICEABLE[category]?.[brand];
  if (notServ) return { type: "no", reason: notServ };

  // Exact brand + issue match
  const exact = EXACT[category]?.[brand]?.[issue];
  if (exact) return exact;

  // Generic issue price (applies to all brands)
  const generic = GENERIC_ISSUE_PRICE[category]?.[issue];
  if (generic) return { type: "exact", ...generic };

  // Serviceable but no specific price
  return {
    type: "general",
    message: `We service ${brand} ${category}. WhatsApp us for an exact quote.`,
    whatsapp: true,
  };
}
