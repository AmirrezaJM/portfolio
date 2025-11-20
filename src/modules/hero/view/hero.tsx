'use client';

import * as React from "react";

import Container from "@/components/section/Container";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MyselfImage from "@/assets/myself.webp";

const STAT_HIGHLIGHTS = [
  {
    label: "Years shipping",
    value: "5+",
    detail: "End-to-end ownership since 2020 across Next, and Nuxt builds, and shopify.",
  },
  {
    label: "Based in",
    value: "Utrecht, NL",
    detail: "Partnering with EU teams while mentoring remote squads.",
  },
  {
    label: "Craft",
    value: "React/Next.js · Vue 3 · Shopify",
    detail: "Performance, accessibility, and maintainable systems first.",
  },
];


export default function HeroView() {
  return (
    <>
      <section id="hero" className="relative isolate w-full overflow-hidden bg-[#0D0D14] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-aurora absolute -inset-24 blur-3xl opacity-80" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#03030a] via-transparent to-transparent"
        />

        <Container className="relative mx-auto min-h-screen w-full py-24">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
            <div className="max-w-5xl lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                Amirreza Jolani Mameghani
              </p>
              <h1 className="mt-4 text-[clamp(3rem,6vw,5rem)] font-semibold leading-tight text-white">
                Frontend Engineer
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                Senior-leaning engineer with 5+ years of taking products from idea to production. I build fast, accessible Shopify storefronts and modern web apps using React/Next.js, Vue, Tailwind, shadcn/ui and TypeScript, backed by solid Node.js, Prisma and PostgreSQL foundations.
                Lived in Utrecht, I’m currently helping OFoundation as my master thesis, maintainable interfaces, mentoring teammates, and raising the bar on code quality, documentation, and performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/5 px-8 text-base text-white hover:bg-white/10"
                >
                  <Link href="/AmirrezaJM.pdf" target="_blank" rel="noreferrer">
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
              </div>
            </div>

            <div className="flex w-full justify-center lg:flex-1 lg:justify-end">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-b from-violet-500/50 via-transparent to-cyan-400/40 blur-3xl"
                />
                <div className="group relative mx-auto h-64 w-64 overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/5 p-2 shadow-[0_15px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <div className="absolute inset-2 rounded-[2rem] border border-white/10" aria-hidden />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/10 to-white/0">
                    <Image
                      src={MyselfImage}
                      alt="Portrait of Amirreza Jolani Mameghani"
                      fill
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 16rem"
                      className="object-cover"
                      priority
                      placeholder="blur"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-12 grid w-full grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
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
