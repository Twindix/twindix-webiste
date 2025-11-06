import Link from "next/link";

import { Button } from "@/atoms";
import { Hero } from "@/components";
import { portalUrl } from "@/data";

export const WhatsTwindixHero = () => (
    <Hero>
        <div className="container flex flex-col gap-4 lg:gap-8">
            <div className="grid place-items-center">
                <h1 className="text-gradient3">What&apos;s Twindix ?</h1>
                <p>
                    TWINDIX builds on
                    {" "}
                    <span className="text-blue-500">Hugo Münsterberg’s</span>
                    {" "}
                    legacy, blending Psychology with global management science to decode leadership.
                </p>
            </div>
            <Link
                href={portalUrl}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Button
                    ariaLabel="Get The Assessment"
                    variant="outlined"
                    withArrowsIcon
                >
                    Get Started with Twindix
                </Button>
            </Link>
        </div>
    </Hero>
);
