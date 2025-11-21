"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import analyticsSetup from "@/app/assets/images/analytics_setup.webp";
import databaseTools from "@/app/assets/images/database_tools.webp";
import environmentalStudy from "@/app/assets/images/environmental_study.webp";
import logistics from "@/app/assets/images/logistics.webp";
import pitching from "@/app/assets/images/pitching.webp";
import realTimeAnalytics from "@/app/assets/images/real_time_analytics.webp";
import { Card } from "@/atoms";

export const HomeTwindixDifferent = () => (
    <section className="py-5 lg:py-10">
        <motion.div
            initial={{
                opacity: 0,
                x: -200,
            }}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
        >
            <Card>
                <div className="text-center">
                    <h2 className="text-gradient">
                        What makes
                        <br className="hidden lg:block" />
                        {" "}
                        <span className="font-bold">Twindix Executives Assessment Different?</span>
                    </h2>
                    <p className="text-center!">Twindix isn’t just an Assessment —it’s built on insights from 1,500 studies and 230 business models. It maps your strengths, highlights growth areas, and delivers practical strategies to enhance leadership and empower your team.</p>
                </div>
                <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-center mt-4 lg:mt-8">
                    <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-3 lg:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl lg:text-4xl text-gradient">1,500+</span>
                            <h3 className="text-gradient">Executives Studied</h3>
                        </div>
                        <Image
                            alt="pitching"
                            height={280}
                            placeholder="blur"
                            src={pitching}
                            width={300}
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-3 lg:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl lg:text-4xl text-gradient">230+</span>
                            <h3 className="text-gradient">Business Models Analyzed</h3>
                        </div>
                        <Image
                            alt="database_tools"
                            height={280}
                            placeholder="blur"
                            src={databaseTools}
                            width={300}
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-3 lg:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl lg:text-4xl text-gradient">164</span>
                            <h3 className="text-gradient">Industries Included</h3>
                        </div>
                        <Image
                            alt="analytics_setup"
                            height={280}
                            placeholder="blur"
                            src={analyticsSetup}
                            width={300}
                        />
                    </div>
                </div>
            </Card>
        </motion.div>
        <motion.div
            initial={{
                opacity: 0,
                x: 200,
            }}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
        >
            <Card className="mt-3 lg:mt-6">
                <div className="text-center">
                    <h2 className="text-gradient">
                        What makes
                        <br className="hidden lg:block" />
                        {" "}
                        <span className="font-bold">Job Bar Assessment  Different?</span>
                    </h2>
                    <p className="text-center!">Job Bar isn’t just an assessment—it’s a science-based job-fit engine powered by insights from 12,000 global jobs. It shows where you excel, where you need growth, and which competencies will drive your success in any career path.</p>
                </div>
                <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-center mt-4 lg:mt-8">
                    <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-3 lg:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl lg:text-4xl text-gradient">1,400+</span>
                            <h3 className="text-gradient">Environments Studied</h3>
                        </div>
                        <Image
                            alt="environmental_study"
                            height={280}
                            placeholder="blur"
                            src={environmentalStudy}
                            width={300}
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-3 lg:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl lg:text-4xl text-gradient">12,000+</span>
                            <h3 className="text-gradient">Jobs Analyzed</h3>
                        </div>
                        <Image
                            alt="real_time_analytics"
                            height={280}
                            placeholder="blur"
                            src={realTimeAnalytics}
                            width={300}
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-3 lg:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl lg:text-4xl text-gradient">217</span>
                            <h3 className="text-gradient">Industries Included</h3>
                        </div>
                        <Image
                            alt="logistics"
                            height={280}
                            placeholder="blur"
                            src={logistics}
                            width={300}
                        />
                    </div>
                </div>
            </Card>
        </motion.div>
    </section>
);
