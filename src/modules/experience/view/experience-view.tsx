"use client";

import * as React from "react";
import Container from "@/components/section/Container";

type Experience = {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  summary: string;
  companyBio: string;
  achievements: string[];
  tags: string[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Almas Teb Rayan",
    role: "Front-End Developer",
    timeframe: "Apr 2020 - Jul 2021",
    location: "Tehran, Iran",
    summary:
      "Built and scaled the Nikan Hospital & Clinic platform by leading UI architecture, shipping responsive cross-browser layouts, and ensuring releases landed smoothly.",
    companyBio:
      "Tehran-based healthcare technology studio partnering with hospitals and clinics to digitize patient flows, clinician dashboards, and operational reporting.",
    achievements: [
      "Upgraded internal tooling (Git, npm, bundling, code splitting, asset optimization) to raise MVP flexibility by 30% and cut delivery time 15%.",
      "Optimized imagery and mobile-first interactions with HTML5/CSS3 (SCSS), vanilla JS, Swiper, and Chart.js.",
      "Partnered with product and QA to deploy and test performance-focused builds for healthcare stakeholders.",
    ],
    tags: ["HTML5", "CSS3/SCSS", "JavaScript", "Swiper", "Chart.js"],
  },
  {
    company: "OFoundation",
    role: "Web Developer",
    timeframe: "Jul 2025 - Present",
    location: "Utrecht, Netherlands",
    summary:
      "Owning Welbewust Life Shopify builds from brief to launch, ensuring every sprint ships performant storefronts and polished Liquid/HTML themes.",
    companyBio:
      "OFoundation is redefining the way development aid creates impact. In response to growing doubts about traditional aid’s effectiveness, OFoundation introduces a sustainable and empowering model based on social entrepreneurship and franchise. The foundation operates as an enterprise to promote equality, responsibility, and collaboration, helping people build independent and secure futures. By enabling individuals to provide for themselves, OFoundation fosters lasting change, personal freedom, and long-term prosperity. Learn more about the O-philosophy and its innovative approach to global development at www.ofoundation.nl.",
    achievements: [
      "Led two end-to-end Shopify experiences straight from Figma concepts.",
      "Integrated Shopify Admin GraphQL with typed Remix routes and secure session-token validation.",
      "Raised Lighthouse to 90-100 on key pages with image optimization, code splitting, and critical CSS.",
    ],
    tags: ["Shopify", "Remix", "GraphQL", "Tailwind CSS", "TypeScript"],
  },
  {
    company: "Karhuno AI",
    role: "Fullstack Developer",
    timeframe: "Feb 2025 - May 2025",
    location: "Helsinki, Finland",
    summary:
      "Delivered a Next.js product with Tailwind CSS, shadcn/ui, and Bun while tuning developer feedback loops and motion polish.",
    companyBio:
      "Karhuno AI is a Helsinki product lab focused on AI-assisted tooling, marrying modern JavaScript stacks with data-centric workflows for Northern European brands.",
    achievements: [
      "Built a Prisma + PostgreSQL backend with Zod validation, improving query efficiency by 25%.",
      "Crafted Framer Motion interactions for smoother session engagement.",
      "Set up typed workflows and DX tooling to keep tight iteration cycles.",
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zod", "Bun"],
  },
  {
    company: "PAP Group Ltd",
    role: "Frontend Engineer",
    timeframe: "Sep 2022 - Jul 2023",
    location: "Tehran, Iran",
    summary:
      "Modernized travel products by migrating stacks to Vue 3 + Vite while coordinating scrum rituals and cross-team documentation.",
    companyBio:
      "PAP Group is a Tehran travel-tech group operating portals like AryakTravel and ShabavizTour, investing in Vue 3 and Vite to modernize booking experiences.",
    achievements: [
      "Mentored 5+ junior developers in Vue/TypeScript, increasing team velocity by 40%.",
      "Migrated Web Harmony properties to Vue 3 Composition API and Vite for faster load times.",
      "Created PAPDocs with VitePress to centralize knowledge and speed up content creation by 20%.",
    ],
    tags: ["Vue 3", "Vite", "VitePress", "Tailwind CSS", "Mentorship"],
  },
  {
    company: "Zharfa Academy",
    role: "Front-End Developer & Coach",
    timeframe: "May 2021 - Aug 2021 · Coaching since Jan 2022",
    location: "Remote",
    summary:
      "Shipped secure authentication flows for the academy platform while teaching HTML, CSS, JavaScript, and Python to cohorts of budding frontend developers.",
    companyBio:
      "Zharfa Academy is a remote-first teaching collective that pairs modern HTML/CSS/JS/Python curricula with 1:1 mentorship for aspiring frontend developers.",
    achievements: [
      "Implemented token-based login, role-based access, and CSRF/session safeguards.",
      "Kept curriculum aligned with modern frontend practices through code reviews and 1:1 guidance.",
    ],
    tags: ["Teaching", "Security", "HTML/CSS", "JavaScript", "Mentorship"],
  },
];

export default function ExperienceView() {
  return (
    <section className="w-full py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-label-secondary">
            Experience
          </p>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-tight text-label">
            The teams and missions I have grown with.
          </h2>
          <p className="text-base text-label-secondary">
            From healthcare platforms at Almas Teb Rayan to commerce work at OFoundation, AI labs at Karhuno AI,
            travel products at PAP Group, and coaching at Zharfa Academy, each company sharpened a different part of my craft.
          </p>
          <p className="text-base text-label-secondary">
            Pulled directly from my LinkedIn and CV timeline, each role below reflects hands-on impact,
            mentorship, and the stacks I keep sharpened.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {EXPERIENCES.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.15em] text-white/50">
                <span>{experience.timeframe}</span>
                <span className="hidden sm:inline-block text-white/30">•</span>
                <span>{experience.location}</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                <span className="text-xl text-white/70">@ {experience.company}</span>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.15em] text-white/60">Company snapshot</p>
                <p className="mt-2 leading-6">{experience.companyBio}</p>
              </div>
              <p className="mt-4 text-base leading-7 text-white/80">{experience.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-white/75">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70"
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
