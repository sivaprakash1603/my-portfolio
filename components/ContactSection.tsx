import { AnimatedSection } from "@/components/animated-section";
import { AnimatedItem } from "@/components/animated-item";
import { NeonText } from "@/components/neon-text";
import { ContactForm } from "@/components/contact-form";
import { Mail, Linkedin } from "lucide-react";
import React from "react";

interface ContactSectionProps {
  contactHeading: React.ReactNode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contactHeading }) => (
  <AnimatedSection id="contact" className="py-20 bg-gray-950" animation="fade-up">
    <div className="container px-4 mx-auto">
      <AnimatedItem>
        <NeonText className="text-3xl md:text-4xl font-semibold mb-12 text-center" color="cyan">
          {contactHeading || <span className="opacity-40">Get In Touch</span>}
        </NeonText>
      </AnimatedItem>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <AnimatedItem animation="slide-right">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Contact Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </AnimatedItem>
          <div className="space-y-6">
            <AnimatedItem animation="slide-right" delay={200}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">sivaprakashsenthilnathan@gmail.com</p>
                </div>
              </div>
            </AnimatedItem>
            <AnimatedItem animation="slide-right" delay={600}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">linkedin.com/in/sivaprakash-senthilnathan-077950256</p>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
        <AnimatedItem animation="slide-left">
          <ContactForm />
        </AnimatedItem>
      </div>
    </div>
  </AnimatedSection>
);
