"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/HeroSection"
import Particles from "@/components/Particles"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"


export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      const sections = ["home", "about", "skills", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }
  const goToGithub = () => {
    window.open("https://github.com/sivaprakash1603", "_blank")
  }
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/sivaprakash-senthilnathan-077950256", "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto',
        }}
      >
        <Particles
          particleColors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={3}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
      
  <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-transparent backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold transition-all duration-300 ${scrolled ? "text-cyan-400" : "text-white"}`}>SS</span>
            <span className="hidden sm:inline-block text-lg font-light">Sivaprakash Senthilnathan</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium capitalize transition-colors hover:text-cyan-400 ${activeSection === item ? "text-cyan-400" : "text-gray-300"}`}
              >
                {item}
              </button>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-black">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium capitalize py-2 transition-colors hover:text-cyan-400 ${activeSection === item ? "text-cyan-400" : "text-gray-300"}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
      <HeroSection
        typedName="Sivaprakash Senthilnathan"
        fullName="Sivaprakash Senthilnathan"
        goToGithub={goToGithub}
        goToLinkedin={goToLinkedin}
        scrollToSection={scrollToSection}
      />
      <AboutSection aboutHeading={<span>About Me</span>} scrollToSection={scrollToSection} />
      <SkillsSection skillsHeading={<span>My Skills</span>} />
      <ProjectsSection projectsHeading={<span>Featured Projects</span>} />
      <ContactSection contactHeading={<span>Get In Touch</span>} />
      <Footer />
      </div>
    </div>
  )
}

