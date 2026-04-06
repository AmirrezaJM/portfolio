"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ThemeKey = "amber" | "sky" | "emerald" | "rose" | "violet" | "vue";

export interface ThemeConfig {
  key: ThemeKey;
  name: string;
  /** hex for the preview swatch only */
  swatch: string;
  /** CSS variable overrides for --color-amber-* */
  vars: Record<string, string>;
  /** aurora hex colors [1, 2, 3] */
  aurora: [string, string, string];
}

export const THEMES: ThemeConfig[] = [
  {
    key: "amber",
    name: "Amber",
    swatch: "#f59e0b",
    vars: {
      "--color-amber-300": "oklch(87.9% 0.169 91.605)",
      "--color-amber-400": "oklch(82.8% 0.189 84.429)",
      "--color-amber-500": "oklch(76.9% 0.188 70.08)",
      "--color-amber-600": "oklch(66.6% 0.179 58.318)",
      "--color-amber-700": "oklch(55.5% 0.163 48.998)",
    },
    aurora: ["#c2571a", "#7c2d12", "#92400e"],
  },
  {
    key: "sky",
    name: "Sky",
    swatch: "#0ea5e9",
    vars: {
      "--color-amber-300": "oklch(82.8% 0.111 230.318)",
      "--color-amber-400": "oklch(74.6% 0.16 232.661)",
      "--color-amber-500": "oklch(68.5% 0.169 237.323)",
      "--color-amber-600": "oklch(58.8% 0.158 241.966)",
      "--color-amber-700": "oklch(50% 0.134 242.749)",
    },
    aurora: ["#0369a1", "#075985", "#0c4a6e"],
  },
  {
    key: "emerald",
    name: "Emerald",
    swatch: "#10b981",
    vars: {
      "--color-amber-300": "oklch(84.5% 0.143 164.978)",
      "--color-amber-400": "oklch(76.5% 0.177 163.223)",
      "--color-amber-500": "oklch(69.6% 0.17 162.48)",
      "--color-amber-600": "oklch(59.6% 0.145 163.225)",
      "--color-amber-700": "oklch(50.8% 0.118 165.612)",
    },
    aurora: ["#065f46", "#064e3b", "#047857"],
  },
  {
    key: "rose",
    name: "Rose",
    swatch: "#f43f5e",
    vars: {
      "--color-amber-300": "oklch(80.9% 0.141 19.571)",
      "--color-amber-400": "oklch(71.2% 0.194 13.428)",
      "--color-amber-500": "oklch(64.5% 0.246 16.439)",
      "--color-amber-600": "oklch(58.6% 0.253 17.585)",
      "--color-amber-700": "oklch(51.4% 0.222 16.935)",
    },
    aurora: ["#9f1239", "#881337", "#be123c"],
  },
  {
    key: "violet",
    name: "Violet",
    swatch: "#8b5cf6",
    vars: {
      "--color-amber-300": "oklch(81.1% 0.111 293.571)",
      "--color-amber-400": "oklch(70.2% 0.183 293.541)",
      "--color-amber-500": "oklch(62.7% 0.265 302.717)",
      "--color-amber-600": "oklch(54.1% 0.281 293.009)",
      "--color-amber-700": "oklch(49.1% 0.27 277.117)",
    },
    aurora: ["#4c1d95", "#3b0764", "#5b21b6"],
  },
  {
    key: "vue",
    name: "Vue",
    swatch: "#42b883",
    vars: {
      "--color-amber-300": "oklch(83.8% 0.135 163.5)",
      "--color-amber-400": "oklch(75.2% 0.158 162.8)",
      "--color-amber-500": "oklch(68.8% 0.155 162.1)",
      "--color-amber-600": "oklch(57.5% 0.13 163.0)",
      "--color-amber-700": "oklch(47.2% 0.105 164.5)",
    },
    aurora: ["#42b883", "#35495e", "#2c3e50"],
  },
];

// ── Context ───────────────────────────────────────────────────
interface ThemeCtx {
  theme: ThemeConfig;
  setTheme: (key: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: THEMES[0],
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

// ── Provider ──────────────────────────────────────────────────
function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  // Apply accent color variables
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  // Apply aurora vars
  root.style.setProperty("--aurora-1", theme.aurora[0]);
  root.style.setProperty("--aurora-2", theme.aurora[1]);
  root.style.setProperty("--aurora-3", theme.aurora[2]);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(THEMES[0]);

  // Hydrate from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeKey | null;
    const found = THEMES.find((t) => t.key === saved);
    if (found) {
      setThemeState(found);
      applyTheme(found);
    } else {
      applyTheme(THEMES[0]);
    }
  }, []);

  const setTheme = (key: ThemeKey) => {
    const found = THEMES.find((t) => t.key === key)!;
    setThemeState(found);
    applyTheme(found);
    localStorage.setItem("portfolio-theme", key);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
