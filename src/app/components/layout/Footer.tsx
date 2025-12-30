import React from 'react';
import {Instagram, Linkedin, Mail} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 border-t border-gray-700">
            <div
                className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center md:items-start">

                <div className="text-center md:text-left mb-6 md:mb-0 md:max-w-lg">
                    <p className="text-sm font-medium mb-2 text-white">
                        © 2026 180 Degrees Consulting @ UCI
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        We are a student organization acting independently of the University of California.
                        We take full responsibility for our organization and this website.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="mailto:uci@180dc.org"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20}/>
                    </a>

                    <a
                        href="https://www.instagram.com/180dcuci/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-400 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={20}/>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/180-degrees-consulting-uci"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}