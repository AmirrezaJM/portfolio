"use client";

import { useState } from "react";
import Container from "@/features/Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function ContactView() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16">
      <Container>
        {/* Section header */}
        <motion.div className="mb-10 space-y-2" {...fadeUp}>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Contact
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Get in Touch
          </h2>
          <p className="text-sm text-white/50">Based in Padova, Italy · Always async-friendly</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          {/* Left: contact methods */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {/* Email */}
            <motion.a
              href="mailto:amirreza.jolani1998@gmail.com"
              variants={staggerChild}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition-colors hover:border-white/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                <span className="text-lg">✉️</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                <p className="text-sm font-semibold text-white">amirreza.jolani1998@gmail.com</p>
              </div>
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/AmirrezaJMM"
              target="_blank"
              rel="noreferrer"
              variants={staggerChild}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition-colors hover:border-white/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">Telegram</p>
                <p className="text-sm font-semibold text-white">@AmirrezaJMM</p>
              </div>
            </motion.a>

            {/* Book a call */}
            <motion.a
              href="https://wa.me/+31634997564"
              target="_blank"
              rel="noreferrer"
              variants={staggerChild}
              className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 backdrop-blur transition-colors hover:border-emerald-500/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
                <span className="text-lg">📅</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  Free 30-min Call
                </p>
                <p className="text-sm font-semibold text-white">WhatsApp Me</p>
              </div>
            </motion.a>

            {/* Social buttons */}
            <motion.div className="flex gap-3" variants={staggerChild}>
              <a
                href="https://www.linkedin.com/in/amirjm/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <FaLinkedinIn className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/AmirrezaJM"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                <span className="text-lg">📨</span>
              </div>
              <div>
                <p className="text-base font-semibold text-white">Send a Message</p>
                <p className="text-xs text-white/45">I&apos;ll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs text-white/60">
                    Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-white/60">
                    Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/60">
                  Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-amber-500 py-3 text-sm font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
              >
                {sending ? "Sending…" : "✈ Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
