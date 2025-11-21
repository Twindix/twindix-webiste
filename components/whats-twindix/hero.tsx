"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/atoms";
import { Hero } from "@/components";
import { portalUrl } from "@/data";

export const WhatsTwindixHero = () => (
    <Hero>
        <motion.div
            className="container flex flex-col items-center gap-4 lg:gap-8"
            animate={{
                opacity: 1,
                y: 0,
            }}
            initial={{
                opacity: 0,
                y: -200,
            }}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
            }}
        >
            <div className="grid place-items-center">
                <h1 className="text-gradient">What&apos;s Twindix ?</h1>
                <p>
                    Twindix builds on
                    {" "}
                    <span className="text-blue-500">Hugo Münsterberg’s</span>
                    {" "}
                    legacy, blending Psychology with global management science to decode leadership.
                </p>
            </div>
            <div className="grid place-items-center w-full lg:w-fit">
                <Link
                    className="w-full lg:w-fit"
                    href={portalUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button
                        ariaLabel="Get The Assessment"
                        variant="outlined"
                        withArrowsIcon
                    >
                        Get Started with Twindix
                    </Button>
                </Link>
            </div>
        </motion.div>
    </Hero>
);
