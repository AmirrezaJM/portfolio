"use client";

import * as React from "react";
import Dock, { type DockItemData } from "@/components/Dock";
import { LuSparkles, LuBriefcase, LuCode, LuWrench, LuHandshake } from "react-icons/lu";

const DOCK_LINKS = [
  { label: "Hero", target: "#hero", Icon: LuSparkles },
  { label: "Experience", target: "#experience", Icon: LuBriefcase },
  { label: "Personal Projects", target: "#projects", Icon: LuCode },
  { label: "Hard Skill", target: "#hard-skill", Icon: LuWrench },
  { label: "Soft Skill", target: "#soft-skill", Icon: LuHandshake },
];

export default function ScrollDock() {
  const [viewportWidth, setViewportWidth] = React.useState(0);

  React.useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isCompact = viewportWidth <= 640 || viewportWidth === 0;
  const isTablet = viewportWidth > 640 && viewportWidth <= 1024;

  const iconClass = React.useMemo(() => {
    if (viewportWidth === 0 || viewportWidth > 1024) return "h-6 w-6";
    if (isTablet) return "h-5 w-5";
    return "h-4 w-4";
  }, [viewportWidth, isTablet]);

  const itemClassName = React.useMemo(() => {
    if (isCompact) return "h-12 w-12";
    if (isTablet) return "h-[3.25rem] w-[3.25rem]";
    return "h-14 w-14";
  }, [isCompact, isTablet]);

  const dockItems = React.useMemo<DockItemData[]>(
    () =>
      DOCK_LINKS.map((item) => ({
        label: item.label,
        icon: <item.Icon className={`${iconClass}`} aria-hidden="true" />,
        onClick: () => {
          const element = document.querySelector(item.target);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        },
      })),
    [iconClass]
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center">
      <Dock
        items={dockItems}
        panelClassName="relative left-0 bottom-0 w-full max-w-sm flex-wrap gap-2 px-3 sm:max-w-xl sm:flex-nowrap sm:gap-3 sm:px-4 lg:max-w-3xl"
        itemClassName={itemClassName}
      />
    </div>
  );
}
