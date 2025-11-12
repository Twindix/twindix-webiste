"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import rightArrow from "@/app/assets/icons/right_arrow.svg";
import assessmentDocs3 from "@/app/assets/images/assessment_docs_3.webp";
import assessmentDocs4 from "@/app/assets/images/assessment_docs_4.webp";
import { Button, Card } from "@/atoms";
import { portalUrl, routeUrlsData } from "@/data";

export const HomeAssessment = () => (
    <section
        className="pt-5 lg:pt-10 pb-10 lg:pb-20"
        id="assessment"
    >
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
            <h2 className="text-gradient1">Assessment </h2>
        </motion.div>
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            viewport={{
                amount: 0.2,
                margin: "-10% 0px -10% 0px",
                once: false,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
        >
            <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
                <div
                    className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8"
                    id="executives_assessment"
                >
                    <div>
                        <h2 className="text-gradient1">TWINDIX Executives Assessment</h2>
                        <p>TWINDIX Executives assessment is a specialized evaluation of 8 fundamental indicators, revealing how businessmen, entrepreneurs, and executives adeptly manage their organizations. Gain profound insights into your organizational skills, perspectives, and behaviors, empowering you to fill the gabs & find the missing pieces of your organization.</p>
                        <Link
                            className="text-primary flex items-center gap-2 mt-2 w-fit"
                            href={routeUrlsData.howAssessmentWorks}
                        >
                            Learn more
                            <Image
                                alt="right_arrow"
                                src={rightArrow}
                            />
                        </Link>
                    </div>
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
                            <span className="font-bold ml-2">119$</span>
                        </Button>
                    </Link>
                </div>
                <div className="col-span-1 lg:col-span-5 flex lg:justify-end">
                    <Image
                        alt="assessment_docs"
                        className="m-auto lg:m-0"
                        height={306}
                        placeholder="blur"
                        src={assessmentDocs3}
                    />
                </div>
            </Card>
        </motion.div>
        <motion.div
            initial={{
                opacity: 0,
                x: 20,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            viewport={{
                amount: 0.2,
                margin: "-10% 0px -10% 0px",
                once: false,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
        >
            <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center mt-3 lg:mt-6">
                <div
                    className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8"
                    id="job_bar_assessment"
                >
                    <div>
                        <h2 className="text-gradient1">Job Bar Assessment</h2>
                        <p>the Man Code Assessment - a specialized evaluation designed to coding jobs within business structures and assess individuals&apos; fitness for these roles based on their business traits and inner behaviors. Build a hierarchy with insightful knowledge about your actual needs and best fits for your organization.</p>
                        <Link
                            className="text-primary flex items-center gap-2 mt-2 w-fit"
                            href={routeUrlsData.howAssessmentWorks}
                        >
                            Learn more
                            <Image
                                alt="right_arrow"
                                src={rightArrow}
                            />
                        </Link>
                    </div>
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
                            <span className="font-bold ml-2">119$</span>
                        </Button>
                    </Link>
                </div>
                <div className="col-span-1 lg:col-span-5 flex lg:justify-end">
                    <Image
                        alt="assessment_docs"
                        className="m-auto lg:m-0"
                        height={278}
                        placeholder="blur"
                        src={assessmentDocs4}
                    />
                </div>
            </Card>
        </motion.div>
    </section>
);
