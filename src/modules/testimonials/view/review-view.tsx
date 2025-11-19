"use client";

import * as React from "react";
import TestimonialsView from "./testimonials-view";
import CompaniesView from "@/modules/brand/view/brand-view";
import Earth from "@/components/section/globe";
import Container from "@/components/section/Container";

const reviews = [
  {
    id: 1,
    quote:
      "A true team player—always ready to help, collaborate, and lift the whole group forward.",
    author: "Clara Shushunov",
    title: "Software Engineer • Product‑aware, Mentor & Process Lead",
  },
  {
    id: 2,
    quote:
      "Works with empathy and professionalism. Makes teamwork smoother and every project more enjoyable.",
    author: "Massy Wahab",
    title: "Project Manager, Stiching OFoundation",
  },
  {
    id: 3,
    quote:
      "Supportive, reliable, and solution-oriented. He strengthens any team he’s part of—highly recommend.",
    author: "Mohammad Baghanbari",
    title: "CEO Zharfa Academy",
  },
];


export default function ReviewView() {
  return (
    <section id="testimonials">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl">
          {/* Globe side */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden md:flex w-[42%] min-w-[320px] items-center justify-center"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div className="relative -mr-24 h-[520px] w-[520px]">
              <Earth baseColor={[0.1, 0.1, 0.1]} markerColor={[0.1, 0.1, 0.1]} glowColor={[0.9, 0.9, 0.9]} />
            </div>
          </div>

          <div className="relative z-10 py-6 sm:py-10 lg:py-10 lg:px-3">
            {/* Your carousel / scroller */}
            <div className="relative">
              <TestimonialsView reviews={reviews} />
            </div>

            <CompaniesView />
          </div>
        </div>
      </Container>
    </section>
  );
}
