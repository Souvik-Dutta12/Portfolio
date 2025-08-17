"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
const Footer: React.FC = () => {
    return (
        <footer className="w-2xl mx-auto mt-45 mb-10 ">
            <div className=" mx-auto ">
                <div className="flex flex-col md:flex-row justify-between  items-center gap-6 ">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-bold tracking-wide text-amber-500"
                    >
                        Souvik Dutta
                    </motion.div>

                    {/* Socials */}
                    
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm  text-gray-300">
                    
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">

                        <Button variant={"outline"} className="cursor-none shadow-md transition duration-300 text-sm rounded-full">Email<i className="ri-arrow-right-up-line"></i></Button>
                        <Button variant={"outline"} className="cursor-none shadow-md transition duration-300 text-sm rounded-full">Github<i className="ri-arrow-right-up-line"></i></Button>
                        <Button variant={"outline"} className="cursor-none shadow-md transition duration-300 text-sm rounded-full">Facebook<i className="ri-arrow-right-up-line"></i></Button>
                        <Button variant={"outline"} className="cursor-none shadow-md transition duration-300 text-sm rounded-full">Linkedin<i className="ri-arrow-right-up-line"></i></Button>

                    </div>
                    <p className="text-sm font-bold text-zinc-400 mt-2">
                        Built with Next.js. © {new Date().getFullYear()} All rights reserved.
                    </p>
                        </div>
                    <div>
                        <ul className="flex flex-col items-end">
                            <Button variant={"link"} className="cursor-none "><li>About</li></Button>
                            <Button variant={"link"} className="cursor-none "><li>Projects</li></Button>
                            <Button variant={"link"} className="cursor-none "><li>Experiences</li></Button>
                            <Button variant={"link"} className="cursor-none "><li>Contact</li></Button>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
