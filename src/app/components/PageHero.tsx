import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
}

export default function PageHero({title, subtitle, imageSrc}: PageHeroProps) {
    return (
        <div className="relative h-[50vh] w-full">
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {title}
                        </h1>
                        <p className="text-base md:text-lg text-white font-light">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}