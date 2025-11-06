"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/atoms";
import { Hero } from "@/components";
import { portalUrl } from "@/data";

export const AboutHero = () => (
    <Hero>
        <motion.div
            className="container flex flex-col items-center gap-4 lg:gap-8"
            animate={{
                opacity: 1,
                y: 0,
            }}
            initial={{
                opacity: 0,
                y: -20,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
        >
            <div className="grid place-items-center">
                <h1 className="text-gradient3">About Us</h1>
                <p>
                    <span className="text-blue-500">TWINDIX Empowers</span>
                    {" "}
                    leaders through
                    {" "}
                    <span className="text-blue-500">Psychological</span>
                    {" "}
                    insight and Management science to unlock personal and team
                    {" "}
                    <span className="text-blue-500">potential</span>
                    .
                </p>
            </div>
            <Link
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
        </motion.div>
    </Hero>
);
