"use client";

import { useState } from "react";
import { StarBackground } from "@/components/StarBackground";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialSection } from "@/components/Testimonial";
import WelcomeScreen from "@/components/WelcomeScreen";

export const HomeClient = () => {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <>
      {/* Real content is always mounted in the DOM (good for SEO/crawlers).
          The welcome screen is an animated overlay on top of it and is
          removed from the DOM once its intro animation finishes. */}
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TestimonialSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {!welcomeComplete && (
        <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
      )}
    </>
  );
};
