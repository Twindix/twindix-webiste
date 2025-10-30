import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

import { Footer, Navbar } from "@/components";
import { constantsData } from "@/data";

const robotoFont = Roboto({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    description: constantsData.metadataDescription,
    title: constantsData.twindix,
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
