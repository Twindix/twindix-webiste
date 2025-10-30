import Link from "next/link";

import { BrandMark, SocialRow } from "@/components";

export const Footer = () => (
    <footer className="bg-blue-50">
        <div className="mx-auto container sm:px-0 px-4 py-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <BrandMark className="mb-4" />
                    <SocialRow className="mt-2" />
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">About</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/about"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/prize"
                            >
                                The Prize
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/why-twindix"
                            >
                                Why&nbsp;Twindix&nbsp;?
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/representatives"
                            >
                                Representatives &amp; franchises
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">Assessments</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/assessments/executives"
                            >
                                Twindix Executives
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/assessments/job-bar"
                            >
                                Job Bar Assessments
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">Do It Now</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <Link
                                className="hover:underline text-foreground"
                                href="/get-the-assessment"
                            >
                                Get The Assessment
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t pt-6 sm:flex-row">
                <p className="text-xs text-gray-600">
                    ©
                    {new Date().getFullYear()}
                    {" "}
                    Twindix. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm">
                    <Link
                        className="text-gray-600 hover:text-gray-900"
                        href="/privacy"
                    >
                        Privacy
                    </Link>
                    <Link
                        className="text-gray-600 hover:text-gray-900"
                        href="/terms"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);
