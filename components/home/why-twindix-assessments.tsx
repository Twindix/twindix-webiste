"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import { Button, Card } from "@/atoms";
import { portalUrl, whyAssessmentsData } from "@/data";

export const HomeWhyTwindixAssessments = () => (
    <section className="py-5 lg:py-10">
        <motion.div
            className="grid place-content-center mb-4 lg:mb-8"
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
                Why TWINDIX
                <br />
                Assessments
            </h2>
        </motion.div>
        <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-stretch">
            {whyAssessmentsData.map(({
                colSpan,
                img,
                imgAlt,
                text,
                title,
            }, index) => (
                <Fragment key={index}> {/* eslint-disable-line */}
                    <motion.div
                        className={`col-span-1 lg:col-span-${colSpan} h-full`}
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
                        <Card className="group h-full xl:min-h-[400px] flex lg:flex-col xl:flex-row lg:gap-4 xl:gap-0 items-center xl:items-start justify-between overflow-hidden cursor-pointer hover:bg-blue-100">
                            <div className="flex flex-col h-full justify-between">
                                <span className="font-bold text-3xl lg:text-5xl text-blue-100 group-hover:text-blue-700">{index + 1}</span>
                                <div>
                                    <h3 className="text-gradient1">{title}</h3>
                                    <p className="md:hidden">{text}</p>
                                    <div className="hidden md:block overflow-hidden max-h-0 transition-[max-height] duration-300 ease-out group-hover:min-h-fit">
                                        <p className="translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 xl:text-[13px]!">{text}</p>
                                    </div>
                                </div>
                            </div>
                            <Image
                                alt={imgAlt}
                                className="size-30 md:size-50 xl:size-60 opacity-30 group-hover:opacity-70 group-hover:scale-[1.15] transition ease-out duration-800"
                                src={img}
                            />
                        </Card>
                    </motion.div>
                    {index === 6 && (
                        <motion.div
                            className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-2 lg:gap-4"
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
                            <h4>Ready to transform your leadership and unlock your organization&apos;s full potential?</h4>
                            <Link
                                href={portalUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Button
                                    ariaLabel="Get The Assessment"
                                    variant="outlined"
                                    withArrowsIcon
                                >
                                    Get The Assessment
                                </Button>
                            </Link>
                        </motion.div>
                    )}
                </Fragment>
            ))}
        </div>
    </section>
);
