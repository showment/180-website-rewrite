import React from 'react';
import {heroStats} from '@/data/homeData';

export default function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {heroStats.map(s => (
                    <div key={s.label}>
                        <p className="display text-7xl lg:text-8xl">{s.value}{s.suffix && <span className="text-brand-deep">{s.suffix}</span>}</p>
                        <p className="mt-3 text-slate font-medium">{s.label}</p>
                    </div>
                ))}
            </div>
            <div className="mt-20 lg:mt-28 border-t border-line" aria-hidden="true"/>
        </section>
    );
}
