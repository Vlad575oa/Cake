"use client";

import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative py-20 px-6 border-t border-white/5 z-10 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4">
                <span className="text-2xl font-black uppercase tracking-tighter">Nano Banana</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em]">The Future of Freshness</span>
            </div>

            <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Experience</a>
                <a href="#" className="hover:text-primary transition-colors">Heritage</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex gap-6">
                <a href="#" className="p-3 rounded-full border border-white/5 hover:bg-white/5 transition-colors">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 rounded-full border border-white/5 hover:bg-white/5 transition-colors">
                    <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 rounded-full border border-white/5 hover:bg-white/5 transition-colors">
                    <Facebook className="w-4 h-4" />
                </a>
            </div>

            <div className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.2em] font-medium">
                © 2026 Nano Banana Labs. All Rights Reserved.
            </div>
        </footer>
    );
}
