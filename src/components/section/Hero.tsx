"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className=" relative z-0 h-screen overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 [container-type:inline-size] h-screen flex flex-col items-center justify-center">
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
              className="border border-white/20 text-white/90 hover:text-white bg-white/5 hover:bg-white/10 shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 px-6 py-2 rounded-xl w-full max-w-xs sm:max-w-md hover:cursor-pointer"
            >
              <Download className="mr-2" />
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
