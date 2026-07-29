"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PhotoGallery from "./PhotoGallery";

export default function ProjectSection() {
  return (
    <section id="project" className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-6"
      >
        Current Project
      </motion.p>

      <div className="flex items-start justify-between mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#f5f0eb]"
        >
          Kanaria Residence{" "}
          <span className="text-[#f5f0eb]/40">→</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block text-xs tracking-[0.15em] text-[#f5f0eb]/50 pt-2"
        >
          Paphos, Cyprus
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden mb-4"
      >
        <Image
          src="/images/living_room.jpeg"
          alt="Kanaria Residence — Interior"
          fill
          className="object-cover"
        />
        <span className="absolute top-4 left-4 text-[9px] tracking-[0.25em] border border-[#f5f0eb]/40 text-[#f5f0eb]/70 px-3 py-1.5 uppercase">
          Under Construction
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="max-w-xs ml-auto"
      >
        <PhotoGallery />
      </motion.div>
    </section>
  );
}
