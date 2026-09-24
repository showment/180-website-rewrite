'use client';

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from 'lucide-react';

const navLinks = [
    {href: "/services", label: "Services"},
    {href: "/team", label: "Team"},
    {href: "/join-us", label: "Join"},
    {href: "/join-us/faq", label: "FAQ"},
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-4 inset-x-0 z-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-3xl md:rounded-full bg-ink/70 backdrop-blur-md border border-white/10 text-white">
                <div className="h-14 pl-5 pr-2 flex items-center justify-between">
                    <Link href="/" className="flex items-center" aria-label="180 Degrees Consulting UC Irvine, home">
                        <Image src="/images/logo.webp" alt="" width={190} height={80} priority className="h-8 w-auto"/>
                    </Link>
                    <nav className="hidden md:flex items-center gap-1 text-sm font-semibold">
                        {navLinks.map(l => (
                            <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors">{l.label}</Link>
                        ))}
                        <Link href="/contact" className="ml-2 pill pill-brand !py-2.5 !px-4 !text-sm">Work with us</Link>
                    </nav>
                    <button className="md:hidden p-2 rounded-full hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
                        {open ? <X size={22}/> : <Menu size={22}/>}
                    </button>
                </div>
                {open && (
                    <nav className="md:hidden border-t border-white/10 px-5 py-4 flex flex-col gap-3 text-base font-semibold">
                        {navLinks.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
                        <Link href="/contact" onClick={() => setOpen(false)} className="pill pill-brand mt-2 self-start">Work with us</Link>
                    </nav>
                )}
            </div>
            </div>
        </header>
    );
}
