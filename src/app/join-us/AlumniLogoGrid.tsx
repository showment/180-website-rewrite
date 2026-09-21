import React from 'react';
import Image from 'next/image';
import {companyLogos} from "@/data/companyLogos";

export default function AlumniLogoGrid() {
    return (
        <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-x-6 gap-y-6">
            {companyLogos.map((logo) => (
                <li key={logo} className="relative aspect-[3/2]">
                    <Image src={`/images/logos/${logo}`} alt={logo.replace('.webp', '').replace(/-/g, ' ')} fill sizes="10vw" className="object-contain"/>
                </li>
            ))}
        </ul>
    );
}
