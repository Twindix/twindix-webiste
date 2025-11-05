import Link from "next/link";

import { Button } from "@/atoms";
import { expandedBenefitsData, portalLink } from "@/data";

export const PrizeExpandedBenefits = () => (
    <section className="pt-5 lg:pt-10 pb-10 lg:pb-20">
        <div className="grid place-content-center mb-4 lg:mb-8 h-[175px] relative before:content-[''] before:absolute before:inset-y-0 before:left-1/8 before:sm:left-[30%] before:w-60 before:bg-white before:z-[-1]">
            <h2 className="relative z-0 isolate inline-block text-gradient1">
                Expanded Benefits
            </h2>
        </div>
        <div className="flex flex-col gap-3 lg:gap-6">
            {expandedBenefitsData.map(({
                text,
                title,
            }, index) => (
                <div key={index}> {/* eslint-disable-line */}
                    <h3 className="text-gradient1">{title}</h3>
                    <p>{text}</p>
                </div>
            ))}
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0 mt-4 lg:mt-8">
            <h4>
                Ready to transform your leadership
                {" "}
                <br className="hidden lg:block" />
                and unlock your organization’s full
                {" "}
                <br className="hidden lg:block" />
                potential?
            </h4>
            <Link
                href={portalLink}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Button
                    ariaLabel="Start Test"
                    variant="outlined"
                    withArrowsIcon
                >
                    Start Test
                </Button>
            </Link>
        </div>
    </section>
);
