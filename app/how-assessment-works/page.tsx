import Image from "next/image";

import snackLine from "@/app/assets/icons/snack_line.svg";
import { HowAssessmentWorksHero, HowAssessmentWorksSteps } from "@/components";

export default function HowAssessmentWorks() {
    return (
        <div className="relative">
            <Image
                alt="curved_line"
                className="absolute top-30 -left-1/10 lg:left-1/9 -z-10"
                src={snackLine}
            />
            <HowAssessmentWorksHero />
            <div className="container m-auto pt-[43px] lg:pt-[86px] pb-[70px] lg:pb-[140px]">
                <HowAssessmentWorksSteps />
            </div>
        </div>

    );
}
