"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Karthik S.",  location: "Coimbatore",      rating: 5, text: "My boAt earbuds had one side dead for months. Got it fixed here in under 2 hours. Very reasonable price and honest service.", device: "boAt TWS" },
  { name: "Priya M.",   location: "Gandhipuram",      rating: 5, text: "Smart watch display was cracked. They replaced it perfectly, looks brand new. Will definitely come back.",                    device: "Noise Smart Watch" },
  { name: "Rajan V.",   location: "RS Puram",         rating: 5, text: "Sony headphone charging port was broken. Fixed it same day. Great workmanship and very transparent about costs.",              device: "Sony WH-1000XM4" },
  { name: "Anitha K.",  location: "Peelamedu",        rating: 5, text: "JBL speaker was not turning on after getting wet. They diagnosed and repaired it. Very professional staff.",                   device: "JBL Flip 5" },
  { name: "Suresh P.",  location: "Singanallur",      rating: 5, text: "Neckband wire was cut and mic stopped working. Got both fixed at a very fair price. Recommended to all friends.",              device: "Realme Neckband" },
  { name: "Deepa R.",   location: "Saibaba Colony",   rating: 5, text: "Amazfit watch battery was draining in 2 hours. Battery replacement done professionally. Now lasts the full day.",              device: "Amazfit GTS 2" },
  { name: "Manoj T.",   location: "Vadavalli",        rating: 5, text: "One side of my JBL earbuds stopped working. Fixed within 30 minutes at a very affordable price. Excellent service!",           device: "JBL Wave Beam" },
  { name: "Selvi R.",   location: "Ukkadam",          rating: 5, text: "Fire-Boltt watch was not charging at all. They repaired it the same day. Very happy with the service.",                        device: "Fire-Boltt Snapp" },
];

// Duplicate for seamless infinite scroll
const doubled = [...reviews, ...reviews];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-80 shrink-0 bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 mx-3 backdrop-blur-sm relative overflow-hidden group">
      <div className="absolute top-4 right-4 text-gray-700 group-hover:text-gray-600 transition-colors">
        <Quote className="w-8 h-8" />
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 text-sm mb-5 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <p className="text-gray-500 text-xs">{review.location}</p>
        </div>
        <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full whitespace-nowrap">
          {review.device}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real feedback from customers across Coimbatore.</p>
        </motion.div>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative mb-4">
        <div className="flex marquee-left">
          {doubled.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee row 2 — right to left */}
      <div className="relative">
        <div className="flex marquee-right">
          {doubled.slice().reverse().map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
