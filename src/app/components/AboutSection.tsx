"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KanariaLogo from "./KanariaLogo";

const extraParagraphs = [
  "With over 10 years of company experience and more than 20 years of expertise in civil engineering and project management, our foundation is built on technical knowledge, attention to detail, and a passion for excellence. Founded by our father, the company was built on strong principles of dedication and quality. Today, we continue that legacy by bringing a modern vision to construction, combining proven expertise with innovative methods, advanced technology, and contemporary design.",
  "Specialising in luxury residential buildings, commercial developments, and design & build solutions, we focus on delivering projects where every element has a purpose. From the initial concept to the final finishing touches, we believe that the smallest details create the biggest difference.",
  "Unlike large-scale developers focused on quantity, we believe in quality. We carefully manage one project at a time, ensuring every home receives the attention, precision, and craftsmanship it deserves. Our approach allows us to maintain complete control over the construction process and deliver results that exceed expectations without compromise.",
  "Our commitment is built around four core values: Innovation, Sustainability, Quality, and Client Satisfaction. By embracing modern construction technologies and efficient building methods, we create homes that are not only visually inspiring but also comfortable, functional, and designed for the future.",
  "Whether creating a private residence or a development opportunity for investors, our goal remains the same: to build spaces where people feel at home.",
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

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
          className="text-sm font-light leading-7 text-[#f5f0eb]/65 max-w-lg mb-6"
        >
          At KANARIA DEVELOPERS, we believe exceptional spaces are created through thoughtful design, quality craftsmanship, and a deep understanding of how people live. Based in Paphos, Cyprus, we are a family-owned construction and development company dedicated to creating luxury homes and commercial spaces that combine elegance, comfort, and lasting value.
        </motion.p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-5 max-w-lg mb-6">
                {extraParagraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-sm font-light leading-7 text-[#f5f0eb]/65"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-3 text-xs tracking-[0.2em] text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors uppercase"
          >
            {expanded ? "Show Less" : "Show More"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-base inline-block"
            >
              ↓
            </motion.span>
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
