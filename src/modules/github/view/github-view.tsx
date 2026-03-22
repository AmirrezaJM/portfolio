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

interface GridCell {
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
  date: string;
}

// ── Constants ─────────────────────────────────────────────────
const GITHUB_USER = "AmirrezaJM"; // used for profile link only
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LEVEL_BG = [
  "bg-white/[0.04]",
  "bg-[#3d200f]",
  "bg-[#7c3a12]",
  "bg-[#b35418]",
  "bg-amber-500",
];

// ── Seeded fallback ───────────────────────────────────────────
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967295;
  };
}

function buildFallbackGrid(): GridCell[][] {
  const rng = makeRng(1337);
  const w = (i: number) => (i < 8 ? 0.65 : i < 18 ? 0.7 : i < 26 ? 0.5 : i < 34 ? 0.45 : i < 44 ? 0.72 : 0.68);
  return Array.from({ length: 52 }, (_, wi) =>
    Array.from({ length: 7 }, (_, di) => {
      const prob = di >= 5 ? w(wi) * 0.55 : w(wi);
      const r = rng();
      if (r > prob) return { level: 0 as const, count: 0, date: "" };
      const r2 = rng();
      const level = (r2 < 0.35 ? 1 : r2 < 0.65 ? 2 : r2 < 0.85 ? 3 : 4) as 1 | 2 | 3 | 4;
      return { level, count: level * 3, date: "" };
    })
  );
}

// ── Flatten contributions list → 52×7 grid ───────────────────
function toGrid(contributions: Contribution[]): GridCell[][] {
  if (!contributions?.length) return buildFallbackGrid();
  const days = contributions.slice(-364);
  const weeks: GridCell[][] = [];
  for (let wi = 0; wi < 52; wi++) {
    weeks.push(
      days.slice(wi * 7, wi * 7 + 7).map((d) => ({
        level: d.level,
        count: d.count,
        date: d.date,
      }))
    );
  }
  return weeks;
}

// ── Component ─────────────────────────────────────────────────
export default function GithubView() {
  const [grid, setGrid] = useState<GridCell[][]>(() => buildFallbackGrid());
  const [totalLastYear, setTotalLastYear] = useState<number | null>(null);
  const [repos, setRepos] = useState<number | null>(null);
  const [followers, setFollowers] = useState<number | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        const contribs = data?.contributions?.contributions;
        if (contribs?.length) {
          setGrid(toGrid(contribs));
          setTotalLastYear(data.contributions?.totalLastYear ?? null);
          setIsLive(true);
        }
        if (data?.user?.public_repos != null) {
          setRepos(data.user.public_repos);
          setFollowers(data.user.followers);
        }
      })
      .catch(() => {});
  }, []);

  const STATS = [
    {
      value: totalLastYear != null ? `${totalLastYear.toLocaleString()}` : "Lots 🚀",
      label: "Contributions (Last Year)",
    },
    {
      value: repos != null ? `${repos}` : "10+",
      label: "Public Repos",
    },
    {
      value: followers != null ? `${followers}` : "Growing",
      label: "GitHub Followers",
    },
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
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/40 transition hover:text-amber-400 italic"
          >
            {isLive ? "✨ Live data ·" : "⏳ Loading ·"} github.com/{GITHUB_USER}
          </a>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 0.1 }}
        >
          {/* Stats */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center"
              >
                <p className="text-xl font-bold text-amber-400">{s.value}</p>
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
                  <div key={m} className="text-xs text-white/35" style={{ width: `${100 / 12}%` }}>
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

                {/* Weeks */}
                <div className="flex flex-1 gap-[3px]">
                  {grid.map((week, wi) => (
                    <div key={wi} className="flex flex-1 flex-col gap-[3px]">
                      {week.map((cell, di) => (
                        <div
                          key={di}
                          title={
                            cell.date
                              ? `${cell.date}: ${cell.count} contribution${cell.count !== 1 ? "s" : ""}`
                              : cell.count > 0
                              ? `${cell.count} contributions`
                              : "No contributions"
                          }
                          className={`aspect-square w-full rounded-[3px] ${LEVEL_BG[cell.level]} transition-opacity hover:opacity-80`}
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
