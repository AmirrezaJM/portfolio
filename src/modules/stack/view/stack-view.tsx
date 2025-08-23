import * as React from "react";
import SingleStackComponent from "../components/singlestack-component";
import Container from "@/components/section/Container";
import { FaCode, FaCss3Alt, FaFigma, FaGitSquare, FaHtml5, FaNodeJs, FaReact, FaSass, FaSwift, FaVuejs } from "react-icons/fa";
import { SiDocker, SiJquery, SiNuxtdotjs, SiTailwindcss, SiVitepress, SiWebpack } from "react-icons/si";
import { RiNextjsFill, RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GrSwift } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbFileTypeVue } from "react-icons/tb";


type Stack = {
  name: string;
  description: string;
  href?: string;
  Icon?: React.ReactNode;
  className?: string;
};

type StackviewProps = {
  title?: string;
  blurb?: string;
  stacks: Stack[];
};


export default function StackView() {
  const iconClass = "h-5 w-5 text-label/70";
  const stacks: Stack[] = [
    {
      name: "React.js",
      description:
        "A powerful JavaScript library for building interactive UIs. Component-based, virtual DOM, and highly scalable.",
      href: "https://react.dev/",
      Icon: <FaReact className={iconClass} aria-hidden="true" />,
      className: "hover:bg-blue-600/20",
    },
    {
      name: "Vue.js",
      description:
        "Progressive framework for UIs & SPAs. Reactive core, component reuse, and gentle learning curve.",
      href: "https://vuejs.org/",
      Icon: <FaVuejs className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Nuxt.js",
      description:
        "Vue framework with SSR/SSG, file-based routing, and great DX. Ideal for content-heavy sites.",
      href: "https://nuxt.com/",
      Icon: <SiNuxtdotjs className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Next.js",
      description:
        "React framework for full-stack apps with SSG, SSR, API routes, and image optimization.",
      href: "https://nextjs.org/",
      Icon: <RiNextjsFill className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Tailwind CSS",
      description:
        "Utility-first CSS for rapid UI development and scalable design systems.",
      href: "https://tailwindcss.com/",
      Icon: <SiTailwindcss className={iconClass} aria-hidden="true" />,
    },
    {
      name: "VitePress",
      description:
        "Fast, markdown-first static site generator powered by Vite and Vue—perfect for docs.",
      href: "https://vitepress.dev/",
      Icon: <SiVitepress className={iconClass} aria-hidden="true" />,
    },
    {
      name: "HTML5",
      description:
        "Semantic markup for structured content, forms, and multimedia—the web’s foundation.",
      href: "https://developer.mozilla.org/docs/Web/HTML",
      Icon: <FaHtml5 className={iconClass} aria-hidden="true" />,
    },
    {
      name: "CSS3",
      description:
        "Layout, color, and animation tooling—Grid, Flexbox, keyframes—for modern UIs.",
      href: "https://developer.mozilla.org/docs/Web/CSS",
      Icon: <FaCss3Alt className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Sass",
      description:
        "CSS preprocessor with variables, nesting, and mixins to scale large stylesheets.",
      href: "https://sass-lang.com/",
      Icon: <FaSass className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Node.js",
      description:
        "Event-driven runtime for server-side JavaScript. Great for APIs and real-time apps.",
      href: "https://nodejs.org/",
      Icon: <FaNodeJs className={iconClass} aria-hidden="true" />,
    },
    {
      name: "RESTful APIs",
      description:
        "HTTP-based CRUD services with predictable endpoints; backbone for client-server communication.",
      href: "https://restfulapi.net/",
      Icon: <IoLogoJavascript className={iconClass} aria-hidden="true" />,
    },

    {
      name: "PostgreSQL",
      description:
        "Advanced open-source relational database with strong SQL and indexing.",
      href: "https://www.postgresql.org/",
      Icon: <BiLogoPostgresql className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Webpack",
      description:
        "Battle-tested bundler: code splitting, loaders, and optimization for complex apps.",
      href: "https://webpack.js.org/",
      Icon: <SiWebpack className={iconClass} aria-hidden="true" />,
    },
    {
      name: "jQuery",
      description:
        "Lightweight DOM and AJAX helper—handy in legacy projects and quick prototypes.",
      href: "https://jquery.com/",
      Icon: <SiJquery className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Figma",
      description:
        "Collaborative design tool: components, prototyping, and dev handoff.",
      href: "https://figma.com/",
      Icon: <FaFigma className={iconClass} aria-hidden="true" />,
    },
    {
      name: "User Experience",
      description:
        "Research, accessibility, and testing for meaningful, usable experiences.",
      href: "#",
      Icon: <FaReact className={iconClass} aria-hidden="true" />,
    },
    {
      name: "User Interface Design",
      description:
        "Visual systems—layout, typography, and interaction—for clear, consistent UIs.",
      href: "#",
      Icon: <IoLogoJavascript className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Git",
      description:
        "Distributed version control for collaboration, branching, and CI workflows.",
      href: "https://git-scm.com/",
      Icon: <FaGitSquare className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Programming",
      description:
        "Problem-solving, data structures, and clean code for maintainable software.",
      href: "#",
      Icon: <FaCode className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Swift",
      description:
        "Modern, safe, and fast language for iOS and macOS development.",
      href: "https://www.swift.org/",
      Icon: <FaSwift className={iconClass} aria-hidden="true" />,
    },
    {
      name: "SwiftUI",
      description:
        "Declarative Apple UI framework—build UIs with state and composition.",
      href: "https://developer.apple.com/xcode/swiftui/",
      Icon: <GrSwift className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Teamwork",
      description:
        "Communication, feedback, and shared problem-solving for agile delivery.",
      href: "#",
      Icon: <RiTeamFill className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Teaching",
      description:
        "Explain complex topics clearly; mentor and grow teams effectively.",
      href: "#",
      Icon: <FaCode className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Special Education",
      description:
        "Adaptive strategies for diverse learners—useful for inclusive, accessible tech.",
      href: "#",
      Icon: <FaCode className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Vue Types",
      description:
        "Prop typing helpers for Vue; improve safety and DX on larger apps.",
      href: "#",
      Icon: <TbFileTypeVue className={iconClass} aria-hidden="true" />,
    },
    {
      name: "Docker (DevOps basics)",
      description:
        "Containerization for reproducible builds and deployments; CI/CD foundation.",
      href: "https://www.docker.com/",
      Icon: <SiDocker className={iconClass} aria-hidden="true" />,
    }
  ];


  return (
    <Container>
      <AllStacks stacks={stacks} />
    </Container>
  );
}

export function AllStacks({
  title = "My Stacks",
  blurb = "Commitment to staying updated with the latest design trends and techniques.",
  stacks,
}: StackviewProps) {
  return (
    <section className="w-full my-6 sm:my-12">
      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <h2 className="text-large-title text-label font-semibold">{title}</h2>
        <p className="mt-3 max-w-3xl text-body text-label-secondary">{blurb}</p>
      </header>

      {/* Grid of cards */}
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
