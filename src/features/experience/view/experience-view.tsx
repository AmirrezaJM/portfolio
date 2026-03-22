"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Container from "@/features/Container";
import Link from "next/link";

type Category = "current" | "corporate" | "education" | "freelance" | "break";

type Experience = {
  company: string;
  role: string;
  year: string;
  startDate: Date;
  endDate: Date;
  category: Category;
  icon: string;
  summary: string;
  achievements: string[];
  tags: string[];
};

const CATEGORY_COLORS: Record<Category, { bar: string; badge: string; text: string }> = {
  current: { bar: "bg-amber-500", badge: "bg-amber-500/20 border-amber-500/30 text-amber-400", text: "text-amber-400" },
  corporate: { bar: "bg-stone-500", badge: "bg-stone-500/20 border-stone-500/30 text-stone-300", text: "text-stone-300" },
  education: { bar: "bg-stone-600", badge: "bg-stone-600/20 border-stone-600/30 text-stone-400", text: "text-stone-400" },
  freelance: { bar: "bg-amber-700", badge: "bg-amber-700/20 border-amber-700/30 text-amber-300", text: "text-amber-300" },
  break: { bar: "bg-white/20", badge: "bg-white/10 border-white/20 text-white/50", text: "text-white/50" },
};

const CATEGORY_LABELS: Record<Category, string> = {
  current: "Current",
  corporate: "Corporate",
  education: "Teaching",
  freelance: "Freelance",
  break: "Career Break",
};

const EXPERIENCES: Experience[] = [
  {
    company: "OFoundation",
    role: "Web Developer",
    year: "2025",
    startDate: new Date(2025, 6), // Jul 2025
    endDate: new Date(2026, 6),   // now (ongoing)
    category: "current",
    icon: "🛒",
    summary: "Translating Welbewust.Life from Figma to production — Shopify theme, performance, and automation for the flagship storefront.",
    achievements: [
      "Rebuilt Liquid theme with shadcn/ui-inspired sections matching Figma pixel-for-pixel",
      "Integrated Shopify Admin GraphQL and Remix customer routes",
      "Pushed 90-100 Lighthouse scores through CDN tuning and critical CSS",
    ],
    tags: ["Shopify", "Remix", "GraphQL", "Tailwind CSS", "TypeScript"],
  },
  {
    company: "Karhuno AI",
    role: "Fullstack Developer",
    year: "2025",
    startDate: new Date(2025, 1), // Feb 2025
    endDate: new Date(2025, 4),   // May 2025
    category: "corporate",
    icon: "🤖",
    summary: "Delivered the public karhuno.ai website with Next.js, Tailwind CSS, shadcn/ui, and Bun builds.",
    achievements: [
      "Built statically generated landing, blog, and hiring pages",
      "Crafted Framer Motion hero and testimonial scenes to increase session duration",
      "Swapped Bun into the build pipeline with typed content models",
    ],
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Framer Motion", "Bun"],
  },
  {
    company: "Career Break",
    role: "Relocation & Immigration",
    year: "2022–2024",
    startDate: new Date(2022, 8), // Sep 2022
    endDate: new Date(2024, 11),  // Dec 2024
    category: "break",
    icon: "🌍",
    summary: "Relocated from Iran to the Netherlands. Navigated the full immigration process, settled in Utrecht, and kept skills sharp through open-source personal projects.",
    achievements: [
      "Completed full immigration and residency process in the Netherlands",
      "Built Prompter, Nodebase, and E-Commerce Marketplace during the transition",
      "Expanded professional network in the European tech ecosystem",
    ],
    tags: ["Netherlands", "Relocation", "Open Source", "Personal Growth"],
  },
  {
    company: "PAP Group Ltd",
    role: "Frontend Engineer",
    year: "2022",
    startDate: new Date(2022, 8), // Sep 2022
    endDate: new Date(2023, 6),   // Jul 2023
    category: "corporate",
    icon: "✈️",
    summary: "Modernized travel brands (AryakTravel, Shabaviz, BarsamSeyr) by migrating to Vue 3 + Vite and coordinating scrum rituals.",
    achievements: [
      "Led Vue 3 + Vite rebuilds for 3 brands with consistent UI kits",
      "Mentored 5+ junior developers, increasing team velocity by 40%",
      "Created PAPDocs with VitePress to speed up knowledge sharing by 20%",
    ],
    tags: ["Vue 3", "Vite", "VitePress", "Pinia", "TypeScript"],
  },
  {
    company: "Zharfa Academy",
    role: "Front-End Developer & Coach",
    year: "2021",
    startDate: new Date(2021, 4), // May 2021
    endDate: new Date(2022, 8),   // Sep 2022
    category: "education",
    icon: "📚",
    summary: "Rebuilt zharfa.org as the academy's secure learning portal and coached aspiring frontend developers.",
    achievements: [
      "Implemented token-based login, role-based access, and CSRF safeguards",
      "Structured content system so instructors can ship curriculum without engineering cycles",
    ],
    tags: ["Teaching", "HTML/CSS", "JavaScript", "Laravel", "Security"],
  },
  {
    company: "Almas Teb Rayan",
    role: "Front-End Developer",
    year: "2020",
    startDate: new Date(2020, 3), // Apr 2020
    endDate: new Date(2021, 6),   // Jul 2021
    category: "corporate",
    icon: "🏥",
    summary: "Built the IHMS website for Nikan Hospital — a responsive interface for stock levels, tools, and asset tracking.",
    achievements: [
      "Architected the IHMS UI used by Nikan Hospital across all departments",
      "Implemented Chart.js dashboards and Swiper-driven flows for usage trends",
      "Upgraded Git, bundling, and code-splitting for constrained hospital networks",
    ],
    tags: ["HTML5", "CSS3/SCSS", "JavaScript", "Chart.js", "Swiper"],
  },
];

// Timeline config
const TL_START = new Date(2020, 0).getTime();
const TL_END = new Date(2027, 0).getTime();
const TL_RANGE = TL_END - TL_START;
const pct = (d: Date) =>
  Math.max(0, Math.min(100, ((d.getTime() - TL_START) / TL_RANGE) * 100));

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
} as const;

export default function ExperienceView() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="experience" className="w-full py-16">
      <Container>
        {/* Section header */}
        <motion.div
          className="mb-8 space-y-2"
          {...fadeUp}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Career
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Experience
          </h2>
          <p className="text-sm text-white/50">6+ years shipping web products across Europe and beyond</p>
          <Link
            href="/Fullstack_developer.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-400"
          >
            ↓ Resume (PDF)
          </Link>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <div className="mb-3 flex justify-between text-xs text-white/40">
            <span>2020</span>
            <span>2022</span>
            <span>2024</span>
            <span>2026</span>
          </div>
          <div className="relative h-10 w-full">
            {/* Track */}
            <div className="absolute inset-0 rounded-lg bg-white/5" />
            {/* Tick marks */}
            {[0, 25, 50, 75, 100].map((p) => (
              <div
                key={p}
                className="absolute top-0 h-full w-px bg-white/10"
                style={{ left: `${p}%` }}
              />
            ))}
            {/* Experience blocks */}
            {EXPERIENCES.map((exp) => {
              const left = pct(exp.startDate);
              const right = pct(exp.endDate);
              return (
                <button
                  key={exp.company}
                  title={`${exp.role} @ ${exp.company}`}
                  onClick={() =>
                    setExpanded(expanded === exp.company ? null : exp.company)
                  }
                  className={`absolute top-1 h-8 rounded-lg opacity-80 transition-opacity hover:opacity-100 ${CATEGORY_COLORS[exp.category].bar}`}
                  style={{ left: `${left}%`, width: `${Math.max(right - left, 3)}%` }}
                />
              );
            })}
          </div>
          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4">
            {(Object.entries(CATEGORY_LABELS) as [Category, string][]).map(([cat, label]) => (
              <div key={cat} className="flex items-center gap-2 text-xs text-white/50">
                <span className={`h-2.5 w-2.5 rounded-full ${CATEGORY_COLORS[cat].bar}`} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {EXPERIENCES.map((exp) => {
            const isOpen = expanded === exp.company;
            const colors = CATEGORY_COLORS[exp.category];
            return (
              <motion.div
                key={exp.company}
                variants={cardVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:border-white/20"
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{exp.role}</p>
                      <p className={`text-xs font-medium ${colors.text}`}>{exp.company}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-semibold ${colors.badge}`}>
                    {exp.year}
                  </span>
                </div>

                {/* Summary */}
                <p className="mt-3 text-xs leading-5 text-white/55">{exp.summary}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {exp.tags.length > 3 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/40">
                      +{exp.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Expand toggle */}
                <button
                  onClick={() => setExpanded(isOpen ? null : exp.company)}
                  className="mt-3 flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  View details
                  <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ↓
                  </span>
                </button>

                {/* Expanded achievements */}
                {isOpen && (
                  <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-xs leading-5 text-white/65">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
