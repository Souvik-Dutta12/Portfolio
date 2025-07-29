"use client";

import { useTheme } from "@/context/themeContext";
import { Particles } from "@/components/magicui/particles";
import Image from "next/image";
import { MorphingText } from "@/components/magicui/morphing-text";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const Hero = () => {
    const { theme } = useTheme();

    return (
        <div className="absolute min-h-screen w-full mx-auto overflow-hidden z-20 pt-30 flex flex-col items-center justify-center bg-transparent text-black  dark:text-zinc-400 px-6 sm:px-12">


            <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-col items-center gap-7">

                <div className="relative w-48 h-48  rounded-full overflow-hidden shadow-xl z-30 bg-amber-500 dark:bg-zinc-800" >
                    <Image
                        src="/profileimg.png"
                        alt="Souvik Dutta"
                        fill
                        className="object-cover object-center scale-[1.12]"
                    />
                </div>


                <div className="flex flex-col text-center justify-center ">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Hey, I'm <span className="text-amber-500 dark:text-white">Souvik</span>
                    </h1>
                    <p className="mt-5  text-xl text-amber-500 dark:text-white">
                        <MorphingText texts={[
                            "MERN Stack Developer",
                            "AI/ML Enthusiast",
                            "Full-Stack Problem Solver",
                            "Next.js & Tailwind Specialist",
                        ]} />
                    </p>



                        <p className="mt-6 text-xl font-semibold leading-relaxed text-zinc-400">
  I'm a <span className="font-semibold text-white">Full-stack Developer</span> who talks to APIs more than humans and builds cool things that somehow work — most of the time. I love turning ideas into products, like <span className="text-amber-400 font-semibold">PrepBot AI</span>, where interviews meet AI, or <span className="text-amber-400 font-semibold"><Tooltip>
  <TooltipTrigger>Devplay</TooltipTrigger>
  <TooltipContent>
    <p>just checking</p>
  </TooltipContent>
</Tooltip></span>, my way of bringing dev videos into a platform made for builders. I’ve also explored language learning through <span className="text-amber-400 font-semibold">Kothamala AI</span>, and recently built <span className="text-amber-400 font-semibold">Blogger</span>, a clean space where writing and AI go hand in hand. Whether it's backend logic or frontend polish, I'm always building, breaking, and learning.
</p>



                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full shadow-md transition"
                        >
                            📄 Resume
                        </a>
                        <a
                            href="#contact"
                            className="bg-transparent border border-amber-500 hover:bg-amber-500 text-white hover:text-black font-semibold px-6 py-3 rounded-full transition"
                        >
                            🤝 Connect
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
