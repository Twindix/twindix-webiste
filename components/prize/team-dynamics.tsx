"use client";

import { motion } from "framer-motion";

export const TeamDynamics = () => (
    <section className="pt-2 lg:pt-4 pb-5 lg:pb-10">
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
        >
            <h2 className="text-gradient1">
                How Understanding Team Dynamics
                <br className="hidden lg:block" />
                {" "}
                Through TWINDIX Transforms Leadership
            </h2>
            <p>
                TWINDIX is more than just a standard assessment—it helps decode your organization’s deeper operational dynamics by revealing strengths that may go unnoticed. Traditional assessments often miss key behavioral patterns and team synergies, but TWINDIX dives deeper, using over 1,500 studies and insights from 230 business models to provide a clear picture of how your team operates.
                This level of understanding allows you to lead with precision, clarity, and confidence, ensuring that every decision you make is informed by a deep knowledge of your team’s strengths and areas for growth. By using TWINDIX, you’re not just assessing; you’re unlocking the full potential of your team, fostering an environment where individuals thrive and the organization reaches new heights.
            </p>
        </motion.div>
    </section>
);
