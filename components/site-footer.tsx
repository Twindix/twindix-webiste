// components/site-footer.tsx
import Link from "next/link";

import { BrandMark, SocialRow } from "@/components/brand";

const BLUE = "#0A51B7";

export function SiteFooter() {
    return (
        <footer
            className="mt-16 border-t"
            style={{ backgroundColor: "rgba(214, 232, 250, 0.5)" }} // pale/light blue
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand + socials */}
                    <div>
                        <BrandMark className="mb-4" />
                        <SocialRow className="mt-2" />
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">About</h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/about"
                                    style={{ color: BLUE }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/prize"
                                    style={{ color: BLUE }}
                                >
                                    The Prize
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/why-twindix"
                                    style={{ color: BLUE }}
                                >
                                    Why&nbsp;Twindix&nbsp;?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/representatives"
                                    style={{ color: BLUE }}
                                >
                                    Representatives &amp; franchises
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Assessments */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Assessments</h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/assessments/executives"
                                    style={{ color: BLUE }}
                                >
                                    Twindix Executives
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/assessments/job-bar"
                                    style={{ color: BLUE }}
                                >
                                    Job Bar Assessments
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Do It Now */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Do It Now</h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/get-the-assessment"
                                    style={{ color: BLUE }}
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
}
