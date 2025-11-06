"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/atoms";
import { expandedBenefitsData, portalUrl } from "@/data";

export const PrizeExpandedBenefits = () => (
    <section className="pt-5 lg:pt-10 pb-10 lg:pb-20">
        <motion.div
            className="title-with-white-box mb-4 lg:mb-8"
            initial={{
                opacity: 0,
                y: -20,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
        >
            <h2 className="text-gradient1">Expanded Benefits</h2>
        </motion.div>
        <div className="flex flex-col gap-3 lg:gap-6">
            {expandedBenefitsData.map(({
                text,
                title,
            }, index) => (
                <motion.div
                    key={index} // eslint-disable-line
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -20 : 20,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                >
                    <h3 className="text-gradient1">{title}</h3>
                    <p>{text}</p>
                </motion.div>
            ))}
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-6 mt-4 lg:mt-8">
            <motion.h4
                initial={{
                    opacity: 0,
                    x: -20,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
            >
                Ready to transform your leadership
                {" "}
                <br className="hidden lg:block" />
                and unlock your organization’s full
                {" "}
                <br className="hidden lg:block" />
                potential?
            </motion.h4>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 20,
                }}
                transition={{
                    duration: 0.8,
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
        </div>
    </section>
);
