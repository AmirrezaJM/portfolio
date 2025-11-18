"use client";

import * as React from "react";
import Container from "@/components/section/Container";

type Project = {
  title: string;
  stack: string;
  summary: string;
  impact: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Prompter",
    stack: "Next.js 15 · Prisma · Docker",
    summary:
      "Full-stack prompt management application that lets writers create, edit, delete, and favorite prompts through a clean App Router interface. Backed by PostgreSQL + Prisma with shadcn/ui components and responsive Tailwind styling.",
    impact:
      "Docker-ready environment with zod validation, sonner toasts, and ESLint/TypeScript automation so assignments can spin up quickly while keeping data safe and the UX accessible.",
    tags: ["Next.js 15", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker", "shadcn/ui", "Zod", "Sonner"],
  },
  {
    title: "Pokemon Clone",
    stack: "Nuxt 3 · Pinia",
    summary:
      "A user-friendly Pokedex-style experience that lists every Pokemon with detail pages and lets visitors toggle dark and light themes. Built with Nuxt 3.13, @nuxt/ui, and persisted Pinia stores.",
    impact:
      "Ships as an MIT-licensed Nuxt app with streamlined install scripts, Node 20 compatibility, and responsive layouts powered by Nuxt UI primitives.",
    tags: ["Nuxt 3", "Pinia", "@nuxt/ui", "Persisted State", "Dark/Light Mode"],
  },
  {
    title: "Threads Clone",
    stack: "Nuxt 3 · Supabase",
    summary:
      "Nuxt 3 social feed clone combining Supabase auth/storage, Prisma, Pinia, Tailwind, nuxt-icon, and uuid utilities to mirror the Threads posting experience.",
    impact:
      "Project roadmap includes dedicated Tailwind config, PWA setup with Vite/PWA, Vitest coverage for Pinia stores, and configurable light/dark modes to keep teams iterating.",
    tags: ["Nuxt 3", "Supabase", "Pinia", "Tailwind CSS", "Prisma", "Vite/PWA"],
  },
];

export default function ProjectsView() {
  return (
    <section className="w-full py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl space-y-4">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-white">
            Personal Projects
          </h2>
          <p className="mt-3 max-w-3xl text-body text-label-secondary">
            Summaries pulled from my GitHub readmes: a Next.js prompt manager, a Nuxt Pokedex, and a Supabase-powered Threads clone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
            >
              <div className="flex items-center justify-between text-white/70">
                <span className="text-xs uppercase tracking-[0.15em]">{project.stack}</span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/80">{project.summary}</p>
              <p className="mt-3 text-sm leading-6 text-white/70">{project.impact}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
