import Image from "next/image";

import { keyComponentsData } from "@/data";

export const AboutKeyComponents = () => (
    <section className="pb-10 lg:pb-20 pt-5 lg:pt-10">
        <div className="title-with-white-box mb-4 lg:mb-8">
            <h2 className="text-gradient1">
                Key Components of
                {" "}
                <br />
                our Vision
            </h2>
        </div>
        <div className="flex flex-col gap-[60px] lg:gap-[120px]">
            {keyComponentsData.map(({
                img,
                imgAlt,
                imgHeight,
                imgWidth,
                text,
                title,
            }, index) => (
                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6"
                    key={index} // eslint-disable-line
                >
                    <div className={`col-span-1 lg:col-span-6 flex flex-col ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                        <h3 className="text-gradient1">{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div className={`col-span1 lg:col-span-6 flex ${index % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1"}`}>
                        <Image
                            alt={imgAlt}
                            className="max-w-full m-auto lg:m-0"
                            height={imgHeight}
                            placeholder="blur"
                            priority={index === 0}
                            src={img}
                            width={imgWidth}
                        />
                    </div>
                </div>
            ))}
        </div>
    </section>
);
