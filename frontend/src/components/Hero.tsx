"use client";

import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import { MorphingText } from "@/components/magicui/morphing-text";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"


const Hero = () => {
    const { theme } = useTheme();

    return (
        <div className=" min-h-screen max-w-2xl mx-auto overflow-hidden z-20 pt-30 flex flex-col items-center justify-center bg-transparent text-black  dark:text-zinc-400  ">

            <div className="max-w-2xl mx-auto flex flex-col md:flex-col items-center  mt-3 gap-5">

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



                    <p className="text-start text-xl font-semibold leading-relaxed text-zinc-400">



                        I’m a
                        <span className="font-semibold text-amber-500 dark:text-white ">Full-stack Developer</span>
                        who spends more time chatting with APIs than people, crafting projects that usually work — and occasionally surprise me. I turn ideas into reality, from
                        <span className="text-amber-400 font-semibold cursor-none">
                            <Tooltip>
                                <TooltipTrigger className="cursor-none">
                                    Kothamala AI
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>An ai chatbot</p>
                                </TooltipContent>
                            </Tooltip>
                        </span>
                        , a dive into language learning, to
                        <span className="text-amber-400 font-semibold">
                            <Tooltip>
                                <TooltipTrigger className="cursor-none">
                                    Blogger
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>A fullstack blogging platform</p>
                                </TooltipContent>
                            </Tooltip>
                        </span>
                        , where clean design meets AI-powered writing. Whether it’s perfecting backend logic or polishing frontend details, I’m always building, breaking, and learning along the way.
                    </p>



                    <div className="mt-3 mx-auto flex text-lg flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button variant={"outline"}
                            className="font-semibold px-6 py-5  shadow-md transition cursor-none"
                        >
                            <i className="ri-download-line"></i>Resume
                        </Button>
                        <Button variant={"default"}
                            className="  font-semibold px-6 py-5 shadow-md transition cursor-none"
                        >
                            <i className="ri-shake-hands-fill"></i>Connect
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
