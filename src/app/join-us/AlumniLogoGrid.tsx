import React from 'react';
import Image from 'next/image';
import {companyLogos} from "@/data/companyLogos";

export default function AlumniLogoGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {companyLogos.map((logo, index) => (
                <div
                    key={index}
                    className="rounded-lg p-2 flex items-center justify-center hover:shadow-lg transition-shadow aspect-square w-[calc(25%-0.5rem)] md:w-[calc(16.666%-0.625rem)] lg:w-[calc(11.111%-0.625rem)]"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={`/images/logos/${logo}`}
                            alt={`Alumni Company ${index + 1}`}
                            fill
                            className="object-contain transition-all"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}