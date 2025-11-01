import Image from "next/image";

import analytics from "@/app/assets/icons/analytics.svg";
import cooperation from "@/app/assets/icons/cooperation.svg";
import search from "@/app/assets/icons/search.svg";
import { Card } from "@/atoms";
import { constantsData } from "@/data";
import { generateGradientTextHandler } from "@/lib/utils";

export const TwindixDifference = () => (
    <section>
        <Card className="grid gap-6 sm:gap-2 grid-cols-1 lg:grid-cols-12 items-center">
            <div className="col-span-1 lg:col-span-7">
                <h2 className="font-semibold lg:text-5xl lg:flex lg:flex-col hidden">
                    <span className="font-medium">
                        {generateGradientTextHandler(
                            constantsData.titles.whatMakes,
                            6,
                        )}
                    </span>
                    <span>
                        {generateGradientTextHandler(
                            constantsData.titles.twindixDifferent,
                            0,
                        )}
                    </span>
                </h2>
                <h2 className="font-semibold text-3xl lg:hidden">
                    {generateGradientTextHandler(
                        constantsData.titles.whatMakesTwindixDifferent,
                        6,
                    )}
                </h2>
                <p className="mt-2 lg:mt-4 font-medium text-sm lg:text-lg text-black/35">{constantsData.descriptions.whatMakesTwindixDifferent}</p>
            </div>
            <div className="col-span-1 lg:col-span-5 flex justify-between gap-8 sm:gap-1 flex-col sm:flex-row">
                <div className="flex flex-col items-center gap-1">
                    <Image
                        alt="cooperation"
                        src={cooperation}
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl lg:text-3xl">
                            {generateGradientTextHandler(
                                "230",
                                1,
                            )}
                        </span>
                        <span className="font-medium text-sm lg:text-lg">
                            {generateGradientTextHandler(
                                constantsData.labels.businessModels,
                                6,
                            )}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image
                        alt="analytics"
                        src={analytics}
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl lg:text-3xl">
                            {generateGradientTextHandler(
                                "1500",
                                2,
                            )}
                        </span>
                        <span className="font-medium text-sm lg:text-lg">
                            {generateGradientTextHandler(
                                constantsData.labels.studies,
                                2,
                            )}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image
                        alt="search"
                        src={search}
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl lg:text-3xl">
                            {generateGradientTextHandler(
                                "110",
                                1,
                            )}
                        </span>
                        <span className="font-medium text-sm lg:text-lg">
                            {generateGradientTextHandler(
                                constantsData.labels.ofYearSearch,
                                5,
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    </section>
);
