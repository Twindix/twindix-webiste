import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    description: "Twindix website",
    title: "Twindix",
};

export default function RootLayout({ children } : Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen flex flex-col bg-background text-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SiteNavbar />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
