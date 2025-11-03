import Image from "next/image";

import { howAssessmentWorksStepsData } from "@/data";

export const HowAssessmentWorksSteps = () => (
    <section>
        <div className="flex flex-col gap-[60px] lg:gap-[120px]">
            {howAssessmentWorksStepsData.map(({
                img,
                imgAlt,
                imgHeight,
                imgWidth,
                text,
                title,
            }, index) => (
                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0"
                    key={index} // eslint-disable-line
                >
                    <div className={`col-span-1 lg:col-span-6 flex flex-col ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                        <span className="text-foreground font-semibold text-sm lg:text-lg">
                            Step
                            {" "}
                            {index + 1}
                        </span>
                        <h3 className="font-bold text-3xl lg:text-5xl text-gradient1">{title}</h3>
                        <p className="mt-1.5 lg:mt-2.5 text-base lg:text-xl text-black/50">{text}</p>
                    </div>
                    <div className={`col-span1 lg:col-span-6 flex ${index % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1"}`}>
                        <Image
                            alt={imgAlt}
                            className="max-w-full m-auto lg:m-0"
                            height={imgHeight}
                            placeholder="blur"
                            src={img}
                            width={imgWidth}
                        />
                    </div>
                </div>
            ))}
        </div>
    </section>
);
