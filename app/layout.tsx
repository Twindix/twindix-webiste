import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
