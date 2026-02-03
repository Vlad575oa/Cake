"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    number?: string;
};

function AccordionItem({ title, children, isOpen, onToggle, number }: AccordionItemProps) {
    return (
        <div className="border-b border-border">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-8 text-left transition-colors hover:bg-black/5 px-4 rounded-xl my-2"
            >
                <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-primary/50 font-bold">{number}</span>
                    <h3 className="font-display text-2xl font-medium text-foreground uppercase">{title}</h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "anticipate" }}
                    className={cn("text-muted-foreground", isOpen && "text-primary")}
                >
                    <Plus className="h-6 w-6" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="pb-8 pt-0 pl-16 pr-4 text-muted-foreground border-l-2 border-primary/10 ml-8 mb-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function PremiumAccordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full">
            {items.map((item, i) => (
                <AccordionItem
                    key={i}
                    number={`0${i + 1}`}
                    title={item.title}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
