"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import { Button, Card } from "@/atoms";
import { portalUrl, whyTwindixAssessmentsData } from "@/data";
import { generateValidClassNameHandler } from "@/lib/utils";

export const HomeWhyTwindixAssessments = () => (
    <section className="py-5 lg:py-10">
        <div className="grid place-content-center mb-4 lg:mb-8">
            <h2 className="text-gradient1">
                Why TWINDIX
                <br />
                Assessments
            </h2>
        </div>
        <div className="grid gap-3 lg:gap-6 grid-cols-1 xl:grid-cols-12 items-stretch">
            {whyTwindixAssessmentsData.map(({
                colSpan,
                hasOpacity,
                img,
                imgAlt,
                opacity,
                text,
                title,
            }, index) => (
                <Fragment key={index}> {/* eslint-disable-line */}
                    <motion.div
                        className={`col-span-1 xl:col-span-${colSpan}`}
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
                        <Card className="group flex items-center justify-between overflow-hidden cursor-pointer hover:bg-blue-50">
                            <div className="flex flex-col h-full justify-between">
                                <span className="font-bold text-4xl lg:text-6xl text-blue-100">{index + 1}</span>
                                <div>
                                    <h3 className="text-gradient1">{title}</h3>
                                    <p className="md:hidden">{text}</p>
                                    <div className="hidden md:block overflow-hidden max-h-0 transition-[max-height] duration-300 ease-out group-hover:max-h-28">
                                        <p className="translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 xl:text-[13px]!">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Image
                                alt={imgAlt}
                                src={img}
                                className={generateValidClassNameHandler(
                                    "w-[120px] h-40 md:w-[195px] md:h-[220px]",
                                    hasOpacity ? `opacity-${opacity} group-hover:opacity-60` : "opacity-60 group-hover:opacity-100",
                                )}
                            />
                        </Card>
                    </motion.div>
                    {index === 6 && (
                        <motion.div
                            className="col-span-1 xl:col-span-5 flex flex-col justify-center gap-2 lg:gap-4"
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
                            <h4>Ready to transform your leadership and unlock your organization’s full potential?</h4>
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
