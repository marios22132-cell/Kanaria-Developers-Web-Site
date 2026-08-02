"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import KanariaLogo from "./KanariaLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
        scrolled ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <Link href="/" aria-label="Kanaria Developers — Home">
        <KanariaLogo />
      </Link>
      <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] font-light text-[#f5f0eb]/80">
        <Link href="/project" className="hover:text-[#f5f0eb] transition-colors">Project</Link>
        <a href="/#about" className="hover:text-[#f5f0eb] transition-colors">About</a>
        <a href="/#contact" className="hover:text-[#f5f0eb] transition-colors">Contact</a>
        <span className="text-[#f5f0eb]/50">+357 96 657 537</span>
      </div>
      <a
        href="/#contact"
        className="border border-[#f5f0eb]/40 text-[#f5f0eb] text-xs tracking-[0.2em] px-5 py-2 hover:bg-[#f5f0eb]/10 transition-colors"
      >
        INQUIRE
      </a>
    </nav>
  );
}
