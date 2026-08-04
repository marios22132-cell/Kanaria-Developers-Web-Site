"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import KanariaLogo from "./KanariaLogo";

const navLinks = [
  { href: "/project", label: "Project" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
          scrolled || menuOpen ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <Link href="/" aria-label="Kanaria Developers — Home" onClick={() => setMenuOpen(false)}>
          <KanariaLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] font-light text-[#f5f0eb]/80">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#f5f0eb] transition-colors">
              {l.label}
            </Link>
          ))}
          <span className="text-[#f5f0eb]/50">+357 96 657 537</span>
        </div>

        <div className="flex items-center gap-3 md:gap-0">
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="border border-[#f5f0eb]/40 text-[#f5f0eb] text-[10px] md:text-xs tracking-[0.2em] px-4 md:px-5 py-2 hover:bg-[#f5f0eb]/10 transition-colors"
          >
            INQUIRE
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-[#f5f0eb] ml-1"
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-500 ease-out ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform duration-500 ease-out ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-[#121212]/95 backdrop-blur-lg flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif font-light text-4xl text-[#f5f0eb] hover:text-[#f5f0eb]/70 transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/40 uppercase mb-3">
                Contact
              </p>
              <a
                href="tel:+35796657537"
                className="text-sm tracking-[0.15em] font-light text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
              >
                +357 96 657 537
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
