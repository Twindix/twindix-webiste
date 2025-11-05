import {
    PrizeExpandedBenefits,
    PrizeHero,
    PrizeResearchDrivenConfidence,
    TeamDynamics,
} from "@/components";

export default function Prize() {
    return (
        <div>
            <PrizeHero />
            <div className="container m-auto relative">
                <TeamDynamics />
                <PrizeResearchDrivenConfidence />
                <PrizeExpandedBenefits />
            </div>
        </div>

    );
}
