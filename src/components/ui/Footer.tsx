import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const serviceLinks = [
  { label: "Smart Watches",       href: "/services/smart-watches" },
  { label: "TWS / Earbuds",       href: "/services/tws-earbuds" },
  { label: "Neckbands",           href: "/services/neckbands" },
  { label: "Headphones",          href: "/services/headphones" },
  { label: "Bluetooth Speakers",  href: "/services/bluetooth-speakers" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-gray-900 font-extrabold text-xl mb-3">
            iFix <span className="text-blue-600">Bluetooth</span>
            <span className="text-gray-400 text-sm font-normal"> & Neckband</span>
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            India&apos;s trusted repair center for all Bluetooth devices. Expert technicians, genuine parts, warranty guaranteed.
          </p>
          <div className="flex gap-3">
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm px-3 py-2 rounded-lg hover:bg-green-100 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-700 text-sm px-3 py-2 rounded-lg hover:bg-pink-100 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-gray-500">
            <div className="flex gap-2">
              <Phone className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <a href={`tel:${BUSINESS.phone}`} className="hover:text-blue-600 transition-colors">{BUSINESS.phone}</a>
            </div>
            <div className="flex gap-2">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{BUSINESS.hours}</span>
            </div>
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{BUSINESS.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-gray-100 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} iFix Bluetooth & Neckband Service Center. All rights reserved.
      </div>
    </footer>
  );
}
