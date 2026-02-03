"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, Product } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductSwitcherProps {
    currentProduct: Product;
    onProductChange: (product: Product) => void;
}

export function ProductSwitcher({
    currentProduct,
    onProductChange
}: ProductSwitcherProps) {
    const currentIndex = PRODUCTS.findIndex(p => p.id === currentProduct.id);

    const handlePrev = () => {
        const nextIndex = (currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
        onProductChange(PRODUCTS[nextIndex]);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % PRODUCTS.length;
        onProductChange(PRODUCTS[nextIndex]);
    };

    return (
        <>
            {/* Side Arrows */}
            <div className="fixed inset-y-0 left-8 flex items-center z-50 pointer-events-none">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-full backdrop-blur-premium text-foreground hover:scale-110 transition-transform pointer-events-auto group"
                    aria-label="Previous Product"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="fixed inset-y-0 right-8 flex items-center z-50 pointer-events-none">
                <button
                    onClick={handleNext}
                    className="p-4 rounded-full backdrop-blur-premium text-foreground hover:scale-110 transition-transform pointer-events-auto group"
                    aria-label="Next Product"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Pill Menu */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
                <nav className="flex items-center gap-1 p-2 rounded-full backdrop-blur-premium border border-white/10 shadow-2xl">
                    {PRODUCTS.map((product) => {
                        const isActive = product.id === currentProduct.id;
                        return (
                            <button
                                key={product.id}
                                onClick={() => onProductChange(product)}
                                className={cn(
                                    "relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500",
                                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="pill-active"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {product.name}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}
