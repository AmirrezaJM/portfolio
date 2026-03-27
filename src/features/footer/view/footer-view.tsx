"use client";

import Link from "next/link";
import Container from "@/features/Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "motion/react";

export default function FooterView() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/20">
      <Container className="py-12">
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          {/* Name */}
          <p className="text-base font-semibold text-amber-400">Amirreza Jolani Mameghani</p>

          {/* Role */}
          <p className="text-sm text-white/45">Fullstack Developer · Utrecht, Netherlands</p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/in/amirjm/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white/60 transition hover:text-white hover:bg-white/10"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/AmirrezaJM"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white/60 transition hover:text-white hover:bg-white/10"
            >
              <FaGithub className="h-4 w-4" />
            </Link>
            <a
              href="mailto:amirreza.jolani1998@gmail.com"
              aria-label="Email"
              className="inline-grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white/60 transition hover:text-white hover:bg-white/10"
            >
              <HiOutlineMail className="h-4 w-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-white/10" />

          {/* Copyright */}
          <p className="text-xs text-white/30">© 2025 Amirreza Jolani Mameghani</p>
        </motion.div>
      </Container>
    </footer>
  );
}
