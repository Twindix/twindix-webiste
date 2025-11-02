import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

import { Footer, Navbar } from "@/components";

const robotoFont = Roboto({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    description: "We evaluate leadership intelligence and unlock smarter decisions. At Twindix, we go beyond assessments. We are your strategic partner in building smarter organizations, aligned teams, and self-aware leaders. Using AI-powered behavioral analytics, we help you see the full picture—how your people think, lead, and perform—and offer a clear roadmap for meaningful development.",
    title: "Twindix",
};

export default function RootLayout({ children } : Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`min-h-screen flex flex-col bg-background text-foreground ${robotoFont.className} antialiased`}>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
