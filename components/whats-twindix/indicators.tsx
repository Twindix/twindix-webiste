"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/atoms";
import { RichText } from "@/components";
import { indicatorsData, portalUrl } from "@/data";

export const WhatsTwindixIndicators = () => (
    <section className="pb-10 lg:pb-20 pt-5 lg:pt-10">
        <motion.div
            className="mb-[30px] lg:mb-15"
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
            <div className="title-with-white-box before:left-[1%]! before:sm:left-[15%]! before:md:left-[20%]! before:xl:left-[25%]!">
                <h2 className="text-gradient1">
                    A Deep Dive into TWINDIX
                    {" "}
                    <br />
                    Indicators
                </h2>
            </div>
            <p className="bg-white text-black! text-center! py-2 px-3 lg:px-6">TWINDIX reveals the core qualities that shape effective leadership by examining eight key indicators. From the strategic foresight of a Planner to the adaptability of a Responsive leader, each indicator offers a unique perspective on leadership dynamics. The Auditor’s attention to detail, the Draining indicator’s ability to eliminate inefficiencies, and the Scientific leader’s reliance on data are crucial for operational success. Meanwhile, the Intuitive leader’s creativity, the Focused leader’s discipline, and the Comprehensive leader’s big-picture thinking drive long-term vision and organizational alignment.</p>
        </motion.div>
        <div className="flex flex-col gap-15 lg:gap-30">
            {indicatorsData.map(({
                img,
                imgAlt,
                imgHeight,
                imgWidth,
                items,
            }, index) => (
                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6"
                    key={index} // eslint-disable-line
                >
                    <motion.div
                        className={`col-span-1 lg:col-span-6 flex flex-col gap-3 lg:gap-6 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20,
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
                        {items.map(({
                            text,
                            title,
                        }, itemIndex) => (
                            <div
                                className="flex flex-col"
                                key={itemIndex} // eslint-disable-line
                            >
                                <h3 className="text-gradient1">{title}</h3>
                                <p><RichText text={text} /></p>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        className={`col-span1 lg:col-span-6 flex ${index % 2 === 0 ? "lg:order-1" : "lg:order-2 lg:justify-end"}`}
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
                        <Image
                            alt={imgAlt}
                            className="max-w-full m-auto lg:m-0"
                            height={imgHeight}
                            placeholder="blur"
                            src={img}
                            width={imgWidth}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-6 mt-[30px] lg:mt-15">
            <motion.h4
                className="text-gradient3"
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
                Ready for Leadership
                {" "}
                <br className="hidden lg:block" />
                Mastery?
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
