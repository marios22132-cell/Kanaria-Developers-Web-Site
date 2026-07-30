"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactMethods = ["Phone", "Telegram", "WhatsApp"];

const countryCodes = [
  { code: "+93", label: "Afghanistan" },
  { code: "+355", label: "Albania" },
  { code: "+213", label: "Algeria" },
  { code: "+376", label: "Andorra" },
  { code: "+244", label: "Angola" },
  { code: "+1-268", label: "Antigua and Barbuda" },
  { code: "+54", label: "Argentina" },
  { code: "+374", label: "Armenia" },
  { code: "+61", label: "Australia" },
  { code: "+43", label: "Austria" },
  { code: "+994", label: "Azerbaijan" },
  { code: "+1-242", label: "Bahamas" },
  { code: "+973", label: "Bahrain" },
  { code: "+880", label: "Bangladesh" },
  { code: "+1-246", label: "Barbados" },
  { code: "+375", label: "Belarus" },
  { code: "+32", label: "Belgium" },
  { code: "+501", label: "Belize" },
  { code: "+229", label: "Benin" },
  { code: "+975", label: "Bhutan" },
  { code: "+591", label: "Bolivia" },
  { code: "+387", label: "Bosnia and Herzegovina" },
  { code: "+267", label: "Botswana" },
  { code: "+55", label: "Brazil" },
  { code: "+673", label: "Brunei" },
  { code: "+359", label: "Bulgaria" },
  { code: "+226", label: "Burkina Faso" },
  { code: "+257", label: "Burundi" },
  { code: "+855", label: "Cambodia" },
  { code: "+237", label: "Cameroon" },
  { code: "+1", label: "Canada" },
  { code: "+238", label: "Cape Verde" },
  { code: "+236", label: "Central African Republic" },
  { code: "+235", label: "Chad" },
  { code: "+56", label: "Chile" },
  { code: "+86", label: "China" },
  { code: "+57", label: "Colombia" },
  { code: "+269", label: "Comoros" },
  { code: "+506", label: "Costa Rica" },
  { code: "+385", label: "Croatia" },
  { code: "+53", label: "Cuba" },
  { code: "+357", label: "Cyprus" },
  { code: "+420", label: "Czechia" },
  { code: "+45", label: "Denmark" },
  { code: "+253", label: "Djibouti" },
  { code: "+1-767", label: "Dominica" },
  { code: "+1-809", label: "Dominican Republic" },
  { code: "+593", label: "Ecuador" },
  { code: "+20", label: "Egypt" },
  { code: "+503", label: "El Salvador" },
  { code: "+240", label: "Equatorial Guinea" },
  { code: "+291", label: "Eritrea" },
  { code: "+372", label: "Estonia" },
  { code: "+268", label: "Eswatini" },
  { code: "+251", label: "Ethiopia" },
  { code: "+679", label: "Fiji" },
  { code: "+358", label: "Finland" },
  { code: "+33", label: "France" },
  { code: "+241", label: "Gabon" },
  { code: "+220", label: "Gambia" },
  { code: "+995", label: "Georgia" },
  { code: "+49", label: "Germany" },
  { code: "+233", label: "Ghana" },
  { code: "+30", label: "Greece" },
  { code: "+1-473", label: "Grenada" },
  { code: "+502", label: "Guatemala" },
  { code: "+224", label: "Guinea" },
  { code: "+245", label: "Guinea-Bissau" },
  { code: "+592", label: "Guyana" },
  { code: "+509", label: "Haiti" },
  { code: "+504", label: "Honduras" },
  { code: "+36", label: "Hungary" },
  { code: "+354", label: "Iceland" },
  { code: "+91", label: "India" },
  { code: "+62", label: "Indonesia" },
  { code: "+98", label: "Iran" },
  { code: "+964", label: "Iraq" },
  { code: "+353", label: "Ireland" },
  { code: "+972", label: "Israel" },
  { code: "+39", label: "Italy" },
  { code: "+225", label: "Ivory Coast" },
  { code: "+1-876", label: "Jamaica" },
  { code: "+81", label: "Japan" },
  { code: "+962", label: "Jordan" },
  { code: "+7", label: "Kazakhstan" },
  { code: "+254", label: "Kenya" },
  { code: "+965", label: "Kuwait" },
  { code: "+996", label: "Kyrgyzstan" },
  { code: "+856", label: "Laos" },
  { code: "+371", label: "Latvia" },
  { code: "+961", label: "Lebanon" },
  { code: "+266", label: "Lesotho" },
  { code: "+231", label: "Liberia" },
  { code: "+218", label: "Libya" },
  { code: "+423", label: "Liechtenstein" },
  { code: "+370", label: "Lithuania" },
  { code: "+352", label: "Luxembourg" },
  { code: "+261", label: "Madagascar" },
  { code: "+265", label: "Malawi" },
  { code: "+60", label: "Malaysia" },
  { code: "+960", label: "Maldives" },
  { code: "+223", label: "Mali" },
  { code: "+356", label: "Malta" },
  { code: "+230", label: "Mauritius" },
  { code: "+52", label: "Mexico" },
  { code: "+373", label: "Moldova" },
  { code: "+377", label: "Monaco" },
  { code: "+976", label: "Mongolia" },
  { code: "+382", label: "Montenegro" },
  { code: "+212", label: "Morocco" },
  { code: "+258", label: "Mozambique" },
  { code: "+95", label: "Myanmar" },
  { code: "+264", label: "Namibia" },
  { code: "+977", label: "Nepal" },
  { code: "+31", label: "Netherlands" },
  { code: "+64", label: "New Zealand" },
  { code: "+505", label: "Nicaragua" },
  { code: "+227", label: "Niger" },
  { code: "+234", label: "Nigeria" },
  { code: "+47", label: "Norway" },
  { code: "+968", label: "Oman" },
  { code: "+92", label: "Pakistan" },
  { code: "+507", label: "Panama" },
  { code: "+595", label: "Paraguay" },
  { code: "+51", label: "Peru" },
  { code: "+63", label: "Philippines" },
  { code: "+48", label: "Poland" },
  { code: "+351", label: "Portugal" },
  { code: "+974", label: "Qatar" },
  { code: "+40", label: "Romania" },
  { code: "+7", label: "Russia" },
  { code: "+250", label: "Rwanda" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+221", label: "Senegal" },
  { code: "+381", label: "Serbia" },
  { code: "+65", label: "Singapore" },
  { code: "+421", label: "Slovakia" },
  { code: "+386", label: "Slovenia" },
  { code: "+27", label: "South Africa" },
  { code: "+82", label: "South Korea" },
  { code: "+34", label: "Spain" },
  { code: "+94", label: "Sri Lanka" },
  { code: "+249", label: "Sudan" },
  { code: "+46", label: "Sweden" },
  { code: "+41", label: "Switzerland" },
  { code: "+963", label: "Syria" },
  { code: "+886", label: "Taiwan" },
  { code: "+255", label: "Tanzania" },
  { code: "+66", label: "Thailand" },
  { code: "+90", label: "Turkey" },
  { code: "+971", label: "United Arab Emirates" },
  { code: "+44", label: "United Kingdom" },
  { code: "+1", label: "United States" },
  { code: "+598", label: "Uruguay" },
  { code: "+998", label: "Uzbekistan" },
  { code: "+58", label: "Venezuela" },
  { code: "+84", label: "Vietnam" },
  { code: "+967", label: "Yemen" },
  { code: "+260", label: "Zambia" },
  { code: "+263", label: "Zimbabwe" }
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+357",
    phone: "",
    methods: [] as string[],
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const toggleMethod = (m: string) =>
    setForm((f) => ({
      ...f,
      methods: f.methods.includes(m) ? f.methods.filter((x) => x !== m) : [...f.methods, m],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: form.phone ? `${form.countryCode} ${form.phone}` : "" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", countryCode: "+357", phone: "", methods: [], message: "" });
    } catch {
      setStatus("error");
    }
  };

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
          onSubmit={handleSubmit}
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
                required={f.id !== "phone"}
                className="w-full bg-transparent border border-white/15 text-[#f5f0eb] text-sm font-light px-4 py-3 placeholder-[#f5f0eb]/25 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="text-[9px] tracking-[0.25em] text-[#f5f0eb]/40 uppercase block mb-2">Phone (Optional)</label>
            <div className="flex gap-2">
              <select
                value={form.countryCode}
                onChange={(e) => setForm((f) => ({ ...f, countryCode: e.target.value }))}
                className="bg-[#121212] border border-white/15 text-[#f5f0eb]/70 text-sm font-light px-3 py-3 focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#1e1e1e]">
                    {c.label}
                  </option>
                ))}
              </select>
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
                <label key={m} className="flex items-center gap-2 cursor-pointer">
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
              required
              className="w-full bg-transparent border border-white/15 text-[#f5f0eb] text-sm font-light px-4 py-3 placeholder-[#f5f0eb]/25 focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
          </div>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.1em] text-[#c4b5a0]"
            >
              ✓ Message sent — we will be in touch shortly.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.1em] text-red-400/80"
            >
              Something went wrong. Please try again or email us directly.
            </motion.p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#f5f0eb] text-[#121212] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#f5f0eb]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
