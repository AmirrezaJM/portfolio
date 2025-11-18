'use client';

import * as React from "react";

import Container from "@/components/section/Container";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const STAT_HIGHLIGHTS = [
  {
    label: "Years shipping",
    value: "5+",
    detail: "End-to-end ownership since 2020 across Shopify, React, and Vue builds.",
  },
  {
    label: "Based in",
    value: "Utrecht, NL",
    detail: "Partnering with EU teams while mentoring remote squads.",
  },
  {
    label: "Craft",
    value: "TypeScript · React/Next.js · Vue 3 · Shopify",
    detail: "Performance, accessibility, and maintainable systems first.",
  },
];


export default function HeroView() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#03030a] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-aurora absolute -inset-24 blur-3xl opacity-80" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#03030a] via-transparent to-transparent"
        />

        <Container className="relative mx-auto flex min-h-screen w-full flex-col justify-center gap-12 py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
              Amirreza Jolani Mameghani
            </p>
            <h1 className="mt-4 text-[clamp(3rem,6vw,5rem)] font-semibold leading-tight text-white">
              Frontend Engineer
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Senior-leaning engineer with 5+ years of scope-to-ship ownership. I build reusable design
              systems, typed APIs, and performant storefronts with Shopify, TypeScript, and shadcn/ui; I'm
              comfortable across Prisma/PostgreSQL, Remix routes, and Lighthouse-driven optimization.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
              Currently lifting Welbewust Life Shopify builds at OFoundation and translating complex
              requirements into inclusive, accessible interfaces while mentoring teams and raising the bar on
              reviews, documentation, and delivery cadence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 px-8 text-base text-white hover:bg-white/10"
              >
                <Link href="/AmirrezaJolaniCV.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm uppercase tracking-[0.15em] text-white/70">Connect</span>
              <Link
                href="https://www.linkedin.com/in/amirjm/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/AmirrezaJM"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/AmirrezaJM"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/AmirrezaJM"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <FaTelegram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <ul className="grid w-full grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {STAT_HIGHLIGHTS.map((item) => (
              <li
                key={item.label}
                className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-white/60">{item.label}</p>
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="text-sm leading-6 text-white/75">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <style jsx>{`
        .hero-aurora {
          background: radial-gradient(circle at 20% 20%, #4c8bf5 0%, transparent 60%),
            radial-gradient(circle at 80% 0%, #ff8ac3 0%, transparent 55%),
            radial-gradient(circle at 50% 80%, #5ef6ff 0%, transparent 55%), #03030a;
          animation: heroGlow 30s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes heroGlow {
          0% {
            transform: scale(1);
            opacity: 0.78;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 0.78;
          }
        }
      `}</style>
    </>
  );
}
