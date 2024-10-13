"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative -z-10 h-2 w-full overflow-visible rounded-full bg-primary/20",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="relative h-full flex-1 rounded-full bg-highlight transition-all"
      // style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      style={{ width: `${value}%` }}
    >
      <div className="absolute -right-4 -top-3 z-10 size-8 rounded-full border-2 border-highlight bg-slate-200" />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
