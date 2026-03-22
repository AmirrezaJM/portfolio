"use client";

import Image from "next/image";
import * as React from "react";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";

type Review = {
  id: string | number;
  quote: string;
  author: string;
  title?: string;
  avatar?: string;
};

export default function TestimonialsView({ reviews }: { reviews: Review[] }) {
  const testimonialItems = React.useMemo<LogoItem[]>(
    () =>
      reviews.map((review) => ({
        node: <TestimonialCard review={review} />,
        ariaLabel: `Testimonial from ${review.author}`,
      })),
    [reviews]
  );

  return (
    <div className="relative">
      <LogoLoop
        logos={testimonialItems}
        speed={70}
        hoverSpeed={15}
        gap={24}
        pauseOnHover
        fadeOut
        fadeOutColor="rgba(0,0,0,0)"
        logoHeight={200}
        ariaLabel="Testimonials carousel"
        className="py-6 px-2 sm:px-0"
      />
    </div>
  );
}

function TestimonialCard({ review }: { review: Review }) {
  return (
    <figure className="w-[min(calc(100vw-5rem),28rem)] max-w-md rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="text-white/60">
        <svg width="32" height="32" viewBox="0 0 32 32" className="h-8 w-8 rotate-180 fill-current">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>
      <p className="mt-4 text-base sm:text-lg text-white/90">{review.quote}</p>
      <div className="mt-4 flex items-center gap-3">
        {review.avatar ? (
          <Image
            src={review.avatar}
            alt={review.author}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover bg-black/40 p-0.5"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-white/10" />
        )}
        <div className="text-sm">
          <div className="font-medium text-white">{review.author}</div>
          {review.title && <div className="text-white/50">{review.title}</div>}
        </div>
      </div>
    </figure>
  );
}
