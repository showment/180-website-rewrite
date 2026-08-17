import React from 'react';
import Link from 'next/link';
import {marqueeClients} from '@/data/homeData';

export default function HomeHero() {
    const logos = [...marqueeClients, ...marqueeClients]; // duplicated for a seamless loop
    return (
        <section className="relative min-h-[100svh] text-white flex flex-col">
            {/* Plain <img>: CSS filters do the duotone, and next/image adds nothing for a single hero asset. */}
            <div className="duo duo-hero absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/heros/home_hero.webp" alt="" style={{objectPosition: '50% 30%'}} fetchPriority="high"/>
            </div>

            <div className="relative flex-1 flex items-end">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-40 pb-16 lg:pb-24">
                    <p className="eyebrow rise text-brand">UC Irvine · Est. 2017</p>
                    <h1 className="display rise d1 mt-5 text-6xl md:text-8xl lg:text-[7.5rem]">
                        180 Degrees<br/>Consulting <span className="text-brand">UCI</span>
                    </h1>
                    <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <p className="rise d2 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed">
                            Irvine&apos;s premier student consulting group since 2017.
                        </p>
                        <div className="rise d3 flex flex-wrap gap-3 shrink-0">
                            <Link href="/contact" className="pill pill-brand">Work with us <span aria-hidden="true">→</span></Link>
                            <Link href="/join-us" className="pill pill-ghost">Join our team</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/10 py-6 rise d4">
                <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center gap-8">
                    <p className="eyebrow text-white/50 shrink-0 hidden md:block">48 clients<br/>since 2017</p>
                    <div className="overflow-hidden mask-x flex-1">
                        <div className="marquee">
                            {logos.map((c, i) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={i} src={`/images/clients/${c.file}`} alt={i < marqueeClients.length ? c.name : ''} className="logo-white h-24 -my-4"/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
