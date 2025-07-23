"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg">
      <GridPattern
        width={91}
        height={91}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className={cn(
          "opacity-60",
          "[mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_90%),linear-gradient(to_bottom,transparent_0%,white_20%,white_80%,transparent_100%)]",
          "[mask-composite:intersect]",
          "[mask-repeat:no-repeat]",
          "[mask-size:100%_100%]",
        )}
      />
    </div>
  );
}
