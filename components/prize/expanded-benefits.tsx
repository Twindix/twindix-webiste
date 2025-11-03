import Link from "next/link";

import { Button } from "@/atoms";
import { routeUrlsData } from "@/data";

export const PrizeExpandedBenefits = () => (
    <section className="pb-[84] lg:pb-[168px]">
        <div className="grid place-content-center h-[175px] relative before:content-[''] before:absolute before:inset-y-0 before:left-1/8 before:sm:left-[30%] before:w-60 before:bg-white before:z-[-1]">
            <h2 className="relative z-0 isolate inline-block mx-auto text-center font-semibold text-3xl lg:text-5xl text-gradient1">
                Expanded Benefits
            </h2>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16 mt-[30px] lg:mt-[60px]">
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Transform Your Leadership: The Power of Understanding Organizational Mindset</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">What if you could tap into a hidden reservoir of potential within your organization? By understanding your team’s mindset and management indicators, you unlock the key to transformative leadership. This isn’t just theory; it’s about reshaping how you operate, driving performance, and fostering an environment where everyone thrives. Here’s how this knowledge can revolutionize your approach.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">See the Bigger Picture: Maximize Productivity with Clarity</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">Unlock insights into how your team members naturally operate. Discover which individuals excel in strategic planning, who is more responsive, and who thrives in high-pressure situations. This knowledge allows you to assign tasks that align with each person’s strengths, ensuring that every role is filled by someone who can excel in it. It’s like putting the right pieces in a puzzle—each one fits perfectly, creating a seamless operation and maximizing your team’s output.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Make Confident Decisions: Anticipate and Align with Your Team</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">Imagine having a roadmap for how your team approaches challenges. With TWINDIX, you can better understand their responses and anticipate the moves that align with their strengths. This insight empowers you to make decisions that are perfectly in sync with the team’s natural flow, reducing uncertainty. As a leader, you’ll navigate complex situations with greater confidence, knowing that your decisions are backed by an understanding of your team’s innate behaviors.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Solve Issues Before They Start: Be Proactive, Not Reactive</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">Why wait for problems to arise when you can prevent them? By identifying which behaviors might slow progress or cause friction, you can intervene before they become serious issues. TWINDIX helps you recognize the early signs of challenges and address them with tailored strategies. This proactive approach keeps your team moving forward, allowing you to maintain momentum and focus on what truly matters—growth and success.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Shape a Culture of Growth: Build an Environment that Resonates</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">A thriving workplace culture is one where everyone feels understood and valued. With TWINDIX, you can create an environment that aligns with your team’s core values, drives, and strengths. When people feel seen and their roles play to their natural skills, they’re more motivated and engaged. This means a happier, more productive team that’s eager to contribute to the company’s mission—resulting in a culture that nurtures both personal and professional growth.</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl lg:text-4xl text-gradient1">Inspire Trust and Alignment: Communicate with Purpose</h3>
                <p className="mt-1.5 lg:mt-2.5 font-medium text-lg lg:text-2xl text-gray-920">Understanding the diverse mindsets within your team allows you to tailor your communication style for maximum impact. When you speak to their motivations and values, you foster a sense of trust and alignment. This clarity translates into stronger collaboration, smoother project execution, and a unified team that moves towards shared goals. It’s about building relationships that strengthen every aspect of your leadership.</p>
            </div>
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
