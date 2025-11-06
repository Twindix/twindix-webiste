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
import { portalUrl } from "@/data";
import { generateValidClassNameHandler } from "@/lib/utils";

export const HomeTwindixRightChoice = () => (
    <section className="py-5 lg:py-10">
        <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8">
                <div>
                    <h2 className="text-gradient1">TWINDIX the right choice for you?</h2>
                    <p>Whether you are an executive seeking deeper understanding, a founder looking to expand, or an ambitious leader wanting to build a more effective team—Twindex is here to accompany you on your journey. We believe that every leader has their own unique path to success… and Twindex is your trusted guide on this journey.</p>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                    <h4>Are you ready to explore your potential?</h4>
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
                </div>
            </div>
            <div className="col-span-1 lg:col-span-5 block md:grid place-items-center lg:block">
                <div className="relative aspect-[1.5] h-60 md:h-80 lg:h-initial">
                    <div className="absolute top-1/2 left-1/2 xl:left-2/3 -translate-x-1/2 -translate-y-1/2">
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
                                "absolute top-1/2 left-1/2 xl:left-2/3 origin-center grid place-items-center transform-[translate(-50%,-50%)_rotate(var(--a))_translate(var(--r))_rotate(calc(-1*var(--a)))]",
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
