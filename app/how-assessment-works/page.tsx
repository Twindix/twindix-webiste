import Image from "next/image";

import snackLine from "@/app/assets/icons/snack_line.svg";
import snackLineMobile from "@/app/assets/icons/snack_line_mobile.svg";
import { HowAssessmentWorksHero, HowAssessmentWorksSteps } from "@/components";

export default function HowAssessmentWorks() {
    return (
        <div className="relative">
            <Image
                alt="curved_line"
                className="absolute top-25 left-1/10 sm:left-1/4 inset-0 -z-10 pointer-events-none object-cover h-full lg:hidden"
                src={snackLineMobile}
            />
            <Image
                alt="curved_line"
                className="absolute top-30 left-1/9 inset-0 -z-10 pointer-events-none hidden lg:block"
                src={snackLine}
            />
            <HowAssessmentWorksHero />
            <div className="container m-auto relative">
                <HowAssessmentWorksSteps />
            </div>
        </div>

    );
}
