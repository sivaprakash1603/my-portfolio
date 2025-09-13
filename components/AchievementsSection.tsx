import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import { NeonText } from "@/components/neon-text";
import { TiltWrapper } from "@/components/TiltWrapper";
import React from "react";

interface AchievementsSectionProps {
  achievementsHeading: React.ReactNode;
}

const achievements = [
  {
    title: "Winner - National Hackathon 2024",
    description: "Secured 1st place among 200+ teams for building an AI-powered disaster response platform.",
    image: "/placeholder.jpg", // Replace with your actual image path
  },
  {
    title: "Best Paper Award - IEEE Conference",
    description: "Recognized for research on edge computing for IoT devices (2023).",
    image: "/placeholder.jpg",
  },
  {
    title: "Google Cloud Certified Associate Engineer",
    description: "Achieved certification in 2023, demonstrating cloud infrastructure expertise.",
    image: "/placeholder.jpg",
  },
  {
    title: "Top 6 - Smart India Hackathon",
    description: "Finalist for a smart agriculture solution using IoT and ML (2022).",
    image: "/placeholder.jpg",
  },
];

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievementsHeading }) => (
  <AnimatedSection id="achievements" className="py-20 bg-black" animation="fade-up">
    <div className="container px-4 mx-auto">
      <AnimatedItem>
        <TiltWrapper>
          <NeonText className="text-3xl md:text-4xl font-semibold mb-12 text-center select-none cursor-default" color="cyan">
            {achievementsHeading || <span className="opacity-40">Achievements</span>}
          </NeonText>
        </TiltWrapper>
      </AnimatedItem>
      <div className="flex flex-col gap-12">
        {achievements.map((item, idx) => (
          <AnimatedItem key={item.title} animation="fade-up" delay={150 * idx}>
            <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-xl shadow-lg border border-cyan-900/30" />
              </div>
              <div className={`w-full md:w-2/3 ${idx % 2 === 1 ? 'text-left' : 'text-right'} flex flex-col items-${idx % 2 === 1 ? 'start' : 'end'}`}>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-gray-300 max-w-xl">{item.description}</p>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
