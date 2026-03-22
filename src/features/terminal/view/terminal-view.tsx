"use client";

import { motion } from "motion/react";
import Container from "@/features/Container";
import Terminal from "@/modules/projects/components/Terminal";

export default function TerminalView() {
  return (
    <section id="terminal" className="w-full py-16">
      <Container>
        <motion.div
          className="mb-8 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Terminal
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Interactive Terminal
          </h2>
          <p className="text-sm text-white/50">
            Explore my profile using familiar terminal commands
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: 0.1 }}
        >
          <Terminal />
        </motion.div>
      </Container>
    </section>
  );
}
