import * as React from "react";
import SingleStackComponent from "../components/singlestack-component";
import Container from "@/components/section/Container";
import {
  FaCode,
  FaCss3Alt,
  FaFigma,
  FaGitSquare,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiDocker,
  SiJquery,
  SiNuxtdotjs,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVitepress,
  SiWebpack,
} from "react-icons/si";

type Stack = {
  name: string;
  description: string;
  href?: string;
  Icon?: React.ReactNode;
  className?: string;
};

type SoftSkill = {
  title: string;
  description: string;
};

type StackviewProps = {
  title?: string;
  blurb?: string;
  stacks: Stack[];
  sectionId?: string;
};

type SoftSkillsProps = {
  title?: string;
  blurb?: string;
  skills: SoftSkill[];
  sectionId?: string;
};

export default function StackView() {
  const iconClass = "h-5 w-5 text-label/70";
  const hardSkills: Stack[] = [
    {
      name: "React.js",
      description:
        "Component-driven UI work with hooks, context, and composable architectures for complex dashboards.",
      href: "https://react.dev/",
      Icon: <FaReact className={iconClass} aria-hidden="true" />,
      className: "hover:bg-blue-600/20",
    },
    {
      name: "Next.js",
      description:
        "App Router builds with SSR/SSG, API routes, incremental revalidation, and image optimization.",
      href: "https://nextjs.org/",
      Icon: <RiNextjsFill className={iconClass} aria-hidden="true" />,
      className: "hover:bg-white/10",
    },
    {
      name: "Vue 3",
      description:
        "Composition API, script setup, and reusable component libraries for travel-tech portals and dashboards.",
      href: "https://vuejs.org/",
      Icon: <FaVuejs className={iconClass} aria-hidden="true" />,
      className: "hover:bg-emerald-600/20",
    },
    {
      name: "Nuxt 3",
      description:
        "File-based routing, server routes, and Nitro deployments for content-heavy websites and clones.",
      href: "https://nuxt.com/",
      Icon: <SiNuxtdotjs className={iconClass} aria-hidden="true" />,
      className: "hover:bg-teal-600/20",
    },
    {
      name: "TypeScript",
      description:
        "Static typing across React, Vue, Prisma, and Remix routes for safer APIs and design systems.",
      href: "https://www.typescriptlang.org/",
      Icon: <SiTypescript className={iconClass} aria-hidden="true" />,
      className: "hover:bg-sky-600/20",
    },
    {
      name: "JavaScript (ES6+)",
      description:
        "Modern syntax, async flows, testing, and DOM work across browsers for performant frontends.",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
      Icon: <IoLogoJavascript className={iconClass} aria-hidden="true" />,
      className: "hover:bg-amber-500/20",
    },
    {
      name: "HTML5",
      description:
        "Semantic markup and accessibility-first layouts for marketing sites, documentation, and apps.",
      href: "https://developer.mozilla.org/docs/Web/HTML",
      Icon: <FaHtml5 className={iconClass} aria-hidden="true" />,
      className: "hover:bg-orange-600/20",
    },
    {
      name: "CSS3 & Layout",
      description:
        "Grid, Flexbox, and fluid typography with custom properties to keep responsive work tidy.",
      href: "https://developer.mozilla.org/docs/Web/CSS",
      Icon: <FaCss3Alt className={iconClass} aria-hidden="true" />,
      className: "hover:bg-blue-600/20",
    },
    {
      name: "SCSS/Sass",
      description:
        "Scalable stylesheets with nesting, mixins, and design tokens—used for healthcare and travel products.",
      href: "https://sass-lang.com/",
      Icon: <FaSass className={iconClass} aria-hidden="true" />,
      className: "hover:bg-pink-600/20",
    },
    {
      name: "Tailwind CSS",
      description:
        "Utility-first workflows, custom themes, and shadcn/ui integration for rapid prototyping.",
      href: "https://tailwindcss.com/",
      Icon: <SiTailwindcss className={iconClass} aria-hidden="true" />,
      className: "hover:bg-cyan-600/20",
    },
    {
      name: "Styled Components",
      description:
        "Theming and component co-location for React/Next.js apps; shared tokens across marketing and product.",
      href: "https://styled-components.com/",
      Icon: <SiStyledcomponents className={iconClass} aria-hidden="true" />,
      className: "hover:bg-rose-600/20",
    },
    {
      name: "Bootstrap",
      description:
        "Legacy-friendly design system customization, grid overrides, and responsive utilities.",
      href: "https://getbootstrap.com/",
      Icon: <SiBootstrap className={iconClass} aria-hidden="true" />,
      className: "hover:bg-violet-600/20",
    },
    {
      name: "Shadcn/ui & unstyled components",
      description:
        "Radix-based primitives styled with Tailwind for reusable Shopify components and design systems.",
      href: "https://ui.shadcn.com/",
      Icon: <FaCode className={iconClass} aria-hidden="true" />,
      className: "hover:bg-zinc-700/20",
    },
    {
      name: "GSAP & motion",
      description:
        "Animation timelines, scroll driven effects, and Framer Motion choreography for richer UX.",
      href: "https://greensock.com/gsap/",
      Icon: <FaCode className={iconClass} aria-hidden="true" />,
      className: "hover:bg-lime-500/20",
    },
    {
      name: "Redux & State Machines",
      description:
        "Complex state coordination for dashboards, client portals, and admin tools.",
      href: "https://redux.js.org/",
      Icon: <SiRedux className={iconClass} aria-hidden="true" />,
      className: "hover:bg-purple-600/20",
    },
    {
      name: "Figma & Design Systems",
      description:
        "Component libraries, UX flows, and dev handoff that inform Shopify, Nuxt, and docs work.",
      href: "https://figma.com/",
      Icon: <FaFigma className={iconClass} aria-hidden="true" />,
      className: "hover:bg-purple-500/20",
    },
    {
      name: "Tooling & IDEs",
      description:
        "Git, VS Code, WebStorm, and PhpStorm workflows with linting, formatting, and code reviews.",
      href: "https://git-scm.com/",
      Icon: <FaGitSquare className={iconClass} aria-hidden="true" />,
      className: "hover:bg-orange-500/20",
    },
    {
      name: "Performance & SEO",
      description:
        "DevTools, Lighthouse, semantic HTML, and Core Web Vitals tuning for 90-100 scores.",
      href: "https://web.dev/vitals/",
      Icon: <FaCode className={iconClass} aria-hidden="true" />,
      className: "hover:bg-emerald-500/20",
    },
    {
      name: "Node.js",
      description:
        "API routes, server utilities, and tooling scripts powering Remix, Next.js, and Nuxt projects.",
      href: "https://nodejs.org/",
      Icon: <FaNodeJs className={iconClass} aria-hidden="true" />,
      className: "hover:bg-green-600/20",
    },
    {
      name: "PHP (Laravel)",
      description:
        "Back-end extensions, authentication flows, and admin tooling for legacy platforms.",
      href: "https://laravel.com/",
      Icon: <FaPhp className={iconClass} aria-hidden="true" />,
      className: "hover:bg-indigo-500/20",
    },
    {
      name: "PostgreSQL",
      description:
        "Schema design, indexing, and Prisma-based access for full-stack apps.",
      href: "https://www.postgresql.org/",
      Icon: <BiLogoPostgresql className={iconClass} aria-hidden="true" />,
      className: "hover:bg-blue-600/20",
    },
    {
      name: "Docker",
      description:
        "Local dev environments, Compose workflows, and reproducible deployments for assignments.",
      href: "https://www.docker.com/",
      Icon: <SiDocker className={iconClass} aria-hidden="true" />,
      className: "hover:bg-sky-500/20",
    },
    {
      name: "Webpack",
      description:
        "Legacy bundler knowledge for code splitting, asset pipelines, and optimization.",
      href: "https://webpack.js.org/",
      Icon: <SiWebpack className={iconClass} aria-hidden="true" />,
      className: "hover:bg-blue-400/20",
    },
    {
      name: "VitePress & docs",
      description:
        "Markdown-first documentation sites with custom themes for engineering handbooks.",
      href: "https://vitepress.dev/",
      Icon: <SiVitepress className={iconClass} aria-hidden="true" />,
      className: "hover:bg-green-600/20",
    },
    {
      name: "jQuery",
      description:
        "Legacy DOM scripting and quick prototypes when supporting older stacks.",
      href: "https://jquery.com/",
      Icon: <SiJquery className={iconClass} aria-hidden="true" />,
      className: "hover:bg-purple-500/20",
    },
  ];

  const softSkills: SoftSkill[] = [
    {
      title: "Caring & motivated",
      description:
        "Bring empathy to healthcare, travel, and commerce products while stewarding accessible UIs.",
    },
    {
      title: "Out-of-the-box thinking",
      description:
        "Connect design systems, motion, and dev tooling to unlock delightful experiences.",
    },
    {
      title: "Problem-solving",
      description:
        "Lead investigations across stacks, from Lighthouse regressions to data integrity issues.",
    },
    {
      title: "Reliability & ownership",
      description:
        "Trusted to ship end-to-end projects—from brief and design to deployment and documentation.",
    },
    {
      title: "Teamwork",
      description:
        "Facilitate sprint rituals, pair programming, and clear async communication across time zones.",
    },
    {
      title: "Mentorship & teaching",
      description:
        "Coach juniors through Zharfa Academy programs, 1:1 reviews, and onboarding materials.",
    },
    {
      title: "Communication & feedback",
      description:
        "Translate stakeholder goals into actionable tasks and provide constructive critique.",
    },
    {
      title: "Ownership mindset",
      description:
        "Drive documentation, QA checklists, and automation that raise the bar for every release.",
    },
  ];

  return (
    <section id="stack" className="w-full py-16">
      <Container>
        <AllStacks
          title="Hard Skills"
          blurb="Frameworks, languages, and tools featured across my LinkedIn and CV experience."
          stacks={hardSkills}
          sectionId="hard-skill"
        />
        <SoftSkillsGrid
          skills={softSkills}
          title="Soft Skills"
          blurb="Human skills that keep teams aligned and projects sustainable."
          sectionId="soft-skill"
        />
      </Container>
    </section>
  );
}

export function AllStacks({
  title = "My Stacks",
  blurb = "Commitment to staying updated with the latest design trends and techniques.",
  stacks,
  sectionId,
}: StackviewProps) {
  return (
    <section id={sectionId} className="w-full my-6 sm:my-12">
      <header className="mb-6 sm:mb-8">
        <h2 className="text-large-title text-label font-semibold">{title}</h2>
        <p className="mt-3 max-w-3xl text-body text-label-secondary">{blurb}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        {stacks.map((item) => (
          <SingleStackComponent
            key={item.name}
            name={item.name}
            description={item.description}
            href={item.href}
            Icon={item.Icon}
            className={item.className}
          />
        ))}
      </div>
    </section>
  );
}

function SoftSkillsGrid({
  title = "Soft Skills",
  blurb = "Human skills that complement the technical stack.",
  skills,
  sectionId,
}: SoftSkillsProps) {
  return (
    <section id={sectionId} className="w-full my-6 sm:my-12">
      <header className="mb-6 sm:mb-8">
        <h2 className="text-large-title text-label font-semibold">{title}</h2>
        <p className="mt-3 max-w-3xl text-body text-label-secondary">{blurb}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-label shadow-lg shadow-black/20 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-label">{skill.title}</h3>
            <p className="mt-2 text-sm leading-6 text-label-secondary">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
