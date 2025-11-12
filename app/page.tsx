import {
    ContactUs,
    HomeAssessment,
    HomeHero,
    HomeTwindixDifferent,
    HomeTwindixRightChoice,
    HomeWhyTwindixAssessments,
} from "@/components";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <div className="container m-auto relative bottom-10 lg:bottom-20 z-10">
                <HomeTwindixDifferent />
                <HomeWhyTwindixAssessments />
                <HomeTwindixRightChoice />
                <HomeAssessment />
                <ContactUs />
            </div>
        </div>

    );
}
