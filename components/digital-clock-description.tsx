import React, { useEffect, useState } from "react";
import "../styles/digital-clock-desc.css";

const DESCRIPTIONS = [
  { text: "Full-Stack Dev", color: "bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent" },
  { text: "ML/LLM Enthusiast", color: "bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent" },
  { text: "Web & Mobile Solutions", color: "bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent" },
];

export const DigitalClockDescription: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % DESCRIPTIONS.length);
        setAnimating(false);
      }, 350); // Animation duration
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.5em] overflow-hidden w-full flex justify-center items-center">
      {DESCRIPTIONS.map((desc, i) => (
        <span
          key={desc.text}
          className={`digital-clock-desc-anim absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out text-2xl md:text-3xl font-light mb-8 whitespace-nowrap ${desc.color} ${
            i === index
              ? animating
                ? "translate-y-[-120%] opacity-0"
                : "translate-y-0 opacity-100"
              : i === (index + DESCRIPTIONS.length - 1) % DESCRIPTIONS.length && animating
              ? "translate-y-[120%] opacity-0"
              : "translate-y-[120%] opacity-0"
          }`}
        >
          {desc.text}
        </span>
      ))}
    </div>
  );
};
