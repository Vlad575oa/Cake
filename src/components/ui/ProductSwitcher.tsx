"use client";

import React from 'react';
import { motion, AnimatePresence, MotionValue, useTransform, useScroll } from 'framer-motion';
import { PRODUCTS, Product } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductSwitcherProps {
    currentProduct: Product;
    onProductChange: (product: Product) => void;
    progress: MotionValue<number>;
}

export function ProductSwitcher({
    currentProduct,
    onProductChange,
    progress
}: ProductSwitcherProps) {
    const currentIndex = PRODUCTS.findIndex(p => p.id === currentProduct.id);

    // Use the passed progress for a robust, coordinated fade-out
    const uiOpacity = useTransform(progress, [0.88, 0.95], [1, 0]);
    const uiPointerEvents = useTransform(progress, (v) => v > 0.92 ? 'none' : 'auto');

    // Explicit 0.6s transition style
    const transitionStyle = {
        transitionDuration: '600ms',
        transitionTimingFunction: 'ease-in-out'
    };

    const handlePrev = () => {
        const nextIndex = (currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
        onProductChange(PRODUCTS[nextIndex]);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % PRODUCTS.length;
        onProductChange(PRODUCTS[nextIndex]);
    };

    return (
        <motion.div
            style={{ opacity: uiOpacity, pointerEvents: uiPointerEvents as any }}
            className="fixed inset-0 pointer-events-none z-40"
        >
            {/* Side Arrows */}
            <div className="fixed inset-y-0 left-4 md:left-8 flex items-center z-50 pointer-events-none">
                <button
                    onClick={handlePrev}
                    className="p-3 md:p-4 rounded-full backdrop-blur-premium text-foreground hover:scale-110 active:scale-95 transition-all pointer-events-auto group"
                    style={transitionStyle}
                    aria-label="Previous Product"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="fixed inset-y-0 right-4 md:right-8 flex items-center z-50 pointer-events-none">
                <button
                    onClick={handleNext}
                    className="p-3 md:p-4 rounded-full backdrop-blur-premium text-foreground hover:scale-110 active:scale-95 transition-all pointer-events-auto group"
                    style={transitionStyle}
                    aria-label="Next Product"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Pill Menu */}
            <div className="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-md">
                <nav className="flex items-center justify-between gap-1 p-1.5 rounded-full backdrop-blur-premium border border-white/10 shadow-2xl">
                    {PRODUCTS.map((product) => {
                        const isActive = product.id === currentProduct.id;
                        return (
                            <button
                                key={product.id}
                                onClick={() => onProductChange(product)}
                                className={cn(
                                    "relative flex-1 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all",
                                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                                style={transitionStyle}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="pill-active"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {product.label}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </motion.div>
    );
}
