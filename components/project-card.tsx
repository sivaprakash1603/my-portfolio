import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import styles3d from "./project-card.module.css"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  color: "cyan" | "pink" | "purple" | "green" | "orange" | "blue"
  className?: string // Allow passing custom className
  github?: string // Optional GitHub link
  website?: string // Optional website link
  isHovered?: boolean
  isOtherHovered?: boolean
  tilt?: { x: number; y: number }
  floatIndex?: number
  floatRandom?: number
  onCardMouseMove?: (x: number, y: number) => void
  onCardMouseLeave?: () => void
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  color,
  className,
  github,
  website,
  isHovered = false,
  isOtherHovered = false,
  tilt = { x: 0, y: 0 },
  floatIndex = 0,
  floatRandom = 0,
  onCardMouseMove,
  onCardMouseLeave,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);


  const colorMap = {
    cyan: {
      border: "border-cyan-800/50",
      glow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
      hover: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
      title: "text-cyan-400",
      button: "bg-cyan-950/50 text-cyan-400 border-cyan-700/50 hover:bg-cyan-900/50",
      tag: "bg-cyan-950/30 text-cyan-400",
    },
    pink: {
      border: "border-pink-800/50",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]",
      hover: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
      title: "text-pink-400",
      button: "bg-pink-950/50 text-pink-400 border-pink-700/50 hover:bg-pink-900/50",
      tag: "bg-pink-950/30 text-pink-400",
    },
    purple: {
      border: "border-purple-800/50",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      hover: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      title: "text-purple-400",
      button: "bg-purple-950/50 text-purple-400 border-purple-700/50 hover:bg-purple-900/50",
      tag: "bg-purple-950/30 text-purple-400",
    },
    green: {
      border: "border-green-800/50",
      glow: "shadow-[0_0_15px_rgba(34,197,94,0.15)]",
      hover: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
      title: "text-green-400",
      button: "bg-green-950/50 text-green-400 border-green-700/50 hover:bg-green-900/50",
      tag: "bg-green-950/30 text-green-400",
    },
    orange: {
      border: "border-orange-800/50",
      glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]",
      hover: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
      title: "text-orange-400",
      button: "bg-orange-950/50 text-orange-400 border-orange-700/50 hover:bg-orange-900/50",
      tag: "bg-orange-950/30 text-orange-400",
    },
    blue: {
      border: "border-blue-800/50",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
      hover: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
      title: "text-blue-400",
      button: "bg-blue-950/50 text-blue-400 border-blue-700/50 hover:bg-blue-900/50",
      tag: "bg-blue-950/30 text-blue-400",
    },
  }

  const styles = colorMap[color]

  // 3D hover state
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 16;
    const rotateY = ((x - centerX) / centerX) * -16;
    if (onCardMouseMove) onCardMouseMove(rotateX, rotateY);
  }
  function handleMouseLeave() {
    if (onCardMouseLeave) onCardMouseLeave();
  }

  return (
    <div
      ref={cardRef}
  className={`group bg-black/60 rounded-xl overflow-hidden border ${styles.border} ${styles.glow} transition-transform duration-200 ${styles.hover} hover:translate-y-[-5px] ${styles3d[`project-card-bright-hover-${color}`]}${!isHovered && !isOtherHovered ? ` ${styles3d['project-card-floating']} ${styles3d[`project-card-floating-${floatIndex ?? 0}`]}` : ''}${className ? ` ${className}` : ""}`}
      data-float-random={floatRandom}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: "transform",
        position: "relative",
        transition: isHovered || isOtherHovered ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" : undefined,
        transform:
          isHovered
            ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.01,1.01,1.01)`
            : isOtherHovered
            ? `perspective(600px) rotateX(${-tilt.x * 0.5}deg) rotateY(${-tilt.y * 0.5}deg) scale3d(0.98,0.98,0.98)`
            : `perspective(600px)`,
        boxShadow: !isHovered && !isOtherHovered ? `0 8px 32px 0 rgba(56,189,248,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)` : undefined,
        animationDelay: !isHovered && !isOtherHovered && floatRandom !== undefined ? `${floatRandom}s` : undefined,
      }}
    >
      {/* 3D Cuboid Sides - true 3D faces using ::before/::after and extra divs */}
      <div className={styles3d["cuboid-3d-root"]}>
        <div className={styles3d["cuboid-face"] + " " + styles3d["cuboid-face-left"]}></div>
        <div className={styles3d["cuboid-face"] + " " + styles3d["cuboid-face-right"]}></div>
        <div className={styles3d["cuboid-face"] + " " + styles3d["cuboid-face-top"]}></div>
        <div className={styles3d["cuboid-face"] + " " + styles3d["cuboid-face-bottom"]}></div>
      </div>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${styles.title}`}>{title}</h3>

        <p className={`text-gray-300 mb-2 text-sm ${expanded ? '' : 'line-clamp-2'}`}>{description}</p>

        {description.length > 80 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`text-xs font-medium underline mb-4 ${styles.title}`}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full ${styles.tag} ${styles3d['project-skill-animate']} ${styles3d[`project-skill-delay-${index}`]} ${styles3d['project-skill-hover']}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          {github && (
            <Button
              variant="outline"
              className={styles.button}
              onClick={() => window.open(github, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-1" /> GitHub
            </Button>
          )}
          {website && (
            <Button
              variant="outline"
              className={styles.button}
              onClick={() => window.open(website, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Website
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
