import React from 'react';
import {heroStats} from '@/data/homeData';

/* A slim ledger band, not a full section: three numbers in a row between hairlines. */
export default function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="border-y border-line py-10 lg:py-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24">
                {heroStats.map(s => (
                    <div key={s.label} className="flex items-baseline gap-3">
                        <p className="display text-4xl md:text-5xl">{s.value}{s.suffix && <span className="text-brand-deep">{s.suffix}</span>}</p>
                        <p className="text-slate font-medium">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
