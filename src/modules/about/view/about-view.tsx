import * as React from "react";
import Container from "@/components/section/Container";

type AboutViewProps = {
  title?: string;
  blurb?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export default function AboutView({
  title = "Hello! I am Amirreza Jolani, a dedicated and creative designer with a passion for shaping the digital world.",
  blurb = "I specialize in designing intuitive interfaces and efficient systems, creating engaging experiences for online platforms. My focus is on seamless functionality and memorable user interactions.",
  imageSrc = "/logo.png",
  imageAlt = "Amirreza Jolani's portrait",
  className = "",
}: AboutViewProps) {
  return (
    <section className="w-full relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-large-title md:text-title-1 xl:text-large-title [--tw-text-opacity:1] bg-gradient-to-b from-white/95 to-white/55 bg-clip-text text-transparent leading-tight tracking-tight">
              {title}
            </h2>
          </div>

          {/* Right: portrait + bubble */}
          <div className="lg:col-span-5 relative">
            {/* Photo card */}
            <figure className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="block w-full h-auto object-cover grayscale-[35%] contrast-110"
              />
              {/* grain overlay */}
              <div className="grain absolute inset-0" aria-hidden="true" />
            </figure>

            {/* Liquid-glass speech bubble */}
            <div className="absolute -bottom-10 right-0">
              <div className="liquid-bubble speech-tail px-5 py-4 md:px-6 md:py-5">
                <p className="text-body text-label">
                  {blurb}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional decorative pointer (center-ish, like the screenshot) */}
        <svg
          className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 h-20 w-20 text-white/70 drop-shadow-2xl"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <path
            d="M24 20c-6 3-8 10-6 16l20 56c3 7 12 9 18 4l22-18c5-4 4-12-2-15L34 22c-3-2-7-3-10-2Z"
            fill="currentColor"
            opacity=".16"
          />
          <path
            d="M24 20c-6 3-8 10-6 16l20 56c3 7 12 9 18 4l22-18c5-4 4-12-2-15L34 22c-3-2-7-3-10-2Z"
            fill="none"
            stroke="white"
            strokeOpacity=".7"
            strokeWidth="6"
            strokeLinejoin="round"
          />
        </svg>
      </Container>
    </section>
  );
}
