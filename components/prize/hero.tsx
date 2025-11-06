"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import business from "@/app/assets/images/business.webp";
import { Hero } from "@/components";

export const PrizeHero = () => (
    <Hero>
        <motion.div
            className="container mb-4 lg:mb-8"
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
                <h1 className="text-gradient3">The Prize</h1>
                <p>
                    <span className="text-blue-500">Benefits</span>
                    {" "}
                    of Understanding Organizational Mindset and
                    {" "}
                    <br className="hidden lg:block" />
                    Management
                    {" "}
                    <span className="text-blue-500">Indicators</span>
                </p>
            </div>
        </motion.div>
        <Image
            alt="business"
            src={business}
            priority
        />
    </Hero>
);
