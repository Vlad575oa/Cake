"use client";

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Product } from '@/lib/constants';

interface TextOverlaysProps {
    progress: MotionValue<number>;
    product: Product;
}

export function TextOverlays({
    progress,
    product
}: TextOverlaysProps) {
    return (
        <div className="fixed inset-0 pointer-events-none z-30">
            {product.sections.map((section, index) => {
                // Divide 0-1 into 4 ranges for the 4 sections
                const start = index * 0.25;
                const mid = start + 0.125;
                const end = start + 0.25;

                // Opacity: fade in from start to mid, fade out from mid to end
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(
                    progress,
                    [start, mid - 0.05, mid + 0.05, end],
                    [0, 1, 1, 0]
                );

                // Position: slide up slightly as it fades in
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(
                    progress,
                    [start, end],
                    [20, -20]
                );

                return (
                    <motion.div
                        key={`${product.id}-${index}`}
                        style={{ opacity, y }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-none mb-4">
                            {section.title}
                        </h2>
                        <p className="text-lg md:text-2xl font-light text-white/80 tracking-[0.2em] uppercase drop-shadow-md">
                            {section.subtitle}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}
