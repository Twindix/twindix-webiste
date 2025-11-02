import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import { Button, Card } from "@/atoms";
import { routeUrlsData, whyTwindixAssessmentsData } from "@/data";
import { generateValidClassNameHandler } from "@/lib/utils";

export const WhyTwindixAssessments = () => (
    <section className="pt-[50px] lg:pt-[100px] pb-[41px] lg:pb-[82px]">
        <div className="grid place-content-center">
            <h2 className="font-semibold text-3xl lg:text-5xl text-gradient1">
                Why TWINDIX
                <br />
                Assessments
            </h2>
        </div>
        <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-stretch mt-5 lg:mt-10">
            {whyTwindixAssessmentsData.map(({
                colSpan,
                hasOpacity,
                img,
                imgAlt,
                title,
            }, index) => (
                <Fragment key={index}> {/* eslint-disable-line */}
                    <Card className={`col-span-1 lg:col-span-${colSpan} flex items-center justify-between`}>
                        <div className="flex flex-col h-full justify-between">
                            <span className="font-bold text-4xl lg:text-6xl text-blue-100">{index + 1}</span>
                            <h6 className="font-semibold text-xl lg:text-3xl text-gradient1">{title}</h6>
                        </div>
                        <Image
                            alt={imgAlt}
                            src={img}
                            className={generateValidClassNameHandler(
                                "w-[195px] h-[220px]",
                                hasOpacity && "opacity-60",
                            )}
                        />
                    </Card>
                    {index === 6 && (
                        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-2 lg:gap-4">
                            <p className="font-bold text-xl lg:text-3xl text-blue-700">Ready to transform your leadership and unlock your organization’s full potential?</p>
                            <Button
                                ariaLabel="Get The Assessment"
                                variant="outlined"
                                withArrowsIcon
                            >
                                <Link href={routeUrlsData.getTheAssessment}>Get The Assessment</Link>
                            </Button>
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    </section>
);
