import Link from "next/link";

import { Button } from "@/atoms";
import { portalLink, researchDrivenConfidenceData } from "@/data";

export const PrizeResearchDrivenConfidence = () => (
    <section className="py-5 lg:py-10">
        <div className="grid place-content-center mb-4 lg:mb-8 h-[175px] relative before:content-[''] before:absolute before:inset-y-0 before:left-1/8 before:sm:left-[30%] before:w-60 before:bg-white before:z-[-1]">
            <h2 className="relative z-0 isolate inline-block text-gradient1">
                Research
                <br />
                Driven Confidence
            </h2>
        </div>
        <div className="flex flex-col gap-3 lg:gap-6">
            {researchDrivenConfidenceData.map(({
                items,
                text,
                title,
                type,
            }, index) => (
                <div key={index}> {/* eslint-disable-line */}
                    <h3 className="text-gradient1">{title}</h3>
                    {type === "list" ? (
                        <ul className="list-disc list-inside">
                            {items?.map((li, i) => <li key={i}>{li}</li>)} {/* eslint-disable-line */}
                        </ul>
                    ) : <p>{text}</p>}
                </div>
            ))}
        </div>
        <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-8">
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
