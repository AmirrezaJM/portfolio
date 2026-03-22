"use client";

import * as React from "react";
import { motion } from "motion/react";
import Container from "@/features/Container";
import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

type ProjectStat = { value: string; label: string; color: string };

type Project = {
  title: string;
  badge: string;
  badgeColor: string;
  summary: string;
  stats: [ProjectStat, ProjectStat, ProjectStat, ProjectStat];
  tags: string[];
  impact: string;
  href: string;
  github: string;
};

const PROJECTS: Project[] = [
  {
    title: "Prompter",
    badge: "Open Source",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    summary:
      "Full-stack prompt management app built with the Next.js App Router. Users can create, edit, delete, and favorite prompts with a type-safe Prisma + PostgreSQL data layer.",
    stats: [
      { value: "2.5K+", label: "Lines of Code", color: "text-amber-400" },
      { value: "15", label: "API Routes", color: "text-amber-400" },
      { value: "100%", label: "TypeScript", color: "text-amber-400" },
      { value: "Active", label: "Status", color: "text-emerald-400" },
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    impact: "Dockerized for consistent environments with Zod validation and Sonner toasts",
    href: "https://github.com/AmirrezaJM/prompter",
    github: "https://github.com/AmirrezaJM/prompter",
  },
  {
    title: "Nodebase",
    badge: "Open Source",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    summary:
      "Visual workflow editor with a node-based UI (React Flow) for composing automation flows, backed by type-safe APIs via tRPC + Prisma and a modern Next.js architecture.",
    stats: [
      { value: "3K+", label: "Lines of Code", color: "text-amber-400" },
      { value: "8", label: "Node Types", color: "text-amber-400" },
      { value: "100%", label: "Type-Safe", color: "text-amber-400" },
      { value: "Inngest", label: "Background Jobs", color: "text-sky-400" },
    ],
    tags: ["Next.js", "React Flow", "tRPC", "Prisma", "Inngest"],
    impact: "Includes secure auth and background execution — great for Fintech workflow automation",
    href: "https://github.com/AmirrezaJM/nodebase",
    github: "https://github.com/AmirrezaJM/nodebase",
  },
  {
    title: "E-Commerce Marketplace",
    badge: "Open Source",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    summary:
      "Next.js marketplace with MongoDB, tRPC, and Payload CMS. Supports multi-vendor products, auth, and nuqs-based filtering with a shadcn/ui design system.",
    stats: [
      { value: "5K+", label: "Lines of Code", color: "text-amber-400" },
      { value: "CMS", label: "Payload CMS", color: "text-purple-400" },
      { value: "Auth", label: "Built-in Auth", color: "text-amber-400" },
      { value: "Multi", label: "Vendor Support", color: "text-sky-400" },
    ],
    tags: ["Next.js", "MongoDB", "tRPC", "Payload CMS", "shadcn/ui"],
    impact: "Full marketplace with type-safe APIs, CMS-driven content, and nuqs URL state",
    href: "https://github.com/AmirrezaJM/ecommerce-marketplace",
    github: "https://github.com/AmirrezaJM/ecommerce-marketplace",
  },
  {
    title: "Threads Clone",
    badge: "Side Project",
    badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    summary:
      "Nuxt 3 social feed clone integrating Supabase authentication and storage with a Prisma-backed data layer and Tailwind CSS styling.",
    stats: [
      { value: "Nuxt 3", label: "Framework", color: "text-emerald-400" },
      { value: "Auth", label: "Supabase Auth", color: "text-amber-400" },
      { value: "Storage", label: "File Uploads", color: "text-amber-400" },
      { value: "Prisma", label: "ORM", color: "text-sky-400" },
    ],
    tags: ["Nuxt 3", "Supabase", "Prisma", "Tailwind CSS"],
    impact: "Scalable UI patterns with iteration-friendly foundation for tests and PWA",
    href: "https://github.com/AmirrezaJM/threads-clone",
    github: "https://github.com/AmirrezaJM/threads-clone",
  },
  {
    title: "Pokemon Clone",
    badge: "Side Project",
    badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    summary:
      "Pokedex-style Nuxt 3 app with listings, detail pages, and dark/light theme switching using persisted Pinia stores and Nuxt UI components.",
    stats: [
      { value: "800+", label: "Pokemon", color: "text-amber-400" },
      { value: "100%", label: "Responsive", color: "text-amber-400" },
      { value: "Dark", label: "Theme Support", color: "text-sky-400" },
      { value: "Pinia", label: "State Mgmt", color: "text-emerald-400" },
    ],
    tags: ["Nuxt 3", "Pinia", "TypeScript", "@nuxt/ui"],
    impact: "Focused on UX polish and maintainable state with clean responsive layouts",
    href: "https://github.com/AmirrezaJM/pokemon-clone",
    github: "https://github.com/AmirrezaJM/pokemon-clone",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
} as const;

export default function ProjectsView() {
  return (
    <section id="projects" className="w-full py-16">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              {/* Title + badge */}
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span
                  className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${project.badgeColor}`}
                >
                  {project.badge}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-white/65">{project.summary}</p>

              {/* Stats grid */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="mt-0.5 text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact row */}
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/60">
                <span className="text-emerald-400">✓</span>
                <span>
                  <span className="font-semibold text-white/80">Impact: </span>
                  {project.impact}
                </span>
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-2">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View live"
                  className="inline-grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/60 transition hover:text-white hover:border-white/30"
                >
                  <LuLink className="h-4 w-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="inline-grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/60 transition hover:text-white hover:border-white/30"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
