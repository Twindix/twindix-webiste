import { HomeHero, TwindixDifference } from "@/components";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <div className="container m-auto relative bottom-[75px] z-10">
                <TwindixDifference />
            </div>
        </div>

    );
}
