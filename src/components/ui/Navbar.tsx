"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Zap } from "lucide-react";
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
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      )}
    >
      <nav
        className={cn(
          "container mx-auto px-4 flex items-center justify-between transition-all duration-300",
          shrink ? "h-14" : "h-16"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 shadow-sm group-hover:bg-blue-700 transition-colors">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className={cn(
            "font-extrabold transition-all duration-300 tracking-tight",
            shrink ? "text-xl" : "text-2xl"
          )}>
            <span className="text-gray-900">iFix </span>
            <span className="text-blue-600">Bluetooth</span>
            <span className="text-gray-400 text-sm font-normal hidden sm:inline"> & Neckband</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            className={cn(
              "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 rounded-lg transition-all hover:shadow-md hover:shadow-blue-600/30",
              shrink ? "text-xs py-1.5" : "text-sm py-2"
            )}
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-600 hover:text-gray-900 transition-colors">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pb-4 space-y-1 shadow-lg">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 py-2.5 px-3 rounded-lg text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-blue-600 text-sm py-2.5 px-3 font-medium">
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
        </div>
      )}
    </header>
  );
}
