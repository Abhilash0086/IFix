import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Clock } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface PricingRow {
  brand: string;
  model: string;
  complaints: string[];
  price: string;
  time: string;
  note?: string;
  photoRequired?: boolean;
}

export interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  deviceTypes: string[];
  issuesFixed: string[];
  brandsServiced: string[];
  brandsLimited: { brand: string; note: string }[];
  pricing: PricingRow[];
  relatedServices: { label: string; href: string }[];
}

export default function ServicePage({
  title, subtitle, description, deviceTypes, issuesFixed,
  brandsServiced, brandsLimited, pricing, relatedServices,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-center px-4">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">{description}</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Book Repair <ArrowRight className="w-5 h-5" />
          </a>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-16 max-w-6xl">

          {/* Pricing Table */}
          {pricing.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-2">Repair Pricing</h2>
              <p className="text-gray-500 text-sm mb-6">All repairs come with a service warranty. Final quote confirmed after diagnosis.</p>
              <div className="overflow-x-auto rounded-2xl border border-gray-800">
                <table className="w-full text-sm min-w-[640px]">
                  <thead className="bg-blue-900/40 text-gray-200 border-b border-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Brand</th>
                      <th className="px-4 py-3 text-left font-semibold">Model</th>
                      <th className="px-4 py-3 text-left font-semibold">Issues Covered</th>
                      <th className="px-4 py-3 text-left font-semibold">Cost (₹)</th>
                      <th className="px-4 py-3 text-left font-semibold">TAT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {pricing.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/50"}>
                        <td className="px-4 py-4 text-white font-medium align-top">{row.brand}</td>
                        <td className="px-4 py-4 text-gray-200 align-top whitespace-nowrap">{row.model}</td>
                        <td className="px-4 py-4 align-top">
                          <ul className="space-y-1">
                            {row.complaints.map((c, j) => (
                              <li key={j} className="flex items-start gap-1.5 text-gray-300">
                                <span className="text-blue-400 mt-0.5">❖</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-4 py-4 align-top">
                          <span className="text-green-400 font-semibold whitespace-pre-line">{row.price}</span>
                          {row.note && <p className="text-gray-500 text-xs mt-1">{row.note}</p>}
                          {row.photoRequired && (
                            <span className="inline-flex items-center gap-1 mt-2 text-xs bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded-full">
                              📷 Photo required
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4 align-top">
                          <span className="inline-flex items-center gap-1 text-gray-300 whitespace-nowrap">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            {row.time}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-xs mt-3">* Prices are indicative. Final cost confirmed after device diagnosis.</p>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Issues we fix */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Issues We Fix</h2>
              <ul className="space-y-2">
                {issuesFixed.map((issue) => (
                  <li key={issue} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {issue}
                  </li>
                ))}
              </ul>
            </section>

            {/* Device types */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Device Types</h2>
              <ul className="space-y-2">
                {deviceTypes.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brands we service */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Brands We Service</h2>
              <div className="flex flex-wrap gap-2">
                {brandsServiced.map((b) => (
                  <span key={b} className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </section>

            {brandsLimited.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Limited Support</h2>
                <ul className="space-y-2">
                  {brandsLimited.map(({ brand, note }) => (
                    <li key={brand} className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="text-white font-medium">{brand}</span>
                        <span className="text-gray-400"> — {note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* CTA */}
          <section className="bg-blue-600/10 border border-blue-600/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Fix Your Device?</h3>
            <p className="text-gray-400 mb-6">Submit a repair request and we&apos;ll get back to you within a few hours.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Book Repair Now <ArrowRight className="w-5 h-5" />
            </a>
          </section>

          {/* Related services */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-4">Other Repair Services</h3>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href}
                  className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 text-sm px-4 py-2 rounded-xl transition-colors">
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
