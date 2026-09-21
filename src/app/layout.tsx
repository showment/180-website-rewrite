import type {Metadata} from "next";
import {Inter_Tight, Manrope} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import React from "react";

const manrope = Manrope({variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"]});
const interTight = Inter_Tight({variable: "--font-inter-tight", subsets: ["latin"], weight: ["500", "600", "700", "800"]});

export const metadata: Metadata = {
    title: "180 Degrees Consulting @ UC Irvine",
    description: "A consulting practice at UC Irvine advising companies, startups, foundations, and nonprofits on strategy, operations, and growth.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${manrope.variable} ${interTight.variable}`}>
        <body className="antialiased">
        <NavBar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
