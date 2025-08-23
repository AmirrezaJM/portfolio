"use client";

import * as React from "react";
import TestimonialsView from "./testimonials-view";
import BrandView from "@/modules/brand/view/brand-view";
import Earth from "@/components/section/globe";
import Container from "@/components/section/Container";

// Example data – replace with your real reviews
const reviews = [
    {
      id: 1,
      quote:
        "Jaykay stands out for passion and work ethic. Unwavering confidence in completing tasks.",
      author: "Clara Shushunov",
      title: "UX Researcher (Modus)",
      avatar: "/avatars/clara.jpg",
    },
    {
      id: 2,
      quote:
        "Combines design talent with professionalism. A pleasure to work with—highly recommend.",
      author: "Charles Dairo",
      title: "CEO, CKDIGITAL",
      avatar: "/avatars/charles.jpg",
    },
    {
      id: 3,
      quote:
        "Dedication and eagerness to learn stand out. Embracing the Design Kit shows excellence.",
      author: "Harry Phillips",
      title: "Head of Product (Pupgig)",
      avatar: "/avatars/harry.jpg",
    },
  ];
  

export default function ReviewView() {
  return (
    <section>
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl">
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
              <Earth
                baseColor={[1, 0, 0.3]}
                markerColor={[1, 0, 0.33]}
                glowColor={[1, 0, 0.3]}
              />
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 p-6 sm:p-10 lg:p-12">
            <TestimonialsView reviews={reviews} />
            <BrandView />
          </div>
        </div>
      </Container>
    </section>
  );
}
