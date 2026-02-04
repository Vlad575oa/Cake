"use client";
// Force cache bust for translation v2

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[60] transition-all",
                isScrolled
                    ? "bg-black/20 backdrop-blur-premium py-3 border-b border-white/5"
                    : "bg-transparent py-6"
            )}
            style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease-in-out' }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                        Cake
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link
                        href="/about"
                        className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-primary transition-colors duration-300"
                    >
                        О нас
                    </Link>
                    <Link
                        href="/collection"
                        className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-primary transition-colors duration-300"
                    >
                        Коллекция
                    </Link>
                    <Link
                        href="/process"
                        className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-primary transition-colors duration-300"
                    >
                        Процесс
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    <Link
                        href="#"
                        className="group relative flex items-center gap-3 bg-primary px-6 md:px-4 py-2.5 md:py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                        style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease-in-out' }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="hidden sm:inline">Заказать</span>
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease-in-out' }} />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 p-8 lg:hidden flex flex-col gap-8 animate-in slide-in-from-top-4 shadow-2xl transition-all"
                    style={{ transitionDuration: '600ms', transitionTimingFunction: 'ease-in-out' }}
                >
                    <nav className="flex flex-col gap-6">
                        <Link
                            href="/about"
                            className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            О нас
                        </Link>
                        <Link
                            href="/collection"
                            className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Коллекция
                        </Link>
                        <Link
                            href="/process"
                            className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Процесс
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
