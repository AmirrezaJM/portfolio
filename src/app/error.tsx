"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

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
                <div className="absolute -bottom-40 left-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(239,68,68,0.3),_transparent_70%)] blur-3xl opacity-40" />
                <div className="absolute right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.25),_transparent_65%)] blur-3xl opacity-40" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-500">
                        <RefreshCcw className="w-10 h-10" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        Something went wrong
                    </h1>

                    <p className="max-w-md mx-auto text-white/50 mb-12 text-lg">
                        We encountered an unexpected error. Our team has been notified and we're working to fix it.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => reset()}
                            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <RefreshCcw className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    {error.digest && (
                        <p className="mt-12 text-xs font-mono text-white/20">
                            Error ID: {error.digest}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
