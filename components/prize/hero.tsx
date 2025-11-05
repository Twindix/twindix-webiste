import Image from "next/image";

import business from "@/app/assets/images/business.webp";
import { Hero } from "@/components";

export const PrizeHero = () => (
    <Hero>
        <div className="container text-center mb-4 lg:mb-8">
            <h1 className="text-gradient3">The Prize</h1>
            <p>
                <span className="text-blue-500">Benefits</span>
                {" "}
                of Understanding Organizational Mindset and
                {" "}
                <br />
                Management
                {" "}
                <span className="text-blue-500">Indicators</span>
            </p>
        </div>
        <Image
            alt="business"
            src={business}
            priority
        />
    </Hero>
);
