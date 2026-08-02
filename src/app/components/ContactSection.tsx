"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactMethods = ["Phone", "Telegram", "WhatsApp"];

 const countryCodes = [
  { code: "+93", label: "Afghanistan +93" },
  { code: "+355", label: "Albania +355" },
  { code: "+213", label: "Algeria +213" },
  { code: "+376", label: "Andorra +376" },
  { code: "+244", label: "Angola +244" },
  { code: "+1-268", label: "Antigua and Barbuda +1-268" },
  { code: "+54", label: "Argentina +54" },
  { code: "+374", label: "Armenia +374" },
  { code: "+61", label: "Australia +61" },
  { code: "+43", label: "Austria +43" },
  { code: "+994", label: "Azerbaijan +994" },
  { code: "+1-242", label: "Bahamas +1-242" },
  { code: "+973", label: "Bahrain +973" },
  { code: "+880", label: "Bangladesh +880" },
  { code: "+1-246", label: "Barbados +1-246" },
  { code: "+375", label: "Belarus +375" },
  { code: "+32", label: "Belgium +32" },
  { code: "+501", label: "Belize +501" },
  { code: "+229", label: "Benin +229" },
  { code: "+975", label: "Bhutan +975" },
  { code: "+591", label: "Bolivia +591" },
  { code: "+387", label: "Bosnia and Herzegovina +387" },
  { code: "+267", label: "Botswana +267" },
  { code: "+55", label: "Brazil +55" },
  { code: "+673", label: "Brunei +673" },
  { code: "+359", label: "Bulgaria +359" },
  { code: "+226", label: "Burkina Faso +226" },
  { code: "+257", label: "Burundi +257" },
  { code: "+855", label: "Cambodia +855" },
  { code: "+237", label: "Cameroon +237" },
  { code: "+1", label: "Canada +1" },
  { code: "+238", label: "Cape Verde +238" },
  { code: "+236", label: "Central African Republic +236" },
  { code: "+235", label: "Chad +235" },
  { code: "+56", label: "Chile +56" },
  { code: "+86", label: "China +86" },
  { code: "+57", label: "Colombia +57" },
  { code: "+506", label: "Costa Rica +506" },
  { code: "+385", label: "Croatia +385" },
  { code: "+53", label: "Cuba +53" },
  { code: "+357", label: "Cyprus +357" },
  { code: "+420", label: "Czechia +420" },
  { code: "+45", label: "Denmark +45" },
  { code: "+20", label: "Egypt +20" },
  { code: "+372", label: "Estonia +372" },
  { code: "+358", label: "Finland +358" },
  { code: "+33", label: "France +33" },
  { code: "+995", label: "Georgia +995" },
  { code: "+49", label: "Germany +49" },
  { code: "+233", label: "Ghana +233" },
  { code: "+30", label: "Greece +30" },
  { code: "+852", label: "Hong Kong +852" },
  { code: "+36", label: "Hungary +36" },
  { code: "+354", label: "Iceland +354" },
  { code: "+91", label: "India +91" },
  { code: "+62", label: "Indonesia +62" },
  { code: "+98", label: "Iran +98" },
  { code: "+964", label: "Iraq +964" },
  { code: "+353", label: "Ireland +353" },
  { code: "+972", label: "Israel +972" },
  { code: "+39", label: "Italy +39" },
  { code: "+81", label: "Japan +81" },
  { code: "+962", label: "Jordan +962" },
  { code: "+7", label: "Kazakhstan +7" },
  { code: "+254", label: "Kenya +254" },
  { code: "+965", label: "Kuwait +965" },
  { code: "+371", label: "Latvia +371" },
  { code: "+961", label: "Lebanon +961" },
  { code: "+218", label: "Libya +218" },
  { code: "+423", label: "Liechtenstein +423" },
  { code: "+370", label: "Lithuania +370" },
  { code: "+352", label: "Luxembourg +352" },
  { code: "+60", label: "Malaysia +60" },
  { code: "+356", label: "Malta +356" },
  { code: "+52", label: "Mexico +52" },
  { code: "+377", label: "Monaco +377" },
  { code: "+212", label: "Morocco +212" },
  { code: "+31", label: "Netherlands +31" },
  { code: "+64", label: "New Zealand +64" },
  { code: "+234", label: "Nigeria +234" },
  { code: "+47", label: "Norway +47" },
  { code: "+968", label: "Oman +968" },
  { code: "+92", label: "Pakistan +92" },
  { code: "+507", label: "Panama +507" },
  { code: "+51", label: "Peru +51" },
  { code: "+63", label: "Philippines +63" },
  { code: "+48", label: "Poland +48" },
  { code: "+351", label: "Portugal +351" },
  { code: "+974", label: "Qatar +974" },
  { code: "+40", label: "Romania +40" },
  { code: "+7", label: "Russia +7" },
  { code: "+966", label: "Saudi Arabia +966" },
  { code: "+381", label: "Serbia +381" },
  { code: "+65", label: "Singapore +65" },
  { code: "+421", label: "Slovakia +421" },
  { code: "+386", label: "Slovenia +386" },
  { code: "+27", label: "South Africa +27" },
  { code: "+82", label: "South Korea +82" },
  { code: "+34", label: "Spain +34" },
  { code: "+94", label: "Sri Lanka +94" },
  { code: "+46", label: "Sweden +46" },
  { code: "+41", label: "Switzerland +41" },
  { code: "+886", label: "Taiwan +886" },
  { code: "+66", label: "Thailand +66" },
  { code: "+90", label: "Turkey +90" },
  { code: "+380", label: "Ukraine +380" },
  { code: "+971", label: "UAE +971" },
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "USA +1" },
  { code: "+598", label: "Uruguay +598" },
  { code: "+998", label: "Uzbekistan +998" },
  { code: "+58", label: "Venezuela +58" },
  { code: "+84", label: "Vietnam +84" },
  { code: "+967", label: "Yemen +967" },
  { code: "+260", label: "Zambia +260" },
  { code: "+263", label: "Zimbabwe +263" },
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
