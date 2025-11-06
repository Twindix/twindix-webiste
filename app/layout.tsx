import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Roboto_Flex } from "next/font/google";
import { ReactNode } from "react";

import { Footer, Navbar } from "@/components";
import { publicUrl } from "@/data";

const robotoFont = Roboto_Flex({
    axes: ["opsz"],
    display: "swap",
    preload: true,
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
        languages: { en: "/" },
    },
    category: "business",
    description: "We evaluate leadership intelligence and unlock smarter decisions. At Twindix, we go beyond assessments. We are your strategic partner in building smarter organizations, aligned teams, and self-aware leaders. Using AI-powered behavioral analytics, we help you see the full picture—how your people think, lead, and perform—and offer a clear roadmap for meaningful development.",
    formatDetection: {
        address: false,
        email: false,
        telephone: false,
    },
    icons: {
        apple: "/apple-touch-icon.png",
        icon: "/favicon.ico",
        shortcut: "/favicon-32x32.png",
    },
    keywords: [
        "Leadership Assessment",
        "Executives Assessment",
        "Job Bar Assessment",
        "Behavioral Analytics",
        "Candidates Assessment",
        "HR Tools",
        "Recruitment Solutions",
        "Organizational Development",
        "AI Assessments",
        "Twindix",
    ],
    metadataBase: new URL(publicUrl),
    openGraph: {
        description: "We evaluate leadership intelligence and unlock smarter decisions.",
        images: [
            {
                alt: "Twindix – Leadership Intelligence",
                height: 630,
                url: "/og/og-default.jpg",
                width: 1200,
            },
        ],
        siteName: "Twindix",
        title: "Twindix",
        type: "website",
        url: `${publicUrl}/`,
    },
    referrer: "origin-when-cross-origin",
    robots: {
        follow: true,
        googleBot: {
            follow: true,
            index: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
        index: true,
    },
    title: {
        default: "Twindix",
        template: "%s | Twindix",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@twindix",
        site: "@twindix",
    },
    verification: { google: "GOOGLE_SITE_VERIFICATION_TOKEN" },
};

export const viewport: Viewport = { themeColor: "#00519F" };

export default function RootLayout({ children } : Readonly<{ children: ReactNode }>) {
    return (
        <html
            className={`${robotoFont.variable} font-sans`}
            lang="en"
        >
            <body
                className={`min-h-screen flex flex-col bg-background text-foreground ${robotoFont.className} antialiased`}
                suppressHydrationWarning
            >
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
