import React from 'react';
import {insidePhotos} from '@/data/homeData';

/* Auto-scrolling photo strip (CSS marquee, pauses on hover, off under prefers-reduced-motion). Full color. */
export default function InsideStrip() {
    const photos = [...insidePhotos, ...insidePhotos];
    return (
        <div className="mask-x overflow-hidden">
            <div className="marquee !gap-4" style={{animationDuration: '60s'}}>
                {photos.map((p, i) => (
                    <div key={i} className="w-72 h-96 rounded-2xl shrink-0 overflow-hidden bg-fog">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/images/collage/${p.file}`} alt={i < insidePhotos.length ? p.alt : ''} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
