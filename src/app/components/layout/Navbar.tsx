'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/team", label: "Team" },
        { href: "/join-us", label: "Join" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <nav
            className={`
                absolute w-full z-50 transition-colors duration-300 ease-in-out
                ${isMenuOpen ? 'bg-neutral-950/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}
            `}
        >
            <style jsx>{`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.3s ease-out forwards;
                }
            `}</style>

            <div className="flex items-center justify-between px-4 py-2">
                <div className="pt-2 flex-shrink-0">
                    <Link href="/" className="inline-block">
                        <Image
                            src='/images/logo.webp'
                            alt="180DC Logo"
                            className="h-10 md:h-12 w-auto px-2 md:px-4"
                            width={100}
                            height={60}
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center space-x-5 px-4 font-medium text-white">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none p-2 transition-transform duration-200 active:scale-95"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-md animate-fade-in-down border-t border-b border-white/10 shadow-2xl">
                    <ul className="flex flex-col items-center py-6 space-y-6 font-medium text-white">
                        {navLinks.map((link) => (
                            <li key={link.label} className="w-full text-center">
                                <Link
                                    href={link.href}
                                    className="block py-2 text-lg hover:text-gray-300 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}