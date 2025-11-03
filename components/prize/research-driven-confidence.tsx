import Link from "next/link";

import { Button } from "@/atoms";
import { routeUrlsData } from "@/data";

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
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">TWINDIX taps into the latest in organizational science to help you</h3>
                <ul className="list-disc list-inside mt-1.5 lg:mt-2.5 space-y-2 font-medium text-lg lg:text-2xl text-gray-920">
                    <li>Maximize productivity by aligning team strengths with tasks.</li>
                    <li>Boost engagement and reduce turnover through personalized management strategies.</li>
                    <li>Improve overall profitability, thanks to more efficient and aligned team performance.</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Clarity: Maximize Productivity</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">TWINDIX gives you a comprehensive view of your organization, enabling you to assign tasks based on each individual’s strengths. With better alignment, your team operates efficiently, driving productivity.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Alignment: Confident Decision-Making</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">By identifying 8 key leadership indicators, TWINDIX ensures your decisions are informed, aligning your team’s strengths with your vision.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Foresight: Proactive Problem-Solving</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">Create a culture where your team feels motivated and valued, leading to personal and professional growth aligned with your mission.Alignment: Confident Decision-Making By identifying 8 key leadership indicators, TWINDIX ensures your decisions are informed, aligning your team’s strengths with your vision.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Trust: Effective Communication</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">TWINDIX enables tailored communication, inspiring trust and fostering unity, driving engagement and seamless collaboration.</p>
            </div>
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
