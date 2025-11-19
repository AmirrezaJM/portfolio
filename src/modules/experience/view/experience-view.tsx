"use client";

import * as React from "react";
import Container from "@/components/section/Container";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import StarBorder from "@/components/StarBorder";

type Experience = {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  summary: string;
  companyBio: string;
  achievements: string[];
  tags: string[];
  projects?: {
    name: string;
    summary: string;
    link?: string;
  }[];
};

type ExperienceTheme = {
  color: string;
  background: string;
  border: string;
  surface: string;
  chipBg: string;
  chipBorder: string;
  shadow: string;
};

const EXPERIENCE_THEMES: ExperienceTheme[] = [
  {
    color: "#22d3ee",
    background: "rgba(3,18,31,0.92)",
    border: "rgba(34,211,238,0.55)",
    surface: "rgba(14,116,144,0.25)",
    chipBg: "rgba(13,148,136,0.15)",
    chipBorder: "rgba(34,211,238,0.45)",
    shadow: "0 35px 120px -55px rgba(34,211,238,0.85)",
  },
  {
    color: "#c084fc",
    background: "rgba(34,13,49,0.92)",
    border: "rgba(192,132,252,0.55)",
    surface: "rgba(126,34,206,0.22)",
    chipBg: "rgba(217,70,239,0.15)",
    chipBorder: "rgba(192,132,252,0.45)",
    shadow: "0 35px 120px -55px rgba(192,132,252,0.8)",
  },
  {
    color: "#94a3b8",
    background: "rgba(11,18,27,0.95)",
    border: "rgba(148,163,184,0.55)",
    surface: "rgba(15,23,42,0.4)",
    chipBg: "rgba(71,85,105,0.3)",
    chipBorder: "rgba(148,163,184,0.45)",
    shadow: "0 35px 120px -55px rgba(15,23,42,0.85)",
  },
  {
    color: "#38bdf8",
    background: "rgba(4,20,35,0.92)",
    border: "rgba(56,189,248,0.55)",
    surface: "rgba(14,116,144,0.25)",
    chipBg: "rgba(14,165,233,0.15)",
    chipBorder: "rgba(56,189,248,0.45)",
    shadow: "0 35px 120px -55px rgba(56,189,248,0.8)",
  },
  {
    color: "#34d399",
    background: "rgba(6,31,22,0.92)",
    border: "rgba(52,211,153,0.55)",
    surface: "rgba(5,150,105,0.25)",
    chipBg: "rgba(16,185,129,0.16)",
    chipBorder: "rgba(52,211,153,0.45)",
    shadow: "0 35px 120px -55px rgba(16,185,129,0.75)",
  },
];

const EXPERIENCES: Experience[] = [
  {
    company: "OFoundation",
    role: "Web Developer",
    timeframe: "Jul 2025 - Present",
    location: "Utrecht, Netherlands",
    summary:
      "Focused solely on translating Welbewust.Life from Figma to production, owning the Shopify theme, performance, and automation for that flagship storefront.",
    companyBio:
      "OFoundation is redefining the way development aid creates impact. In response to growing doubts about traditional aid’s effectiveness, OFoundation introduces a sustainable and empowering model based on social entrepreneurship and franchise. The foundation operates as an enterprise to promote equality, responsibility, and collaboration, helping people build independent and secure futures. By enabling individuals to provide for themselves, OFoundation fosters lasting change, personal freedom, and long-term prosperity.",
    achievements: [
      "Rebuilt Welbewust.Life’s Liquid theme with shadcn/ui-inspired sections so UX matched the Figma system pixel-for-pixel.",
      "Integrated Shopify Admin GraphQL and Remix customer routes for Welbewust.Life to keep product data accurate and typed end-to-end.",
      "Pushed Welbewust.Life performance to 90-100 Lighthouse scores through image/CDN tuning, lazy loading, and critical CSS planning.",
    ],
    tags: ["Shopify",  "Remix", "GraphQL", "Tailwind CSS", "TypeScript"],
    projects: [
      {
        name: "Welbewust.Life",
        summary: "WelBewust Life is an integrated mental health and lifestyle platform that combines evidence-based therapy, guided movement, sleep coaching and smart nutrition under the supervision of BIG-registered psychologists and qualified trainers, plus tailored supplements and test packages to help you build sustainable energy, resilience and emotional balance",
        link: "https://www.welbewust.life/",
      },
    ],
  },
  {
    company: "Karhuno AI",
    role: "Fullstack Developer",
    timeframe: "Feb 2025 - May 2025",
    location: "Helsinki, Finland",
    summary:
      "Delivered the public karhuno.ai website with Next.js, Tailwind CSS, shadcn/ui, and Bun builds.",
    companyBio:
      "Karhuno AI is a Helsinki product lab focused on AI-assisted tooling, marrying modern JavaScript stacks with data-centric workflows for Northern European brands.",
    achievements: [
      "Built statically generated landing, blog, and hiring pages for karhuno.ai with Next.js, Tailwind CSS, and shadcn/ui.",
      "Crafted immersive Framer Motion hero, feature, and testimonial scenes to increase session duration on the website.",
      "Swapped Bun into the build pipeline with typed content models so site updates deployed in minutes while avoiding dashboard scope.",
    ],
    tags: ["Next.js", "Typescript", "shadcn-ui", "tailwindcss", "Prisma", "PostgreSQL", "Zod", "Bun"],
    projects: [
      {
        name: "karhuno.ai",
        summary: "Karhuno AI is a sales intelligence platform that scans real-time corporate news, hiring trends, and LinkedIn activity to detect strong buying signals and match them with verified decision-maker contacts, helping B2B teams find warm leads and close deals faster.",
        link: "https://karhuno.ai/",
      },
    ],
  },
  {
    company: "PAP Group Ltd",
    role: "Frontend Engineer",
    timeframe: "Sep 2022 - Jul 2023",
    location: "Tehran, Iran",
    summary:
      "Modernized PAP Group’s travel brands(AryakTravel, Shabaviz, and BarsamSeyr)by migrating their sites to Vue 3 + Vite while coordinating scrum rituals and cross-team documentation.",
    companyBio:
      "PAP Group is a Tehran travel-tech group operating portals like AryakTravel and ShabavizTour, investing in Vue 3 and Vite to modernize booking experiences.",
    achievements: [
      "Led the Vue 3 + Vite rebuilds for AryakTravel, Shabaviz, and BarsamSeyr, squeezing faster loads and consistent UI kits across all three brands.",
      "Mentored 5+ junior developers in Vue/TypeScript, increasing team velocity by 40%.",
      "Created PAPDocs with VitePress to centralize knowledge and speed up content creation by 20%.",
    ],
    tags: ["Vue 3", "Vite", "VitePress", "Pinia", "Typescript", "Tailwind CSS", "Mentorship"],
    projects: [
      {
        name: "AryakTravel",
        summary: "AryakTravel is a Tehran-based flight and travel agency with over 20 years of experience, offering domestic and international tours, flights, hotel bookings, Schengen and other visas, and curated seasonal packages including Nowruz and last-minute deals via an easy online booking platform and in-person support.",
        link: "https://www.aryaktravel.com/",
      },
      {
        name: "ShabavizTour",
        summary: "Shabaviz Parvaz is a Tehran-based travel agency specializing in Turkey and international package tours, offering seasonal deals for Nowruz and summer, curated hotel selections in Iran and abroad, Pegasus Airlines services, online installment booking, and 24/7 expert support for flights, hotels, and tailor-made holidays.",
        link: "https://www.shabaviztour.com/",
      },
      {
        name: "BarsamSeyr",
        summary: "BarsamSeyr is a Tehran-based travel agency and direct tour operator for popular destinations across Turkey, Asia, Europe, and Africa, offering budget and last-minute packages, hotel booking, flights, visa services, free consultation, and installment payment options through its online platform and expert support team.",
        link: "https://www.barsamseyr.com/",
      },
    ],
  },
  {
    company: "Zharfa Academy",
    role: "Front-End Developer & Coach",
    timeframe: "May 2021 - Sep 2021 · Coaching since Jan 2022",
    location: "Remote",
    summary:
      "Rebuilt zharfa.org as the academy’s secure learning portal, handling the token-based authentication stack and sustainable content modules end to end.",
    companyBio:
      "Zharfa Academy is a remote-first teaching collective that pairs modern HTML/CSS/JS/Python curricula with 1:1 mentorship for aspiring frontend developers.",
    achievements: [
      "Implemented token-based login, role-based access, and CSRF/session safeguards directly within zharfa.org.",
      "Structured the zharfa.org content system so instructors can ship new curriculum and mentorship pages without extra engineering cycles.",
    ],
    tags: ["Teaching", "Security", "HTML/CSS", "JavaScript","laravel"],
    projects: [
      {
        name: "zharfa",
        summary: "Zharfa Programming Academy is an Iran-based coding school that delivers up-to-date beginner and advanced courses in Python, Java, C#, C++, web and mobile development for all ages, with LMS/SIS-powered online learning, flexible course bundles, private classes and internationally recognised certificates",
        link: "https://www.zharfa.org/",
      },
    ],
  },
  {
    company: "Almas Teb Rayan",
    role: "Front-End Developer",
    timeframe: "Apr 2020 - Jul 2021",
    location: "Tehran, Iran",
    summary:
      "Built the IHMS website for Nikan Hospital, giving hospital and clinic teams a responsive interface to manage stock levels, tools, and asset tracking end to end.",
    companyBio:
      "Tehran-based healthcare technology studio partnering with hospitals and clinics to digitize patient flows, clinician dashboards, and operational reporting.",
    achievements: [
      "Architected the IHMS UI used by Nikan Hospital teams to monitor equipment, medicine, and tool stock across departments.",
      "Implemented Chart.js dashboards and Swiper-driven flows to highlight usage trends, reorders, and clinic-level assignments.",
      "Upgraded Git, npm, bundling, and code-splitting workflows for IHMS so releases stayed lightweight even on constrained hospital networks.",
    ],
    tags: ["HTML5", "CSS3/SCSS", "JavaScript", "Swiper", "Chart.js"],
    projects: [
      {
        name: "IHMS for Nikan Hospital",
        summary: "Dashboard for Nikan Hospital to monitor stock levels, room occupancy, medical tools, and full inventory valuation, featuring dedicated inventory and price tabs with responsive SCSS modules and interactive Chart.js visualizations.",
      },
    ],
  },
];

export default function ExperienceView() {
  const experienceItems = React.useMemo(
    () =>
      EXPERIENCES.map((experience, index) => ({
        key: `${experience.company}-${experience.role}`,
        cardClassName: "w-full",
        content: (
          <ExperienceCard
            experience={experience}
            theme={EXPERIENCE_THEMES[index % EXPERIENCE_THEMES.length]}
          />
        ),
      })),
    []
  );

  return (
    <section id="experience" className="w-full py-12">
      <Container>
        <div className="max-w-4xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-label-secondary">
            The teams and missions I have grown with.
          </p>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-tight text-label">
            Experience
          </h2>
          <p className="text-base text-label-secondary mb-4">
            From healthcare platforms at Almas Teb Rayan to commerce work at OFoundation, SASS business at Karhuno AI,
            travel products at PAP Group, and coaching at Zharfa Academy, each company sharpened a different part of my craft.
          </p>
        </div>

        <HoverEffect
          items={experienceItems}
          className="py-0"
          gridClassName="flex flex-col gap-8 py-0"
          hoverBackgroundClassName="bg-transparent"
          itemClassName="relative block w-full p-0"
        />
      </Container>
    </section>
  );
}

function ExperienceCard({ experience, theme }: { experience: Experience; theme: ExperienceTheme }) {
  return (
    <StarBorder
      color={theme.color}
      speed="2s"
      thickness={2}
      contentClassName="text-left"
      contentStyle={{
        borderColor: theme.border,
        background: theme.background,
        boxShadow: theme.shadow,
      }}
    >
      <article className="space-y-4 text-white">
        <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.15em] text-white/70">
          <span>{experience.timeframe}</span>
          <span className="hidden sm:inline-block text-white/40">•</span>
          <span>{experience.location}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
          <span className="text-xl text-white/75">@ {experience.company}</span>
        </div>
        <div
          className="rounded-2xl border p-4 text-sm text-white/85 transition hover:brightness-110"
          style={{ borderColor: theme.border, backgroundColor: theme.surface }}
        >
          <p className="text-sm uppercase tracking-[0.15em] text-white/70">Company snapshot</p>
          <p className="mt-2 leading-6 text-base text-white/80">{experience.companyBio}</p>
        </div>
        <p className="text-base leading-7 text-white/85">{experience.summary}</p>
        <ul className="space-y-2 text-base leading-6 text-white/85">
          {experience.achievements.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full"
                style={{ backgroundColor: theme.color }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:brightness-110"
              style={{ border: `1px solid ${theme.chipBorder}`, backgroundColor: theme.chipBg }}
            >
              {tag}
            </span>
          ))}
        </div>
        {experience.projects && experience.projects.length > 0 && (
          <div
            className="rounded-2xl border p-4 text-white/85 transition hover:brightness-110"
            style={{ borderColor: theme.border, backgroundColor: theme.surface }}
          >
            <p className="text-xs uppercase tracking-[0.15em] text-white/70">Projects</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {experience.projects.map((project) => {
                const content = (
                  <>
                    <p className="text-base font-semibold text-white">{project.name}</p>
                    <p className="mt-1 text-sm leading-5 text-white/80">{project.summary}</p>
                  </>
                );
                const baseStyle = {
                  borderColor: theme.chipBorder,
                  backgroundColor: theme.chipBg,
                };

                return project.link ? (
                  <a
                    key={`${experience.company}-${project.name}`}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-2xl border p-3 transition hover:brightness-125"
                    style={baseStyle}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={`${experience.company}-${project.name}`}
                    className="group block rounded-2xl border p-3 transition hover:brightness-125"
                    style={baseStyle}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </StarBorder>
  );
}
