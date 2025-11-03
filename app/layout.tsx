import "./globals.css";

import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { ReactNode } from "react";

import { Footer, Navbar } from "@/components";

const robotoFont = Roboto_Flex({
    axes: ["opsz"],
    display: "swap",
    preload: true,
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    description: "We evaluate leadership intelligence and unlock smarter decisions. At Twindix, we go beyond assessments. We are your strategic partner in building smarter organizations, aligned teams, and self-aware leaders. Using AI-powered behavioral analytics, we help you see the full picture—how your people think, lead, and perform—and offer a clear roadmap for meaningful development.",
    title: "Twindix",
};

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
