"use client";

import * as React from "react";
import Link from "next/link";
import Container from "@/components/section/Container";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendarEvent } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";


const CONTACT_METHODS = [
  {
    label: "Email",
    value: "amirreza.jolani1998@gmail.com",
    href: "mailto:amirreza.jolani1998@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "Schedule",
    value: "Pick a slot",
    href: "https://cal.com",
    icon: BsCalendarEvent,
  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amirjm/", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/AmirrezaJM", icon: FaGithub },
  { label: "Telegram", href: "https://t.me/AmirrezaJMM", icon: FaTelegram },
  { label: "WhatsApp", href: "https://wa.me/+31634997564", icon: FaWhatsapp },
];

export default function FooterView() {
  return (
    <footer id="contact" className="w-full border-t border-white/5 bg-black/30">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_45px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">Let&rsquo;s collaborate</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-white">
              Do You need a hand with your next web project?
            </h2>
            <p className="text-base text-white/75">
              I help founders and product teams go from Figma files to design, build, and maintain it using modern framework like,
              Next.js, and Nuxt stacks. If you have a brief, RFP, or idea, just let me know.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="border border-white/20 bg-white text-[#03030a] hover:bg-white/90"
              >
                <Link href="mailto:hello@amirrezajm.dev">Email Me</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="https://cal.com" target="_blank" rel="noreferrer">
                  Book a call
                </Link>
              </Button>
            </div>

          </div>

          <div className="space-y-5 rounded-[28px] border border-white/10 bg-[#050511]/70 p-6 text-white shadow-[0_35px_100px_-40px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.15em] text-white/50">Contact</p>
              <h3 className="text-2xl font-semibold">Always async-friendly</h3>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <RiMapPin2Line className="h-4 w-4" />
                <span>Utrecht, Netherlands · CET</span>
              </div>
            </div>

            <ul className="space-y-3">
              {CONTACT_METHODS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    <item.icon className="h-5 w-5 text-white/70" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                      <p className="text-base font-semibold">{item.value}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.15em] text-white/60">Connect</p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>©2022 Amirreza Jolani Mameghani — Shipping thoughtful web products.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
            <span>Available for freelance</span>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span>Remote-friendly</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
