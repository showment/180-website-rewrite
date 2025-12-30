'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="absolute w-full bg-transparent flex items-center justify-between px-4 py-2 z-50">
            <div className="pt-2">
                <Link href="/" className="inline-block">
                    <Image
                        src='/images/logo.webp'
                        alt="180DC Logo"
                        className="h-13 w-auto px-4"
                        width={100}
                        height={60}
                    />
                </Link>
            </div>

            <div>
                <ul className="flex items-center space-x-5 px-4">
                    <li>
                        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
                    </li>
                    <li>
                        <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
                    </li>
                    <li>
                        <Link href="/join-us" className="hover:text-gray-300 transition-colors">Join</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}