"use client";

import { motion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type DockItemData = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  panelClassName?: string;
  itemClassName?: string;
};

export default function Dock({
  items,
  className = "",
  panelClassName = "",
  itemClassName = "",
}: DockProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          "pointer-events-auto flex w-full flex-wrap items-center justify-center gap-3 rounded-[2.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:flex-nowrap",
          panelClassName,
          className
        )}
      >
        {items.map((item, index) => (
          <DockItem key={`${item.label}-${index}`} item={item} className={itemClassName} />
        ))}
      </div>
    </TooltipProvider>
  );
}

function DockItem({ item, className = "" }: { item: DockItemData; className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          type="button"
          onClick={item.onClick}
          aria-label={item.label}
          whileHover={{ y: -6, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex items-center justify-center rounded-2xl bg-gradient-to-b from-white/15 to-white/5 text-white transition-all duration-200 hover:from-white/40 hover:to-white/20",
            "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white/70",
            "shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
            className
          )}
        >
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]">{item.icon}</span>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side="top" className="border border-white/20 bg-white/90 text-[#07030f] backdrop-blur">
        {item.label}
      </TooltipContent>
    </Tooltip>
  );
}
