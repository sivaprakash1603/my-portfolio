import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import { NeonText } from "@/components/neon-text";
import { Button } from "@/components/ui/button";
import React from "react";
import { TiltWrapper } from "@/components/TiltWrapper";

interface AboutSectionProps {
  aboutHeading: React.ReactNode;
  scrollToSection: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ aboutHeading, scrollToSection }) => (
  <AnimatedSection id="about" className="py-20 bg-none" animation="fade-up">
    <div className="container px-4 mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <AnimatedItem animation="slide-right" className="md:w-1/3">
          <TiltWrapper>
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_20px_ rgba(56,189,248,0.3)] transition-all duration-500 group-hover:shadow-[0_0_30px_ rgba(56,189,248,0.5)]">
                <img
                  src="/profile.jpg?height=600&width=600"
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 blur-2xl"></div>
            </div>
          </TiltWrapper>
        </AnimatedItem>
        <div className="md:w-2/3">
          <AnimatedItem animation="fade-up">
          <TiltWrapper maxTilt={8} scale={1.01}>
            <NeonText className="text-3xl md:text-4xl font-semibold mb-6 select-none cursor-none" color="cyan">
              {aboutHeading || <span className="opacity-40">About Me</span>}
            </NeonText>
          </TiltWrapper>
          </AnimatedItem>
          <AnimatedItem animation="fade-up" delay={200}>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a final-year engineering student with a strong passion for technology and innovation. As a full stack developer and machine learning enthusiast, I enjoy building end-to-end solutions that solve real-world problems. My journey in tech has been marked by hands-on experience in developing innovative projects that integrate both software and hardware components.
            </p>
          </AnimatedItem>
          <AnimatedItem animation="fade-up" delay={400}>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With a solid foundation in programming, I thrive on solving complex problems and continuously learning new technologies. I take pride in being a proactive and creative thinker who is always eager to take on new challenges in the fields of software development, artificial intelligence, and system design.
            </p>
          </AnimatedItem>
          <AnimatedItem animation="fade-up" delay={600}>
            <div className="flex gap-4">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white border-0 shadow-[0_0_10px_rgba(8,145,178,0.3)] transition-transform hover:scale-105"
                onClick={() => window.open("/sivaprakash_senthilnathan_resume.pdf", "_blank")}
              >
                Open CV
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-300 transition-transform hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  </AnimatedSection>
);
