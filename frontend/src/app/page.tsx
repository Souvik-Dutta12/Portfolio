"use client"
import Image from "next/image";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "@/context/themeContext";
import Segment from "@/components/Segment";
import About from "@/components/About";
import ProjectHero from "@/components/ProjectHero";

export default function Home() {

  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "relative min-h-screen w-2xl mx-auto transition-colors duration-500 text-base-content")
      }
    >
      <Particles
        className="absolute inset-0 h-full z-0"
        quantity={150}
        ease={80}
        color={theme === "dark" ? "#fff" : "#b45309"}
        refresh
      />
      <Hero />

      <Segment />
      <div className="mt-50 flex flex-col items-center justify-center">
        <About />
      </div>
      <Segment />

      <div className="mt-50 flex flex-col items-center justify-center">
        <ProjectHero />
      </div>

      <section id="experience" className="min-h-screen px-8 py-20">
        <h2 className="text-4xl font-semibold mb-8 text-center">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-2xl font-bold">Freelance Full-Stack Developer</h3>
            <p className="text-sm text-base-content/70">2023 - Present</p>
            <p>
              Building and deploying responsive full-stack web apps with backend logic,
              authentication, and AI integrations.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Hackathons & Collaborations</h3>
            <p className="text-sm text-base-content/70">2024 - Present</p>
            <p>
              Participated in national-level hackathons under tracks like AI/ML and Sustainability.
              Built AI-powered waste classifiers, interview bots, and more.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen px-8 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-lg max-w-xl mx-auto">
          Want to work together or just say hi? Reach out via email at:
        </p>
        <a
          href="mailto:souvik@example.com"
          className="mt-4 inline-block text-lg underline underline-offset-4 text-primary hover:text-primary-focus"
        >
          souvik@example.com
        </a>
      </section>
    </div>
  );
}
