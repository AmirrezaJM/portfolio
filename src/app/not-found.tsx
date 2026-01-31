"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03030a] text-white">
            {/* Background elements consistent with home page */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                        backgroundSize: "120px 120px"
                    }}
                />
                <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(76,139,245,0.45),_transparent_70%)] blur-3xl opacity-50" />
                <div className="absolute right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,138,195,0.35),_transparent_65%)] blur-3xl opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        Lost in Space
                    </span>
                    <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white/80">
                        Page not found
                    </h2>
                    <p className="max-w-md mx-auto text-white/50 mb-12 text-lg">
                        The page you are looking for might have been moved, deleted, or never existed in the first place.
                    </p>

                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>

            {/* Floating particles or subtle elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px w-px bg-white rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                        animate={{
                            y: [null, "-20%"],
                            opacity: [null, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            boxShadow: "0 0 10px 2px rgba(255,255,255,0.3)"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
