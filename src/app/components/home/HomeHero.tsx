import React from 'react';
import Image from 'next/image';

import BouncingArrow from '../ui/BouncingArrow';

export default function HomeHero() {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/heros/home_hero.webp"
                    alt="180DC UCI Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/65"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                    <div className="text-left">
                        <p className="text-white text-xl md:text-2xl mb-4 font-light">
                            Irvine's Premier Consulting Group
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            180 Degrees Consulting @ UCI
                        </h1>
                    </div>
                </div>
            </div>

            <BouncingArrow/>
        </div>
    );
}