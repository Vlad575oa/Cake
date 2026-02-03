"use client";

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface SavalineProps {
    progress: MotionValue<number>;
    className?: string;
}

const FRAME_FILENAMES = [
    "frame_000_delay-0.042s.jpg",
    "frame_001_delay-0.041s.jpg",
    "frame_002_delay-0.042s.jpg",
    "frame_003_delay-0.042s.jpg",
    "frame_004_delay-0.041s.jpg",
    "frame_005_delay-0.042s.jpg",
    "frame_006_delay-0.042s.jpg",
    "frame_007_delay-0.041s.jpg",
    "frame_008_delay-0.042s.jpg",
    "frame_009_delay-0.042s.jpg",
    "frame_010_delay-0.041s.jpg",
    "frame_011_delay-0.042s.jpg",
    "frame_012_delay-0.042s.jpg",
    "frame_013_delay-0.041s.jpg",
    "frame_014_delay-0.042s.jpg",
    "frame_015_delay-0.042s.jpg",
    "frame_016_delay-0.041s.jpg",
    "frame_017_delay-0.042s.jpg",
    "frame_018_delay-0.042s.jpg",
    "frame_019_delay-0.041s.jpg",
    "frame_020_delay-0.042s.jpg",
    "frame_021_delay-0.042s.jpg",
    "frame_022_delay-0.041s.jpg",
    "frame_023_delay-0.042s.jpg",
    "frame_024_delay-0.042s.jpg",
    "frame_025_delay-0.041s.jpg",
    "frame_026_delay-0.042s.jpg",
    "frame_027_delay-0.042s.jpg",
    "frame_028_delay-0.041s.jpg",
    "frame_029_delay-0.042s.jpg",
    "frame_030_delay-0.042s.jpg",
    "frame_031_delay-0.041s.jpg",
    "frame_032_delay-0.042s.jpg",
    "frame_033_delay-0.042s.jpg",
    "frame_034_delay-0.041s.jpg",
    "frame_035_delay-0.042s.jpg",
    "frame_036_delay-0.042s.jpg",
    "frame_037_delay-0.041s.jpg",
    "frame_038_delay-0.042s.jpg",
    "frame_039_delay-0.042s.jpg",
    "frame_040_delay-0.041s.jpg",
    "frame_041_delay-0.042s.jpg",
    "frame_042_delay-0.042s.jpg",
    "frame_043_delay-0.041s.jpg",
    "frame_044_delay-0.042s.jpg",
    "frame_045_delay-0.042s.jpg",
    "frame_046_delay-0.041s.jpg",
    "frame_047_delay-0.042s.jpg",
    "frame_048_delay-0.042s.jpg",
    "frame_049_delay-0.041s.jpg",
    "frame_050_delay-0.042s.jpg",
    "frame_051_delay-0.042s.jpg",
    "frame_052_delay-0.041s.jpg",
    "frame_053_delay-0.042s.jpg",
    "frame_054_delay-0.042s.jpg",
    "frame_055_delay-0.041s.jpg",
    "frame_056_delay-0.042s.jpg",
    "frame_057_delay-0.042s.jpg",
    "frame_058_delay-0.041s.jpg",
    "frame_059_delay-0.042s.jpg",
    "frame_060_delay-0.042s.jpg",
    "frame_061_delay-0.041s.jpg",
    "frame_062_delay-0.042s.jpg",
    "frame_063_delay-0.042s.jpg",
    "frame_064_delay-0.041s.jpg",
    "frame_065_delay-0.042s.jpg",
    "frame_066_delay-0.042s.jpg",
    "frame_067_delay-0.041s.jpg",
    "frame_068_delay-0.042s.jpg",
    "frame_069_delay-0.042s.jpg",
    "frame_070_delay-0.041s.jpg",
    "frame_071_delay-0.042s.jpg",
    "frame_072_delay-0.042s.jpg",
    "frame_073_delay-0.041s.jpg",
    "frame_074_delay-0.042s.jpg",
    "frame_075_delay-0.042s.jpg",
    "frame_076_delay-0.041s.jpg",
    "frame_077_delay-0.042s.jpg",
    "frame_078_delay-0.042s.jpg",
    "frame_079_delay-0.041s.jpg",
    "frame_080_delay-0.042s.jpg",
    "frame_081_delay-0.042s.jpg",
    "frame_082_delay-0.041s.jpg",
    "frame_083_delay-0.042s.jpg",
    "frame_084_delay-0.042s.jpg",
    "frame_085_delay-0.041s.jpg",
    "frame_086_delay-0.042s.jpg",
    "frame_087_delay-0.042s.jpg",
    "frame_088_delay-0.041s.jpg",
    "frame_089_delay-0.042s.jpg",
    "frame_090_delay-0.042s.jpg",
    "frame_091_delay-0.041s.jpg",
    "frame_092_delay-0.042s.jpg",
    "frame_093_delay-0.042s.jpg",
    "frame_094_delay-0.041s.jpg",
    "frame_095_delay-0.042s.jpg",
    "frame_096_delay-0.042s.jpg",
    "frame_097_delay-0.041s.jpg",
    "frame_098_delay-0.042s.jpg",
    "frame_099_delay-0.042s.jpg",
    "frame_100_delay-0.041s.jpg",
    "frame_101_delay-0.042s.jpg",
    "frame_102_delay-0.042s.jpg",
    "frame_103_delay-0.041s.jpg",
    "frame_104_delay-0.042s.jpg",
    "frame_105_delay-0.042s.jpg",
    "frame_106_delay-0.041s.jpg",
    "frame_107_delay-0.042s.jpg",
    "frame_108_delay-0.042s.jpg",
    "frame_109_delay-0.041s.jpg",
    "frame_110_delay-0.042s.jpg",
    "frame_111_delay-0.042s.jpg",
    "frame_112_delay-0.041s.jpg",
    "frame_113_delay-0.042s.jpg",
    "frame_114_delay-0.042s.jpg",
    "frame_115_delay-0.041s.jpg",
    "frame_116_delay-0.042s.jpg",
    "frame_117_delay-0.042s.jpg",
    "frame_118_delay-0.041s.jpg",
    "frame_119_delay-0.042s.jpg",
    "frame_120_delay-0.042s.jpg",
    "frame_121_delay-0.041s.jpg",
    "frame_122_delay-0.042s.jpg",
    "frame_123_delay-0.042s.jpg",
    "frame_124_delay-0.041s.jpg",
    "frame_125_delay-0.042s.jpg",
    "frame_126_delay-0.042s.jpg",
    "frame_127_delay-0.041s.jpg",
    "frame_128_delay-0.042s.jpg",
    "frame_129_delay-0.042s.jpg",
    "frame_130_delay-0.041s.jpg",
    "frame_131_delay-0.042s.jpg",
    "frame_132_delay-0.042s.jpg",
    "frame_133_delay-0.041s.jpg",
    "frame_134_delay-0.042s.jpg",
    "frame_135_delay-0.042s.jpg",
    "frame_136_delay-0.041s.jpg",
    "frame_137_delay-0.042s.jpg",
    "frame_138_delay-0.042s.jpg",
    "frame_139_delay-0.041s.jpg",
    "frame_140_delay-0.042s.jpg",
    "frame_141_delay-0.042s.jpg",
    "frame_142_delay-0.041s.jpg",
    "frame_143_delay-0.042s.jpg",
    "frame_144_delay-0.042s.jpg",
];

export function Savaline({
    progress,
    className
}: SavalineProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const frameCount = FRAME_FILENAMES.length;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        let mounted = true;
        const images: HTMLImageElement[] = [];
        let loaded = 0;

        FRAME_FILENAMES.forEach((filename, index) => {
            const img = new Image();
            img.src = `/SavaLine/${filename}`;
            img.onload = () => {
                if (!mounted) return;
                images[index] = img;
                loaded++;
                setLoadedCount(prev => prev + 1);
                if (loaded === frameCount) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                if (!mounted) return;
                console.error(`Failed to load technical frame: ${filename}`);
                loaded++;
                if (loaded === frameCount) setIsLoaded(true);
            };
            images[index] = img;
        });

        imagesRef.current = images;

        return () => {
            mounted = false;
        };
    }, [frameCount]);

    const renderFrame = (latest: number) => {
        if (!canvasRef.current || imagesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;

        // Use precise frame index based on scroll progress
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
            {!isLoaded && isMounted && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-20">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${(loadedCount / frameCount) * 100}%` }}
                            />
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                            Initializing Visualization {Math.round((loadedCount / frameCount) * 100)}%
                        </span>
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
