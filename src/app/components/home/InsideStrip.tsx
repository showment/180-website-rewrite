import React from 'react';
import Image from 'next/image';
import {insidePhotos} from '@/data/homeData';

/* Auto-scrolling photo strip (CSS marquee, pauses on hover, off under prefers-reduced-motion). Full color. */
export default function InsideStrip() {
    const photos = [...insidePhotos, ...insidePhotos];
    return (
        <div className="mask-x overflow-hidden">
            <div className="marquee !gap-4" style={{animationDuration: '60s'}}>
                {photos.map((p, i) => (
                    <div key={i} className="relative w-72 h-96 rounded-2xl shrink-0 overflow-hidden bg-fog">
                        <Image src={`/images/collage/${p.file}`} alt={i < insidePhotos.length ? p.alt : ''} fill sizes="288px" className="object-cover"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
