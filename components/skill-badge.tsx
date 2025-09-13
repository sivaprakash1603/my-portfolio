interface SkillBadgeProps {
  name: string
  color: "cyan" | "pink" | "purple" | "green" | "orange" | "blue" | "yellow" | "white" | "red" | "gray"
}

export function SkillBadge({ name, color }: SkillBadgeProps) {
  const colorMap = {
    cyan: "bg-cyan-950/40 text-cyan-400 border-cyan-700/50 shadow-[0_0_8px_rgba(56,189,248,0.3)]",
    pink: "bg-pink-950/40 text-pink-400 border-pink-700/50 shadow-[0_0_8px_rgba(236,72,153,0.3)]",
    purple: "bg-purple-950/40 text-purple-400 border-purple-700/50 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
    green: "bg-green-950/40 text-green-400 border-green-700/50 shadow-[0_0_8px_rgba(34,197,94,0.3)]",
    orange: "bg-orange-950/40 text-orange-400 border-orange-700/50 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
    blue: "bg-blue-950/40 text-blue-400 border-blue-700/50 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
    yellow: "bg-yellow-950/40 text-yellow-400 border-yellow-700/50 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  white: "bg-black/60 text-white border-gray-600/50 shadow-[0_0_8px_rgba(255,255,255,0.2)]",
    red: "bg-red-950/40 text-red-400 border-red-700/50 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
  gray: "bg-black/60 text-gray-300 border-gray-600/50 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  }

  return (
    <div
      className={`px-4 py-2 rounded-full border ${colorMap[color]} transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]`}
    >
      {name}
    </div>
  )
}
