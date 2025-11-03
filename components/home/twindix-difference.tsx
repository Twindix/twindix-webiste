import Image from "next/image";

import analytics from "@/app/assets/icons/analytics.svg";
import cooperation from "@/app/assets/icons/cooperation.svg";
import search from "@/app/assets/icons/search.svg";
import { Card } from "@/atoms";

export const HomeTwindixDifference = () => (
    <section>
        <Card className="grid gap-6 sm:gap-2 grid-cols-1 lg:grid-cols-12 items-center">
            <div className="col-span-1 lg:col-span-7">
                <h2 className="font-semibold text-3xl lg:text-5xl text-gradient1">
                    What makes
                    <br className="hidden lg:block" />
                    {" "}
                    Twindix Different?
                </h2>
                <p className="mt-2 lg:mt-4 font-medium text-sm lg:text-lg text-black/35">Twindix isn’t just a survey—it’s built on insights from 1,500 studies and 230 business models. It maps your strengths, highlights growth areas, and delivers practical strategies to enhance leadership and empower your team.</p>
            </div>
            <div className="col-span-1 lg:col-span-5 flex justify-between gap-8 sm:gap-1 flex-col sm:flex-row">
                <div className="flex flex-col items-center gap-1">
                    <Image
                        alt="cooperation"
                        src={cooperation}
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl lg:text-3xl text-gradient1">230</span>
                        <span className="font-medium text-sm lg:text-lg text-gradient1">Business Models</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image
                        alt="analytics"
                        src={analytics}
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl lg:text-3xl text-gradient1">1500</span>
                        <span className="font-medium text-sm lg:text-lg text-gradient1">Studies</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image
                        alt="search"
                        src={search}
                        priority
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl lg:text-3xl text-gradient1">110</span>
                        <span className="font-medium text-sm lg:text-lg text-gradient1">Of Year Search</span>
                    </div>
                </div>
            </div>
        </Card>
    </section>
);
