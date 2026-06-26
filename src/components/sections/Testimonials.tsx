"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Karthik S.",
    location: "Coimbatore",
    rating: 5,
    text: "My boAt earbuds had one side dead for months. Got it fixed here in under 2 hours. Very reasonable price and honest service.",
    device: "boAt TWS",
  },
  {
    name: "Priya M.",
    location: "Gandhipuram",
    rating: 5,
    text: "Smart watch display was cracked. They replaced it perfectly, looks brand new. Will definitely come back.",
    device: "Noise Smart Watch",
  },
  {
    name: "Rajan V.",
    location: "RS Puram",
    rating: 5,
    text: "Sony headphone charging port was broken. Fixed it same day. Great workmanship and very transparent about costs.",
    device: "Sony WH-1000XM4",
  },
  {
    name: "Anitha K.",
    location: "Peelamedu",
    rating: 5,
    text: "JBL speaker was not turning on after getting wet. They diagnosed and repaired it. Very professional staff.",
    device: "JBL Flip 5",
  },
  {
    name: "Suresh P.",
    location: "Singanallur",
    rating: 5,
    text: "Neckband wire was cut and mic stopped working. Got both fixed at a very fair price. Recommended to all friends.",
    device: "Realme Neckband",
  },
  {
    name: "Deepa R.",
    location: "Saibaba Colony",
    rating: 5,
    text: "Amazfit watch battery was draining in 2 hours. Battery replacement done professionally. Now lasts the full day.",
    device: "Amazfit GTS 2",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real feedback from customers across Coimbatore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
                  {review.device}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
