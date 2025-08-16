"usse client"
import { TextReveal } from "@/components/magicui/text-reveal";

import React from 'react'
import { Button } from "./ui/button";

const About = () => {
    return (
        <>


            <TextReveal className="">
                A curious mind with a passion for technology, always eager to explore how ideas can be transformed into functional, impactful applications. With a strong foundation in programming and web development, the focus is on creating clean, scalable, and user-friendly solutions that not only work well but also feel intuitive. The journey has been shaped by continuous learning, experimentation, and a drive to blend creativity with technical skills.
            </TextReveal>

            <Button variant={"outline"}
                className="-mt-25 z-30 font-semibold px-6 py-5  shadow-md transition cursor-none"
            >
                Learn More
            </Button>
        </>





    )
}

export default About
