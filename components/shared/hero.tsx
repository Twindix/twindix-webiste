import { ReactNode } from "react";

export const Hero = ({ children } : { children: ReactNode }) => (
    <section className="hero-glass relative">
        <div className="min-h-[600px] lg:min-h-[848px] flex flex-col items-center justify-center">
            {children}
        </div>
    </section>
);
