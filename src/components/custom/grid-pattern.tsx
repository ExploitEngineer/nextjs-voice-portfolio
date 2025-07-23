"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="absolute flex size-full items-center justify-center overflow-hidden rounded-lg">
      <GridPattern
        width={70}
        height={70}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
