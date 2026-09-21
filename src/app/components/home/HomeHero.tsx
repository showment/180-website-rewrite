import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {marqueeClients} from '@/data/homeData';

export default function HomeHero() {
    const logos = [...marqueeClients, ...marqueeClients]; // duplicated for a seamless loop
    return (
        <section className="relative min-h-[100svh] text-white flex flex-col">
            {/* .duo img still applies the duotone filter to the <img> next/image renders. */}
            <div className="duo duo-hero absolute inset-0">
                <Image src="/images/heros/home_hero.webp" alt="" fill priority sizes="100vw" style={{objectPosition: '50% 30%'}}/>
            </div>

            <div className="relative flex-1 flex items-end">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-40 pb-16 lg:pb-24">
                    <p className="eyebrow rise text-brand">UC Irvine · Est. 2017</p>
                    <h1 className="display rise d1 mt-5 text-6xl md:text-8xl lg:text-[7.5rem]">
                        180 Degrees<br/>Consulting <span className="text-brand">UCI</span>
                    </h1>
                    <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <p className="rise d2 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed">
                            A consulting practice at UC Irvine, advising companies, startups, and nonprofits across industries since 2017.
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
                    <p className="eyebrow text-white/50 shrink-0 hidden md:block">50+ clients<br/>since 2017</p>
                    <div className="overflow-hidden mask-x flex-1">
                        {/* Start ~73% through the 40s cycle so the first logo sits inside the viewport
                            on load instead of at x=0, where mask-x fades it out. */}
                        <div className="marquee" style={{animationDelay: '-29s'}}>
                            {logos.map((c, i) => (
                                <Image key={i} src={`/images/clients/${c.file}`} alt={i < marqueeClients.length ? c.name : ''} width={96} height={96} className="logo-white h-24 w-24 -my-4"/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
