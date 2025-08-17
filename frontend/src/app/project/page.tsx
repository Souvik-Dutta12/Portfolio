"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { PinContainer } from "@/components/ui/3d-pin";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Segment from "@/components/Segment";
import Image from "next/image";

const Page = () => {
  const projects = [
    {
      id: 1,
      title: "Aceternity UI",
      desc: "Customizable Tailwind CSS and Framer Motion Components.",
      image: "/profileimg.png",
      href: "#",
      team: [
        { id: 1, name: "React",  icon: <i className="ri-reactjs-fill text-xl text-teal-400"></i>  },
        { id: 2, name: "Tailwind CSS",  icon: <i className="ri-tailwind-css-fill text-xl text-teal-400"></i> },
      ],
    },
    {
      id: 2,
      title: "Project 2",
      desc: "Short description for project two goes here.",
      image: "/profileimg.png",
      href: "#",
      team: [
        { id: 1, name: "Express JS",  icon: <i className="ri-javascript-fill text-xl text-yellow-400"></i> },
        { id: 2, name: "Mongodb",  icon: <i className="ri-reactjs-fill text-xl text-green-400"></i> },
      ],
    },
    {
      id: 3,
      title: "Project 3",
      desc: "Short description for project three goes here.",
      image: "/profileimg.png",
      href: "#",
      team: [
        { id: 1, name: "JS",  icon: <i className="ri-javascript-fill text-xl text-yellow-400"></i> },
      ],
    },
    {
      id: 4,
      title: "Project 4",
      desc: "Short description for project four goes here.",
      image: "/profileimg.png",
      href: "#",
      team: [
        { id: 1, name: "html",  icon: <i className="ri-html5-fill text-xl text-orange-400"></i> },
      ],
    },
    {
      id: 5,
      title: "Project 5",
      desc: "Short description for project five goes here.",
      image: "/profileimg.png",
      href: "#",
      team: [
        { id: 1, name: "Python",  icon: <i className="ri-reactjs-fill text-xl text-sky-400"></i> },
      ],
    },
  ];

  return (
    <div
      className={cn(
        "relative mt-32 min-h-screen max-w-2xl mx-auto transition-colors duration-500 text-base-content"
      )}
    >
      <span className="text-5xl font-bold">Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 mt-10">
        {projects.map((project) => (
          <PinContainer
            key={project.id}
            className="cursor-none"
            title={project.title}
            href={project.href}
          >
            <div className="cursor-none flex basis-full flex-col p-4 tracking-tight w-[18rem] h-[22rem]">
              <h3 className="pb-2 m-0 font-bold text-3xl text-amber-500 dark:text-white">
                {project.title}
              </h3>

              <p className="text-base m-0 p-0 font-normal text-black dark:text-zinc-400">
                {project.desc}
              </p>

              <div className="mt-3">
                <AnimatedTooltip items={project.team} />
              </div>
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={160}
                className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              />

            </div>
          </PinContainer>
        ))}
      </div>

      <Segment />
    </div>
  );
};

export default Page;
