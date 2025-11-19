"use client";

import dynamic from "next/dynamic";

const ScrollDock = dynamic(() => import("./scroll-dock"), {
  ssr: false,
  loading: () => null,
});

export default function ScrollDockClient() {
  return <ScrollDock />;
}
