"use client";
import Container from "@/features/Container";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import MyselfImage from "@/assets/myself.webp";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { THEMES, useTheme, type ThemeKey } from "@/features/ThemeProvider";

const TYPEWRITER_PHRASES = [
  "Fast Web Apps",
  "Full-Stack Products",
  "Clean Interfaces",
  "Scalable APIs",
  "Modern UX",
];

const STAT_BADGES = [
  { icon: "⚡", label: "6+ Years Experience" },
  { icon: "📍", label: "Utrecht, Netherlands" },
  { icon: "🚀", label: "React & Next.js" },
];

const FEATURE_CARDS = [
  {
    icon: "🖥️",
    title: "Frontend",
    description: "Pixel-perfect UIs with React, Next.js, and Tailwind CSS",
  },
  {
    icon: "🔗",
    title: "Full-Stack",
    description: "End-to-end delivery from idea to production-ready product",
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Core Web Vitals, caching, and CDN optimization at scale",
  },
];

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1200);
      return () => clearTimeout(t);
    }

    const current = TYPEWRITER_PHRASES[phraseIndex];

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
        setDeleting(true);
        return;
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length);
      }
    }
  }, [displayed, deleting, paused, phraseIndex]);

  return (
    <span className="text-amber-400">
      {displayed}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-amber-400 align-middle" />
    </span>
  );
}

const FLOAT_DOTS = [
  { size: 10, top: "18%", left: "38%", delay: "0s", opacity: 0.5 },
  { size: 7, top: "30%", left: "62%", delay: "1.2s", opacity: 0.35 },
  { size: 12, top: "55%", left: "35%", delay: "0.7s", opacity: 0.45 },
  { size: 6, top: "65%", left: "60%", delay: "2s", opacity: 0.3 },
  { size: 14, top: "15%", left: "55%", delay: "1.5s", opacity: 0.2 },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.5 }}
    >
      <span className="text-xs text-white/40 shrink-0">🎨 Theme</span>
      <div className="flex items-center gap-2">
        {THEMES.map((t) => (
          <button
            key={t.key}
            onClick={() => setTheme(t.key as ThemeKey)}
            title={t.name}
            className={`relative h-6 w-6 rounded-full transition-all duration-200 ${
              theme.key === t.key ? "scale-110 ring-2 ring-white/60 ring-offset-1 ring-offset-transparent" : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
            style={{ backgroundColor: t.swatch }}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-white/50 min-w-[3.5rem]">{theme.name}</span>
    </motion.div>
  );
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function HeroView() {
  return (
    <>
      <section
        id="hero"
        className="relative isolate w-full overflow-hidden bg-[#0f0804] text-white"
      >
        {/* Aurora background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-aurora absolute -inset-24 blur-3xl opacity-80" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#0f0804] via-transparent to-transparent"
        />

        <Container className="relative mx-auto w-full py-28">
          <div className="flex flex-col items-center text-center gap-6">

            {/* Circular photo with floating dots */}
            <motion.div
              className="relative w-[180px] h-[180px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {FLOAT_DOTS.map((dot, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute rounded-full bg-white/70 float-dot"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    top: dot.top,
                    left: dot.left,
                    opacity: dot.opacity,
                    animationDelay: dot.delay,
                  }}
                />
              ))}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                <Image
                  src={MyselfImage}
                  alt="Portrait of Amirreza Jalali Motlagh"
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                  quality={85}
                />
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-3 right-3 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-[#0f0804]" />
              </span>
            </motion.div>

            {/* Available for work badge */}
            <motion.div
              className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for Work
            </motion.div>

            {/* Tagline */}
            <p className="text-sm text-white/50 -mt-2">
              Let&apos;s build your next web product, starting today
            </p>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-white">
                Amirreza Jalali
              </h1>
            </motion.div>

            {/* Typewriter subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-[clamp(1.2rem,3vw,2rem)] font-medium text-white/70 -mt-2">
                I Build <TypewriterText />
              </p>
            </motion.div>

            {/* Stat badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {STAT_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              className="mt-2 max-w-2xl text-base leading-7 text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              I build{" "}
              <span className="text-white font-medium">fast, accessible web experiences</span> and
              internal tools using TypeScript, React/Next.js, and Vue. I focus on clean interfaces
              backed by solid APIs and data foundations.{" "}
              <span className="text-amber-400/80">No bloat. Just results.</span>
            </motion.p>

            {/* Feature cards */}
            <motion.div
              className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } } }}
            >
              {FEATURE_CARDS.map((card) => (
                <motion.div
                  key={card.title}
                  variants={staggerChild}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur hover:border-white/20 hover:bg-white/8 transition-colors"
                >
                  <span className="text-2xl">{card.icon}</span>
                  <p className="text-sm font-semibold text-white">{card.title}</p>
                  <p className="text-xs leading-5 text-white/55 text-center">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Fun fact bar */}
            <motion.div
              className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/60 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              ✨ <span className="text-white/80 font-medium">Fun fact:</span> I started my first
              freelance project at 18 and haven&apos;t stopped shipping since.
            </motion.div>

            {/* Theme switcher */}
            <ThemeSwitcher />

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                href="/Fullstack_developer.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400"
              >
                Download CV ↗
              </Link>
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                🚀 See My Work
              </a>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/amirjm/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/AmirrezaJM"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  <FaGithub className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      <style jsx>{`
        .hero-aurora {
          background: radial-gradient(circle at 20% 20%, var(--aurora-1, #c2571a) 0%, transparent 60%),
            radial-gradient(circle at 80% 0%, var(--aurora-2, #7c2d12) 0%, transparent 55%),
            radial-gradient(circle at 50% 80%, var(--aurora-3, #92400e) 0%, transparent 55%), #0f0804;
          animation: heroGlow 30s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes heroGlow {
          0% { transform: scale(1); opacity: 0.78; }
          50% { transform: scale(1.08); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.78; }
        }

        .float-dot {
          animation: floatDot 4s ease-in-out infinite;
        }

        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
}
