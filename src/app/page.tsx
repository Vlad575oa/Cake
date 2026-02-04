"use client";

import React, { useState, useRef } from 'react';
import { useScroll, motion, useSpring } from 'framer-motion';
import { PRODUCTS, Product } from '@/lib/constants';
import { CakeScroller } from '@/components/home/CakeScroller';
import { TextOverlays } from '@/components/home/TextOverlays';
import { ProductSwitcher } from '@/components/ui/ProductSwitcher';
import { HeroSection, InfoSection, PurchaseSection } from '@/components/home/ContentSections';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState<Product>(PRODUCTS[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Setup scroll progress for the sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth the scroll progress for better canvas performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className={`relative min-h-screen ${currentProduct.themeClass} transition-colors duration-600 ease-in-out`}>
      <Navbar key="navbar-v2-ru" />
      {/* Immersive Background Sequence */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <CakeScroller progress={smoothProgress} product={currentProduct} />

        {/* Color wash overlay that matches product theme */}
        <motion.div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          animate={{ background: currentProduct.gradient }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      {/* Floating UI Elements */}
      <TextOverlays progress={smoothProgress} product={currentProduct} />
      <ProductSwitcher
        currentProduct={currentProduct}
        onProductChange={setCurrentProduct}
        progress={smoothProgress}
      />

      {/* Content Layers */}
      <div className="relative z-10">
        {/* Spacer for scrollytelling sequence */}
        <div ref={containerRef} className="h-[180vh] pointer-events-none" />

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
