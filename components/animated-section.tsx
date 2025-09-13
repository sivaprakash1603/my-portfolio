import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
  delay?: number
  triggerOnce?: boolean
}

export function AnimatedSection({
  children,
  className,
  id,
  animation = "fade-up",
  delay = 0,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce })

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "-translate-x-10 opacity-0",
    "slide-right": "translate-x-10 opacity-0",
  }

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        className,
        "transition-all duration-1000",
        delay > 0 ? `delay-${delay}` : "",
        isInView ? "" : animationClasses[animation],
      )}
      style={{
        transitionDelay: delay ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </section>
  )
}
