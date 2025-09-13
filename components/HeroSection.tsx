import { NeonText } from "@/components/neon-text";
import GradientText from "./GradientText";
import { AnimatedItem } from "@/components/animated-item";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { TiltWrapper } from "@/components/TiltWrapper";
import Hyperspeed from "@/components/Hyperspeed";
import React, { useMemo, useRef, useEffect, useState } from "react";
import SplashCursor from "@/components/SplashCursor";
interface HeroSectionProps {
  typedName: string;
  fullName: string;
  goToGithub: () => void;
  goToLinkedin: () => void;
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  typedName,
  fullName,
  goToGithub,
  goToLinkedin,
  scrollToSection,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {inView && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <SplashCursor />
        </div>
      )}
      <div className="absolute inset-0 z-0 min-h-screen">
        {inView && (
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 1,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}
          />
        )}
      </div>
    <div className="container relative z-10 px-4 text-center">
      <AnimatedItem animation="fade-up" delay={300}>
        <TiltWrapper maxTilt={10} scale={1.01}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class text-5xl md:text-7xl font-semibold mb-4"
            >
              Sivaprakash Senthilnathan
            </GradientText>
          </div>
        </TiltWrapper>
      </AnimatedItem>
      <AnimatedItem animation="fade-up" delay={600}>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
          <span className="text-cyan-400">Full-Stack</span> Dev | <span className="text-cyan-400">ML/LLM</span> Enthusiast | <span className="text-cyan-400">Web & Mobile</span> Solutions
        </h2>
      </AnimatedItem>
      <AnimatedItem animation="fade-up" delay={900}>
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-950 hover:text-cyan-400 transition-transform hover:scale-110"
            onClick={goToGithub}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-pink-500 text-pink-500 hover:bg-pink-950 hover:text-pink-400 transition-transform hover:scale-110"
            onClick={goToLinkedin}
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-green-500 text-green-500 hover:bg-green-950 hover:text-green-400 transition-transform hover:scale-110"
            onClick={() => window.open("mailto:sivaprakashsenthilnathan@gmail.com")}
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </AnimatedItem>
      <AnimatedItem animation="fade-up" delay={1200}>
        <Button
          className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white border-0 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform hover:scale-105"
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </Button>
      </AnimatedItem>
    </div>
    <AnimatedItem
      animation="fade-in"
      delay={1500}
      className="absolute bottom-10 left-0 right-0 flex justify-center"
    >
      <Button
        variant="ghost"
        className="w-10 h-16 rounded-full border-2 border-white/30 flex justify-center hover:bg-transparent hover:border-cyan-400 animate-bounce"
        onClick={() => scrollToSection("about")}
      >
  <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
      </Button>
    </AnimatedItem>
  </section>
  );
}
