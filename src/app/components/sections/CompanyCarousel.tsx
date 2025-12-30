'use client';

import { companyLogos } from '@/data/companyLogos';
import Image from 'next/image';


export default function CompanyCarousel() {
    return (
        <div className="pt-12">
            <p className="text-sm md:text-base text-gray-500 uppercase tracking-wider mb-8">
                Where Our Alumni Work
            </p>

            <div className="relative overflow-hidden">
                <div className="flex animate-scroll-continuous">
                    {companyLogos.map((logo, index) => (
                        <div key={`logo-1-${index}`}
                             className="relative w-32 h-20 md:w-40 md:h-24 opacity-70 flex-shrink-0 mx-6">
                            <Image
                                src={`/images/logos/${logo}`}
                                alt={`Company ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}

                    {companyLogos.map((logo, index) => (
                        <div key={`logo-2-${index}`}
                             className="relative w-32 h-20 md:w-40 md:h-24 opacity-70 flex-shrink-0 mx-6">
                            <Image
                                src={`/images/logos/${logo}`}
                                alt={`Company ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}