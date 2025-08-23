"use client";

import GlassSurface from "@/components/section/GlassSurface";
import Image from "next/image";
import * as React from "react";

type Review = {
  id: string | number;
  quote: string;
  author: string;
  title?: string;
  avatar?: string; // URL
};

export default function TestimonialsView({
  reviews,
  duration = 40, // seconds for one full loop
}: {
  reviews: Review[];
  duration?: number;
}) {
  const items = React.useMemo(() => [...reviews, ...reviews], [reviews]);

  return (
    <div className="relative overflow-hidden h-[500px]">
      <div
        className="marquee flex w-max h-1/2 gap-6 will-change-transform hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as any]: `${duration}s` }}
        aria-label="Testimonials carousel"
        role="group"
      >
        {items.map((r, idx) => (
          <GlassSurface
            displace={15}
            distortionScale={-20}
            redOffset={5}
            greenOffset={70}
            blueOffset={10}
            brightness={80}
            opacity={0.8}
            mixBlendMode="screen"
            key={`${r.id}-${idx}`}
          >
            <div className="mb-4 text-5xl leading-none text-white/25">“</div>
            <p className="text-sm sm:text-base text-white/90">{r.quote}</p>

            <div className="mt-6 flex items-center gap-3">
              {r.avatar ? (
                <Image
                  src={r.avatar}
                  alt={r.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-white/10" />
              )}
              <div className="text-sm">
                <div className="font-medium text-white">{r.author}</div>
                {r.title && <div className="text-white/60">{r.title}</div>}
              </div>
            </div>
          </GlassSurface>
        ))}
      </div>

      {/* Minimal CSS for the marquee animation */}
      <style jsx global>{`
        .marquee {
          animation: marquee var(--marquee-duration, 40s) linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
