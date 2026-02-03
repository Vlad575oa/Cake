"use client";

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
                "fixed top-0 left-0 right-0 z-[60] transition-all duration-500",
                isScrolled
                    ? "bg-black/20 backdrop-blur-premium py-4 border-b border-white/5"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-3xl font-black uppercase tracking-tighter text-white">
                        Cake
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {["Collection", "Heritage", "Process", "Reviews"].map((item) => (
                        <Link
                            key={item}
                            href={`#`}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-primary transition-colors">
                        Contact
                    </button>
                    <Link
                        href="#"
                        className="group relative flex items-center gap-3 bg-primary px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Заказать <ShoppingCart className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl border-b border-white/5 p-8 md:hidden flex flex-col gap-8 animate-in slide-in-from-top-4 shadow-2xl">
                    <nav className="flex flex-col gap-6">
                        {["Collection", "Heritage", "Process", "Reviews"].map((item) => (
                            <Link
                                key={item}
                                href={`#`}
                                className="text-lg font-bold uppercase tracking-widest text-white/80 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
