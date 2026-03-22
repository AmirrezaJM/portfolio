"use client";

import { motion } from "motion/react";
import Container from "@/features/Container";
import Earth from "@/features/globe";

const REVIEWS = [
  {
    id: 1,
    quote:
      "A true team player — always ready to help, collaborate, and lift the whole group forward. Amirreza brings both technical depth and a great attitude to every sprint.",
    author: "Clara Shushunov",
    role: "Fullstack Developer",
    company: "OFoundation",
    initials: "CS",
  },
  {
    id: 2,
    quote:
      "Works with empathy and professionalism. Makes teamwork smoother and every project more enjoyable. One of the best engineers I've had the pleasure to work with.",
    author: "Massy Wahab",
    role: "Project Manager",
    company: "OFoundation",
    initials: "MW",
  },
  {
    id: 3,
    quote:
      "Supportive, reliable, and solution-oriented. He strengthens any team he's part of. His ability to translate complex requirements into clean UI is exceptional.",
    author: "Mohammad Baghanbari",
    role: "CEO",
    company: "Zharfa Academy",
    initials: "MB",
  },
];

const COMPANIES = [
  { name: "OFoundation",     role: "Web Developer",       href: "https://www.linkedin.com/company/ofoundation/" },
  { name: "Karhuno AI",      role: "Fullstack Developer",  href: "https://www.linkedin.com/company/karhuno/" },
  { name: "PAP Group",       role: "Frontend Engineer",    href: "https://www.linkedin.com/company/papgroup/" },
  { name: "Zharfa Academy",  role: "Dev & Coach",          href: undefined },
  { name: "Almas Teb Rayan", role: "Frontend Developer",   href: "https://www.linkedin.com/company/almas-rayan/" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function ReviewView() {
  return (
    <section id="testimonials" className="w-full py-16">
      <Container>
        {/* ── Section header ──────────────────────────────── */}
        <motion.div
          className="mb-10 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Testimonials
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            What People Say
          </h2>
          <p className="text-sm text-white/50">Kind words from teammates and clients</p>
        </motion.div>

        {/* ── Reviews card + Globe ─────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
          {/* Globe — fades in from right */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex w-[40%] items-center justify-center"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div className="relative -mr-16 h-[480px] w-[480px]">
              <Earth
                baseColor={[0.08, 0.08, 0.08]}
                markerColor={[0.96, 0.62, 0.04]}
                glowColor={[0.96, 0.62, 0.04]}
              />
            </div>
          </div>

          {/* Review cards */}
          <motion.div
            className="relative z-10 grid gap-4 p-6 sm:p-8 lg:grid-cols-2 lg:max-w-[62%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {REVIEWS.map((r) => (
              <motion.figure
                key={r.id}
                variants={cardVariant}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors hover:border-white/20"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-sm leading-6 text-white/75">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-xs font-bold text-amber-400 border border-amber-500/20">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{r.author}</p>
                    <p className="text-xs text-white/45">{r.role} · {r.company}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>

        {/* ── Companies ─────────────────────────────────────── */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 0.1 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Companies
            </span>
            <span className="text-xs text-white/30">I&apos;ve worked with</span>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {COMPANIES.map((c) => {
              const card = (
                <motion.div
                  variants={cardVariant}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 backdrop-blur transition-all hover:border-amber-500/30 hover:bg-amber-500/[0.06] cursor-pointer"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-white/50 group-hover:text-amber-400 transition-colors">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{c.name}</p>
                    <p className="text-xs text-white/40">{c.role}</p>
                  </div>
                  {c.href && (
                    <svg
                      className="ml-2 h-3.5 w-3.5 shrink-0 text-white/20 group-hover:text-amber-400/70 transition-colors"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </motion.div>
              );

              return c.href ? (
                <a key={c.name} href={c.href} target="_blank" rel="noreferrer">
                  {card}
                </a>
              ) : (
                <div key={c.name}>{card}</div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
