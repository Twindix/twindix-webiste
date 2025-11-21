import Image from "next/image";

import globe from "@/app/assets/icons/globe.svg";
import message from "@/app/assets/icons/message.svg";
import funAndValueLogo from "@/app/assets/images/fun_and_value_logo.webp";
import maurisseLogo from "@/app/assets/images/maurisse_logo.webp";
import rbouaLogo from "@/app/assets/images/rboua_logo.webp";
import { Card } from "@/atoms";

export const RepresentativesAndFranchisesCards = () => (
    <section className="pt-30 pb-20 lg:py-40">
        <div className="grid place-items-center">
            <h2 className="text-gradient text-center">
                Representatives
                <br className="hidden lg:block" />
                & Franchises
            </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 mt-4 lg:mt-8">
            <Card className="flex flex-col col-span-1 lg:col-span-4 gap-3 lg:gap-6">
                <Image
                    alt="maurisse_logo"
                    className="m-auto"
                    height={128}
                    placeholder="blur"
                    src={maurisseLogo}
                    width={348}
                    priority
                />
                <ul className="flex flex-col gap-2">
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="website"
                            height={20}
                            src={globe}
                            width={20}
                            priority
                        />
                        <a
                            className="text-foreground text-xs lg:text-sm underline"
                            href="https://maurisse.com/contact/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Maurisse.com
                        </a>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="email"
                            height={20}
                            src={message}
                            width={20}
                            priority
                        />
                        <a
                            className="text-black text-xs lg:text-sm no-underline"
                            href="mailto:contact@maurisse.com"
                        >
                            contact@maurisse.com
                        </a>
                    </li>
                </ul>
            </Card>
            <Card className="flex flex-col col-span-1 lg:col-span-4 gap-3 lg:gap-6">
                <Image
                    alt="rboua_logo"
                    className="m-auto"
                    height={180}
                    placeholder="blur"
                    src={rbouaLogo}
                    width={350}
                    priority
                />
                <ul className="flex flex-col gap-2">
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="website"
                            height={20}
                            src={globe}
                            width={20}
                            priority
                        />
                        <a
                            className="text-foreground text-xs lg:text-sm underline"
                            href="https://rboua.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Rboua.com
                        </a>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="email"
                            height={20}
                            src={message}
                            width={20}
                            priority
                        />
                        <a
                            className="text-black text-xs lg:text-sm no-underline"
                            href="mailto:info@rboua.com"
                        >
                            info@rboua.com
                        </a>
                    </li>
                </ul>
            </Card>
            <Card className="flex flex-col col-span-1 lg:col-span-4 gap-3 lg:gap-6">
                <Image
                    alt="fun_and_value_logo"
                    className="m-auto"
                    height={215}
                    placeholder="blur"
                    src={funAndValueLogo}
                    width={180}
                    priority
                />
                <ul className="flex flex-col gap-2">
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="website"
                            height={20}
                            src={globe}
                            width={20}
                            priority
                        />
                        <a
                            className="text-foreground text-xs lg:text-sm underline"
                            href="https://funandvalue.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Fun & Value.com
                        </a>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="email"
                            height={20}
                            src={message}
                            width={20}
                            priority
                        />
                        <a
                            className="text-black text-xs lg:text-sm no-underline"
                            href="mailto:info@funandvalue.com"
                        >
                            info@funandvalue.com
                        </a>
                    </li>
                </ul>
            </Card>
        </div>
    </section>
);
