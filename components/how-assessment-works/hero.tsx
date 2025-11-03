import { Hero } from "@/components";

export const HowAssessmentWorksHero = () => (
    <Hero className="min-h-fit lg:min-h-fit">
        <div className="container text-center mb-5 lg:mb-11">
            <h1 className="text-gradient3 font-extrabold leading-none tracking-[0.06em] text-4xl lg:text-6xl drop-shadow">
                How Assessment Works
            </h1>
            <p className="font-semibold text-black text-center text-2xl lg:text-4xl mt-2 lg:mt-4">
                Step
                <span className="text-blue-500 text-lg lg:text-2xl"> by </span>
                Step
                {" "}
                <br />
                Guide to taking the assessment
            </p>
        </div>
    </Hero>
);
