import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

interface AnimatedItemProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
  delay?: number
  duration?: number
  triggerOnce?: boolean
  threshold?: number
}

export function AnimatedItem({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  triggerOnce = true,
  threshold = 0.1,
}: AnimatedItemProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce })

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "-translate-x-10 opacity-0",
    "slide-right": "translate-x-10 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(className, "transition-all", isInView ? "" : animationClasses[animation])}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
