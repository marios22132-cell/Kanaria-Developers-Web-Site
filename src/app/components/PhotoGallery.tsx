"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/living_room.jpeg", alt: "Kanaria Residence - Living Room" },
  { src: "/images/living_room_2.jpeg", alt: "Kanaria Residence - Living Room II" },
  { src: "/images/kitchen.jpeg", alt: "Kanaria Residence - Kitchen" },
  { src: "/images/bathroom.jpeg", alt: "Kanaria Residence - Bathroom" },
  { src: "/images/table.jpeg", alt: "Kanaria Residence - Dining Area" },
  { src: "/images/walkWay.jpeg", alt: "Kanaria Residence - Walkway" },
];

const PER_SET = 3;
const TOTAL_SETS = Math.floor(photos.length / PER_SET);

export default function PhotoGallery() {
  const [activeSet, setActiveSet] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % TOTAL_SETS);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  const current = photos.slice(activeSet * PER_SET, activeSet * PER_SET + PER_SET);
  const currentPhotoIndex = (photo: { src: string }) =>
    photos.findIndex((p) => p.src === photo.src);

  return (
    <>
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
              <motion.button
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden bg-[#1e1e1e] group cursor-pointer"
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setLightbox(currentPhotoIndex(photo))}
                aria-label={`View ${photo.alt}`}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.button>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            <motion.div
              className="relative z-10 w-full max-w-5xl mx-6 aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox}
                  className="relative w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={photos[lightbox].src}
                    alt={photos[lightbox].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-linear-to-t from-black/60 to-transparent">
                <p className="text-xs tracking-[0.15em] text-[#f5f0eb]/70">{photos[lightbox].alt}</p>
              </div>
            </motion.div>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 z-10 text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors text-2xl p-3"
              aria-label="Previous photo"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 z-10 text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors text-2xl p-3"
              aria-label="Next photo"
            >
              →
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors text-sm tracking-[0.2em] uppercase"
              aria-label="Close"
            >
              Close ✕
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.2em] text-[#f5f0eb]/40">
              {lightbox + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
