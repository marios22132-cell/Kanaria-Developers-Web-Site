"use client";

import { motion } from "framer-motion";

type Residence = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  bg: string;
  specs: { label: string; value: string }[];
  footnote?: string;
};

const residences: Residence[] = [
  {
    eyebrow: "Floors 1 & 2 · 3 Residences per Floor",
    title: "2-Bedroom Apartments",
    description:
      "Spacious open-plan residences with premium finishes, private balconies, and a connection to the Mediterranean lifestyle. Six apartments across two floors, each thoughtfully designed for modern comfort and functional luxury.",
    bg: "bg-[#181818]",
    specs: [
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "1" },
      { label: "Area", value: "80 m²" },
      { label: "Parking", value: "Covered" },
    ],
  },
  {
    eyebrow: "Apartment 301 · 3rd Floor · Entire Floor",
    title: "3-Bedroom Penthouse",
    description:
      "The only residence on the third floor, Apartment 301 delivers a unique whole-floor living experience with exceptional privacy, no shared apartment walls, and expansive outdoor living areas including a built-in BBQ, outdoor kitchen, and Jacuzzi provision.",
    badge: "Penthouse",
    bg: "bg-[#1f1c18]",
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
      { label: "Area", value: "230 m²" },
      { label: "Parking", value: "Covered" },
    ],
    footnote: "Private viewings available upon request.",
  },
];

export default function ResidencesSection() {
  return (
    <section className="bg-[#121212] py-20 md:py-28">
      <header className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center gap-6 mb-10 md:mb-14"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#f5f0eb]/70 uppercase border border-white/15 px-3 py-1.5">
            Residences
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] text-[#f5f0eb] max-w-5xl"
        >
          Two residence types.
          <br />
          One standard of excellence.
        </motion.h2>
      </header>

      <div className="flex flex-col">
        {residences.map((r, i) => (
          <ResidenceCard key={r.title} residence={r} reveal={i * 0.05} />
        ))}
      </div>
    </section>
  );
}

function ResidenceCard({ residence, reveal }: { residence: Residence; reveal: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: reveal, ease: "easeOut" }}
      className={`relative ${residence.bg} px-6 md:px-12 lg:px-20 py-16 md:py-24`}
    >
      {residence.badge && (
        <span className="absolute top-6 right-6 md:top-10 md:right-10 bg-[#f5f0eb] text-[#121212] text-[10px] tracking-[0.3em] uppercase px-4 py-2">
          {residence.badge}
        </span>
      )}

      <p className="text-[10px] md:text-xs tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-6">
        {residence.eyebrow}
      </p>

      <h3 className="font-serif font-light text-3xl md:text-5xl text-[#f5f0eb] mb-6 md:mb-8">
        {residence.title}
      </h3>

      <p className="text-sm md:text-base leading-[1.9] text-[#f5f0eb]/60 font-light max-w-3xl mb-12 md:mb-16">
        {residence.description}
      </p>

      <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-8 max-w-3xl">
        {residence.specs.map((spec) => (
          <div key={spec.label} className="border-t border-white/15 pt-4">
            <dt className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-3">
              {spec.label}
            </dt>
            <dd className="font-serif font-light text-2xl md:text-3xl text-[#f5f0eb]">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      {residence.footnote && (
        <p className="mt-12 md:mt-16 text-xs md:text-sm italic text-[#f5f0eb]/40 font-light">
          {residence.footnote}
        </p>
      )}
    </motion.article>
  );
}
