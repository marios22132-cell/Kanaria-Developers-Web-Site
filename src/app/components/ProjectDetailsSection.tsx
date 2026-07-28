"use client";

import { motion } from "framer-motion";

const details = [
  { label: "Type", value: "Luxury Residential" },
  { label: "Apartments", value: "8 Units" },
  { label: "Total Area", value: "920 m²" },
  { label: "Delivery", value: "Q2 2027" },
];

export default function ProjectDetailsSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-white/10">
      <div className="grid grid-cols-2 gap-0 border border-white/10 max-w-2xl">
        {details.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`p-8 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10" : ""}`}
          >
            <p className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase mb-3">
              {item.label}
            </p>
            <p className="font-serif font-light text-2xl text-[#f5f0eb]">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex items-center gap-3 text-xs tracking-[0.2em] text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors uppercase group"
      >
        Load More
        <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
      </motion.button>
    </section>
  );
}
