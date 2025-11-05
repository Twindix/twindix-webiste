import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import { Button, Card } from "@/atoms";
import { portalLink, whyTwindixAssessmentsData } from "@/data";
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
        <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-stretch">
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
                            <h3 className="text-gradient1">{title}</h3>
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
                            <h4>Ready to transform your leadership and unlock your organization’s full potential?</h4>
                            <Link
                                href={portalLink}
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
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    </section>
);
