"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import professor from "@/app/assets/images/professor.webp";
import { Button } from "@/atoms";
import { portalUrl } from "@/data";

export const WhatsTwindixOriginsAndInspiration = () => (
    <section className="pb-10 lg:pb-10 pt-10 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
            <motion.div
                className="col-span-1 lg:col-span-6 flex flex-col gap-4 lg:gap-8"
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
                    <h2 className="text-gradient">Origins and Inspiration</h2>
                    <p>
                        <span className="text-blue-500">Twindix</span>
                        {" "}
                        is deeply inspired by the pioneering work of
                        {" "}
                        <span className="text-blue-500">Hugo Münsterberg</span>
                        , a trailblazer in industrial-organizational psychology.
                        {" "}
                        <span className="text-blue-500">Münsterberg</span>
                        {" "}
                        was among the first to apply psychological insights to the workplace, studying how human behavior influences productivity, leadership, and decision-making. His belief in matching individual strengths to organizational needs laid the foundation for modern leadership assessment tools.
                        <br className="hidden lg:block mt-2" />
                        <br className="hidden lg:block" />
                        Building on this legacy,
                        {" "}
                        <span className="text-blue-500">Twindix</span>
                        {" "}
                        integrates Münsterberg’s principles with decades of management science research, drawing from
                        {" "}
                        <span className="text-blue-500">1,500</span>
                        {" "}
                        global studies and
                        {" "}
                        <span className="text-blue-500">230 business models</span>
                        . This
                        {" "}
                        <span className="text-blue-500">powerful combination</span>
                        {" "}
                        offers leaders a comprehensive tool to understand both their own strengths and those of their teams. With Twindix, leaders gain clarity into team dynamics, make more informed decisions, and drive organizational success by focusing on behavior-driven strategies.
                        <br className="hidden lg:block" />
                        <br className="hidden lg:block" />
                        This blend of psychology and management theory ensures that Twindix is not just another assessment—it’s a transformational tool designed to bring clarity, confidence, and precision to leadership.
                    </p>
                </div>
                <Link
                    href={portalUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button
                        ariaLabel="Get Started with Twindix"
                        variant="outlined"
                        withArrowsIcon
                    >
                        Get Started with Twindix
                    </Button>
                </Link>
            </motion.div>
            <motion.div
                className="col-span1 lg:col-span-6 flex lg:justify-end"
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                initial={{
                    opacity: 0,
                    x: 200,
                }}
                transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: "easeOut",
                }}
            >
                <Image
                    alt="ideation"
                    height={526}
                    placeholder="blur"
                    src={professor}
                    width={416}
                    priority
                />
            </motion.div>
        </div>
    </section>
);
