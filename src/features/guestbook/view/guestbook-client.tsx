"use client";

import dynamic from "next/dynamic";

const GuestbookView = dynamic(() => import("./guestbook-view"), { ssr: false });

export default function GuestbookClient() {
  return <GuestbookView />;
}
