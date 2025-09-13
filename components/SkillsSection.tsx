import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import { NeonText } from "@/components/neon-text";
import { SkillBadge } from "@/components/skill-badge";
import { TiltWrapper } from "./TiltWrapper";
import React from "react";

interface SkillsSectionProps {
  skillsHeading: React.ReactNode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsHeading }) => (
  <AnimatedSection id="skills" className="py-20 bg-black" animation="fade-up">
    <div className="container px-4 mx-auto text-center">
      
      <AnimatedItem>
        <TiltWrapper maxTilt={8} scale={1.01} className="inline-block">
          <NeonText className="text-3xl md:text-4xl font-semibold mb-12 select-none cursor-default" color="cyan">
            {skillsHeading || <span className="opacity-40">My Skills</span>}
          </NeonText>
        </TiltWrapper>
      </AnimatedItem>
      
      <AnimatedItem animation="fade-up" delay={200}>
        <div className="mb-12">
          <TiltWrapper maxTilt={8} scale={1.01} className="inline-block">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Frontend Development</h3>
          </TiltWrapper>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "React Native", "Flutter"].map(
              (skill, index) => (
                <AnimatedItem key={skill} animation="fade-up" delay={100 * (index + 1)} className="inline-block">
                  <SkillBadge
                    name={skill}
                    color={
                      ["React", "Tailwind CSS", "React Native"].includes(skill)
                        ? "cyan"
                        : ["TypeScript", "CSS3", "Flutter"].includes(skill)
                          ? "blue"
                          : skill === "JavaScript"
                            ? "yellow"
                            : skill === "HTML5"
                              ? "orange"
                              : "white"
                    }
                  />
                </AnimatedItem>
              ),
            )}
          </div>
        </div>
      </AnimatedItem>
      <AnimatedItem animation="fade-up" delay={400}>
        <div className="mb-12">
          <TiltWrapper maxTilt={8} scale={1.01} className="inline-block">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Backend & Programming Languages</h3>
          </TiltWrapper>
          <div className="flex flex-wrap justify-center gap-3">
            {["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "Spring Boot", "Java", "C", "C++", "Python"].map((skill, index) => (
              <AnimatedItem key={skill} animation="fade-up" delay={100 * (index + 1)} className="inline-block">
                <SkillBadge
                  name={skill}
                  color={
                    ["Node.js", "MongoDB", "Spring Boot", "Python"].includes(skill)
                      ? "green"
                      : ["PostgreSQL", "REST API", "C", "C++"].includes(skill)
                        ? "blue"
                        : skill === "Java"
                          ? "orange"
                          : "gray"
                  }
                />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedItem>
      <AnimatedItem animation="fade-up" delay={600}>
        <div className="mb-12">
          <TiltWrapper maxTilt={8} scale={1.01} className="inline-block">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Machine Learning & Data Science</h3>
          </TiltWrapper>
          <div className="flex flex-wrap justify-center gap-3">
            {["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn"].map((skill, index) => (
              <AnimatedItem key={skill} animation="fade-up" delay={100 * (index + 1)} className="inline-block">
                <SkillBadge
                  name={skill}
                  color={
                    ["TensorFlow", "PyTorch"].includes(skill)
                      ? "orange"
                      : skill === "Scikit-learn"
                        ? "yellow"
                        : "purple"
                  }
                />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedItem>
      <AnimatedItem animation="fade-up" delay={800}>
        <div>
          <TiltWrapper maxTilt={8} scale={1.01} className="inline-block">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Tools & Others</h3>
          </TiltWrapper>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "Docker", "AWS", "Firebase", "Figma", "Jest", "Excel", "Tableau"].map((skill, index) => (
              <AnimatedItem key={skill} animation="fade-up" delay={100 * (index + 1)} className="inline-block">
                <SkillBadge
                  name={skill}
                  color={
                    skill === "Git"
                      ? "orange"
                      : skill === "Docker"
                        ? "blue"
                        : ["AWS", "Firebase"].includes(skill)
                          ? "yellow"
                          : skill === "Figma"
                            ? "purple"
                            : ["Excel", "Tableau"].includes(skill)
                              ? "green"
                              : "red"
                  }
                />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedItem>
    </div>
  </AnimatedSection>
);
