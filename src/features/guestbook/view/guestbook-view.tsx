"use client";

import { useState, useEffect } from "react";
import Container from "@/features/Container";
import { toast } from "sonner";
import { motion } from "motion/react";

const EMOJIS = ["👋", "🚀", "💡", "🎉", "⭐", "🔥", "💜", "🙌"];

type Entry = {
  id: string;
  name: string;
  emoji: string;
  message: string;
  date: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function GuestbookView() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(EMOJIS[0]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("guestbook_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Please fill in your name and message.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));

    const newEntry: Entry = {
      id: Date.now().toString(),
      name: name.trim(),
      emoji: selectedEmoji,
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    try { localStorage.setItem("guestbook_entries", JSON.stringify(updated)); } catch {}

    setSubmitting(false);
    setIsOpen(false);
    setName("");
    setMessage("");
    setSelectedEmoji(EMOJIS[0]);
    toast.success("Thanks for signing! 🎉");
  };

  return (
    <section id="guestbook" className="w-full py-16">
      <Container>
        {/* Header */}
        <motion.div className="mb-8 flex items-start justify-between" {...fadeUp}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <span className="text-lg">✏️</span>
            </div>
            <div>
              <p className="text-base font-semibold text-white">Guestbook</p>
              <p className="text-xs text-white/45">Leave a note, say hello!</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-500/20"
          >
            ✏️ Sign Guestbook
          </button>
        </motion.div>

        {/* Empty state / entries */}
        {entries.length === 0 ? (
          <motion.div
            className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-12 text-center backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
              <span className="text-3xl">✏️</span>
            </div>
            <p className="text-base font-semibold text-white">Be the first to sign!</p>
            <p className="mt-2 max-w-sm mx-auto text-sm leading-6 text-white/45">
              This guestbook is brand new and waiting for its first message. Leave a note, share a
              thought, or just say hello. Your words will be the start of something special.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-rose-400/80">
              <span>❤️</span>
              Messages are reviewed with care before appearing
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              ✏️ Leave the First Message
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                variants={staggerChild}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{entry.emoji}</span>
                    <span className="text-sm font-semibold text-white">{entry.name}</span>
                  </div>
                  <span className="text-xs text-white/35">{entry.date}</span>
                </div>
                <p className="text-sm leading-6 text-white/65">{entry.message}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>

      {/* Sign modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#0D0D14] p-6 shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                <span className="text-lg">✏️</span>
              </div>
              <div>
                <p className="text-base font-semibold text-white">Guestbook</p>
                <p className="text-xs text-white/45">Leave a note, say hello!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + emoji row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs text-white/60">Your Name</label>
                  <input
                    type="text"
                    placeholder="Ada Lovelace"
                    value={name}
                    maxLength={50}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-white/60">Pick an Emoji</label>
                  <div className="flex gap-1.5">
                    {EMOJIS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setSelectedEmoji(emoji)}
                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm transition ${
                          selectedEmoji === emoji
                            ? "bg-amber-500 ring-1 ring-amber-400"
                            : "border border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Your Message</label>
                <textarea
                  rows={3}
                  placeholder="Great portfolio! Love the design..."
                  value={message}
                  maxLength={280}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
                />
                <p className="text-right text-xs text-white/35">{message.length}/280</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full px-5 py-2 text-sm text-white/60 transition hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
                >
                  ✈ {submitting ? "Signing…" : "Sign Guestbook"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
