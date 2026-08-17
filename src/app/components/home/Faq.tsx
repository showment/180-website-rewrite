import React from 'react';
import {faqs} from '@/data/homeData';

export default function Faq() {
    return (
        <section className="bg-fog py-20 lg:py-28 border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                    <p className="eyebrow text-brand-deep">FAQ</p>
                    <h2 className="display mt-4 text-4xl md:text-5xl">Common questions.</h2>
                </div>
                <div className="lg:col-span-8 divide-y divide-line">
                    {faqs.map((f, i) => (
                        <details key={f.q} className="py-5" open={i === 0}>
                            <summary className="flex justify-between items-center gap-6 font-bold text-lg">
                                {f.q}<span className="chev text-2xl font-light transition-transform">+</span>
                            </summary>
                            <p className="mt-3 text-slate max-w-2xl">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
