import Image from "next/image";
import Link from "next/link";

import footerLogo from "@/app/assets/images/footer-logo.webp";
import { Social } from "@/components";
import { footerItemsData, routeUrlsData } from "@/data";

export const Footer = () => (
    <footer className="bg-blue-50">
        <div className="mx-auto container py-5 lg:py-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                    <h3 className="text-base lg:text-xl font-semibold text-foreground">{footerItemsData.col1.title}</h3>
                    <ul className="mt-3 space-y-2">
                        {footerItemsData.col1.urls.map(({
                            href,
                            label,
                        }) => (
                            <li
                                className="font-medium text-xs lg:text-sm"
                                key={href}
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
                    <h3 className="text-base lg:text-xl font-semibold text-foreground">{footerItemsData.col2.title}</h3>
                    <ul className="mt-3 space-y-2">
                        {footerItemsData.col2.urls.map(({
                            href,
                            label,
                        }) => (
                            <li
                                className="font-medium text-xs lg:text-sm"
                                key={href}
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
                    <h3 className="text-base lg:text-xl font-semibold text-foreground">{footerItemsData.col3.title}</h3>
                    <ul className="mt-3 space-y-2">
                        {footerItemsData.col3.urls.map(({
                            href,
                            label,
                        }) => (
                            <li
                                className="font-medium text-xs lg:text-sm"
                                key={href}
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
            </div>
            <div className="mt-5 lg:mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-gray-600 pt-3 lg:pt-6 sm:flex-row">
                <p className="text-xs lg:text-sm text-gray-600">
                    ©
                    {new Date().getFullYear()}
                    {" "}
                    Twindix. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-xs lg:text-sm">
                    <Link
                        aria-label="Privacy"
                        className="text-gray-600 hover:text-blue-600"
                        href={routeUrlsData.privacy}
                    >
                        Privacy
                    </Link>
                    <Link
                        aria-label="Terms"
                        className="text-gray-600 hover:text-blue-600"
                        href={routeUrlsData.terms}
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);
