import { ReactNode } from "react";

export const Hero = ({ children } : { children: ReactNode }) => (
    <section className="hero-glass relative">
        <div className="min-h-[424px] lg:min-h-[848px] grid place-items-center">
            {children}
        </div>
    </section>
);
