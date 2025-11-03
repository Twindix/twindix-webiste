import { PrizeExpandedBenefits, PrizeHero, PrizeResearchDrivenConfidence } from "@/components";

export default function Prize() {
    return (
        <div>
            <PrizeHero />
            <div className="container m-auto relative">
                <PrizeResearchDrivenConfidence />
                <PrizeExpandedBenefits />
            </div>
        </div>

    );
}
