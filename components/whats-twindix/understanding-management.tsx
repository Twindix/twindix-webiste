"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { RichText } from "@/components";
import { understandingManagementData } from "@/data";

export const WhatsTwindixUnderstandingManagement = () => (
    <section className="py-5 lg:py-10">
        <motion.div
            className="mb-[30px] lg:mb-15"
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
            <div className="title-with-white-box before:left-[1%]! before:sm:left-[15%]! before:md:left-[20%]! before:xl:left-[25%]!">
                <h2 className="text-gradient1">
                    How TWINDIX Aids in
                    {" "}
                    <br />
                    Understanding Management
                </h2>
            </div>
            <p className="bg-white text-black! text-center! py-2 px-3 lg:px-6">The TWINDIX assessment provides leaders with a unique understanding of their management style by measuring three core elements: Skills, Perspective, and Behavior. Each of these components plays a vital role in how you lead and interact with your team.</p>
        </motion.div>
        <div className="flex flex-col gap-15 lg:gap-30">
            {understandingManagementData.map(({
                img,
                imgAlt,
                imgHeight,
                imgWidth,
                text,
                title,
            }, index) => (
                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6"
                    key={index}
                >
                    <motion.div
                        className={`col-span-1 lg:col-span-6 flex flex-col ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
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
                        <p><RichText text={text} /></p>
                    </motion.div>
                    <motion.div
                        className={`col-span1 lg:col-span-6 flex ${index % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1"}`}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 200 : -200,
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
    </section>
);
