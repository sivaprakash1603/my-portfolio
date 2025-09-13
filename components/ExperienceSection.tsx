import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import { NeonText } from "@/components/neon-text";
import { TiltWrapper } from "@/components/TiltWrapper";
import React from "react";

interface ExperienceSectionProps {
  experienceHeading: React.ReactNode;
}

const experiences = [
  {
    company: "Tech Solutions Pvt Ltd",
    role: "Software Engineering Intern",
    period: "May 2024 - July 2024",
    description: "Worked on developing RESTful APIs and contributed to a React-based dashboard for client analytics. Improved API response times by 30% through optimization.",
    logo: "/placeholder-logo.png", // Replace with actual logo
  },
  {
    company: "InnovateX Labs",
    role: "Machine Learning Intern",
    period: "Jan 2024 - Apr 2024",
    description: "Built and deployed ML models for text classification and sentiment analysis. Automated data pipelines using Python and improved model accuracy by 12%.",
    logo: "/placeholder-logo.png",
  },
  {
    company: "CyborgForge",
    role: "Full Stack Intern",
    period: "Jun 2023 - Aug 2023",
    description: "Developed features for a Next.js e-commerce platform, integrated payment gateways, and enhanced UI/UX with Tailwind CSS.",
    logo: "/placeholder-logo.png",
  },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experienceHeading }) => (
  <AnimatedSection id="experience" className="py-20 bg-black" animation="fade-up">
    <div className="container px-4 mx-auto">
      <AnimatedItem>
        <TiltWrapper>
          <NeonText className="text-3xl md:text-4xl font-semibold mb-12 text-center select-none cursor-default" color="cyan">
            {experienceHeading || <span className="opacity-40">Professional Experience</span>}
          </NeonText>
        </TiltWrapper>
      </AnimatedItem>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <AnimatedItem key={exp.company + exp.role} animation="fade-up" delay={150 * idx}>
            <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`w-full md:w-1/4 flex-shrink-0 flex ${idx % 2 === 1 ? 'justify-end md:justify-end' : 'justify-center md:justify-start'}`}>
                <img src={exp.logo} alt={exp.company} className="w-24 h-24 object-contain rounded-xl bg-black p-2 shadow border border-cyan-900/30" />
              </div>
              <div className={`w-full md:w-3/4 ${idx % 2 === 1 ? 'text-left items-start' : 'text-right items-end'} flex flex-col`}>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">{exp.role}</h3>
                <div className="text-cyan-300 font-medium mb-1">{exp.company}</div>
                <div className="text-gray-400 text-sm mb-2">{exp.period}</div>
                <p className="text-gray-300 max-w-2xl">{exp.description}</p>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
