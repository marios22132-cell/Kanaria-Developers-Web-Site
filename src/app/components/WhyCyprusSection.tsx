"use client";

import { motion } from "framer-motion";

const cyprusPoints = [
  { label: "Strategic Location", text: "A gateway connecting Europe, the Middle East, and Africa." },
  { label: "Stable Investment Environment", text: "A secure property market supported by a transparent legal system." },
  { label: "Exceptional Lifestyle", text: "Beautiful coastlines, a mild climate, and a relaxed pace of life." },
  { label: "Modern Infrastructure", text: "International airports, quality healthcare, excellent schools, and reliable services." },
  { label: "Tax Advantages", text: "A competitive tax system attractive to both residents and international investors." },
  { label: "Safety & Security", text: "One of the safest countries in Europe, offering peace of mind for families and individuals alike." },
];

const paphosPoints = [
  { label: "Growing Real Estate Market", text: "Strong demand and excellent long-term investment potential." },
  { label: "High Rental Demand", text: "Popular with tourists, expatriates, and long-term residents, creating attractive rental opportunities." },
  { label: "International Connectivity", text: "Paphos International Airport offers direct flights to major European destinations." },
  { label: "Coastal Living", text: "Blue Flag beaches, scenic promenades, marinas, and spectacular sunsets." },
  { label: "History & Culture", text: "Home to UNESCO World Heritage Sites and centuries of rich history." },
  { label: "Family-Friendly", text: "Safe neighbourhoods, quality education, and modern healthcare facilities." },
  { label: "Mediterranean Lifestyle", text: "Outdoor living, excellent restaurants, golf courses, nature trails, and a welcoming international community." },
];

export default function WhyCyprusSection() {
  return (
    <section className="relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/paphos.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <span className="absolute inset-0 bg-[#121212]/85" aria-hidden />

      <div className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <PointsBlock
          eyebrow="Why Cyprus"
          title={<>Why<br />Cyprus?</>}
          intro="Cyprus is one of Europe's most attractive destinations for living and property investment. As a member of the European Union, it offers political stability, a strong legal framework, and a high standard of living — with over 300 days of sunshine, a Mediterranean lifestyle, and a welcoming international community."
          points={cyprusPoints}
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif italic font-light text-2xl md:text-4xl text-[#f5f0eb] text-center max-w-4xl mx-auto my-20 md:my-28 leading-snug"
        >
          &ldquo;300 days of sunshine. EU stability. A coastline that earns its reputation.&rdquo;
        </motion.blockquote>

        <PointsBlock
          eyebrow="Why Paphos"
          title={<>Why<br />Paphos?</>}
          intro="Paphos is one of Cyprus's most desirable coastal cities — renowned for its natural beauty, rich cultural heritage, and thriving real estate market. Modern amenities meet a relaxed Mediterranean atmosphere, offering an exceptional quality of life and outstanding investment opportunities."
          points={paphosPoints}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-20 md:mt-28 max-w-4xl border-l border-[#f5f0eb]/30 pl-6 md:pl-10"
        >
          <p className="text-sm md:text-base leading-[1.9] text-[#f5f0eb]/70 font-light">
            Whether you&apos;re searching for your dream home, a holiday retreat, or a smart investment opportunity — Cyprus, and Paphos in particular, offers the perfect combination of{" "}
            <span className="text-[#f5f0eb]">lifestyle, security, and long-term value</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

type Point = { label: string; text: string };

function PointsBlock({
  eyebrow,
  title,
  intro,
  points,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  points: Point[];
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex items-center gap-6 mb-10 md:mb-14"
      >
        <span className="text-[10px] tracking-[0.35em] text-[#f5f0eb]/70 uppercase">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-[#f5f0eb] mb-8 md:mb-10"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        className="text-sm md:text-base leading-[1.9] text-[#f5f0eb]/70 font-light max-w-4xl mb-14 md:mb-20"
      >
        {intro}
      </motion.p>

      <dl className="flex flex-col">
        {points.map((point, i) => (
          <motion.div
            key={point.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.04, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-10 py-5 md:py-6 border-t border-white/10 last:border-b"
          >
            <dt className="text-xs md:text-sm font-medium text-[#f5f0eb] tracking-wide">
              {point.label}
            </dt>
            <dd className="text-sm md:text-base font-light text-[#f5f0eb]/70 leading-[1.8]">
              {point.text}
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}
