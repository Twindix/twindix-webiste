"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import footerLogo from "@/app/assets/images/footer-logo.webp";
import { Button } from "@/atoms";
import { Social } from "@/components";
import { footerItemsData } from "@/data";
import { scrollToHomeTargetHandler } from "@/lib/utils";

export const Footer = () => {
    const router = useRouter();

    return (
        <footer className="bg-blue-50">
            <div className="mx-auto container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-5 lg:py-10">
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <Image
                            alt="footer_logo"
                            className="w-[150px] h-10"
                            placeholder="blur"
                            src={footerLogo}
                        />
                        <Social />
                    </div>
                    <div>
                        <h5>{footerItemsData.col1.title}</h5>
                        <ul className="mt-2 lg:mt-4 flex flex-col gap-2">
                            {footerItemsData.col1.urls.map(({
                                href,
                                label,
                            }, index) => (
                                <li
                                    className="font-medium text-xs lg:text-sm"
                                    key={index} // eslint-disable-line
                                >
                                    <Link
                                        aria-label={label}
                                        className="hover:underline text-blue-600"
                                        href={href}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5>{footerItemsData.col2.title}</h5>
                        <ul className="mt-2 lg:mt-4 flex flex-col gap-2">
                            {footerItemsData.col2.urls.map(({
                                label,
                                targetId,
                            }, index) => (
                                <li key={index}> {/* eslint-disable-line */}
                                    <Button
                                        ariaLabel={label}
                                        variant="link"
                                        isMini
                                        onClick={() => scrollToHomeTargetHandler(
                                            targetId,
                                            router,
                                        )}
                                    >
                                        {label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5>{footerItemsData.col3.title}</h5>
                        <ul className="mt-2 lg:mt-4 flex flex-col gap-2">
                            {footerItemsData.col3.urls.map(({
                                isExternal,
                                label,
                                targetId,
                            }, index) => (
                                <li
                                    className="font-medium text-xs lg:text-sm"
                                    key={index} // eslint-disable-line
                                >
                                    {isExternal && (
                                        <Link
                                            aria-label={label}
                                            className="hover:underline text-blue-600"
                                            href={targetId}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            {label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid place-items-center border-t border-gray-600 py-3 lg:py-6">
                    <span className="text-xs lg:text-sm text-gray-600">
                        ©
                        {new Date().getFullYear()}
                        {" "}
                        Twindix. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};
