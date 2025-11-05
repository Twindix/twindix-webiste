import { AboutHero, AboutKeyComponents, AboutMissionAndVision } from "@/components";

export default function About() {
    return (
        <div>
            <AboutHero />
            <div className="container m-auto relative">
                <AboutMissionAndVision />
                <AboutKeyComponents />
            </div>
        </div>

    );
}
