"use client"
import React from 'react'

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Button } from './ui/button';
import Image from 'next/image';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const ProjectHero = () => {


  const people = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },

  ];

  const Skeleton = () => (
    <div className="relative w-full h-full min-h-[6rem] rounded-xl border border-transparent dark:border-white/20 bg-neutral-100 dark:bg-black overflow-hidden">
      <Image
        src="/profileimg.png"
        alt="Souvik Dutta"
        fill
        className="object-cover object-center"
      />
    </div>
  );
  const items = [
    {
      title: "PrepBot AI",
      description: " A real-time mock interview app using AI voice interaction, feedback, session history, and emotion detection. Built with MERN stack + Vapi.",
      header: <Skeleton />,
      className: "md:col-span-2 ",
      icon: <AnimatedTooltip items={people} />,
    },
    {
      title: "DevPlay",
      description: "A YouTube-style platform for developers to upload, like, and explore project videos — brown-themed UI with Clerk auth and Cloudinary integration.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <AnimatedTooltip items={people} />,
    },

  ];
  return (
    <>
      <span className='text-4xl font-semibold mb-6 text-center'>
        Projects
      </span>
      <BentoGrid className="max-w-4xl  mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (

          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />

        ))}
      </BentoGrid>

      <Button variant={"outline"}
        className="mt-10 font-semibold px-6 py-5  shadow-md transition cursor-none"
      >
        See More
      </Button>
    </>
  )
}

export default ProjectHero
