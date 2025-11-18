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
      "Jaykay stands out for passion and work ethic. Unwavering confidence in completing tasks.",
    author: "Clara Shushunov",
    title: "UX Researcher (Modus)",
    avatar: "https://gravatar.com/avatar/6a3fe3e407d0961e77d39d97777f678b?s=400&d=robohash&r=x",
  },
  {
    id: 2,
    quote:
      "Combines design talent with professionalism. A pleasure to work with—highly recommend.",
    author: "Charles Dairo",
    title: "CEO, CKDIGITAL",
    avatar: "https://gravatar.com/avatar/6a3fe3e407d0961e77d39d97777f678b?s=400&d=robohash&r=x",
  },
  {
    id: 3,
    quote:
      "Dedication and eagerness to learn stand out. Embracing the Design Kit shows excellence.",
    author: "Harry Phillips",
    title: "Head of Product (Pupgig)",
    avatar: "https://gravatar.com/avatar/6a3fe3e407d0961e77d39d97777f678b?s=400&d=robohash&r=x",
  },
];


export default function ReviewView() {
  return (
    <section>
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

