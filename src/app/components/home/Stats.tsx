import React from 'react';
import {heroStats} from '@/data/homeData';

/* A slim ledger band, not a full section: three numbers in a row between hairlines. */
export default function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="border-y border-line py-8 lg:py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {heroStats.map(s => (
                    <div key={s.label} className="flex items-baseline gap-3">
                        <p className="display text-3xl md:text-4xl">{s.value}{s.suffix && <span className="text-brand-deep">{s.suffix}</span>}</p>
                        <p className="text-sm text-slate font-medium">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
