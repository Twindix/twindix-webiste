import { ReactNode } from "react";

import { generateValidClassNameHandler } from "@/lib/utils";

export const Hero = ({
    children,
    className,
    hasGlassBg,
} : {
    className?: string,
    children: ReactNode,
    hasGlassBg?: boolean,
}) => (
    <section
        className={generateValidClassNameHandler(
            "relative hero-section",
            hasGlassBg ? "hero-glass min-h-[600px] lg:min-h-[848px]" : "min-h-fit lg:min-h-fit",
            className,
        )}
    >
        <div className=" flex flex-col items-center justify-center pt-25 lg:pt-40">
            {children}
        </div>
    </section>
);
