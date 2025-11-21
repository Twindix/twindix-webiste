"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import team from "@/app/assets/images/team.webp";
import { Card } from "@/atoms";

export const HomeYearsOfSearch = () => (
    <section className="pb-5 lg:pb-10">
        <motion.div
            initial={{
                opacity: 0,
                y: -200,
            }}
            transition={{
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
        >
            <Card className="card-gradient grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 lg:py-[63px] lg:px-[76px]">
                <div className="col-span-1 lg:col-span-6 inner-card-gradient rounded-3xl p-4 lg:p-8 h-fit relative z-50">
                    <h2 className="text-gradient">
                        <span className="text-gradient font-bold text-6xl lg:text-8xl relative top-1 lg:top-3">9</span>
                        {" "}
                        Years of Search
                    </h2>
                    <p>For nine years, <span className="text-blue-500">Twindix</span> has led an extensive research program studying managerial practices, workplace behaviours, and job-fit across more than <span className="text-blue-500">217 industries</span>. Through analysing thousands of roles and validating patterns across real environments, <span className="text-blue-500">Twindix</span> built its own scientific <span className="text-blue-500">models and benchmarks</span> that now serve as a global reference. Every assessment we deliver today is the result of this long, <span className="text-blue-500">data-driven journey</span>—precision built on nearly a decade of rigorous research.</p>
                </div>
                <div className="col-span-1 lg:col-span-6 grid place-items-center lg:justify-end">
                    <Image
                        alt="team"
                        height={250}
                        placeholder="blur"
                        src={team}
                        width={400}
                        priority
                    />
                </div>
            </Card>
        </motion.div>
    </section>
);
