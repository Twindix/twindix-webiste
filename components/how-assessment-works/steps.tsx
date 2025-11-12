"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { RichText } from "@/components";
import { stepsData } from "@/data";

export const HowAssessmentWorksSteps = () => (
    <section className="pb-10 lg:pb-20 pt-[90px] lg:pt-[180px]">
        <div className="flex flex-col gap-15 lg:gap-30">
            {stepsData.map(({
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
                            x: index % 2 === 0 ? -200 : 200,
                        }}
                        {...(index === 0 && {
                            animate: {
                                opacity: 1,
                                x: 0,
                            },
                        })}
                        {...(index !== 0 && {
                            whileInView: {
                                opacity: 1,
                                x: 0,
                            },
                        })}
                        transition={{
                            delay: index * 0.06,
                            duration: 1,
                            ease: "easeOut",
                        }}
                    >
                        <span className="text-foreground font-semibold text-sm lg:text-lg">
                            Step
                            {" "}
                            {index + 1}
                        </span>
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
                        {...(index === 0 && {
                            animate: {
                                opacity: 1,
                                x: 0,
                            },
                        })}
                        {...(index !== 0 && {
                            whileInView: {
                                opacity: 1,
                                x: 0,
                            },
                        })}
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
