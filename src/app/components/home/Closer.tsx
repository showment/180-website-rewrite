import React from 'react';
import Link from 'next/link';

export default function Closer() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
            <div className="rounded-[2rem] bg-ink text-white p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                <div>
                    <p className="eyebrow text-brand">Work with us</p>
                    <h2 className="display mt-4 text-4xl md:text-6xl lg:text-7xl">Bring us any problem.</h2>
                    <p className="mt-5 max-w-xl text-white/70 text-lg">
                        Strategy, research, operations, marketing. A dedicated team of student consultants, ten weeks, and a plan you can act on.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                    <Link href="/contact" className="pill pill-brand">Contact us <span aria-hidden="true">→</span></Link>
                    <Link href="/services" className="pill pill-ghost">Our services</Link>
                </div>
            </div>
        </section>
    );
}
