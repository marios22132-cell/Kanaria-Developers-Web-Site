"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactMethods = ["Phone", "Telegram", "WhatsApp"];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    methods: [] as string[],
    message: "",
  });

  const toggleMethod = (m: string) =>
    setForm((f) => ({
      ...f,
      methods: f.methods.includes(m) ? f.methods.filter((x) => x !== m) : [...f.methods, m],
    }));

  return (
    <section id="contact" className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase mb-8"
      >
        Get in Touch
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
        className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#f5f0eb] leading-tight mb-16 max-w-2xl"
      >
        Interested in<br />Kanaria Residence?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-8"
        >
          {[
            { label: "Email", value: "info@kanariadevelopers.com" },
            { label: "Phone", value: "+357 96 657 537" },
            { label: "Address", value: "Paphos, Cyprus" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase mb-1.5">{item.label}</p>
              <p className="text-sm font-light text-[#f5f0eb]/80">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { id: "name", label: "Full Name", placeholder: "Andreas Petrides", type: "text", field: "name" as const },
            { id: "email", label: "Email Address", placeholder: "andreas@example.com", type: "email", field: "email" as const },
          ].map((f) => (
            <div key={f.id}>
              <label className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase block mb-2">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.field]}
                onChange={(e) => setForm((prev) => ({ ...prev, [f.field]: e.target.value }))}
                className="w-full bg-transparent border border-white/15 text-[#f5f0eb] text-sm font-light px-4 py-3 placeholder-[#f5f0eb]/25 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase block mb-2">Phone (Optional)</label>
            <div className="flex gap-2">
              <div className="border border-white/15 text-sm font-light text-[#f5f0eb]/60 px-4 py-3 whitespace-nowrap">
                Cyprus +357
              </div>
              <input
                type="tel"
                placeholder="99 000 000"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="flex-1 bg-transparent border border-white/15 text-[#f5f0eb] text-sm font-light px-4 py-3 placeholder-[#f5f0eb]/25 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase mb-3">Preferred Contact Methods</p>
            <div className="flex gap-6">
              {contactMethods.map((m) => (
                <label key={m} className="flex items-center gap-2 cursor-pointer group">
                  <div
                    onClick={() => toggleMethod(m)}
                    className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                      form.methods.includes(m) ? "border-[#f5f0eb] bg-[#f5f0eb]" : "border-white/30"
                    }`}
                  >
                    {form.methods.includes(m) && <span className="text-[#121212] text-[10px]">✓</span>}
                  </div>
                  <span className="text-xs font-light text-[#f5f0eb]/60">{m}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase block mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your interest and timeline..."
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full bg-transparent border border-white/15 text-[#f5f0eb] text-sm font-light px-4 py-3 placeholder-[#f5f0eb]/25 focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#f5f0eb] text-[#121212] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#f5f0eb]/90 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
