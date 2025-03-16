import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative -z-10 overflow-x-hidden">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image: radial-gradient
(50%_50%_at_bottom_center, black, transparent)] -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between ">
          <p className="text-white/40">&copy; 2025, All rights reserved.</p>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {/* TODO: LINK */}
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
