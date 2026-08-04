"use client";

import { motion } from "framer-motion";

type Group = {
  title: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Construction",
    items: [
      "Reinforced concrete structure",
      "Anti-seismic structural design",
      "8cm external thermal insulation system",
      "High-performance thermal aluminium system",
      "Double-glazed energy-efficient windows",
      "Fire-rated entrance door",
      "Pressurized water system",
      "Solar water heating system",
    ],
  },
  {
    title: "Interior Finishes",
    items: [
      "Premium porcelain flooring",
      "Wood-look porcelain bedroom flooring",
      "Marble-finished common areas",
      "Decorative false ceilings",
      "Concealed LED lighting",
      "Custom-made wardrobes",
      "Walk-in showers",
      "Smart illuminated mirrors",
      "Built-in Whirlpool appliances",
      "Hydronic underfloor heating throughout",
    ],
  },
  {
    title: "Smart & Outdoor",
    items: [
      "Smart video intercom system",
      "Facial recognition access",
      "Fingerprint access",
      "Mobile app remote unlocking",
      "Inverter air-conditioning systems",
      "Energy Efficiency Class A",
      "Electric gated entrance",
      "EV charging provision",
      "Optional smart-home integration",
      "Built-in BBQ & outdoor kitchen (Penthouse)",
      "Jacuzzi provision (Penthouse)",
      "Glass balcony railings",
    ],
  },
];

const footnote =
  "Certain finishes, appliances, and smart-home features may be customised upon client request.";

export default function SpecificationFeaturesSection() {
  return (
    <section className="bg-[#121212] px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex items-center gap-6 mb-16 md:mb-24"
      >
        <span className="text-[10px] tracking-[0.35em] text-[#f5f0eb]/70 uppercase">
          Specification &amp; Features
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="space-y-20 md:space-y-24">
        {groups.map((group, i) => (
          <FeatureGroup key={group.title} group={group} delay={i * 0.05} />
        ))}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-xs md:text-sm italic font-light text-[#f5f0eb]/40 pt-4"
        >
          {footnote}
        </motion.p>
      </div>
    </section>
  );
}

function FeatureGroup({ group, delay }: { group: Group; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <h3 className="font-serif font-light text-3xl md:text-4xl text-[#f5f0eb] mb-8 md:mb-10">
        {group.title}
      </h3>

      <ul className="border-t border-white/10">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-4 py-4 md:py-5 border-b border-white/10"
          >
            <span
              aria-hidden
              className="text-[#f5f0eb]/40 text-[10px] leading-none"
            >
              ◇
            </span>
            <span className="text-sm md:text-base font-light text-[#f5f0eb]/60">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
