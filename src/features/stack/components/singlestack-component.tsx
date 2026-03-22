import * as React from "react";

type SingleStackProps = {
  name: string;
  description: string;
  href?: string;
  Icon?: React.ReactNode; // pass an <img/> or SVG React component
  className?: string;
};

export function SingleStackComponent({
  name,
  description,
  href,
  Icon,
  className = "",
}: SingleStackProps) {
  const wrapperProps = href
    ? {
        href,
        target: "_blank",
        rel: "noreferrer noopener",
        "aria-label": `${name} — ${description}`,
      }
    : {};

  return (
    <a
      {...wrapperProps}
      className={[
        "group/stack relative isolate flex items-center justify-between w-full rounded-3xl glass-surface glass-surface--fallback p-4 md:glass-surface--svg glass-filter-default glass-saturation-140 glass-frost-06",
        className,
      ].join(" ")}
    >
      <div className="flex min-w-0 items-center gap-4 sm:gap-5">
        {/* icon well */}
        <div
          className="liquid-well h-11 w-11 shrink-0 text-label/70"
          aria-hidden="true"
        >
          {Icon ?? (
            // fallback glyph
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <circle cx="12" cy="12" r="9" fill="currentColor" />
            </svg>
          )}
        </div>

        {/* titles */}
        <div className="min-w-0">
          <div className="text-title-2 text-label truncate">{name}</div>
          <div className="text-subhead text-label-secondary truncate">
            {description}
          </div>
        </div>
      </div>

      {/* right arrow */}
      <div className="ml-4 shrink-0 opacity-70 transition-opacity group-hover:opacity-90">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-label/70 group-hover:text-label"
          aria-hidden="true"
        >
          <path
            d="M8 5l7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}

export default SingleStackComponent;
