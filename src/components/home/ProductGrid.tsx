"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

interface ProductGridContent {
    heading: string;
    button: string;
    products: Product[];
}

export function ProductGrid({ content }: { content: ProductGridContent }) {
    return (
        <section className="container py-32" id="products">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
                    {content.heading}
                </h2>
                <Link href="/catalog" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:gap-4 transition-all">
                    {content.button} <ArrowRight className="h-5 w-5" />
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {content.products.map((product, i) => (
                    <Link key={i} href={product.link} className="group block mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-card mb-6"
                        >
                            <Image
                                src={product.image}
                                alt={`${product.title} ${product.subtitle} - SAVA-LINE ventilation product`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay with subtle tint */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-medium text-foreground">{product.title}</h3>
                                <p className="text-muted-foreground">{product.subtitle}</p>
                            </div>
                            <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                <ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
