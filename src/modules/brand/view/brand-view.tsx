"use client";

import * as React from "react";
import Container from "@/components/section/Container";
import GlassSurface from "@/components/section/GlassSurface";

type Brand = {
    name: string;
    href?: string;
    icon?: React.ReactNode; // optional logo SVG
};

type BrandViewProps = {
    brands?: Brand[];
    className?: string;
    title?: string;
    blurb?: string,
};

const DEFAULT_BRANDS: Brand[] = [
    { name: "OFoundation" },
    { name: "KarhunoAI" },
    { name: "PAP Group" },
    { name: "Almas Teb Rayan" },
    { name: "Pody" },
];

export default function BrandView({
    brands = DEFAULT_BRANDS,
    className = "",
    title = "Some brands I’ve worked with…",
    blurb = ""
}: BrandViewProps) {
    return (
        <section className={["w-full", className].join(" ")}>
            <div className="pb-4">
                <header className="mb-6 sm:mb-8">
                    <h2 className="text-large-title text-label font-semibold">{title}</h2>
                    <p className="mt-3 max-w-3xl text-body text-label-secondary">{blurb}</p>
                </header>

                {/* Row of brand badges */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {brands.map((b) => {
                        return (
                            <div
                                key={b.name}
                                className="group/stack  relative isolate flex items-center justify-center w-full rounded-3xl glass-surface glass-surface--fallback p-4 md:glass-surface--svg glass-filter-default glass-saturation-140 glass-frost-06"
                            >
                                {/* optional icon goes here */}
                                {b.icon ? <span className="mr-3">{b.icon}</span> : null}
                                <span className="text-headline tracking-wide">{b.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
