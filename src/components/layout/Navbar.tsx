"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded bg-black text-white transition-transform group-hover:scale-110">
                        <span className="font-display font-bold">S</span>
                    </div>
                    <span className="font-display text-lg font-bold tracking-tight text-foreground">
                        SAVA<span className="opacity-50">LINE</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {["Products", "Technical", "Projects", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
                        Contact
                    </Link>
                    <Link
                        href="/catalog"
                        className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        Catalog
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-border p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-2 shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {["Products", "Technical", "Projects", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#`}
                                className="text-lg font-bold uppercase tracking-widest text-foreground hover:text-primary"
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
