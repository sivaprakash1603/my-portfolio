import type React from "react"
import { cn } from "@/lib/utils"

interface NeonTextProps {
  children: React.ReactNode
  className?: string
  color?: "cyan" | "pink" | "purple" | "green" | "orange" | "blue" | "yellow" | "white"
}

export function NeonText({ children, className, color = "white" }: NeonTextProps) {
  const colorMap = {
    cyan: {
      textColor: "text-cyan-400",
      shadowColor: "#22d3ee",
    },
    pink: {
      textColor: "text-pink-400",
      shadowColor: "#ec4899",
    },
    purple: {
      textColor: "text-purple-400",
      shadowColor: "#a855f7",
    },
    green: {
      textColor: "text-green-400",
      shadowColor: "#22c55e",
    },
    orange: {
      textColor: "text-orange-400",
      shadowColor: "#f97316",
    },
    blue: {
      textColor: "text-blue-400",
      shadowColor: "#3b82f6",
    },
    yellow: {
      textColor: "text-yellow-400",
      shadowColor: "#eab308",
    },
    white: {
      textColor: "text-white",
      shadowColor: "#ffffff",
    },
  }

  const { textColor, shadowColor } = colorMap[color]

  return (
    <h2
      className={cn(
        textColor,
        "animate-pulse-smooth",
        className
      )}
      style={{
        textShadow: `0 0 1px ${shadowColor}, 0 0 3px ${shadowColor}, 0 0 6px ${shadowColor}`
      }}
    >
      {children}
    </h2>
  )
}
