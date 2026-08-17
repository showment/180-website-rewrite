import React from 'react';
import {heroStats} from '@/data/homeData';

export default function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {heroStats.map(s => (
                    <div key={s.label}>
                        <p className="display text-7xl lg:text-8xl">{s.value}{s.suffix && <span className="text-brand-deep">{s.suffix}</span>}</p>
                        <p className="mt-3 text-slate font-medium">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
