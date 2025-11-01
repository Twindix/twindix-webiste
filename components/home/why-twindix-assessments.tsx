import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import { Button, Card } from "@/atoms";
import { constantsData, routeUrlsData, whyTwindixAssessmentsData } from "@/data";
import { generateGradientTextHandler, generateValidClassNameHandler } from "@/lib/utils";

export const WhyTwindixAssessments = () => (
    <section className="pt-[50px] lg:pt-[100px] pb-[41px] lg:pb-[82px]">
        <h2 className="font-semibold text-3xl lg:text-5xl flex flex-col text-center">
            <span>
                {generateGradientTextHandler(
                    constantsData.titles.whyTwindix,
                    2,
                )}
            </span>
            <span className="text-black">{constantsData.titles.assessments}</span>
        </h2>
        <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-stretch mt-5 lg:mt-10">
            {whyTwindixAssessmentsData.map(({
                colSpan,
                img,
                imgAlt,
                imgOpacity,
                title,
            }, index) => (
                <Fragment key={index}> {/* eslint-disable-line */}
                    <Card className={`col-span-1 lg:col-span-${colSpan} flex items-center justify-between`}>
                        <div className="flex flex-col h-full justify-between">
                            <span className="font-bold text-3xl lg:text-6xl text-blue-100">{index + 1}</span>
                            <h6 className="font-semibold text-xl lg:text-3xl">
                                {generateGradientTextHandler(
                                    title,
                                    2,
                                )}
                            </h6>
                        </div>
                        <Image
                            alt={imgAlt}
                            src={img}
                            className={generateValidClassNameHandler(
                                "w-[195px] h-[220px]",
                                imgOpacity && `opacity-${imgOpacity}`,
                            )}
                        />
                    </Card>
                    {index === 6 && (
                        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-2 lg:gap-4">
                            <p className="font-bold text-xl lg:text-3xl text-blue-700">{constantsData.descriptions.readyToTransform}</p>
                            <Button
                                ariaLabel={constantsData.urls.getTheAssessment}
                                variant="outlined"
                                withArrowsIcon
                            >
                                <Link href={routeUrlsData.getTheAssessment}>
                                    {constantsData.urls.getTheAssessment}
                                </Link>
                            </Button>
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    </section>
);
