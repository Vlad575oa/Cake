"use client";

import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function getSpecContent(type: string): ReactNode {
  switch (type) {
    case "aerodynamics":
      return (
        <div className="space-y-4">
          <p>
            Our linear diffusers maintain laminar airflow even at high velocities.
            Tested in acoustic chambers to ensure compliance with ISO 3741.
          </p>
          <div className="grid grid-cols-2 gap-4 font-mono text-xs text-foreground/80">
            <div className="p-4 bg-muted rounded-xl">
              <div className="text-foreground/40 mb-1 uppercase tracking-wider">Noise Criteria</div>
              <div className="font-bold">&lt; 25 dB(A) @ 3 m/s</div>
            </div>
            <div className="p-4 bg-muted rounded-xl">
              <div className="text-foreground/40 mb-1 uppercase tracking-wider">Pressure Drop</div>
              <div className="font-bold">15 Pa @ 200 m³/h</div>
            </div>
          </div>
        </div>
      );
    case "installation":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-sm leading-relaxed">
            Compatible with all major ceiling systems including Knauf, Gyproc, and Armstrong.
            Includes patented "Click-Fix" mechanism for tool-less installation.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm font-mono text-foreground/60">
            <li>Frame Type A (Hidden)</li>
            <li>Frame Type B (Visible 10mm)</li>
            <li>Plenum Box Height: 250mm</li>
          </ul>
        </div>
      );
    case "materials":
      return (
        <div className="flex justify-between items-end">
          <p className="max-w-md text-sm">
            Extruded aluminum alloy 6063-T6. Powder coated with UV-resistant epoxy polyester.
          </p>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <ArrowUpRight className="h-4 w-4" /> Download Datasheet
          </button>
        </div>
      );
    default:
      return null;
  }
}
