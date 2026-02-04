"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/constants';
import { Shovel, Timer, Zap } from 'lucide-react';

interface SectionProps {
    product: Product;
}

export function HeroSection({ product }: SectionProps) {
    return (
        <section className="relative min-h-[40vh] md:min-h-[40vh] flex flex-col items-center justify-center px-6 overflow-hidden">
            <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="z-10 text-center"
            >
                <h2 className="text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase text-primary mb-6">
                    Премиум Коллекция
                </h2>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                    {product.name}
                </h1>
                <div className="flex flex-col gap-2">
                    {/* Product name removed as per user request to avoid duplication */}
                </div>
            </motion.div>
        </section>
    );
}

export function InfoSection({ product }: SectionProps) {
    return (
        <section className="relative flex items-start justify-start px-6 md:px-24 z-10 pt-0 pb-20">
            <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
            >
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                    Ремесло
                </span>
                <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
                    Точность в каждом <br className="hidden md:block" /> нежном слое.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
                    {product.description}
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="space-y-2">
                        <Shovel className="w-5 h-5 text-primary" />
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{product.specs.label1}</h3>
                        <p className="font-bold text-lg md:text-xl">{product.specs.value1}</p>
                    </div>
                    <div className="space-y-2">
                        <Timer className="w-5 h-5 text-primary" />
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{product.specs.label2}</h3>
                        <p className="font-bold text-lg md:text-xl">{product.specs.value2}</p>
                    </div>
                    <div className="space-y-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{product.specs.label3}</h3>
                        <p className="font-bold text-lg md:text-xl">{product.specs.value3}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export function PurchaseSection({ product }: SectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 z-10 py-20">
            <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl p-8 md:p-20 rounded-[2rem] backdrop-blur-premium bg-black/40 border border-white/5 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-12"
            >
                <div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                        Владей <br className="hidden md:block" /> Совершенством.
                    </h2>
                    <p className="text-muted-foreground uppercase tracking-widest text-[10px] md:text-sm">
                        Ограниченная Ежедневная Партия
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="text-center">
                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.3em] block mb-2">Цена</span>
                        <span className="text-5xl md:text-8xl font-black tracking-tighter">{product.price}</span>
                    </div>

                    <button
                        className="group relative px-10 md:px-12 py-5 md:py-6 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-xs md:text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                        style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease-in-out' }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Заказать
                        </span>
                        <div
                            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"
                            style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease-in-out' }}
                        />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
