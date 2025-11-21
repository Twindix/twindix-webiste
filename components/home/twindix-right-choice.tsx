"use client";

import { motion } from "framer-motion";
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
        <motion.div
            initial={{
                opacity: 0,
                y: 200,
            }}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
        >
            <Card className="relative overflow-hidden grid gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
                <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8">
                    <div>
                        <h2 className="text-gradient">Twindix the right choice for you?</h2>
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
                <div className="col-span-1 lg:col-span-5 block md:grid place-items-center lg:block mb-2.5 sm:mb-0">
                    <div
                        className="relative aspect-[1.5] h-60 md:h-80 lg:h-initial"
                        style={{
                            "--ringsD": "clamp(260px, 40vw, 320px)",
                        } as React.CSSProperties}
                    >
                        <div className="absolute top-1/2 left-1/2 xl:left-2/3 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                            {Array.from({ length: 4 }).map((_, i) => {
                                const ringIndex = i;

                                const total = 4;

                                const fraction = (ringIndex + 1) / total;

                                return (
                                    <motion.div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                                        key={i}
                                        animate={{
                                            opacity: [0.25, 0.6, 0.55, 0.6],
                                            scale: [0.15, 1.0, 0.95, 1.0],
                                        }}
                                        initial={{
                                            opacity: 0.2,
                                            scale: 0.15,
                                        }}
                                        style={{
                                            borderColor: "color-mix(in srgb, var(--color-blue-400) 25%, transparent)",
                                            borderWidth: "20px",
                                            boxShadow: "0 0 24px color-mix(in srgb, var(--color-blue-300) 10%, transparent)",
                                            height: `calc(var(--ringsD) * ${fraction})`,
                                            width: `calc(var(--ringsD) * ${fraction})`,
                                        }}
                                        transition={{
                                            delay: ringIndex * 0.5,
                                            duration: 2.6,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 0.4,
                                            repeatType: "reverse",
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div className="absolute top-1/2 left-1/2 xl:left-2/3 -translate-x-1/2 -translate-y-1/2 z-10">
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
                                key={index}
                                className={generateValidClassNameHandler(
                                    "absolute top-1/2 left-1/2 xl:left-2/3 z-10 origin-center grid place-items-center transform-[translate(-50%,-50%)_rotate(var(--a))_translate(var(--r))_rotate(calc(-1*var(--a)))]",
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
        </motion.div>
    </section>
);
