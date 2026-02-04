"use client";

import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { Product } from '@/lib/constants';

interface CakeScrollerProps {
    progress: MotionValue<number>;
    product: Product;
    className?: string;
}

export function CakeScroller({
    progress,
    product,
    className
}: CakeScrollerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    const { imageDir, startFrame, endFrame, extension, filenamePrefix = '', zeroPadding = 0 } = product.scroller;
    const frameCount = endFrame - startFrame + 1;

    useEffect(() => {
        let mounted = true;
        setIsLoaded(false);
        setLoadedCount(0);
        const images: HTMLImageElement[] = [];
        let loaded = 0;

        for (let i = 0; i < frameCount; i++) {
            const frameNum = startFrame + i;
            const formattedFrameNum = zeroPadding > 0
                ? String(frameNum).padStart(zeroPadding, '0')
                : frameNum;

            const img = new Image();
            img.src = `${imageDir}${filenamePrefix}${formattedFrameNum}${extension}`;

            img.onload = () => {
                if (!mounted) return;
                images[i] = img;
                loaded++;
                setLoadedCount(prev => prev + 1);
                if (loaded === frameCount) {
                    setIsLoaded(true);
                }
            };

            img.onerror = () => {
                if (!mounted) return;
                console.error(`Failed to load frame: ${imageDir}${filenamePrefix}${formattedFrameNum}${extension}`);
                loaded++;
                if (loaded === frameCount) setIsLoaded(true);
            };

            images[i] = img;
        }

        imagesRef.current = images;

        return () => {
            mounted = false;
        };
    }, [imageDir, startFrame, endFrame, extension, filenamePrefix, zeroPadding]);

    const renderFrame = (latest: number) => {
        if (!canvasRef.current || imagesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * (frameCount - 1))
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
                                style={{ width: `${(loadedCount / frameCount) * 100}%` }}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-sm font-medium text-foreground tracking-widest uppercase text-center">
                                Preparing {product.name}
                            </span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                                {Math.round((loadedCount / frameCount) * 100)}%
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
