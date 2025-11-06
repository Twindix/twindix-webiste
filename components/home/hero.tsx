"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import curvedLine from "@/app/assets/icons/curved_line.svg";
import star from "@/app/assets/icons/star.svg";
import assessmentsDocs1 from "@/app/assets/images/assessments_docs_1.webp";
import assessmentsDocs2 from "@/app/assets/images/assessments_docs_2.webp";
import { Hero } from "@/components";

export const HomeHero = () => (
    <Hero hasGlassBg>
        <div className="container relative">
            <motion.div
                className="grid place-items-center"
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
                <h1 className="text-primary">TWINDIX</h1>
                <p className="text-gradient2 font-bold! text-6xl! lg:text-8xl!">
                    Uncover the core
                    {" "}
                    <br className="hidden lg:block" />
                    {" "}
                    drivers
                    <span className="text-primary text-xl xl:text-3xl font-medium mt-2 lg:mt-4 block">of your leadership style—and see how you measure up against</span>
                    <span className="text-3xl xl:text-5xl text-gradient3 relative bottom-4 lg:bottom-8 xl:bottom-4">World class executives</span>
                </p>
            </motion.div>
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <Image
                    alt="curved_line"
                    className="relative bottom-5"
                    src={curvedLine}
                />
            </motion.div>
            <motion.div
                animate={{ opacity: 1 }}
                className="flex justify-between"
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <Image
                    alt="assessments_docs"
                    className="lg:absolute left-0 top-[45%] lg:size-[180px]"
                    height={180}
                    src={assessmentsDocs2}
                    width={180}
                />
                <Image
                    alt="assessments_docs"
                    className="lg:absolute right-0 top-[45%] lg:size-[180px]"
                    height={180}
                    src={assessmentsDocs1}
                    width={180}
                />
            </motion.div>
            <div>
                <Image
                    alt="star"
                    className="absolute right-10 md:right-0 top-0"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-10 md:right-[30%] top-[10%]"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-15 top-[38%]"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-1/4 top-[60%] md:top-4/6"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-2/6 -top-10"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-1/5 top-1/50"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-1/11 sm:left-3/12 top-2/5"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-[48%] top-1/4"
                    src={star}
                />
            </div>
        </div>
    </Hero>
);
