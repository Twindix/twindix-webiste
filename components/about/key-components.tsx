"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { keyComponentsData } from "@/data";

export const AboutKeyComponents = () => (
    <section className="pb-10 lg:pb-20 pt-5 lg:pt-10">
        <motion.div
            className="title-with-white-box mb-[30px] lg:mb-15"
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
            <h2 className="text-gradient">
                Key Components of
                {" "}
                <br />
                our Vision
            </h2>
        </motion.div>
        <div className="flex flex-col gap-15 lg:gap-30">
            {keyComponentsData.map(({
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
                        <h3 className="text-gradient">{title}</h3>
                        <p>{text}</p>
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
