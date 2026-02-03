"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { useRef } from "react";
import { Savaline } from "./Savaline";

interface HeroContent {
    heading: {
        line1: string;
        line2: string;
    };
    paragraph: string;
    buttons: {
        primary: string;
        secondary: string;
    };
}

export function Hero({ content }: { content: HeroContent }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-[200vh] w-full bg-transparent">
            {/* Full-screen Background Visual - Sticky to allow scroll effect within section */}
            <div className="sticky top-0 inset-x-0 h-screen w-full overflow-hidden z-0">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="relative w-full h-full"
                    >
                        <Savaline
                            progress={scrollYProgress}
                            className="w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Foreground Content - Absolute positioned over the sticky background to scroll with flow */}
            <div className="absolute top-0 left-0 w-full h-screen z-20 flex flex-col justify-center px-6 lg:px-24 pointer-events-none">
                <div className="pointer-events-auto">
                    <h1 data-debug-marker="hero-v2" className="font-display text-5xl font-medium tracking-tight text-foreground sm:text-7xl lg:text-8xl flex flex-col drop-shadow-sm">
                        <TextReveal text={content.heading.line1} className="leading-[0.9]" />
                        <span className="text-primary block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                                className="block"
                            >
                                {content.heading.line2}
                            </motion.span>
                        </span>
                    </h1>

                    <Reveal delay={0.8} width="100%">
                        <p className="mt-8 max-w-md text-lg text-muted-foreground shadow-black/10 text-balance font-medium">
                            {content.paragraph}
                        </p>
                    </Reveal>

                    <Reveal delay={1.0} width="100%">
                        <div className="mt-10 flex gap-4">
                            <button className="rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all active:scale-95">
                                {content.buttons.primary}
                            </button>
                            <button className="rounded-full border border-border/50 bg-background/50 backdrop-blur-md px-8 py-4 text-base font-bold text-foreground hover:bg-background/80 transition-colors">
                                {content.buttons.secondary}
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
