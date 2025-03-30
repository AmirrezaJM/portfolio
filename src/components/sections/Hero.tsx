"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [typedText, setTypedText] = useState("");

  // Infinite Typing Animation Logic
  useEffect(() => {
    const text = "Coming Soon!";
    let index = 0;

    const type = () => {
      setTypedText(text.slice(0, index));
      index++;

      if (index > text.length) {
        index = 0;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 150);
      }
    };

    type();
  }, []);

  return (
    <section
      id="hero"
      className="py-24 sm:py-32 md:py-40 lg:py-48 relative z-0 h-[80vh] overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 [container-type:inline-size]">
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center py-4 bg-gradient-to-t from-[hsl(0,0%,50%)] to-white bg-clip-text text-transparent font-bold leading-tight">
          Amirreza Jolani Mameghani
        </h1>

        {/* Role */}
        <h5 className="text-xl sm:text-2xl md:text-3xl text-neutral-400/80 text-center mt-2">
          Full-stack Developer
        </h5>

        {/* Download CV Button */}
        <div className="mt-8 mb-6 flex justify-center relative z-50 px-4">
          <Link
            href="/AmirrezaJolaniCV.pdf"
            download
            className="flex justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 text-white/90 hover:text-white bg-white/5 hover:bg-white/10 shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 px-6 py-2 rounded-xl w-full max-w-xs sm:max-w-md"
            >
              <Download className="mr-2" />
              Download CV
            </Button>
          </Link>
        </div>

        {/* Typing Animation */}
        <div className="text-center mt-10 text-yellow-400 text-xl sm:text-2xl md:text-3xl font-mono tracking-wider">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>

        {/* Canvas Background (if animated) */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      </div>
    </section>
  );
}
