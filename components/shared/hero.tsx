import { ReactNode } from "react";

import { generateValidClassNameHandler } from "@/lib/utils";

export const Hero = ({
    children,
    hasGlassBg,
} : {
    children: ReactNode,
    hasGlassBg?: boolean,
}) => (
    <section
        className={generateValidClassNameHandler(
            "relative min-h-[600px] lg:min-h-[848px]",
            hasGlassBg && "hero-glass",
        )}
    >
        <div className=" flex flex-col items-center justify-center pt-25 lg:pt-40">
            {children}
        </div>
    </section>
);
