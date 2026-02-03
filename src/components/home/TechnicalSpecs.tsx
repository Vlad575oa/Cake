"use client";

import { PremiumAccordion } from "@/components/ui/premium-accordion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { getSpecContent } from "@/content/specContent";

// The content for a single spec item, now structured data
export interface SpecContentData {
    description: string;
    data?: { label: string; value: string }[];
    list?: string[];
    action?: string;
}

// A spec item, including the title and the content identifier
export interface Spec {
    title: string;
    content: string | SpecContentData | ReactNode;
}

// The overall content for the TechnicalSpecs section
export interface TechnicalSpecsContent {
    tagline: string;
    heading: {
        line1: string;
        line2: string;
    };
    paragraph: string;
    specs: Spec[];
}

// A new component to render the structured spec content
function SpecContent({ content }: { content: SpecContentData }) {
    if (!content) return null;

    return (
        <div className="space-y-4">
            <p>{content.description}</p>
            {content.data && (
                <div className="grid grid-cols-2 gap-4 font-mono text-xs text-foreground/80">
                    {content.data.map((item, index) => (
                        <div key={index} className="p-4 bg-muted rounded-xl">
                            <div className="text-foreground/40 mb-1 uppercase tracking-wider">{item.label}</div>
                            <div className="font-bold">{item.value}</div>
                        </div>
                    ))}
                </div>
            )}
            {content.list && (
                <ul className="list-disc list-inside space-y-1 text-sm font-mono text-foreground/60">
                    {content.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {content.action && (
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <ArrowUpRight className="h-4 w-4" /> {content.action}
                </button>
            )}
        </div>
    );
}

export function TechnicalSpecs({ content }: { content: TechnicalSpecsContent }) {
    // Transform the specs to be compatible with the PremiumAccordion
    const accordionItems = content.specs.map((spec: any) => {
        let sc: any;
        if (typeof spec.content === 'string') {
            sc = getSpecContent(spec.content);
        } else if (spec.content && typeof spec.content === 'object' && 'description' in spec.content) {
            sc = <SpecContent content={spec.content} />;
        } else {
            sc = spec.content;
        }

        return {
            title: spec.title,
            content: sc as ReactNode
        };
    });

    return (
        <section className="bg-card py-32" id="technical">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="sticky top-24 h-fit">
                        <span className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-bold text-primary mb-6 uppercase tracking-widest shadow-sm">
                            {content.tagline}
                        </span>
                        <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl mb-6">
                            {content.heading.line1}<br />
                            <span className="text-foreground/20">{content.heading.line2}</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-sm">
                            {content.paragraph}
                        </p>
                    </div>

                    <PremiumAccordion items={accordionItems} />
                </div>
            </div>
        </section>
    );
}
