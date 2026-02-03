"use client";

import React, { useState, useRef } from 'react';
import { useScroll, motion, useSpring } from 'framer-motion';
import { PRODUCTS, Product } from '@/lib/constants';
import { ChocolateScroller } from '@/components/home/ChocolateScroller';
import { TextOverlays } from '@/components/home/TextOverlays';
import { ProductSwitcher } from '@/components/ui/ProductSwitcher';
import { HeroSection, InfoSection, PurchaseSection } from '@/components/home/ContentSections';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState<Product>(PRODUCTS[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Setup scroll progress for the sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"]
  });

  // Smooth the scroll progress for better canvas performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className={`relative min-h-screen ${currentProduct.themeClass} transition-colors duration-1000`}>
      {/* Immersive Background Sequence */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-screen z-0"
      >
        <ChocolateScroller progress={smoothProgress} />

        {/* Color wash overlay that matches product theme */}
        <motion.div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          animate={{ background: currentProduct.gradient }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Floating UI Elements */}
      <TextOverlays progress={smoothProgress} product={currentProduct} />
      <ProductSwitcher
        currentProduct={currentProduct}
        onProductChange={setCurrentProduct}
      />

      {/* Content Layers */}
      <div className="relative z-10">
        {/* Spacer for scrollytelling sequence */}
        <div className="h-[200vh] pointer-events-none" />

        <div className="bg-background/80 backdrop-blur-xl border-t border-white/5">
          <HeroSection product={currentProduct} />
          <InfoSection product={currentProduct} />
          <PurchaseSection product={currentProduct} />
          <Footer />
        </div>
      </div>
    </main>
  );
}
