import Image from "next/image";

import globe from "@/app/assets/icons/globe.svg";
import message from "@/app/assets/icons/message.svg";
import mobile from "@/app/assets/icons/mobile.svg";
import phone from "@/app/assets/icons/phone.svg";
import pin from "@/app/assets/icons/pin.svg";
import rbouaLogo from "@/app/assets/images/rboua_logo.webp";
import { Card } from "@/atoms";

export const RepresentativesAndFranchisesCard = () => (
    <section className="pt-30 pb-20 lg:py-40">
        <div className="grid place-items-center">
            <h2 className="text-gradient1 text-center">
                Representatives
                <br className="hidden lg:block" />
                & Franchises
            </h2>
        </div>
        <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center mt-4 lg:mt-8 w-fit! mx-auto">
            <div className="col-span-1 lg:col-span-5">
                <Image
                    alt="assessments_docs"
                    height={210}
                    placeholder="blur"
                    src={rbouaLogo}
                    width={404}
                />
            </div>
            <div className="col-span-1 lg:col-span-7">
                <ul className="flex flex-col gap-2 lg:gap-4">
                    <li className="flex items-start gap-3">
                        <Image
                            alt="location"
                            height={20}
                            src={pin}
                            width={20}
                        />
                        <address className="not-italic text-black/70 text-sm lg:text-lg">
                            192 Saqr Qourish, New Maadi, Cairo, Egypt
                        </address>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="phone"
                            height={20}
                            src={phone}
                            width={20}
                        />
                        <a
                            className="text-black/70 text-sm lg:text-lg hover:underline"
                            href="tel:+20227471775"
                        >
                            02 27471775
                        </a>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="mobile"
                            height={20}
                            src={mobile}
                            width={20}
                        />
                        <a
                            className="text-black/70 text-sm lg:text-lg hover:underline"
                            href="tel:+201019990225"
                        >
                            01019990225
                        </a>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="email"
                            height={20}
                            src={message}
                            width={20}
                        />
                        <a
                            className="text-black/70 text-sm lg:text-lg hover:underline"
                            href="mailto:info@rboua.com"
                        >
                            info@rboua.com
                        </a>
                    </li>
                    <li className=" flex items-center gap-2">
                        <Image
                            alt="website"
                            height={20}
                            src={globe}
                            width={20}
                        />
                        <a
                            className="text-black/70 text-sm lg:text-lg hover:underline"
                            href="https://rboua.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Rboua.com
                        </a>
                    </li>
                </ul>
            </div>
        </Card>
    </section>
);
