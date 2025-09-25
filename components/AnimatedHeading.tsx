"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import GradientText from "@/components/GradientText";
import React, { useEffect } from "react";

export const AnimatedHeading: React.FC<{ children: string }> = ({ children }) => {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  const letters = children.split("");

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
      }));
    } else {
      controls.start((i) => ({
        opacity: 0,
        y: 300,
        transition: { delay: i * 0.05, duration: 0.5, ease: "easeIn" },
      }));
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex justify-center"
      style={{ willChange: "opacity, transform" }}
    >
      <GradientText
        colors={["#40ffa9", "#4079ff", "#40ffaa", "#4079ff", "#40ffa9"]}
        animationSpeed={10}
        showBorder={false}
        className="custom-class text-5xl md:text-9xl font-bold mb-4 select-none cursor-none"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 300 }}
            animate={controls}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </GradientText>
    </motion.div>
  );
};
export default AnimatedHeading;