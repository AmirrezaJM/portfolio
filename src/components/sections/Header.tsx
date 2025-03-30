"use client";
import Image from "next/image";
import Link from "next/link";
import Clock from "react-live-clock";
import { Pointer } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [progress, setProgress] = useState(0);
  const [showNavItems, setShowNavItems] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowNavItems(true);
    }, 300); // Match your navbar expand duration
  };

  const handleMouseLeave = () => {
    setShowNavItems(false); // Immediately hide when mouse leaves
  };

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <header className="w-full top-0 sticky p-3 flex justify-center items-center z-10 backdrop-blur-xl bg-background/30">
        <div className="container mx-auto px-2 [container-type:inline-size]">
          <div className="flex flex-row justify-between items-center">
            <div>
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={48} height={48} />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <nav
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center justify-between w-full h-full gap-3 p-3 relative flex-nowrap min-w-[150px] hover:min-w-md group transition-all duration-300 ease-in-out 
                  after:border-[0.6px] after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:border-foreground/70 after:rounded-full"
              >
                {/* Always visible icon */}
                <Pointer className="size-6 text-foreground/70" />

                {/* Hidden until hover */}
                {showNavItems && (
                  <div className="flex gap-8 items-center relative z-30 opacity-100 animate-fade-in transition-opacity duration-300">
                    <Link
                      className="text-sm font-semibold text-foreground/70 hover:text-white"
                      href="/#work"
                    >
                      Work
                    </Link>
                    <Link
                      className="text-sm font-semibold text-foreground/70 hover:text-white"
                      href="/about"
                    >
                      About
                    </Link>
                    <Link
                      className="text-sm font-semibold text-foreground/70 hover:text-white"
                      href="/#connect"
                    >
                      Connection
                    </Link>
                  </div>
                )}
                {/* Always visible end icon */}
                <div className="z-10">
                  <svg className="rotate-[-90deg]" width="30" height="30">
                    <circle
                      cx="14"
                      cy="14"
                      r="12"
                      stroke="#333"
                      strokeWidth="5"
                      fill="none"
                    />
                    <circle
                      cx="14"
                      cy="14"
                      r="12"
                      stroke="#fff"
                      strokeWidth="5"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 14}
                      strokeDashoffset={
                        2 * Math.PI * 14 - (progress / 100) * (2 * Math.PI * 14)
                      }
                      style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
                    />
                  </svg>
                </div>
              </nav>
            </div>
            <div>
              {/* TODO:ADD THEME LIGHT AND DARK MODE */}{" "}
              <Clock
                className="text-base font-semibold tracking-normal text-neutral-400/80 uppercase"
                format={"hh:mm a"}
                ticking={true}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
