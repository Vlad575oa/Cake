"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Wind, Maximize2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
    title: string;
    description: string;
    className: string;
    img: string;
    id: string;
}

interface ProductBentoContent {
    heading: string;
    paragraph: string;
    button: string;
    features: Feature[];
}

export function ProductBento({ content }: { content: ProductBentoContent }) {
    return (
        <section className="container py-24" id="products">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
                        {content.heading}
                    </h2>
                    <p className="mt-2 max-w-md text-muted-foreground">
                        {content.paragraph}
                    </p>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
                    {content.button} <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[900px] md:h-[600px]">
                {content.features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10",
                            feature.className
                        )}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={feature.img}
                                alt={`${feature.title} - ${feature.description}`}
                                fill
                                unoptimized={feature.img.startsWith('/images/')}
                                className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50 grayscale group-hover:grayscale-0"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        </div>

                        <div className="relative z-10 flex h-full flex-col justify-end">
                            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4 transition-all group-hover:border-white/30">
                                <h3 className="font-display text-2xl font-medium text-white">
                                    {feature.title}
                                </h3>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 opacity-0 transition-all group-hover:opacity-100">
                                    <ArrowUpRight className="h-4 w-4 text-white" />
                                </span>
                            </div>

                            <p className="text-secondary-foreground/80 line-clamp-2">
                                {feature.description}
                            </p>

                            {/* Hover Tech Details Reveal */}
                            <div className="mt-0 h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:h-auto group-hover:opacity-100">
                                <div className="flex gap-4 text-xs font-mono text-white/60">
                                    <div className="flex items-center gap-1">
                                        <Wind className="h-3 w-3" /> 20-500 m³/h
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Maximize2 className="h-3 w-3" /> Custom Sizes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
