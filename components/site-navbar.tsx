// components/site-navbar.tsx

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

const BLUE = "#0A51B7";

export function SiteNavbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => (href === "/" ? pathname === href : pathname?.startsWith(href));

    return (
        <header
            className="sticky top-0 z-50 border-b"
            style={{

                backdropFilter: "blur(8px)",
                // soft bluish gradient like your screenshot
                background:
          "linear-gradient(180deg, rgba(214,232,250,0.55) 0%, rgba(255,255,255,0.85) 100%)",
            }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* top row */}
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* logo */}
                    <Link
                        className="flex-shrink-0"
                        href="/"
                    >
                        <BrandMark />
                    </Link>

                    {/* center nav (desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={`text-sm transition ${
                                    isActive(item.href)
                                        ? "text-gray-900 font-medium"
                                        : "text-gray-700 hover:text-gray-900"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* right actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            className="rounded-full border px-4 py-2 text-sm font-medium"
                            href="/contact"
                            style={{
                                borderColor: BLUE,
                                color: BLUE,
                            }}
                        >
                            Contact Us
                        </Link>
                        <Link
                            className="rounded-full px-4 py-2 text-sm font-medium text-white"
                            href="/login"
                            style={{ backgroundColor: BLUE }}
                        >
                            Log in
                        </Link>
                    </div>

                    {/* hamburger (mobile) */}
                    <button
                        aria-expanded={open}
                        aria-label="Toggle menu"
                        className="md:hidden inline-flex items-center justify-center rounded-lg border p-2"
                        style={{ borderColor: "rgba(0,0,0,0.1)" }}
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

                {/* bottom row (mobile drawer) */}
                <div
                    className={`md:hidden border-t transition-[max-height] duration-200 overflow-hidden ${
                        open ? "max-h-96" : "max-h-0"
                    }`}
                >
                    <nav className="py-3 flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={`rounded px-2 py-2 text-sm transition hover:bg-gray-50 ${
                                    isActive(item.href) ? "bg-gray-100 font-medium text-gray-900" : "text-gray-800"
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-2 flex items-center gap-2">
                            <Link
                                className="flex-1 text-center rounded-full border px-4 py-2 text-sm font-medium"
                                href="/contact"
                                style={{
                                    borderColor: BLUE,
                                    color: BLUE,
                                }}
                                onClick={() => setOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <Link
                                className="flex-1 text-center rounded-full px-4 py-2 text-sm font-medium text-white"
                                href="/login"
                                style={{ backgroundColor: BLUE }}
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
}
