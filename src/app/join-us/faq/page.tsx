import React from 'react';
import Link from 'next/link';
import PageHeader from '@/app/components/ui/PageHeader';
import {joinFaqs} from '@/data/siteData';

export const metadata = {title: "FAQ | 180 Degrees Consulting @ UCI"};

export default function JoinFaqPage() {
    return (
        <>
            <PageHeader
                eyebrow="Recruiting FAQ"
                title="Questions, answered."
                lede="What applicants ask us most about joining 180DC."
                image="/images/heros/join_hero.webp"
            >
                <Link href="/join-us#timeline" className="pill pill-brand">See the timeline <span aria-hidden="true">→</span></Link>
                <Link href="/join-us" className="pill pill-ghost">Back to Join</Link>
            </PageHeader>

            <section className="py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4">
                        <p className="eyebrow text-brand-deep">FAQ</p>
                        <h2 className="display mt-4 text-4xl md:text-5xl">Common questions.</h2>
                        <p className="text-slate mt-6">Anything we missed? Email <a className="underline" href="mailto:uci@180dc.org">uci@180dc.org</a> or ask at the info session.</p>
                    </div>
                    <div className="lg:col-span-8 divide-y divide-line">
                        {joinFaqs.map((f, i) => (
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
        </>
    );
}
