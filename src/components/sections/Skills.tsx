import { FeatureCard } from "../FeatureCard";
import { CardHeader } from "@/components/CardHeader";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaSwift,
  FaCode,
  FaFigma,
  FaGitSquare,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiDocker,
  SiTailwindcss,
  SiNuxtdotjs,
  SiVitepress,
  SiJquery,
  SiWebpack,
} from "react-icons/si";
import { TbFileTypeVue } from "react-icons/tb";
import { RiNextjsFill, RiTeamFill } from "react-icons/ri";
import { GrSwift, GrInsecure } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

export function Skills() {
  return (
    <section className="pb-12 sm:pb-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 [container-type:inline-size]">
        <CardHeader title="My Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* FeatureCard list */}
          <FeatureCard
            title="React.js"
            description="A powerful JavaScript library for building interactive user interfaces.
Supports component-based architecture with virtual DOM rendering.
Ideal for creating scalable, dynamic, and high-performance web apps."
            icon={<FaReact />}
            delay={0.1}
          />
          <FeatureCard
            title="Vue.js"
            description="A progressive framework for building UIs and single-page applications.
Offers reactivity, component reusability, and intuitive syntax.
Great for fast development with a gentle learning curve."
            icon={<FaVuejs />}
            delay={0.3}
          />
          <FeatureCard
            title="Nuxt.js"
            description="A framework built on Vue for server-side rendering and static site generation.
Enables improved SEO, faster load times, and file-based routing.
Commonly used for content-heavy or production-level applications."
            icon={<SiNuxtdotjs />}
            delay={0.5}
          />
          <FeatureCard
            title="Next js"
            description="A powerful React framework for building full-stack and server-rendered applications.
Supports static generation, API routes, and image optimization out of the box.
Ideal for performance-driven, SEO-friendly, and scalable web solutions."
            icon={<RiNextjsFill />}
            delay={0.1}
          />
          <FeatureCard
            title="Tailwind CSS"
            description="A utility-first CSS framework for rapid UI development.
Enables custom designs without leaving your HTML.
Highly responsive and perfect for scalable design systems."
            icon={<SiTailwindcss />}
            delay={0.3}
          />
          <FeatureCard
            title="Vitepress"
            description="A static site generator powered by Vite and Vue.
Designed for building fast, markdown-based documentation.
Lightweight, minimal, and ideal for developer-focused content."
            icon={<SiVitepress />}
            delay={0.5}
          />
          <FeatureCard
            title="HTML5"
            description="The standard markup language for creating structured web content.
Supports multimedia, forms, semantics, and responsive layouts.
Forms the foundational layer of all web development."
            icon={<FaHtml5 />}
            delay={0.1}
          />
          <FeatureCard
            title="CSS3"
            description="A styling language used to control layout, color, animations, and responsiveness.
Includes features like Flexbox, Grid, and keyframe animations.
Essential for crafting visually appealing and modern UIs."
            icon={<FaCss3Alt />}
            delay={0.3}
          />
          <FeatureCard
            title="SASS"
            description="A CSS preprocessor that extends CSS with variables, nesting, and functions.
Enhances modularity and code reuse in large stylesheets.
Widely used in scalable front-end architecture."
            icon={<FaSass />}
            delay={0.5}
          />
          <FeatureCard
            title="Node.js"
            description="A JavaScript runtime for server-side application development.
Non-blocking I/O and event-driven architecture ensure high performance.
Suitable for REST APIs, real-time apps, and backend services."
            icon={<FaNodeJs />}
            delay={0.1}
          />
          <FeatureCard
            title="RESTful APIs"
            description="A design standard for creating scalable and maintainable web services.
Allows CRUD operations over HTTP using structured endpoints.
Essential for communication between client and server."
            icon={<IoLogoJavascript />}
            delay={0.3}
          />
          <FeatureCard
            title="Authentication & Authorization"
            description="Techniques used to verify user identity and control access rights.
Includes systems like JWT, OAuth2, and role-based permissions.
Critical for security in modern web applications."
            icon={<GrInsecure />}
            delay={0.5}
          />
          <FeatureCard
            title="PostgreSQL"
            description="An advanced, open-source relational database system.
Supports complex queries, constraints, indexing, and ACID compliance.
Ideal for handling structured, scalable, and reliable data."
            icon={<BiLogoPostgresql />}
            delay={0.1}
          />
          <FeatureCard
            title="Webpack"
            description="A powerful module bundler for JavaScript applications.
Handles assets, dependencies, code splitting, and optimization.
Widely used in modern front-end development pipelines."
            icon={<SiWebpack />}
            delay={0.3}
          />
          <FeatureCard
            title="jQuery"
            description="A fast, lightweight JavaScript library for DOM manipulation.
Simplifies AJAX calls, animations, and event handling.
Still useful in legacy projects and rapid prototyping."
            icon={<SiJquery />}
            delay={0.5}
          />
          <FeatureCard
            title="Figma"
            description="A collaborative interface design tool for wireframes and prototypes.
Real-time team editing, component libraries, and asset exports.
Bridges the gap between design and development effectively."
            icon={<FaFigma />}
            delay={0.1}
          />
          <FeatureCard
            title="User Experience"
            description="The process of designing products that offer meaningful experiences.
Focuses on usability, accessibility, and user satisfaction.
Involves research, testing, and continuous improvement."
            icon={<FaReact />}
            delay={0.3}
          />
          <FeatureCard
            title="User Interface Design"
            description="The practice of designing visually consistent and user-friendly interfaces.
Includes layout, typography, color theory, and interaction states.
Crucial for ensuring seamless user interaction and engagement."
            icon={<IoLogoJavascript />}
            delay={0.5}
          />
          <FeatureCard
            title="Git"
            description="A distributed version control system for tracking code changes.
Enables collaboration, branching, merging, and CI integration.
Crucial for modern team-based development workflows."
            icon={<FaGitSquare />}
            delay={0.1}
          />
          <FeatureCard
            title="Programming"
            description="The foundation of software development using logical instructions and algorithms.
Covers problem-solving, data structures, and design principles.
Essential for building efficient and maintainable applications."
            icon={<FaCode />}
            delay={0.3}
          />
          <FeatureCard
            title="Swift"
            description="A modern programming language for iOS, macOS, and Apple platforms.
Combines performance with safety and expressive syntax.
Used for building native mobile and desktop applications."
            icon={<FaSwift />}
            delay={0.5}
          />
          <FeatureCard
            title="SwiftUI"
            description="A declarative framework for building UIs across Apple platforms.
Simplifies layout with state-driven components.
Great for rapid prototyping and modern app development."
            icon={<GrSwift />}
            delay={0.1}
          />
          <FeatureCard
            title="Teamwork"
            description="The ability to collaborate effectively in group environments.
Promotes communication, feedback, and shared problem-solving.
Vital for agile development and long-term project success."
            icon={<RiTeamFill />}
            delay={0.3}
          />
          <FeatureCard
            title="Teaching"
            description="The skill of simplifying complex topics and guiding others to learn.
Encourages clarity, patience, and mutual growth.
Often builds deeper understanding for both teacher and learner."
            icon={<GiTeacher />}
            delay={0.5}
          />
          <FeatureCard
            title="Special Education"
            description="Focuses on adaptive learning strategies for diverse student needs.
Enhances empathy, patience, and communication.
Useful in inclusive, accessible tech design."
            icon={<MdCastForEducation />}
            delay={0.1}
          />
          <FeatureCard
            title="Vue types"
            description="A utility for adding prop types to Vue components.
Improves type safety and developer experience in larger projects.
Useful for maintaining complex Vue applications."
            icon={<TbFileTypeVue />}
            delay={0.3}
          />
          <FeatureCard
            title="DevOps Basic Docker knowledge"
            description="Containerization of applications using Docker for consistency and portability.
Simplifies deployment and dependency management.
Forms the foundation for scalable CI/CD pipelines."
            icon={<SiDocker />}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
