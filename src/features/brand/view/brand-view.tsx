"use client";

import * as React from "react";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";

type Brand = {
  name: string;
  href?: string;
  icon?: React.ReactNode;
};

type BrandViewProps = {
  brands?: Brand[];
  className?: string;
  title?: string;
};

const DEFAULT_BRANDS: Brand[] = [
  { name: "OFoundation", href: "https://www.linkedin.com/company/ofoundation/posts/?feedView=all" },
  { name: "Karhuno AI", href: "https://www.linkedin.com/company/karhuno/posts/?feedView=all" },
  { name: "Almas Teb Rayan", href: "https://www.linkedin.com/company/almas-rayan/posts/?feedView=all" },
  { name: "PAP Group", href: "https://www.linkedin.com/company/papgroup/posts/?feedView=all" },
  { name: "Zharfa Academy" },
];

export default function CompaniesView({
  brands = DEFAULT_BRANDS,
  className = "",
  title = "Some companies I've worked with...",
}: BrandViewProps) {
  const logoItems = React.useMemo<LogoItem[]>(
    () =>
      brands.map((brand) => ({
        node: (
          <div className="min-w-[180px] rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-label shadow-lg shadow-black/20 backdrop-blur">
            <div className="flex items-center justify-center gap-2">
              {brand.icon ? <span>{brand.icon}</span> : null}
              <span className="text-sm font-semibold uppercase tracking-[0.15em]">{brand.name}</span>
            </div>
          </div>
        ),
        href: brand.href,
        ariaLabel: `Learn more about ${brand.name}`,
      })),
    [brands]
  );

  return (
    <section className={["w-full", className].join(" ")}>
      <div className="pb-4">
        <header className="mb-6 md:mb-4 md:px-6">
          <h2 className="text-large-title text-label font-semibold py-8">{title}</h2>
        </header>

        <LogoLoop
          logos={logoItems}
          speed={50}
          hoverSpeed={10}
          gap={20}
          pauseOnHover
          fadeOut
          fadeOutColor="rgba(0,0,0,0)"
          logoHeight={80}
          ariaLabel="Company logos I've collaborated with"
          className="py-4"
        />
      </div>
    </section>
  );
}
