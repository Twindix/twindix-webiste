"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/brand";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
    {
        href: "/about",
        label: "About Us",
    },
    {
        href: "/assessment",
        label: "Assessment",
    },
    {
        href: "/prize",
        label: "The Prize",
    },
    {
        href: "/whats-twindix",
        label: "What’s Twindix?",
    },
    {
        href: "/how-assessment-works",
        label: "How to Assessment Work",
    },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (href: string) => (href === "/" ? pathname === href : pathname?.startsWith(href));

    return (
    /* fixed so it floats; hero starts at the very top behind it */
        <header className="fixed top-3 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                <div className="nav-glass h-14 md:h-16 px-3 sm:px-4 flex items-center justify-between gap-4">
                    <Link
                        className="flex-shrink-0"
                        href="/"
                    >
                        <BrandMark />
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={`text-sm transition ${
                                    isActive(item.href)
                                        ? "text-foreground font-medium"
                                        : "text-blue-900/80 hover:text-blue-900"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            className="rounded-full border px-4 py-2 text-sm font-medium border-primary text-primary hover:bg-blue-50"
                            href="/contact"
                        >
                            Contact Us
                        </Link>
                        <Link
                            className="rounded-full px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-blue-700"
                            href="/login"
                        >
                            Log in
                        </Link>
                    </div>

                    {/* mobile menu button */}
                    <button
                        aria-expanded={open}
                        aria-label="Toggle menu"
                        className="md:hidden inline-flex items-center justify-center rounded-lg border p-2 border-blue-100 text-blue-900"
                        onClick={() => setOpen((v) => !v)}
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
                    </button>
                </div>

                {/* mobile drawer */}
                <div className={`md:hidden transition-[max-height] duration-200 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
                    <nav className="py-3 flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={`rounded px-2 py-2 text-sm transition hover:bg-blue-50 ${
                                    isActive(item.href) ? "bg-blue-100 font-medium text-blue-900" : "text-blue-900/90"
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-2 flex items-center gap-2">
                            <Link
                                className="flex-1 text-center rounded-full border px-4 py-2 text-sm font-medium border-primary text-primary"
                                href="/contact"
                                onClick={() => setOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <Link
                                className="flex-1 text-center rounded-full px-4 py-2 text-sm font-medium text-white bg-primary"
                                href="/login"
                                onClick={() => setOpen(false)}
                            >
                                Log in
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
