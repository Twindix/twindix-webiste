import { Hero } from "@/components";
import { constantsData } from "@/data";

export const HomeHero = () => (
    <Hero>
        <h1 className="text-primary font-extrabold leading-none tracking-[0.06em] text-[clamp(56px,10vw,160px)] drop-shadow">
            {constantsData.twindix.toUpperCase()}
        </h1>
    </Hero>
);
