import Image from "next/image";

import { Card } from "@/atoms";
import { constantsData, whyTwindixAssessmentsData } from "@/data";
import { generateGradientTextHandler } from "@/lib/utils";

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
        <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 items-stretch items-center mt-5 lg:mt-10">
            {whyTwindixAssessmentsData.map(({
                colSpan,
                img,
                imgAlt,
                title,
            }, index) => (
                <Card
                    className={`col-span-1 lg:col-span-${colSpan} flex items-center justify-between`}
                    key={index} // eslint-disable-line
                >
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
                        className="w-[195px] h-[220px]"
                        src={img}
                    />
                </Card>
            ))}
        </div>
    </section>
);
