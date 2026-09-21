import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
    eyebrow: string;
    title: React.ReactNode;
    lede?: string;
    image: string;          // path under /public
    objectPosition?: string;
    children?: React.ReactNode; // optional actions row
}

/* Compact dark header shared by every inner page. Same .duo treatment as the homepage hero. */
export default function PageHeader({eyebrow, title, lede, image, objectPosition = '50% 40%', children}: PageHeaderProps) {
    return (
        <section className="relative min-h-[62svh] text-white flex flex-col">
            <div className="duo duo-hero absolute inset-0">
                <Image src={image} alt="" fill priority sizes="100vw" style={{objectPosition}}/>
            </div>
            <div className="relative flex-1 flex items-end">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-36 pb-14 lg:pb-16">
                    <p className="eyebrow rise text-brand">{eyebrow}</p>
                    <h1 className="display rise d1 mt-4 max-w-4xl text-5xl md:text-6xl lg:text-7xl text-balance">{title}</h1>
                    {lede && <p className="rise d2 mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{lede}</p>}
                    {children && <div className="rise d3 mt-8 flex flex-wrap gap-3">{children}</div>}
                </div>
            </div>
        </section>
    );
}
