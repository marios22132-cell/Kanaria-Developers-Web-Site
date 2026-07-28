"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/gallery-1.svg", alt: "Kanaria Residence - Living Room" },
  { src: "/images/gallery-2.svg", alt: "Kanaria Residence - Master Bedroom" },
  { src: "/images/gallery-3.svg", alt: "Kanaria Residence - Kitchen" },
  { src: "/images/gallery-4.svg", alt: "Kanaria Residence - Bathroom" },
  { src: "/images/gallery-5.svg", alt: "Kanaria Residence - Exterior" },
  { src: "/images/gallery-6.svg", alt: "Kanaria Residence - Balcony" },
];

const PER_SET = 3;
const TOTAL_SETS = Math.floor(photos.length / PER_SET);

export default function PhotoGallery() {
  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % TOTAL_SETS);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const current = photos.slice(activeSet * PER_SET, activeSet * PER_SET + PER_SET);

  return (
    <div className="space-y-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSet}
          className="grid grid-cols-3 gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {current.map((photo, i) => (
            <motion.div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden bg-[#1e1e1e]"
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-1.5 justify-center">
        {Array.from({ length: TOTAL_SETS }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSet(i)}
            className={`h-px w-8 transition-all duration-500 ${
              i === activeSet ? "bg-[#f5f0eb]" : "bg-[#f5f0eb]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
