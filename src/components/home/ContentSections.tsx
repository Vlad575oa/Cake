"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/constants';
import { ShoppingCart, Shovel, Timer, Zap } from 'lucide-react';

interface SectionProps {
    product: Product;
}

export function HeroSection({ product }: SectionProps) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 text-center"
            >
                <h1 className="text-sm font-bold tracking-[0.5em] uppercase text-primary mb-6">
                    Premium Collection
                </h1>
                <div className="flex flex-col gap-2">
                    {product.name.split(' ').map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export function InfoSection({ product }: SectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-start px-8 md:px-24 z-10">
            <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                    The Craft
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Precision in every <br /> delicate layer.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    {product.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <Shovel className="w-5 h-5 text-primary" />
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Weight</h3>
                        <p className="font-bold text-xl">{product.specs.weight}</p>
                    </div>
                    <div className="space-y-2">
                        <Timer className="w-5 h-5 text-primary" />
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Shelf Life</h3>
                        <p className="font-bold text-xl">{product.specs.shelfLife}</p>
                    </div>
                    <div className="space-y-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Energy</h3>
                        <p className="font-bold text-xl">{product.specs.calories}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export function PurchaseSection({ product }: SectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
            <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full max-w-4xl p-12 md:p-20 rounded-[2rem] backdrop-blur-premium bg-black/40 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
            >
                <div className="text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                        Own the <br /> Excellence.
                    </h2>
                    <p className="text-muted-foreground uppercase tracking-widest text-sm">
                        Limited Daily Batches Available
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-8">
                    <div className="text-right">
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] block mb-2">Price</span>
                        <span className="text-6xl md:text-8xl font-black tracking-tighter">{product.price}</span>
                    </div>

                    <button className="group relative px-12 py-6 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            Order Your Nano <ShoppingCart className="w-5 h-5" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
