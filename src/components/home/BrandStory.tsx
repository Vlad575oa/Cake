"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BrandStoryContent {
    tagline: string;
    heading: string;
    paragraphs: string[];
    features: string[];
}

export function BrandStory({ content }: { content: BrandStoryContent }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className="py-32 bg-secondary/30" ref={containerRef}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="flex-1">
                        <Reveal>
                            <span className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-bold text-primary mb-6 uppercase tracking-widest shadow-sm">
                                {content.tagline}
                            </span>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 text-balance">
                                {content.heading}
                            </h2>
                        </Reveal>

                        <div className="space-y-6 text-lg text-muted-foreground">
                            <Reveal delay={0.2}>
                                <p dangerouslySetInnerHTML={{ __html: content.paragraphs[0] }} />
                            </Reveal>
                            <Reveal delay={0.3}>
                                <p>{content.paragraphs[1]}</p>
                            </Reveal>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                            {content.features.map((item, i) => (
                                <Reveal key={item} delay={0.4 + (i * 0.1)}>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span className="font-medium text-foreground/80">{item}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative min-h-[500px] w-full">
                        <div className="grid grid-cols-2 gap-4 absolute inset-0">
                            <motion.div style={{ y: y1 }} className="h-full pt-12">
                                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="/images/villa-copenhagen.jpg"
                                        alt="Factory Precision"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                            <motion.div style={{ y: y2 }} className="h-full">
                                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="/images/maison-lumiere.jpg"
                                        alt="Architectural Result"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
