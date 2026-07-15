import Link from "next/link";
import Image from "next/image";
import { CheckCircle, XCircle, ArrowRight, CalendarCheck } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { DeviceCategory } from "@/lib/constants";

export interface PricingRow {
  brand: string;
  model: string;
  complaints: string[];
  price?: string;
  time?: string;
  note?: string;
  photoRequired?: boolean;
  image?: string;
}

export interface ServicePageProps {
  category: DeviceCategory;
  title: string;
  subtitle: string;
  description: string;
  deviceTypes: string[];
  issuesFixed: string[];
  brandsServiced: string[];
  brandsLimited: { brand: string; note: string }[];
  pricing: PricingRow[];
  relatedServices: { label: string; href: string }[];
  hidePriceCol?: boolean;
}

function bookingUrl(category: DeviceCategory, brand: string, model: string) {
  const params = new URLSearchParams({ category, brand, model, source: "service" });
  return `/?${params.toString()}#contact`;
}

export default function ServicePage({
  category, title, subtitle, description, deviceTypes, issuesFixed,
  brandsServiced, brandsLimited, pricing, relatedServices, hidePriceCol = false,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gray-50 min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-center px-4 border-b border-gray-200">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-3">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-500 max-w-xl mx-auto">{description}</p>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-16 max-w-6xl">

          {/* Pricing Table */}
          {pricing.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Repair Pricing</h2>
              <p className="text-gray-500 text-sm mb-6">All repairs come with a service warranty. Final quote confirmed after diagnosis.</p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm min-w-[720px]">
                  <thead className="bg-blue-50 text-gray-700 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Brand</th>
                      <th className="px-4 py-3 text-left font-semibold">Model</th>
                      <th className="px-4 py-3 text-left font-semibold">Issues Covered</th>
                      {!hidePriceCol && <th className="px-4 py-3 text-left font-semibold">Approx Cost (₹)</th>}
                      <th className="px-4 py-3 text-left font-semibold">Book</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricing.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-4 text-gray-900 font-medium align-top">{row.brand}</td>
                        <td className="px-4 py-4 align-top whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {row.image && (
                              <div className="relative w-10 h-10 flex-shrink-0 rounded-lg border border-gray-100 bg-gray-50 overflow-hidden">
                                <Image src={row.image} alt={row.model} fill className="object-contain p-0.5" />
                              </div>
                            )}
                            <span className="text-gray-700">{row.model}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 align-top">
                          <ul className="space-y-1">
                            {row.complaints.map((c, j) => (
                              <li key={j} className="flex items-start gap-1.5 text-gray-600">
                                <span className="text-blue-500 mt-0.5">❖</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </td>
                        {!hidePriceCol && (
                          <td className="px-4 py-4 align-top">
                            <span className="text-green-700 font-semibold whitespace-pre-line">{row.price}</span>
                            {row.note && <p className="text-gray-400 text-xs mt-1">{row.note}</p>}
                            {row.photoRequired && (
                              <span className="inline-flex items-center gap-1 mt-2 text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded-full">
                                📷 Photo required
                              </span>
                            )}
                          </td>
                        )}
                        <td className="px-4 py-4 align-top">
                          <a
                            href={bookingUrl(category, row.brand, row.model)}
                            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap shadow-sm"
                          >
                            <CalendarCheck className="w-3.5 h-3.5" />
                            Book Service
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-xs mt-3">* Prices are indicative. Final cost confirmed after device diagnosis.</p>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Issues We Fix</h2>
              <ul className="space-y-2">
                {issuesFixed.map((issue) => (
                  <li key={issue} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {issue}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Device Types</h2>
              <ul className="space-y-2">
                {deviceTypes.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brands We Service</h2>
              <div className="flex flex-wrap gap-2">
                {brandsServiced.map((b) => (
                  <span key={b} className="bg-green-50 border border-green-200 text-green-700 text-sm px-3 py-1 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </section>

            {brandsLimited.length > 0 && (
              <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limited Support</h2>
                <ul className="space-y-2">
                  {brandsLimited.map(({ brand, note }) => (
                    <li key={brand} className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="text-gray-900 font-medium">{brand}</span>
                        <span className="text-gray-500"> — {note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* CTA */}
          <section className="bg-blue-600 rounded-2xl p-8 text-center shadow-lg shadow-blue-600/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Fix Your Device?</h3>
            <p className="text-blue-100 mb-6">Submit a repair request and we&apos;ll get back to you within a few hours.</p>
            <a
              href={`/?category=${encodeURIComponent(category)}#contact`}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Book Repair Now <ArrowRight className="w-5 h-5" />
            </a>
          </section>

          {/* Related services */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Repair Services</h3>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href}
                  className="border border-gray-200 hover:border-blue-400 bg-white text-gray-600 hover:text-blue-600 text-sm px-4 py-2 rounded-xl transition-colors shadow-sm">
                  {s.label} →
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
