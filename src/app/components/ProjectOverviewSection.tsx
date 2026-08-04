"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "KANARIA RESIDENCE is a contemporary boutique residential development created for those who appreciate refined design, modern comfort, and exceptional quality of living.",
  "Thoughtfully designed with elegant architectural lines, premium finishes, advanced thermal performance, and smart-living provisions, the development represents a new standard of residential living in Paphos. Every element has been carefully considered to create homes that are not only visually striking but also comfortable, efficient, and built for everyday life.",
  "Featuring only eight exclusive residences, KANARIA RESIDENCE offers a rare sense of privacy and tranquillity within a low-density neighbourhood. Each residence has been designed to provide a balance between contemporary aesthetics, functional luxury, and a connection to the Mediterranean lifestyle.",
  "Located in one of Paphos' most desirable areas, the development places residents just moments away from the sea, essential amenities, and the vibrant character of the city, while maintaining the peace and comfort of a private residential environment.",
];

const details = [
  { label: "Location", value: "Paphos, Cyprus" },
  { label: "Type", value: "Luxury Residential" },
  { label: "Units", value: "8 Apartments" },
  { label: "Area", value: "920 m² total" },
  { label: "Status", value: "Under Construction" },
  { label: "Delivery", value: "Q2 2027" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ProjectOverviewSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#121212]">
      <motion.h2
        {...fadeUp}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] text-[#f5f0eb] max-w-5xl mb-16 md:mb-20"
      >
        Eight apartments.
        <br />
        One uncompromising vision.
      </motion.h2>

      <div className="max-w-4xl space-y-8 md:space-y-10 mb-20 md:mb-28">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: "easeOut" }}
            className="text-sm md:text-base leading-[1.9] text-[#f5f0eb]/60 font-light"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.dl
        {...fadeUp}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10"
      >
        {details.map((item, i) => (
          <div
            key={item.label}
            className={`py-8 md:py-10 px-2 md:px-8 border-b border-white/10 ${
              i % 2 === 0 ? "md:border-r md:border-white/10" : ""
            }`}
          >
            <dt className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/40 uppercase mb-4">
              {item.label}
            </dt>
            <dd className="font-serif font-light text-2xl md:text-3xl text-[#f5f0eb]">
              {item.value}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
