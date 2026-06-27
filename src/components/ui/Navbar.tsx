"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Fix My Device?", href: "/#checker" },
  { label: "Services",       href: "/#services" },
  { label: "How It Works",   href: "/#process" },
  { label: "About",          href: "/#about" },
  { label: "Reviews",        href: "/#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const shrink = scrollY > 60;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/80 shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "container mx-auto px-4 flex items-center justify-between transition-all duration-300",
          shrink ? "h-14" : "h-16"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className={cn(
            "font-bold text-white transition-all duration-300",
            shrink ? "text-base" : "text-lg"
          )}>
            iFix <span className="text-blue-400">Bluetooth</span>
            <span className="text-gray-400 text-sm font-normal hidden sm:inline"> & Neckband</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                "text-gray-300 hover:text-white transition-colors relative group",
                shrink ? "text-sm" : "text-sm"
              )}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            className={cn(
              "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/30",
              shrink ? "text-xs py-1.5" : "text-sm py-2"
            )}
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 hover:text-white transition-colors">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-b border-gray-800 px-4 pb-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/5 py-2.5 px-3 rounded-lg text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-blue-400 text-sm py-2.5 px-3">
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
        </div>
      )}
    </header>
  );
}
