import Image from "next/image";
import Link from "next/link";
import React from "react";

import group from "@/app/assets/icons/group.svg";
import location from "@/app/assets/icons/location.svg";
import muscles from "@/app/assets/icons/muscles.svg";
import power from "@/app/assets/icons/power.svg";
import stars from "@/app/assets/icons/stars.svg";
import timeWithSettings from "@/app/assets/icons/time_with_settings.svg";
import winner from "@/app/assets/icons/winner.svg";
import winners from "@/app/assets/icons/winners.svg";
import logo from "@/app/assets/images/logo.webp";
import { Button, Card } from "@/atoms";
import { constantsData, routeUrlsData } from "@/data";
import { generateGradientTextHandler, generateValidClassNameHandler } from "@/lib/utils";

export const TwnindixRightChoice = () => (
    <section>
        <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8">
                <div>
                    <h2 className="font-semibold text-3xl lg:text-5xl">
                        {generateGradientTextHandler(
                            constantsData.titles.twindixRightChoice,
                            2,
                        )}
                    </h2>
                    <p className="mt-2 lg:mt-4 font-medium text-sm lg:text-lg text-black/35">{constantsData.descriptions.twindixRightChoice}</p>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                    <p className="font-bold text-xl lg:text-3xl text-blue-700">{constantsData.descriptions.readyToExplore}</p>
                    <Button
                        ariaLabel={constantsData.urls.getTheAssessment}
                        className="w-full lg:w-1/2"
                        variant="outlined"
                        withArrowsIcon
                    >
                        <Link href={routeUrlsData.getTheAssessment}>
                            {constantsData.urls.getTheAssessment}
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-5 mt-4 lg:mt-0 relative xl:left-[70px] xl:overflow-hidden">
                <div className="relative aspect-[1.5]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image
                            alt="logo"
                            className="w-[134px] h-12 lg:h-[74px]"
                            placeholder="blur"
                            src={logo}
                        />
                    </div>
                    {[
                        group,
                        timeWithSettings,
                        location,
                        winner,
                        muscles,
                        stars,
                        winners,
                        power,
                    ].map((src, index) => (
                        <div
                            key={index} // eslint-disable-line
                            className={generateValidClassNameHandler(
                                "absolute top-1/2 left-1/2 origin-center grid place-items-center transform-[translate(-50%,-50%)_rotate(var(--a))_translate(var(--r))_rotate(calc(-1*var(--a)))]",
                                index === 3 ? "w-16 h-16" : "w-12 h-12",
                            )}
                            style={{
                                "--a": `${(360 / 8) * index}deg`,
                                "--r": "clamp(100px, 14vw, 140px)",
                            } as React.CSSProperties}
                        >
                            <Image
                                alt="icon"
                                height={92}
                                src={src}
                                width={92}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    </section>
);
