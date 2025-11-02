import {
    HomeAssessment,
    HomeHero,
    HomeTwindixDifference,
    HomeTwnindixRightChoice,
    HomeWhyTwindixAssessments,
} from "@/components";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <div className="container m-auto relative bottom-[75px] z-10">
                <HomeTwindixDifference />
                <HomeWhyTwindixAssessments />
                <HomeTwnindixRightChoice />
                <HomeAssessment />
            </div>
        </div>

    );
}
