"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Terminal", href: "#terminal" },
  { label: "Skills", href: "#stack" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "experience", "projects", "terminal", "github", "stack", "testimonials", "contact"];

export function Header() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

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
            Amirreza Jolani Mameghani
          </Link>

          {/* Desktop nav links */}
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

          {/* Right icons + hamburger */}
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

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden inline-grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:text-white hover:bg-white/10"
            >
              {mobileOpen ? (
                <HiOutlineX className="h-5 w-5" />
              ) : (
                <HiOutlineMenuAlt3 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-white/[0.06] bg-[#0f0804]/95 backdrop-blur-xl ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-500/15 text-amber-400"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
