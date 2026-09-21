import React from 'react';
import Link from 'next/link';

interface Action { href: string; label: string }

interface Props {
    eyebrow: string;
    title: string;
    body: string;
    primary: Action;
    secondary?: Action;
    ground?: 'fog' | 'white';   // alternate against whatever section sits above
}

/* The closing CTA on Home and Services: a full-bleed band, text set directly
   on it. `ground` alternates against the section above: Home follows white
   sections so it takes fog; Services follows the fog ClientWall so it takes white. */
export default function CTABand({eyebrow, title, body, primary, secondary, ground = 'fog'}: Props) {
    return (
        <section className={`py-24 lg:py-32 ${ground === 'fog' ? 'bg-fog' : 'bg-white'}`}>
            <div className="mx-auto max-w-2xl px-6 text-center">
                <p className="eyebrow text-brand-deep">{eyebrow}</p>
                <h2 className="display mt-5 text-4xl md:text-5xl">{title}</h2>
                <p className="mt-6 text-slate leading-relaxed">{body}</p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <Link href={primary.href} className="pill pill-ink">{primary.label}</Link>
                    {secondary && <Link href={secondary.href} className="pill pill-line">{secondary.label}</Link>}
                </div>
            </div>
        </section>
    );
}
