"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import star from "@/app/assets/icons/star.svg";
import assessmentDocs1 from "@/app/assets/images/assessment_docs_1.webp";
import assessmentDocs2 from "@/app/assets/images/assessment_docs_2.webp";
import { Button } from "@/atoms";
import { Hero } from "@/components";
import { portalUrl } from "@/data";

export const HomeHero = () => (
    <Hero hasGlassBg>
        <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6">
            <motion.div
                className="flex flex-col gap-4 lg:gap-8 justify-center col-span-1 lg:col-span-9"
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                initial={{
                    opacity: 0,
                    x: -200,
                }}
                transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: "easeOut",
                }}
            >
                <div>
                    <h1 className="text-gradient text-left!">Find Fit <span className="text-4xl md:text-3xl lg:text-5xl font-medium">&</span> <br className="md:hidden"/>Build Your Team</h1>
                    <h2 className="text-gradient">Right People  ..  Right Place</h2>
                    <p className="text-foreground! max-w-[790px] text-lg! lg:text-2xl! text-left!">Whether you&apos;re choosing a career or choosing the right people, Twindix helps you understand abilities, match them to the right roles, and move forward with certainty and purpose.</p>
                </div>
                <Link
                    href={portalUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button
                        ariaLabel="Get The Assessment"
                        variant="contained"
                        withArrowsIcon
                    >
                        Get The Assessment
                    </Button>
                </Link>
            </motion.div>
            <motion.div
                className="flex lg:block gap-2 justify-between col-span-1 lg:col-span-3"
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                initial={{
                    opacity: 0,
                    x: 200,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <Image
                    alt="assessment_docs"
                    className="w-[45%] lg:w-auto"
                    height={340}
                    placeholder="blur"
                    src={assessmentDocs1}
                    width={365}
                    priority
                />
                <Image
                    alt="assessment_docs"
                    className="w-[45%] lg:w-auto"
                    height={340}
                    placeholder="blur"
                    src={assessmentDocs2}
                    width={365}
                    priority
                />
            </motion.div>
            <div>
                <Image
                    alt="star"
                    className="absolute right-10 md:right-15 -top-5"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-10 md:right-[35%] top-[10%]"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-[40%] top-[15%] md:top-[40%]"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute right-[20%] lg:right-[35%] top-0 lg:top-4/6"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-[30%] -top-10"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-5 lg:left-[16%] top-[12%]"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-[30%] top-10 lg:top-1/2"
                    src={star}
                />
                <Image
                    alt="star"
                    className="absolute left-5 md:right-[95%] lg:right-[90%] -top-5 lg:top-1/4"
                    src={star}
                />
            </div>
        </div>
    </Hero>
);
