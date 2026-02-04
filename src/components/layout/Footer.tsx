"use client";

import React from 'react';
// Imports removed as icons are now inline

// SVG definitions for VK and Telegram
const VkIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 21.0003C15 21.0003 16.5 21 16.6358 20.932C17.3828 20.558 17.8172 17.917 21 17.917C21 17.917 21 17.0003 21 16.0836C21 15.1669 19.9886 15 19.9886 15C19.9886 15 19.2929 15.05 19 15.2C18.6 15.42 16.5 17.917 15.5 17.917C15 17.917 14.5 17.417 14.5 16.5003C14.5 13.917 15.5 10.917 15.5 9.0003C15.5 8.91697 15.2571 8.5003 14.5 8.5003C13.5286 8.5003 12.3949 8.55887 11.5 8.65154C11 8.7033 10.875 8.91697 11 9.0003C11.5 9.4003 11.697 9.8753 11.5 11.5003C11.5 11.5003 11.3788 15.0003 10.5 15.0003C9.5 15.0003 8.5 11.5003 8.5 11.5003C8.5 11.5003 8.5 8.91697 7.5 8.91697H6C6 8.91697 5.25 9.08363 5.25 9.5003C5.25 10.0836 6.5 14.5003 9.5 17.5003C11.5 19.5003 14 21.0003 15 21.0003Z" />
    </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2L2 9.5L9 12L19.5 4L11 13.5L14.5 21.5L21.5 2Z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="relative w-full py-10 px-6 md:px-12 border-t border-white/5 bg-black z-10 transition-all duration-600">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                {/* Brand & Copyright Column */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <div>
                        <span className="block text-2xl font-black uppercase tracking-tighter text-white leading-none">Cake</span>
                        <span className="block text-[10px] text-muted-foreground uppercase tracking-[0.4em] mt-1">Наслаждение в каждом кусочке</span>
                    </div>
                    <div className="hidden md:block text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        © 2026 Cake Labs.
                    </div>
                </div>

                {/* Navigation - Centered */}
                <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-[14px] font-bold uppercase tracking-[0.2em] text-white/60">
                    <a
                        href="/about"
                        className="hover:text-primary transition-colors duration-300 relative group"
                    >
                        О нас
                        <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </a>
                    <a
                        href="/collection"
                        className="hover:text-primary transition-colors duration-300 relative group"
                    >
                        Коллекция
                        <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </a>
                    <a
                        href="/process"
                        className="hover:text-primary transition-colors duration-300 relative group"
                    >
                        Процесс
                        <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </a>

                </nav>

                {/* Socials */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-4">
                        {[VkIcon, TelegramIcon].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                            >
                                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden text-[10px] text-white/20 uppercase tracking-[0.2em] mt-2">
                        © 2026 Cake Labs.
                    </div>
                </div>

            </div>
        </footer>
    );
}
