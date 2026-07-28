"use client";

import { motion } from "framer-motion";
import KanariaLogo from "./KanariaLogo";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="px-6 md:px-12 lg:px-20 py-8 border-b border-white/10">
        <div className="flex items-center justify-between">
          <KanariaLogo />
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] text-[#f5f0eb]/60">
            <a href="#project" className="hover:text-[#f5f0eb] transition-colors">Project</a>
            <a href="#about" className="hover:text-[#f5f0eb] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#f5f0eb] transition-colors">Contact</a>
            <span>+357 96 657 537</span>
          </nav>
          <a href="#contact" className="border border-[#f5f0eb]/30 text-[#f5f0eb] text-xs tracking-[0.2em] px-5 py-2 hover:bg-[#f5f0eb]/10 transition-colors">
            INQUIRE
          </a>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-8"
        >
          Who We Are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-[#f5f0eb] leading-tight mb-10 max-w-3xl"
        >
          A new kind of<br />developer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-sm font-light leading-7 text-[#f5f0eb]/65 max-w-lg mb-10"
        >
          At KANARIA DEVELOPERS, we believe exceptional spaces are created through thoughtful design, quality craftsmanship, and a deep understanding of how people live. Based in Paphos, Cyprus, we are a family-owned construction and development company dedicated to creating luxury homes and commercial spaces that combine elegance, comfort, and lasting value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <button className="flex items-center gap-3 text-xs tracking-[0.2em] text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors uppercase group">
            Show More
            <span className="text-base">↓</span>
          </button>
          <a href="#contact" className="flex items-center gap-3 text-xs tracking-[0.2em] text-[#f5f0eb] hover:text-[#f5f0eb]/70 transition-colors uppercase">
            Get in touch
            <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
