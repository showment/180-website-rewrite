import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import React from "react";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "180 Degrees Consulting - UC Irvine",
    description: "Irvine's Premier Consulting Group",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${manrope.variable} antialiased`}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}