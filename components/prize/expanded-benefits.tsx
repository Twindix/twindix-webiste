import Link from "next/link";

import { Button } from "@/atoms";
import { expandedBenefitsData, routeUrlsData } from "@/data";

export const PrizeExpandedBenefits = () => (
    <section className="pb-[84] lg:pb-[168px]">
        <div className="grid place-content-center h-[175px] relative before:content-[''] before:absolute before:inset-y-0 before:left-1/8 before:sm:left-[30%] before:w-60 before:bg-white before:z-[-1]">
            <h2 className="relative z-0 isolate inline-block mx-auto text-center font-semibold text-3xl lg:text-5xl text-gradient1">
                Expanded Benefits
            </h2>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16 mt-[30px] lg:mt-[60px]">
            {expandedBenefitsData.map(({
                text,
                title,
            }, index) => (
                <div key={index}> {/* eslint-disable-line */}
                    <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">{title}</h3>
                    <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">{text}</p>
                </div>
            ))}
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0 mt-[26px] lg:mt-[52px]">
            <p className="font-bold text-xl lg:text-3xl text-gradient1">
                Ready to transform your leadership
                {" "}
                <br className="hidden lg:block" />
                and unlock your organization’s full
                {" "}
                <br className="hidden lg:block" />
                potential?
            </p>
            <Button
                className="w-full lg:w-[570px]"
                variant="outlined"
                withArrowsIcon
            >
                <Link href={routeUrlsData.getTheAssessment}>Start Test</Link>
            </Button>
        </div>
    </section>
);
