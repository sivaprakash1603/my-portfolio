import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import { NeonText } from "@/components/neon-text";
import { ProjectCard } from "@/components/project-card";
import { useState } from "react";
import React from "react";

interface ProjectsSectionProps {
  projectsHeading: React.ReactNode;
}

const projects = [
  {
    title: "E-Commerce Drone Platform",
    description:
      "A full-featured online store with payment processing, user accounts, and inventory management.",
    image: "/e-commerce.png?height=400&width=600",
    tags: ["Next.js", "Node.js", "PostgreSQL", "prisma", "Tailwind CSS", "TypeScript"],
    website: "https://cyborgforge-web.vercel.app/",
  },
  {
    title: "Markdown Text-Editor",
    description:
      "A smart web-based notes app with secure login, rich text editing (via TinyMCE), and AI-powered text enhancement. Users can create, format, and manage notes with ease, and revisit their full note history anytime.",
    image: "/mk1.png?height=400&width=600",
    tags: ["Next.js", "TypeScript", "API", "MongoDB", "Tailwind CSS", "TinyMCE", "Together AI"],
    github: "https://github.com/sivaprakash1603/markdown-editor",
    website: "https://markdown-editor-mauve.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "",
    website: "",
  },
  {
    title: "Weather Application",
    description: "Location-based weather forecasting with interactive maps and alerts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "OpenWeather API", "Leaflet"],
    github: "",
    website: "",
  },
  {
    title: "Portfolio Website",
    description: "Custom portfolio website with animations and interactive elements.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/example/portfolio",
    website: "",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile-first application for tracking workouts and nutrition with progress visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Redux", "Node.js"],
    github: "",
    website: "",
  },
];


export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectsHeading }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
  <AnimatedSection id="projects" className="py-20 bg-black" animation="fade-up">
      <div className="container px-4 mx-auto">
        <AnimatedItem>
          <NeonText className="text-3xl md:text-4xl font-semibold mb-12 text-center" color="cyan">
            {projectsHeading || <span className="opacity-40">Featured Projects</span>}
          </NeonText>
        </AnimatedItem>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Deterministic float delay based on index (SSR-safe)
            const floatRandom = Math.random();;
            return (
              <div key={project.title} className="flex flex-col h-full">
                <AnimatedItem animation="fade-up" delay={150 * index} className="flex flex-col h-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    color={["blue", "green", "orange", "purple", "cyan", "pink"][index % 6] as "cyan" | "pink" | "purple" | "green" | "orange" | "blue"}
                    className="h-full flex flex-col"
                    github={project.github}
                    website={project.website}
                    isHovered={hovered === index}
                    isOtherHovered={hovered !== null && hovered !== index}
                    tilt={tilt}
                    floatIndex={index}
                    floatRandom={floatRandom}
                    onCardMouseMove={(x: number, y: number) => {
                      setHovered(index);
                      setTilt({ x, y });
                    }}
                    onCardMouseLeave={() => {
                      setHovered(null);
                      setTilt({ x: 0, y: 0 });
                    }}
                  />
                </AnimatedItem>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};
