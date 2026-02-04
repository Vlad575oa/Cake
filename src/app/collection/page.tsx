"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function CollectionPage() {
    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-6 text-sm uppercase tracking-widest font-bold">
                            <ArrowLeft className="w-4 h-4" /> Назад
                        </Link>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                            Коллекция
                        </h1>
                        <p className="text-white/60 text-lg max-w-xl">
                            Исследуйте нашу эксклюзивную линейку тортов, где вкус встречается с искусством.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px]">
                    {/* Large Featured Item (Mango) - Spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-[#1a1a1a] border border-white/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB74D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest">
                                    Бестселлер
                                </span>
                                <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FFB74D] transition-colors">{PRODUCTS[0].name}&#x200B;</h3>
                                <p className="text-white/60 mb-6 bg-black/40 backdrop-blur-sm p-2 rounded-lg inline-block">{PRODUCTS[0].description.slice(0, 80)}...</p>
                                <span className="text-2xl font-bold">{PRODUCTS[0].price}</span>
                            </div>
                        </div>
                        {/* Placeholder for image - would be a real image in prod */}
                        <div className="absolute inset-0 bg-[url('/fruit/1.webp')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                    </motion.div>

                    {/* Tall Item (Chocolate) - Spans 1 col, 2 rows (if we had more rows, but here just 1 tall cell) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-[#1a1a1a] border border-white/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8D6E63]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest">
                                    Классика
                                </span>
                                <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#8D6E63] transition-colors">{PRODUCTS[1].name}</h3>
                                <p className="text-white/60 mb-6 text-sm">{PRODUCTS[1].description.slice(0, 100)}...</p>
                                <span className="text-2xl font-bold">{PRODUCTS[1].price}</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[url('/chocolate/18.webp')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                    </motion.div>

                    {/* Wide Item (Pomegranate) - Spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-[#1a1a1a] border border-white/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E57373]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest">
                                    Новинка
                                </span>
                                <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#E57373] transition-colors">{PRODUCTS[2].name}</h3>
                                    <p className="text-white/60 max-w-sm text-sm">{PRODUCTS[2].description.slice(0, 120)}...</p>
                                </div>
                                <span className="text-2xl font-bold">{PRODUCTS[2].price}</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[url('/red/1.webp')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                    </motion.div>

                    {/* Feature Cell - Spans 1 col */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-1 relative group overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 flex items-center justify-center p-8 text-center hover:bg-[#1a1a1a] transition-colors"
                    >
                        <div>
                            <h4 className="text-xl font-bold uppercase tracking-widest text-primary mb-2">Индивидуальный Заказ</h4>
                            <p className="text-white/40 text-sm mb-4">Создайте свой уникальный вкус с нашими шефами</p>
                            <Link href="/contacts" className="text-white underline underline-offset-4 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                                Связаться с нами
                            </Link>
                        </div>
                    </motion.div>

                    {/* Feature Cell - Spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary/10 to-transparent border border-white/5 flex items-center justify-between p-8 md:p-12"
                    >
                        <div className="max-w-md">
                            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">Подарочная Упаковка</h4>
                            <p className="text-white/60 text-sm mb-0">Каждый торт доставляется в нашей фирменной премиальной упаковке с контролем температуры.</p>
                        </div>
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                            <ArrowUpRight className="w-8 h-8 text-primary" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
