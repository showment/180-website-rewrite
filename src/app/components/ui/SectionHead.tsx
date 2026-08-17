import React from 'react';

interface Props {
    eyebrow: string;
    title: React.ReactNode;
    aside?: React.ReactNode;   // paragraph or button shown on the right at lg
    light?: boolean;           // on dark backgrounds
}

export default function SectionHead({eyebrow, title, aside, light}: Props) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
                <p className={`eyebrow ${light ? 'text-brand' : 'text-brand-deep'}`}>{eyebrow}</p>
                <h2 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-2xl text-balance">{title}</h2>
            </div>
            {aside && <div className={`max-w-md ${light ? 'text-white/70' : 'text-slate'}`}>{aside}</div>}
        </div>
    );
}
