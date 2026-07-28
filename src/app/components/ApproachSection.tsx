"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Deliberate",
    subtitle: "One project at a time.",
    body: "We believe quality requires focus. Every project receives the full attention of our team, bringing together architectural vision, engineering expertise, carefully selected materials, and precise planning. Every decision is considered with purpose.",
  },
  {
    num: "02",
    title: "Transparent",
    subtitle: "Trust built through clarity.",
    body: "We believe our clients deserve complete confidence throughout the journey. From budgeting and scheduling to construction progress, we maintain clear communication and transparency at every stage. We do not deliver surprises — we deliver exceptional buildings.",
  },
  {
    num: "03",
    title: "Enduring",
    subtitle: "Designed for today. Built for generations.",
    body: "We select materials, systems, and construction methods with longevity in mind. Our goal is not simply to complete a project, but to create spaces that maintain their beauty, comfort, and value for decades to come.",
  },
];

export default function ApproachSection() {
  return (
    <section className="border-t border-white/10">
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-8"
        >
          Our Approach
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#f5f0eb] leading-tight mb-8 max-w-4xl"
        >
          Built on Precision.<br />Guided by Purpose.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-sm font-light leading-7 text-[#f5f0eb]/60 max-w-lg mb-16"
        >
          At KANARIA DEVELOPERS, our approach is simple: exceptional buildings are created through careful decisions, clear communication, and an uncompromising commitment to quality.
        </motion.p>

        <div className="space-y-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="border border-white/10 p-8 md:p-10 -mt-px"
            >
              <p className="text-xs text-[#f5f0eb]/30 mb-4">{p.num}</p>
              <h3 className="font-serif font-light text-3xl text-[#f5f0eb] mb-1">{p.title}</h3>
              <p className="text-xs tracking-[0.1em] text-[#f5f0eb]/50 italic mb-5">{p.subtitle}</p>
              <p className="text-sm font-light leading-7 text-[#f5f0eb]/60 max-w-2xl">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-10 border-t border-white/10 flex items-center justify-between">
        <p className="text-xs tracking-[0.15em] text-[#f5f0eb]/40">KANARIA DEVELOPERS</p>
        <p className="text-xs tracking-[0.1em] text-[#f5f0eb]/40 italic">Defined by Design. Built for Life.</p>
      </div>
    </section>
  );
}
