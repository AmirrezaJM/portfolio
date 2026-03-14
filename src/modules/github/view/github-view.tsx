"use client";

import { motion } from "motion/react";
import Container from "@/features/Container";
import { FaGithub } from "react-icons/fa";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKS = 52;
const DAYS = 7;

// Deterministic seeded RNG (LCG)
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967295;
  };
}

// Weight by week to simulate realistic activity (lower mid-year = summer)
function weekWeight(w: number): number {
  if (w < 8) return 0.65;   // Jan-Feb
  if (w < 18) return 0.70;  // Mar-Apr
  if (w < 26) return 0.50;  // May-Jun (lower)
  if (w < 34) return 0.45;  // Jul-Aug (lower)
  if (w < 44) return 0.72;  // Sep-Oct
  return 0.68;               // Nov-Dec
}

function generateGrid(): number[][] {
  const rng = makeRng(1337);
  return Array.from({ length: WEEKS }, (_, w) => {
    const base = weekWeight(w);
    return Array.from({ length: DAYS }, (_, d) => {
      const isWeekend = d === 5 || d === 6;
      const prob = isWeekend ? base * 0.55 : base;
      const r = rng();
      if (r > prob) return 0;
      const r2 = rng();
      if (r2 < 0.35) return 1;
      if (r2 < 0.65) return 2;
      if (r2 < 0.85) return 3;
      return 4;
    });
  });
}

const GRID = generateGrid();

const LEVEL_BG = [
  "bg-white/[0.04]",
  "bg-[#3d200f]",
  "bg-[#7c3a12]",
  "bg-[#b35418]",
  "bg-amber-500",
];

const STATS = [
  { value: "Lots 🚀", label: "Commits Shipped" },
  { value: "Consistently", label: "Building Things" },
  { value: "Coffee ☕", label: "Powered By" },
  { value: "∞", label: "Curiosity Level" },
];

export default function GithubView() {
  return (
    <section id="github" className="w-full py-16">
      <Container>
        {/* Header */}
        <motion.div
          className="mb-10 flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <FaGithub className="h-5 w-5 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">GitHub Activity</h2>
          </div>
          <p className="text-sm italic text-white/40">✨ Simulated visualization</p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 0.1 }}
        >
          {/* Stat boxes */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center"
              >
                <p className="text-lg font-bold text-amber-400 sm:text-xl">{s.value}</p>
                <p className="mt-1 text-xs text-white/45">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="overflow-x-auto overscroll-x-contain">
            <div className="min-w-[600px]">
              {/* Month labels */}
              <div className="mb-1.5 flex pl-8">
                {MONTHS.map((m, i) => (
                  <div
                    key={m}
                    className="text-xs text-white/35"
                    style={{ width: `${(100 / 12)}%` }}
                  >
                    {m}
                  </div>
                ))}
              </div>

              <div className="flex gap-1">
                {/* Day labels */}
                <div className="flex flex-col justify-between py-0.5 pr-2" style={{ width: 28 }}>
                  {["Mon", "", "Wed", "", "Fri", "", ""].map((d, i) => (
                    <span key={i} className="text-[10px] leading-none text-white/35" style={{ height: 13 }}>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Weeks grid */}
                <div className="flex flex-1 gap-[3px]">
                  {GRID.map((week, wi) => (
                    <div key={wi} className="flex flex-1 flex-col gap-[3px]">
                      {week.map((level, di) => (
                        <div
                          key={di}
                          title={`Level ${level}`}
                          className={`aspect-square w-full rounded-[3px] ${LEVEL_BG[level]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-3 flex items-center justify-end gap-1.5">
                <span className="text-xs text-white/35">Less</span>
                {LEVEL_BG.map((bg, i) => (
                  <span key={i} className={`h-3 w-3 rounded-[3px] ${bg}`} />
                ))}
                <span className="text-xs text-white/35">More</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
