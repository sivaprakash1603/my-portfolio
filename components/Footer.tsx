import { AnimatedItem } from "@/components/animated-item";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const Footer: React.FC = () => (
  <footer className="py-8 bg-black border-t border-black">
    <div className="container px-4 mx-auto text-center">
      <AnimatedItem animation="fade-up">
        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-cyan-500/50 text-cyan-500 hover:bg-cyan-950/50 hover:text-cyan-400 transition-transform hover:scale-110"
            onClick={() => window.open("https://github.com/sivaprakash1603", "_blank")}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-cyan-500/50 text-cyan-500 hover:bg-cyan-950/50 hover:text-cyan-400 transition-transform hover:scale-110"
            onClick={() => window.open("https://www.linkedin.com/in/sivaprakash-senthilnathan-077950256", "_blank")}
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-cyan-500/50 text-cyan-500 hover:bg-cyan-950/50 hover:text-cyan-400 transition-transform hover:scale-110"
            onClick={() => window.open("mailto:sivaprakashsenthilnathan@gmail.com")}
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} Sivaprakash Senthilnathan. All rights reserved.</p>
      </AnimatedItem>
    </div>
  </footer>
);
