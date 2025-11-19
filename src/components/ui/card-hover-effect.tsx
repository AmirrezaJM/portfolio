'use client';

import * as React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

type HoverItem = {
  key: string | number;
  title?: string;
  description?: string;
  link?: string;
  content?: React.ReactNode;
  cardClassName?: string;
};

type HoverEffectProps = {
  items: HoverItem[];
  className?: string;
  gridClassName?: string;
  hoverBackgroundClassName?: string;
  itemClassName?: string;
};

export const HoverEffect = ({
  items,
  className,
  gridClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
  hoverBackgroundClassName = "bg-neutral-200 dark:bg-slate-800/[0.8]",
  itemClassName,
}: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = useCallback((event: React.MouseEvent<HTMLDivElement>, link?: string) => {
    if (!link) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("a")) return;
    window.open(link, "_blank", "noopener,noreferrer");
  }, []);

  const handleCardKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>, link?: string) => {
    if (!link) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("a")) return;
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className={cn(gridClassName, className)}>
      {items.map((item, idx) => {
        return (
          <div
            key={item.key}
            className={cn(
              "group relative block h-full w-full p-2 outline-none",
              item.link && "cursor-pointer focus-visible:ring-2 focus-visible:ring-white/60",
              itemClassName
            )}
            role={item.link ? "link" : undefined}
            tabIndex={item.link ? 0 : undefined}
            aria-label={item.link ? `Open ${item.title ?? "card"}` : undefined}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(event) => handleCardClick(event, item.link)}
            onKeyDown={(event) => handleCardKeyDown(event, item.link)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={cn(
                    "pointer-events-none absolute inset-0 block h-full w-full rounded-3xl",
                    hoverBackgroundClassName
                  )}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className={item.cardClassName}>
              {item.content ? (
                item.content
              ) : (
                <>
                  {item.title && <CardTitle>{item.title}</CardTitle>}
                  {item.description && <CardDescription>{item.description}</CardDescription>}
                </>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
