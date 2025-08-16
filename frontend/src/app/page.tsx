"use client"
import Image from "next/image";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "@/context/themeContext";
import Segment from "@/components/Segment";

export default function Home() {

  const { theme } = useTheme();

  return (
<div
      className={cn(
        "relative min-h-screen w-full transition-colors duration-500 text-base-content")
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

       <section id="about" className="min-h-screen px-8 py-20">
        <h2 className="text-4xl font-semibold mb-6 text-center">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          I'm a self-driven developer who loves to solve real-world problems with code.
          My tech journey started with C and now I build full-stack apps with MongoDB, Express,
          React, and Node.js — and even spice them up with AI/ML features. I enjoy learning and
          pushing my limits with each project.
        </p>
      </section>

      <section id="projects" className="min-h-screen px-8 py-20">
        <h2 className="text-4xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md bg-base-200">
            <h3 className="text-2xl font-bold mb-2">PrepBot AI</h3>
            <p>
              A real-time mock interview app using AI voice interaction, feedback, session history,
              and emotion detection. Built with MERN stack + Vapi.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-base-200">
            <h3 className="text-2xl font-bold mb-2">DevPlay</h3>
            <p>
              A YouTube-style platform for developers to upload, like, and explore project videos
              — brown-themed UI with Clerk auth and Cloudinary integration.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen px-8 py-20">
        <h2 className="text-4xl font-semibold mb-6 text-center">Experience</h2>
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
