"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.svg"
          alt="Kanaria Residence Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/20" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/60 mb-4 uppercase"
        >
          Developers / Paphos
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-serif font-light text-[clamp(4rem,10vw,9rem)] leading-[0.9] text-[#f5f0eb] mb-6"
        >
          One vision.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          className="text-xs tracking-[0.15em] text-[#f5f0eb]/60"
        >
          Kanaria Residence — Paphos, Cyprus
        </motion.p>
      </div>
    </section>
  );
}
