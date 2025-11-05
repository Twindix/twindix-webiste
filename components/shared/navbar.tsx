"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@/app/assets/images/logo.webp";
import { Button } from "@/atoms";
import { navbarItemsData, portalLink, routeUrlsData } from "@/data";
import { generateValidClassNameHandler, scrollToHomeTargetHandler } from "@/lib/utils";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const [isFixed, setIsFixed] = useState(true);

    const router = useRouter();

    const pathname = usePathname();

    const isActive = (href: string) => (href === routeUrlsData.home ? pathname === href : pathname?.startsWith(href));

    useEffect(
        () => {
            const onScroll = () => {
                setIsFixed(window.scrollY <= 200);
            };

            onScroll();

            window.addEventListener(
                "scroll",
                onScroll,
                { passive: true },
            );

            return () => window.removeEventListener(
                "scroll",
                onScroll,
            );
        },
        [],
    );

    useEffect(
        () => {
            if (open) setOpen(false); // eslint-disable-line
        },
        [pathname], // eslint-disable-line
    );

    return (
        <header className={generateValidClassNameHandler(
            "z-50",
            isFixed ? "fixed top-3 left-0 right-0" : "relative",
        )}
        >
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
                            href = "/",
                            label,
                            targetId,
                        }, index) => (targetId ? (
                            <Button
                                ariaLabel={label}
                                className="text-black! hover:no-underline hover:text-foreground!"
                                variant="link"
                                key={index} // eslint-disable-line
                                isMini
                                onClick={() => scrollToHomeTargetHandler(
                                    targetId,
                                    router,
                                )}
                            >
                                {label}
                            </Button>
                        ) : (
                            <Link
                                aria-label={label}
                                href={href}
                                key={index} // eslint-disable-line
                                className={generateValidClassNameHandler(
                                    "text-sm text-black hover:text-foreground font-medium transition",
                                    isActive(href) && "text-blue-700 font-medium",
                                )}
                            >
                                {label}
                            </Link>
                        )))}
                    </nav>
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            ariaLabel="Contact"
                            variant="outlined"
                            isMini
                            onClick={() => scrollToHomeTargetHandler("contact_us")}
                        >
                            Contact
                        </Button>
                        <Link
                            href={portalLink}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button
                                ariaLabel="Login"
                                variant="contained"
                                isMini
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                    <Button
                        ariaLabel="Burger Menu"
                        className="lg:hidden"
                        variant="outlined"
                        isMini
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
                    <nav className="py-3 flex flex-col gap-4">
                        {navbarItemsData.map(({ // eslint-disable-line
                            href = "/",
                            label,
                            targetId,
                        }, index) => targetId ? (
                            <Button
                                ariaLabel={label}
                                className="text-black! hover:no-underline"
                                variant="link"
                                key={index} // eslint-disable-line
                                isMini
                                onClick={() => scrollToHomeTargetHandler(
                                    targetId,
                                    router,
                                )}
                            >
                                {label}
                            </Button>
                        ) : (
                            <Link
                                aria-label={label}
                                href={href}
                                key={index} // eslint-disable-line
                                className={generateValidClassNameHandler(
                                    "text-xs text-black hover:text-foreground font-medium transition",
                                    isActive(href) && "text-blue-700 font-medium",
                                )}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="mt-2 flex items-center gap-2">
                            <Button
                                ariaLabel="Contact"
                                className="flex-1"
                                variant="outlined"
                                isMini
                                onClick={() => scrollToHomeTargetHandler("contact_us")}
                            >
                                Contact
                            </Button>
                            <Link
                                className="flex-1"
                                href={portalLink}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Button
                                    ariaLabel="Login"
                                    className="w-full"
                                    variant="contained"
                                    isMini
                                >
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
