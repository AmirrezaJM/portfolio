"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Guestbook", href: "#guestbook" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "projects", "stack", "experience", "guestbook", "contact"];

export function Header() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Active section detection
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress bar */}
      <div className="h-[3px] w-full bg-white/10">
        <div
          className="h-full bg-amber-500 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Nav bar */}
      <div className="border-b border-white/[0.08] bg-[#0f0804]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="#hero"
            className="text-base font-semibold text-white hover:text-amber-400 transition-colors"
          >
            Amirreza Jalali
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-500 text-black"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/AmirrezaJM"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:text-white hover:bg-white/10"
            >
              <FaGithub className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amirjm/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:text-white hover:bg-white/10"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
