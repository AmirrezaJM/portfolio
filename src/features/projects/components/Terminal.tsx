"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami      - About Amirreza
  resume      - View experience summary
  skills      - List technical skills
  projects    - Featured projects
  contact     - Contact information
  neofetch    - System info
  clear       - Clear terminal`,

  whoami: `Amirreza Jolani Mameghani
Fullstack Developer · Padova, Italy
5+ years shipping web products
React / Next.js · Vue 3 / Nuxt 3 · TypeScript
Currently at OFoundation`,

  resume: `Experience Timeline:
  2025 - 2025  Web Developer, OFoundation
  2025            Fullstack Developer, Karhuno AI
  2023 - 2024     Career Break (Relocation, Netherlands)
  2022 - 2023     Frontend Engineer, PAP Group Ltd
  2021 - 2022     Frontend Developer & Coach, Zharfa Academy
  2020 - 2021     Frontend Developer, Almas Teb Rayan`,

  skills: `Technical Skills:
  Frontend:   React/Next.js (95%), Vue3/Nuxt3 (90%), TypeScript (92%)
              Tailwind CSS (95%), HTML5/CSS3 (97%)
  Backend:    Node.js (82%), Prisma ORM (85%), PostgreSQL (78%)
              REST/GraphQL APIs (82%), Docker (72%)
  Tools:      Git/GitHub (92%), Figma (78%), Webpack/Vite (75%)
              Testing (Jest/Vitest) (72%), CI/CD (68%)`,

  projects: `Featured Projects:
  1. Prompter — Full-stack prompt management
     Next.js · Prisma · PostgreSQL · Docker
     github.com/AmirrezaJM/prompter

  2. Nodebase — Visual workflow editor
     Next.js · React Flow · tRPC · Inngest
     github.com/AmirrezaJM/nodebase

  3. E-Commerce Marketplace
     Next.js · MongoDB · tRPC · Payload CMS
     github.com/AmirrezaJM/ecommerce-marketplace

  4. Threads Clone · Nuxt 3 · Supabase · Prisma
  5. Pokemon Clone  · Nuxt 3 · Pinia · @nuxt/ui`,

  contact: `Email:     amirreza.jolani1998@gmail.com
Telegram:  @AmirrezaJMM
GitHub:    github.com/AmirrezaJM
LinkedIn:  linkedin.com/in/amirjm
WhatsApp:  +31634997564 / +39`,

  neofetch: `        .---.        amirreza@portfolio
       /     \\       ----------------------
       \\.@-@./       OS: Next.js 16 (App Router)
       /\`\\_/\`\\       Shell: zsh + pnpm
      //  _  \\\\      Stack: React · Vue · TypeScript
     | \\     )|_     Location: Padova, Italy
    /\`\\_\`>  <_/ \\    Uptime: 5+ years
    \\__/'---'\\__/    Movie: Consistently ∞`,
};

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: "Welcome to Amirreza's Portfolio Terminal" },
    { type: "output", text: "Type 'help' for available commands." },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      const newLines: TerminalLine[] = [...lines, { type: "input", text: cmd }];

      if (trimmed === "clear") {
        setLines([]);
        return;
      }

      if (trimmed === "") {
        setLines(newLines);
        return;
      }

      const output = COMMANDS[trimmed];
      if (output) {
        newLines.push({ type: "output", text: output });
      } else {
        newLines.push({
          type: "output",
          text: `command not found: ${trimmed}. Type 'help' for available commands.`,
        });
      }

      setLines(newLines);
      setHistory((prev) => [trimmed, ...prev]);
      setHistoryIndex(-1);
    },
    [lines]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1a1a1a] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <span className="font-mono text-xs text-white/30">
          amirreza@portfolio — zsh
        </span>
        <span className="font-mono text-xs text-white/30">bash</span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="h-[400px] cursor-text overflow-y-auto overscroll-contain p-4 font-mono text-sm"
        role="log"
        aria-label="Terminal output"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-0.5">
            {line.type === "input" ? (
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">amirreza@portfolio</span>
                <span className="text-white/40">:</span>
                <span className="text-sky-400">~</span>
                <span className="text-white/40">$</span>
                <span className="text-white/90">{line.text}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap text-white/50 leading-5">{line.text}</pre>
            )}
          </div>
        ))}

        {/* Active prompt */}
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400">amirreza@portfolio</span>
          <span className="text-white/40">:</span>
          <span className="text-sky-400">~</span>
          <span className="text-white/40">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border-none bg-transparent text-white/90 outline-none caret-emerald-400"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-[#1a1a1a] px-4 py-1.5 font-mono text-[10px] text-white/30">
        <span>Try: whoami · resume · skills · neofetch</span>
        <span>zsh</span>
      </div>
    </div>
  );
}
