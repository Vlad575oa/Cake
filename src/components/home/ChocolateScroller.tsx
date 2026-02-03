"use client";

import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface ChocolateScrollerProps {
    progress: MotionValue<number>;
    className?: string;
}

const START_FRAME = 18;
const END_FRAME = 192;
const FRAME_COUNT = END_FRAME - START_FRAME + 1;

export function ChocolateScroller({
    progress,
    className
}: ChocolateScrollerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        let mounted = true;
        const images: HTMLImageElement[] = [];
        let loaded = 0;

        for (let i = START_FRAME; i <= END_FRAME; i++) {
            const img = new Image();
            img.src = `/chocolate/${i}.jpg`;
            img.onload = () => {
                if (!mounted) return;
                images[i - START_FRAME] = img;
                loaded++;
                setLoadedCount(prev => prev + 1);
                if (loaded === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                if (!mounted) return;
                console.error(`Failed to load frame: ${i}.jpg`);
                loaded++;
                if (loaded === FRAME_COUNT) setIsLoaded(true);
            };
            images[i - START_FRAME] = img;
        }

        imagesRef.current = images;

        return () => {
            mounted = false;
        };
    }, []);

    const renderFrame = (latest: number) => {
        if (!canvasRef.current || imagesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;

        // Use precise frame index based on scroll progress
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * (FRAME_COUNT - 1))
        );

        const img = imagesRef.current[frameIndex];
        if (img && img.complete && img.naturalWidth !== 0) {
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;

            const canvasRatio = canvasWidth / canvasHeight;
            const imgRatio = imgWidth / imgHeight;

            let drawWidth, drawHeight, x, y;

            if (canvasRatio > imgRatio) {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                x = 0;
                y = (canvasHeight - drawHeight) / 2;
            } else {
                drawWidth = canvasHeight * imgRatio;
                drawHeight = canvasHeight;
                x = (canvasWidth - drawWidth) / 2;
                y = 0;
            }

            context.drawImage(img, x, y, drawWidth, drawHeight);
        }
    };

    useMotionValueEvent(progress, "change", (latest) => {
        renderFrame(latest);
    });

    useEffect(() => {
        if (isLoaded) {
            renderFrame(progress.get());
        }
    }, [isLoaded, progress]);

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-md z-20">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-64 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-sm font-medium text-foreground tracking-widest uppercase">
                                Brewing Perfection
                            </span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                                {Math.round((loadedCount / FRAME_COUNT) * 100)}%
                            </span>
                        </div>
                    </div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
            />
        </div>
    );
}
