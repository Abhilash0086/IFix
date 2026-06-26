"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Fix My Device?", href: "/#checker" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-gray-950/95 backdrop-blur border-b border-gray-800 shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-bold text-lg">
          iFix <span className="text-blue-400">Bluetooth</span> & Neckband
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-gray-300 hover:text-white text-sm transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 hover:text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white py-2 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-blue-400 text-sm py-2">
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
        </div>
      )}
    </header>
  );
}
