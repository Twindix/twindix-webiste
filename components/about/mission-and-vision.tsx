import Image from "next/image";
import Link from "next/link";

import undrawIdeation from "@/app/assets/images/undraw_ideation.webp";
import { Button } from "@/atoms";
import { portalUrl } from "@/data";

export const AboutMissionAndVision = () => (
    <section className="pb-10 lg:pb-10 pt-10 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-1 lg:col-span-6 flex flex-col gap-4 lg:gap-8">
                <div>
                    <h2 className="text-gradient1">Mission & Vision Transforming Leadership</h2>
                    <p>
                        At TWINDIX, our mission is clear: to empower leaders by providing them with the tools and insights needed to unlock their full potential. We believe that leadership is more than just managing people, it&apos;s about understanding the intricate behaviors and dynamics that drive success within an organization. Our vision is to foster growth and create transformative leadership by delivering actionable insights that allow businesses to move beyond the surface and into deeper, more strategic decision-making.
                        <br className="hidden lg:block" />
                        <br className="hidden lg:block" />
                        At the core of TWINDIX is the belief that clarity leads to growth. Through our innovative assessments, we help leaders gain the clarity they need to make informed decisions, improve team dynamics, and unlock hidden potential. Our commitment is to help organizations not only identify their strengths but also fill the gaps and overcome obstacles, enabling them to thrive in today&apos;s competitive landscape.
                    </p>
                </div>
                <Link
                    href={portalUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button
                        ariaLabel="Get Started with Twindix"
                        variant="outlined"
                        withArrowsIcon
                    >
                        Get Started with Twindix
                    </Button>
                </Link>
            </div>
            <div className="col-span1 lg:col-span-6 flex lg:justify-end">
                <Image
                    alt="undraw-ideation"
                    className="lg:h-[487px]"
                    height={487}
                    placeholder="blur"
                    src={undrawIdeation}
                    width={504}
                    priority
                />
            </div>
        </div>
    </section>
);
