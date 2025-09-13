import React, { useRef, useState } from "react";

interface TiltWrapperProps {
  children: React.ReactNode;
  maxTilt?: number;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TiltWrapper: React.FC<TiltWrapperProps> = ({
  children,
  maxTilt = 12,
  scale = 1.03,
  className = "",
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * -maxTilt;
    setTilt({ x: rotateX, y: rotateY });
    setHovered(true);
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transition: hovered
          ? "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
          : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale},${scale},${scale})`,
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
