"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function ProcessPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50 pointer-events-none"
                />

                <Link href="/" className="absolute top-32 left-6 md:left-12 inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-widest font-bold z-20">
                    <ArrowLeft className="w-4 h-4" /> Назад
                </Link>

                <div className="z-10 text-center max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-bold uppercase tracking-[0.5em] text-xs md:text-sm block mb-6"
                    >
                        Философия
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8"
                    >
                        Искусство <br /> Свежести
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Мы не просто печем торты. Мы создаем архитектуру вкуса, где каждый ингредиент играет свою симфонию.
                    </motion.p>
                </div>
            </section>

            {/* Steps Container */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-40 flex flex-col gap-32 md:gap-60">

                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[120px] font-black text-white/5 leading-none block -mb-8 relative z-0">01</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 relative z-10 pl-4">Абсолют Исходного Кода&#x200B;</h2>
                        <p className="text-white/60 text-lg leading-relaxed pl-4 border-l-2 border-primary/30">
                            Мы не ищем компромиссов. Если шоколад — то только бельгийский Callebaut. Если ягоды — то отборные фермерские поставки. Если сыр — то настоящая Филадельфия. Качество ингредиента определяет 80% успеха.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] bg-white/5 rounded-[2rem] border border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        {/* Placeholder for process image */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-black uppercase">
                            RAW
                        </div>
                    </motion.div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] bg-white/5 rounded-[2rem] border border-white/5 relative overflow-hidden md:order-last group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-black uppercase">
                            LAYER
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8 }}
                        className="md:text-right"
                    >
                        <span className="text-[120px] font-black text-white/5 leading-none block -mb-8 relative z-0">02</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 relative z-10 pr-4">Архитектура Слоя</h2>
                        <p className="text-white/60 text-lg leading-relaxed pr-4 border-r-2 border-primary/30 ml-auto">
                            "Три Шоколада" требует математической точности температур. Фруктовые конфи — идеального баланса пектина. Мы проектируем текстуры так, чтобы они раскрывались последовательно, создавая драматургию вкуса во рту.
                        </p>
                    </motion.div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[120px] font-black text-white/5 leading-none block -mb-8 relative z-0">03</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 relative z-10 pl-4">Ручная Сборка</h2>
                        <p className="text-white/60 text-lg leading-relaxed pl-4 border-l-2 border-primary/30">
                            Никаких конвейеров. Каждый торт собирается вручную мастерами-кондитерами. Декор, глазурь, финальные штрихи — все делается с вниманием к мельчайшим деталям.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] bg-white/5 rounded-[2rem] border border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-black uppercase">
                            ART
                        </div>
                    </motion.div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
