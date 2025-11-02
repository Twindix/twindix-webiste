import Image from "next/image";

import business from "@/app/assets/images/business.webp";
import { Hero } from "@/components";

export const PrizeHero = () => (
    <Hero>
        <div className="container text-center mb-5 lg:mb-11">
            <h1 className="text-gradient3 font-extrabold leading-none tracking-[0.06em] text-4xl lg:text-6xl drop-shadow">
                The Prize
            </h1>
            <p className="font-semibold text-center text-2xl lg:text-4xl mt-2 lg:mt-4">
                <span className="text-blue-500">Benefits</span>
                {" "}
                of Understanding Organizational Mindset and
                {" "}
                <br />
                Management
                {" "}
                <span className="text-blue-500">Indicators</span>
            </p>
        </div>
        <Image
            alt="business"
            src={business}
        />
        <div className="container mt-2 lg:mt-4">
            <h2 className="font-semibold text-2xl lg:text-4xl text-gradient1">
                How Understanding Team Dynamics
                <br />
                {" "}
                Through TWINDIX Transforms Leadership
            </h2>
            <p className="text-base lg:text-xl text-gray-910 mt-2 lg:mt-4">
                TWINDIX is more than just a standard assessment—it helps decode your organization’s deeper operational dynamics by revealing strengths that may go unnoticed. Traditional assessments often miss key behavioral patterns and team synergies, but TWINDIX dives deeper, using over 1,500 studies and insights from 230 business models to provide a clear picture of how your team operates.
                This level of understanding allows you to lead with precision, clarity, and confidence, ensuring that every decision you make is informed by a deep knowledge of your team’s strengths and areas for growth. By using TWINDIX, you’re not just assessing; you’re unlocking the full potential of your team, fostering an environment where individuals thrive and the organization reaches new heights
            </p>
        </div>
    </Hero>
);
