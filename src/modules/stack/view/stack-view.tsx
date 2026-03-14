"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Container from "@/features/Container";

type Skill = { name: string; level: number; category: "frontend" | "backend" | "tools" };

const SKILLS: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "Vue 3 / Nuxt 3", level: 90, category: "frontend" },
  { name: "TypeScript", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "HTML5 / CSS3", level: 97, category: "frontend" },
  { name: "GSAP & Framer Motion", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 78, category: "backend" },
  { name: "Prisma ORM", level: 85, category: "backend" },
  { name: "REST / GraphQL APIs", level: 82, category: "backend" },
  { name: "PHP / Laravel", level: 65, category: "backend" },
  { name: "Docker", level: 72, category: "backend" },
  // Tools
  { name: "Git / GitHub", level: 92, category: "tools" },
  { name: "Figma & Design Systems", level: 78, category: "tools" },
  { name: "Performance / SEO", level: 88, category: "tools" },
  { name: "Testing (Jest/Vitest)", level: 72, category: "tools" },
  { name: "CI/CD Pipelines", level: 68, category: "tools" },
  { name: "Webpack / Vite", level: 75, category: "tools" },
];

const TABS = [
  { key: "all", label: "Overview" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const LEVEL_COLOR = (level: number) => {
  if (level >= 90) return "bg-amber-500";
  if (level >= 75) return "bg-sky-500";
  return "bg-emerald-500";
};

export default function StackView() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filtered =
    activeTab === "all" ? SKILLS : SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="stack" className="w-full py-16">
      <Container>
        {/* Section header */}
        <motion.div
          className="mb-10 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Expertise
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Technical Expertise
          </h2>
          <p className="text-sm text-white/50">
            From frontend craft to full-stack delivery and engineering tooling
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          className="mb-8 inline-flex gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-xl px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-white/15 text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills card */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-amber-400">✦</span>
            <span className="text-base font-semibold text-white">Technical Skills</span>
          </div>

          <div className="space-y-5">
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: index * 0.03 }}
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm text-white/80">{skill.name}</span>
                  <span
                    className={`text-sm font-semibold ${
                      skill.level >= 90
                        ? "text-amber-400"
                        : skill.level >= 75
                        ? "text-sky-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${LEVEL_COLOR(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-white/10 pt-5">
            {[
              { label: "Frontend", color: "bg-sky-500" },
              { label: "Backend", color: "bg-rose-500" },
              { label: "Tools", color: "bg-amber-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-white/50">
                <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
