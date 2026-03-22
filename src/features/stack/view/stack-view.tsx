"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Container from "@/features/Container";

// ── Radar axes ────────────────────────────────────────────────
const AXES = [
  { label: "Frontend",  value: 95 },
  { label: "Vue / Nuxt", value: 90 },
  { label: "Backend",   value: 82 },
  { label: "DevOps",    value: 70 },
  { label: "Database",  value: 78 },
  { label: "Tooling",   value: 85 },
];

// ── Skill lists ───────────────────────────────────────────────
const SKILLS_LANGUAGES = [
  { name: "JavaScript",      level: 95 },
  { name: "TypeScript",      level: 92 },
  { name: "HTML5 / CSS3",    level: 97 },
  { name: "SQL",             level: 78 },
  { name: "PHP",             level: 65 },
];

const SKILLS_DEVOPS = [
  { name: "Git / GitHub",        level: 92 },
  { name: "Docker",              level: 72 },
  { name: "Vite / Webpack",      level: 75 },
  { name: "CI / CD Pipelines",   level: 68 },
  { name: "Testing (Jest/Vitest)", level: 72 },
];

// ── Tabs ──────────────────────────────────────────────────────
const TABS = [
  { key: "overview",   label: "Overview",  icon: "◈" },
  { key: "languages",  label: "Languages", icon: "<>" },
  { key: "devops",     label: "DevOps",    icon: "⚙" },
] as const;
type TabKey = (typeof TABS)[number]["key"];

// ── Radar SVG ─────────────────────────────────────────────────
function RadarChart() {
  const cx = 200, cy = 205, maxR = 138;
  const N = AXES.length;
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / N;
  const pt = (i: number, r: number) => ({
    x: cx + r * Math.cos(angle(i)),
    y: cy + r * Math.sin(angle(i)),
  });

  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const dataPoints = AXES.map((ax, i) => pt(i, (ax.value / 100) * maxR));

  return (
    <svg viewBox="0 0 400 410" className="w-full max-w-[320px] mx-auto select-none">
      {/* Grid polygons */}
      {levels.map((lv) => (
        <polygon
          key={lv}
          points={AXES.map((_, i) => `${pt(i, lv * maxR).x},${pt(i, lv * maxR).y}`).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}

      {/* Axis spokes */}
      {AXES.map((_, i) => (
        <line
          key={i}
          x1={cx} y1={cy}
          x2={pt(i, maxR).x} y2={pt(i, maxR).y}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}

      {/* Data fill */}
      <polygon
        points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="rgba(245,158,11,0.22)"
        stroke="rgba(245,158,11,0.85)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Vertex dots */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill="rgb(245,158,11)" />
      ))}

      {/* Labels */}
      {AXES.map((ax, i) => {
        const p = pt(i, maxR + 30);
        return (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize="12"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            {ax.label}
          </text>
        );
      })}
    </svg>
  );
}

// ── Progress bar row ──────────────────────────────────────────
function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: index * 0.05 }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-white/80">{name}</span>
        <span className="text-sm font-bold text-amber-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-400 transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function StackView() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <section id="stack" className="w-full py-16">
      <Container>
        {/* Section header */}
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
              Expertise
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Technical Expertise
          </h2>
          <p className="text-sm text-white/50">
            From frontend craft to full-stack delivery
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          className="mb-8 flex gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur w-fit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 0.1 }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-white/15 text-white"
                  : "text-white/45 hover:text-white/75"
              }`}
            >
              <span className="text-xs opacity-70">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content card */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 0.15 }}
        >
          {activeTab === "overview" && (
            <div className="p-6">
              {/* Radar */}
              <RadarChart />

              {/* Stats grid */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {AXES.map((ax) => (
                  <div key={ax.label} className="text-center">
                    <p className="text-2xl font-bold text-amber-400">{ax.value}%</p>
                    <p className="mt-0.5 text-xs text-white/45">{ax.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "languages" && (
            <div className="p-6">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20">
                  <span className="text-sm">💻</span>
                </div>
                <span className="text-base font-semibold text-white">Languages</span>
              </div>
              <div className="space-y-5">
                {SKILLS_LANGUAGES.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-white/10 pt-5">
                {[
                  { label: "Frontend",  color: "bg-amber-500" },
                  { label: "Backend",   color: "bg-sky-500" },
                  { label: "Database",  color: "bg-emerald-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-white/50">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "devops" && (
            <div className="p-6">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20">
                  <span className="text-sm">⚙️</span>
                </div>
                <span className="text-base font-semibold text-white">DevOps & Tooling</span>
              </div>
              <div className="space-y-5">
                {SKILLS_DEVOPS.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-white/10 pt-5">
                {[
                  { label: "Backend",  color: "bg-sky-500" },
                  { label: "Frontend", color: "bg-amber-500" },
                  { label: "DevOps",   color: "bg-emerald-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-white/50">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
