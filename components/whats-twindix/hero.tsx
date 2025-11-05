import Link from "next/link";

import { Button } from "@/atoms";
import { Hero } from "@/components";
import { portalLink } from "@/data";

export const WhatsTwindixHero = () => (
    <Hero>
        <div className="container text-center mb-2 lg:mb-4">
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
            href={portalLink}
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
    </Hero>
);
