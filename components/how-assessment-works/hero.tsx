"use client";

import { motion } from "framer-motion";

import { Hero } from "@/components";

export const HowAssessmentWorksHero = () => (
    <Hero>
        <motion.div
            className="container"
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
                <h1 className="text-gradient3">How Assessment Works</h1>
                <p>
                    Step
                    <span className="text-blue-500 text-lg lg:text-2xl"> by </span>
                    Step
                    {" "}
                    <br />
                    Guide to taking the assessment
                </p>
            </div>
        </motion.div>
    </Hero>
);
