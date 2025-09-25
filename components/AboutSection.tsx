import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import GradientText from "@/components/GradientText";
import AnimatedHeading from "@/components/AnimatedHeading";
import { Button } from "@/components/ui/button";
import React from "react";
import { TiltWrapper } from "@/components/TiltWrapper";
import ProfileCard from "./ProfileCard";
interface AboutSectionProps {
  aboutHeading: React.ReactNode;
  scrollToSection: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ aboutHeading, scrollToSection }) => (
  <>
    {/* Large Heading Section */}
    <section id="about" className="min-h-screen flex flex-col justify-center items-center">
      <AnimatedHeading>About Me</AnimatedHeading>
    </section>
    <div className="h-[250px]"></div>

    {/* Paragraph Section */}
    <AnimatedSection className="py-20 bg-none" animation="fade-up">
      <div className="container px-4 mx-auto flex flex-col md:flex-row gap-12 items-center">
        <AnimatedItem animation="slide-right" className="md:w-1/3">
          <ProfileCard
            name="Sivaprakash Senthilnathan"
            title="Software Engineer"
            handle="sivaprakash.dev"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile-removebg-preview.png?height=600&width=600"
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => scrollToSection("contact")}
            grainUrl="https://reactbits.dev/assets/grain.webp"
            iconUrl="/iconpattern.png"
          />
        </AnimatedItem>
        <div className="md:w-2/3">
          <AnimatedItem animation="fade-up" delay={200}>
            <p className="mb-4 text-2xl text-gray-300 leading-relaxed">
              I am a final-year engineering student with a strong passion for technology and innovation. As a full stack developer and machine learning enthusiast, I enjoy building end-to-end solutions that solve real-world problems. My journey in tech has been marked by hands-on experience in developing innovative projects that integrate both software and hardware components.
            </p>
          </AnimatedItem>
          <div className="h-4" />
          <AnimatedItem animation="fade-up" delay={400}>
            <p className="mb-4 text-2xl text-gray-300 leading-relaxed">
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
    </AnimatedSection>
  </>
);
