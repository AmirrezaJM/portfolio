"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { WorkCardProps } from "@/types/portfolio.types";

gsap.registerPlugin(ScrollTrigger);


export function WorkCard({
  title,
  image,
  icon,
  heading,
  description,
}: WorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(cardRef.current, {
        opacity: 0.4,
        scale: 0.5,
        rotateX: 60,
        transformOrigin: "center",
      });

      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
        opacity: 1,
        scale: 1,
        rotateX: 0,
        ease: "power2.out",
      });
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="transition-all duration-300 rounded-2xl bg-neutral-800 border border-white/10 shadow-none overflow-hidden p-4 sm:p-6 hover:!scale-[1.015] hover:shadow-[0_0px_20px_rgba(255,255,255,0.08)] mx-auto w-full"
    >
      <div className="group">
        {/* Top Bar */}
        <div className="mb-4 flex justify-between items-center px-2 sm:px-4">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-white/60">
            {title}
          </p>
          <div className="text-white">{icon}</div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
          {/* Left Image */}
          <div className="w-full">
            <Image
              src={image}
              alt={heading}
              width={300}
              height={200}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-2 text-white text-sm sm:text-base px-1 sm:px-0">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              {heading}
            </h2>
            <p className="text-neutral-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
