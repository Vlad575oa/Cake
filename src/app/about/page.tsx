"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
                    <ArrowLeft className="w-4 h-4" /> Назад
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-bold uppercase tracking-[0.4em] mb-4 block">О Нас</span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-12">
                        Мы переосмысляем <br />
                        десерты для <br />
                        новой эры.
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-12 mb-32">
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[2px] bg-primary mb-6"
                        />
                        <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Основано в 2024</p>
                    </div>
                    <div className="md:col-span-8 space-y-8 text-lg text-white/80 font-light leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Cake — это больше, чем кондитерская. Это лаборатория вкуса, где традиции французской школы встречаются с современными технологиями и дерзким дизайном. Мы устали от однотипных, приторных десертов и решили создать нечто бескомпромиссное.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Наша миссия проста: чистота вкуса и визуальное совершенство. Мы используем минимальное количество сахара, заменяя его естественной сладостью фруктов и ягод, чтобы вы могли наслаждаться десертом без чувства вины.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-video w-full rounded-[2rem] bg-[#111] border border-white/5 relative overflow-hidden mb-32 flex items-center justify-center p-12 text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    {/* Placeholder background */}
                    <div className="absolute inset-0 bg-[url('/fruit/40.webp')] bg-cover bg-center opacity-30 z-0" />

                    <blockquote className="relative z-20 max-w-2xl">
                        <p className="text-2xl md:text-4xl font-bold italic font-serif leading-normal mb-8">
                            "Еда должна быть не просто вкусной. Она должна вызывать эмоции, пробуждать воспоминания и дарить момент абсолютного счастья."
                        </p>
                        <footer className="text-primary text-sm uppercase tracking-widest font-bold">
                            — Александр Иванов, Шеф-кондитер
                        </footer>
                    </blockquote>
                </motion.div>

            </div>

            <Footer />
        </main>
    );
}
