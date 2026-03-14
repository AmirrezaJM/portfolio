"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Container from "@/features/Container";
import { FaGithub } from "react-icons/fa";

// ── Types ─────────────────────────────────────────────────────
interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GithubData {
  contributions: {
    total: Record<string, number>;
    contributions: Contribution[];
  };
  user: {
    public_repos: number;
    followers: number;
  } | null;
}

// ── Constants ─────────────────────────────────────────────────
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LEVEL_BG = [
  "bg-white/[0.04]",
  "bg-[#3d200f]",
  "bg-[#7c3a12]",
  "bg-[#b35418]",
  "bg-amber-500",
];

// ── Seeded fallback grid (used while loading / on error) ──────
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967295;
  };
}

function buildFallbackGrid(): { level: number; count: number }[][] {
  const rng = makeRng(1337);
  const weekWeight = (w: number) =>
    w < 8 ? 0.65 : w < 18 ? 0.70 : w < 26 ? 0.50 : w < 34 ? 0.45 : w < 44 ? 0.72 : 0.68;

  return Array.from({ length: 52 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const prob = d >= 5 ? weekWeight(w) * 0.55 : weekWeight(w);
      const r = rng();
      if (r > prob) return { level: 0, count: 0 };
      const r2 = rng();
      const level = r2 < 0.35 ? 1 : r2 < 0.65 ? 2 : r2 < 0.85 ? 3 : 4;
      return { level, count: level * 3 };
    })
  );
}

// ── Convert flat contributions array → 52×7 grid ─────────────
function toGrid(contributions: Contribution[]): { level: number; count: number }[][] {
  if (!contributions?.length) return buildFallbackGrid();

  // Take the last 364 days (52 weeks × 7)
  const days = contributions.slice(-364);
  const weeks: { level: number; count: number }[][] = [];
  for (let w = 0; w < 52; w++) {
    weeks.push(
      days.slice(w * 7, w * 7 + 7).map((d) => ({ level: d.level, count: d.count }))
    );
  }
  return weeks;
}

// ── Component ─────────────────────────────────────────────────
export default function GithubView() {
  const [grid, setGrid] = useState(() => buildFallbackGrid());
  const [totalCommits, setTotalCommits] = useState<number | null>(null);
  const [repos, setRepos] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data: GithubData) => {
        if (data.contributions?.contributions) {
          setGrid(toGrid(data.contributions.contributions));
          const totals = data.contributions.total;
          const sum = Object.values(totals).reduce((a, b) => a + b, 0);
          setTotalCommits(sum);
        }
        if (data.user) {
          setRepos(data.user.public_repos);
        }
      })
      .catch(() => {/* keep fallback */})
      .finally(() => setLoading(false));
  }, []);

  const STATS = [
    {
      value: totalCommits ? `${totalCommits.toLocaleString()}+` : "Lots 🚀",
      label: "Commits Shipped",
    },
    { value: repos ? `${repos} repos` : "Consistently", label: "Building Things" },
    { value: "Coffee ☕", label: "Powered By" },
    { value: "∞", label: "Curiosity Level" },
  ];

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
          <p className="text-sm italic text-white/40">
            {loading ? "Loading…" : "✨ Live data from GitHub"}
          </p>
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

          {/* Heatmap */}
          <div className="overflow-x-auto overscroll-x-contain">
            <div className="min-w-[600px]">
              {/* Month labels */}
              <div className="mb-1.5 flex pl-8">
                {MONTHS.map((m) => (
                  <div
                    key={m}
                    className="text-xs text-white/35"
                    style={{ width: `${100 / 12}%` }}
                  >
                    {m}
                  </div>
                ))}
              </div>

              <div className="flex gap-1">
                {/* Day labels */}
                <div className="flex flex-col justify-between py-0.5 pr-2" style={{ width: 28 }}>
                  {["Mon", "", "Wed", "", "Fri", "", ""].map((d, i) => (
                    <span
                      key={i}
                      className="text-[10px] leading-none text-white/35"
                      style={{ height: 13 }}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Weeks */}
                <div className="flex flex-1 gap-[3px]">
                  {grid.map((week, wi) => (
                    <div key={wi} className="flex flex-1 flex-col gap-[3px]">
                      {week.map((cell, di) => (
                        <div
                          key={di}
                          title={cell.count > 0 ? `${cell.count} contributions` : "No contributions"}
                          className={`aspect-square w-full rounded-[3px] ${LEVEL_BG[cell.level]}`}
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
