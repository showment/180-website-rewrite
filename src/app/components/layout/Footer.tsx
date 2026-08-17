import React from 'react';
import Image from 'next/image';
import {Instagram, Linkedin, Mail} from 'lucide-react';

const links = [
    {href: "mailto:uci@180dc.org", label: "Email uci@180dc.org", Icon: Mail},
    {href: "https://www.instagram.com/180dcuci/", label: "Instagram", Icon: Instagram},
    {href: "https://www.linkedin.com/company/180-degrees-consulting-uci", label: "LinkedIn", Icon: Linkedin},
];

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="max-w-md">
                    <Image src="/images/logo.webp" alt="180 Degrees Consulting UC Irvine" width={180} height={75} className="h-8 w-auto logo-ink"/>
                    <p className="mt-4 text-xs text-slate leading-relaxed">
                        We are a student organization acting independently of the University of California. We take full
                        responsibility for our organization and this website. © {new Date().getFullYear()} 180 Degrees Consulting @ UCI.
                    </p>
                </div>
                <ul className="flex gap-3">
                    {links.map(({href, label, Icon}) => (
                        <li key={href}>
                            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                               className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
                                <Icon size={18}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
