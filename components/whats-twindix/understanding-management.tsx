"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { understandingManagementData } from "@/data";

export const WhatsTwindixUnderstandingManagement = () => (
    <section className="pb-10 lg:pb-20 pt-5 lg:pt-10">
        <motion.div
            className="title-with-white-box mb-4 lg:mb-8 before:left-[1%]! before:sm:left-[15%]! before:md:left-[20%]! before:xl:left-[25%]!"
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
            <h2 className="text-gradient1">
                How TWINDIX Aids in
                {" "}
                <br />
                Understanding Management
            </h2>
        </motion.div>
        <div className="flex flex-col gap-[60px] lg:gap-[120px]">
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
                    key={index} // eslint-disable-line
                >
                    <motion.div
                        className={`col-span-1 lg:col-span-6 flex flex-col ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
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
                    <motion.div
                        className={`col-span1 lg:col-span-6 flex ${index % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1"}`}
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
                        <Image
                            alt={imgAlt}
                            className="max-w-full m-auto lg:m-0"
                            height={imgHeight}
                            placeholder="blur"
                            priority={index === 0}
                            src={img}
                            width={imgWidth}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    </section>
);
