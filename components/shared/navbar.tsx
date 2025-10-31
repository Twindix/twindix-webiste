"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import logo from "@/app/assets/logo.webp";
import { Button } from "@/atoms";
import { constantsData, navbarItemsData, routeUrlsData } from "@/data";
import { generateValidClassNameHandler } from "@/lib/utils";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const isActive = (href: string) => (href === routeUrlsData.home ? pathname === href : pathname?.startsWith(href));

    return (
        <header className="fixed top-3 left-0 right-0 z-50">
            <div className="mx-auto container">
                <div className="nav-glass h-14 lg:h-20 px-3 sm:px-4 flex items-center justify-between gap-4">
                    <Link
                        aria-label="Logo"
                        className="shrink-0"
                        href={routeUrlsData.home}
                    >
                        <Image
                            alt="logo"
                            className="w-[134px] h-12 lg:h-[74px]"
                            placeholder="blur"
                            src={logo}
                            priority
                        />
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navbarItemsData.map(({
                            href,
                            label,
                        }) => (
                            <Link
                                aria-label={label}
                                href={href}
                                key={href}
                                className={generateValidClassNameHandler(
                                    "text-sm transition text-black hover:text-foreground xl:text-lg font-medium",
                                    isActive(href) && "text-foreground font-medium",
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            ariaLabel={constantsData.urls.contact}
                            variant="outlined"
                        >
                            <Link href={routeUrlsData.contact}>{constantsData.urls.contact}</Link>
                        </Button>
                        <Button
                            ariaLabel={constantsData.urls.login}
                            variant="contained"
                        >
                            <Link href={routeUrlsData.login}>{constantsData.urls.login}</Link>
                        </Button>
                    </div>
                    <Button
                        ariaLabel="Burger Menu"
                        className="lg:hidden"
                        variant="outlined"
                        onClick={() => setOpen((prevOpen) => !prevOpen)}
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {open ? (
                                <path
                                    d="M6 18 18 6M6 6l12 12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            ) : (
                                <path
                                    d="M3 6h18M3 12h18M3 18h18"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            )}
                        </svg>
                    </Button>
                </div>
                <div className={`lg:hidden transition-[max-height] duration-200 overflow-hidden ${open ? "max-h-fit top-2 shadow-2xl nav-glass px-4 rounded-2xl relative" : "max-h-0"} `}>
                    <nav className="py-3 flex flex-col gap-2">
                        {navbarItemsData.map(({
                            href,
                            label,
                        }) => (
                            <Link
                                aria-label={label}
                                href={href}
                                key={href}
                                className={generateValidClassNameHandler(
                                    "text-xs transition text-black hover:text-foreground p-2 font-medium",
                                    isActive(href) && "text-foreground font-medium",
                                )}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="mt-2 flex items-center gap-3">
                            <Button
                                ariaLabel={constantsData.urls.contact}
                                className="flex-1"
                                variant="outlined"
                            >
                                <Link href={routeUrlsData.contact}>{constantsData.urls.contact}</Link>
                            </Button>
                            <Button
                                ariaLabel={constantsData.urls.login}
                                className="flex-1"
                                variant="contained"
                            >
                                <Link href={routeUrlsData.login}>{constantsData.urls.login}</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
