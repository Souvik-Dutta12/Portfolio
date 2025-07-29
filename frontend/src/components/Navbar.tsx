"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "@/context/themeContext"; // your custom ThemeContext

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [activeLink, setActiveLink] = useState("Home");

    const { theme, toggleTheme } = useTheme(); 

    const links = [
        { name: "Home", icon: "ri-home-3-line", href: "#" },
        { name: "About", icon: "ri-user-3-line", href: "#" },
        { name: "Projects", icon: "ri-code-s-slash-line", href: "#" },
        { name: "Experiences", icon: "ri-briefcase-line", href: "#" },
        { name: "Contact", icon: "ri-mail-line", href: "#" },
    ];

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <div className="flex items-center justify-between gap-15 font-semibold">
                    <div className="flex items-center justify-evenly gap-2">
                        {links.map((link, indx) => (
                            <Link href={link.href} key={indx} onClick={() => setActiveLink(link.name)}>
                                <button
                                    className={cn(
                                        "flex items-center justify-center gap-1 p-3 rounded-xl duration-300 cursor-none",
                                        activeLink === link.name
                                            ? "bg-amber-100 text-black dark:bg-zinc-800 dark:text-white"
                                            : "bg-amber-50 hover:bg-amber-100 text-black dark:bg-black dark:hover:bg-zinc-800 dark:text-zinc-400"
                                    )}
                                >
                                    <i className={`${link.icon}`}></i>
                                    <span>{link.name}</span>
                                </button>
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "flex items-center justify-center gap-1 p-3 rounded-xl duration-300 cursor-none",
                            theme === "dark"
                                ? "bg-zinc-800 text-white"
                                : "bg-amber-50 hover:bg-amber-100 text-black"
                        )}
                    >
                        {theme === "dark" ? (
                            <i className="ri-moon-fill"></i>
                        ) : (
                            <i className="ri-sun-line"></i>
                        )}
                    </button>
                </div>
            </Menu>
        </div>
    );
}

export default Navbar;
