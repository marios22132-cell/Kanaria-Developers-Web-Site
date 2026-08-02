"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Apartments", value: "8 Units" },
  { label: "Total Area", value: "920 m²" },
  { label: "Status", value: "Under Construction" },
  { label: "Delivery", value: "Q2 2027" },
];

export default function ProjectHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-[#121212]/50 via-[#121212]/20 to-[#121212]/90" />

      <header className="relative z-10 flex items-start justify-between px-6 md:px-12 lg:px-16 pt-8 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <svg
            width="72"
            height="82"
            viewBox="0 0 72 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M6 26 L36 4 L66 26"
              stroke="#f5f0eb"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <text
              x="36"
              y="60"
              textAnchor="middle"
              fill="#f5f0eb"
              fontFamily="serif"
              fontSize="44"
              fontWeight="300"
            >
              K
            </text>
          </svg>
          <span className="mt-2 text-[10px] tracking-[0.35em] font-light text-[#f5f0eb]">
            KANARIA
          </span>
          <span className="text-[9px] tracking-[0.4em] font-light text-[#f5f0eb]/70">
            — DEVELOPERS —
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-6 md:gap-10"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 text-xs md:text-sm tracking-[0.15em] font-light text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="bg-[#f5f0eb] text-[#121212] text-xs tracking-[0.25em] px-6 py-3 hover:bg-white transition-colors"
          >
            INQUIRE
          </Link>
        </motion.div>
      </header>

      <div className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-8rem)] px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="text-[10px] md:text-xs tracking-[0.35em] text-[#f5f0eb]/60 uppercase mb-6"
        >
          Kanaria Developers · Paphos, Cyprus
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="font-serif font-light text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-[#f5f0eb] mb-12 md:mb-16"
        >
          Kanaria Residence
        </motion.h1>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-16 gap-y-8 max-w-3xl mb-16 md:mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[9px] md:text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-3">
                {stat.label}
              </dt>
              <dd className="font-serif font-light text-xl md:text-2xl text-[#f5f0eb]">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="flex items-center gap-6"
        >
          <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#f5f0eb]/60 uppercase">
            Project Overview
          </span>
          <span className="h-px flex-1 bg-[#f5f0eb]/20" />
        </motion.div>
      </div>
    </section>
  );
}
