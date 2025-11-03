import Link from "next/link";

import { Button } from "@/atoms";
import { researchDrivenConfidenceData, routeUrlsData } from "@/data";

export const PrizeResearchDrivenConfidence = () => (
    <section className="py-10 lg:py-20">
        <div className="grid place-content-center h-[175px] relative before:content-[''] before:absolute before:inset-y-0 before:left-1/8 before:sm:left-[30%] before:w-60 before:bg-white before:z-[-1]">
            <h2 className="relative z-0 isolate inline-block mx-auto text-center font-semibold text-3xl lg:text-5xl text-gradient1">
                Research
                <br />
                Driven Confidence
            </h2>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16 mt-[30px] lg:mt-[60px]">
            {researchDrivenConfidenceData.map(({
                items,
                text,
                title,
                type,
            }, index) => (
                <div key={index}> {/* eslint-disable-line */}
                    <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">{title}</h3>
                    {type === "list" ? (
                        <ul className="list-disc list-inside mt-1.5 lg:mt-2.5 space-y-2 font-medium text-lg lg:text-2xl text-gray-920">
                            {items?.map((li, i) => <li key={i}>{li}</li>)} {/* eslint-disable-line */}
                        </ul>
                    ) : <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">{text}</p>}
                </div>
            ))}
        </div>
        <div className="w-full flex justify-center lg:justify-end mt-[26px] lg:mt-[52px]">
            <Button
                className="w-[570px]"
                variant="outlined"
                withArrowsIcon
            >
                <Link href={routeUrlsData.getTheAssessment}>Start Test</Link>
            </Button>
        </div>
    </section>
);
