"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/atoms";
import { portalUrl, researchDrivenConfidenceData } from "@/data";

export const PrizeResearchDrivenConfidence = () => (
    <section className="py-5 lg:py-10">
        <motion.div
            className="title-with-white-box mb-4 lg:mb-8"
            initial={{
                opacity: 0,
                y: -200,
            }}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
        >
            <h2 className="text-gradient1">
                Research
                <br />
                Driven Confidence
            </h2>
        </motion.div>
        <div className="flex flex-col gap-3 lg:gap-6">
            {researchDrivenConfidenceData.map(({
                items,
                text,
                title,
                type,
            }, index) => (
                <motion.div
                    key={index} // eslint-disable-line
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -200 : 200,
                    }}
                    transition={{
                        delay: index * 0.06,
                        duration: 1,
                        ease: "easeOut",
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                >
                    <h3 className="text-gradient1">{title}</h3>
                    {type === "list" ? (
                        <ul className="list-disc list-inside">
                            {items?.map((li, i) => <li key={i}>{li}</li>)} {/* eslint-disable-line */}
                        </ul>
                    ) : <p>{text}</p>}
                </motion.div>
            ))}
        </div>
        <motion.div
            className="w-full flex flex-col lg:flex-row justify-center lg:justify-end mt-4 lg:mt-8"
            initial={{
                opacity: 0,
                x: 200,
            }}
            transition={{
                delay: 5 * 0.06,
                duration: 1,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
        >
            <Link
                href={portalUrl}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Button
                    ariaLabel="Start Test"
                    variant="outlined"
                    withArrowsIcon
                >
                    Start Test
                </Button>
            </Link>
        </motion.div>
    </section>
);
