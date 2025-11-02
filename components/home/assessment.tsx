import Image from "next/image";
import Link from "next/link";
import React from "react";

import rightArrow from "@/app/assets/icons/right_arrow.svg";
import assessmentsDocs3 from "@/app/assets/images/assessments_docs_3.webp";
import assessmentsDocs4 from "@/app/assets/images/assessments_docs_4.webp";
import { Button, Card } from "@/atoms";
import { routeUrlsData } from "@/data";

export const HomeAssessment = () => (
    <section className="py-9 lg:py-[72px]">
        <h2 className="font-semibold text-3xl lg:text-5xl text-secondary text-center mb-4 lg:mb-8">Assessment</h2>
        <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8">
                <div>
                    <h2 className="font-semibold text-3xl lg:text-5xl text-gradient1">TWINDIX Executives Assessment</h2>
                    <p className="mt-2 lg:mt-4 font-medium text-sm lg:text-lg text-black/35">TWINDIX Executives assessment is a specialized evaluation of 8 fundamental indicators, revealing how businessmen, entrepreneurs, and executives adeptly manage their organizations. Gain profound insights into your organizational skills, perspectives, and behaviors, empowering you to fill the gabs & find the missing pieces of your organization.</p>
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
                <Button
                    ariaLabel="Get The Assessment"
                    className="w-full lg:w-1/2"
                    variant="outlined"
                    withArrowsIcon
                >
                    <Link href={routeUrlsData.getTheAssessment}>
                        Get The Assessment
                        <span className="font-bold ml-2">119$</span>
                    </Link>
                </Button>
            </div>
            <div className="col-span-1 lg:col-span-5 m-auto">
                <Image
                    alt="assessments_docs"
                    height={354}
                    placeholder="blur"
                    src={assessmentsDocs3}
                />
            </div>
        </Card>
        <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center mt-4 lg:mt-8">
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8">
                <div>
                    <h2 className="font-semibold text-3xl lg:text-5xl text-gradient1">Job Bar Assessment</h2>
                    <p className="mt-2 lg:mt-4 font-medium text-sm lg:text-lg text-black/35">the Man Code Assessment - a specialized evaluation designed to coding jobs within business structures and assess individuals&apos; fitness for these roles based on their business traits and inner behaviors. Build a hierarchy with insightful knowledge about your actual needs and best fits for your organization.</p>
                    <Link
                        className="text-primary flex items-center gap-2 mt-2 w-fit"
                        href={routeUrlsData.jobBarAssessments}
                    >
                        Learn more
                        <Image
                            alt="right_arrow"
                            src={rightArrow}
                        />
                    </Link>
                </div>
                <Button
                    ariaLabel="Get The Assessment"
                    className="w-full lg:w-1/2"
                    variant="outlined"
                    withArrowsIcon
                >
                    <Link href={routeUrlsData.getTheAssessment}>
                        Get The Assessment
                        <span className="font-bold ml-2">119$</span>
                    </Link>
                </Button>
            </div>
            <div className="col-span-1 lg:col-span-5 m-auto">
                <Image
                    alt="assessments_docs"
                    height={286}
                    placeholder="blur"
                    src={assessmentsDocs4}
                />
            </div>
        </Card>
    </section>
);
