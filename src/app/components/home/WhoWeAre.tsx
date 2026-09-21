import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Three staggered columns of two. Aspect ratios alternate so the columns interlock.
const columns = [
    [{file: "case-comp.webp", alt: "Presenting at the Perplexity case competition", ratio: "aspect-[4/5]"}, {file: "laguna-hike.webp", alt: "Laguna hike", ratio: "aspect-[4/3]"}],
    [{file: "west-monroe.webp", alt: "West Monroe office tour", ratio: "aspect-[4/3]"}, {file: "joshua-tree.webp", alt: "Joshua Tree retreat", ratio: "aspect-[4/5]"}],
    [{file: "brunch.webp", alt: "Alumni brunch", ratio: "aspect-[4/5]"}, {file: "san-diego.webp", alt: "San Diego retreat", ratio: "aspect-[4/3]"}],
];

export default function WhoWeAre() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Collage: three columns, the middle one dropped, so the photos interlock. Full color. */}
                <div className="lg:col-span-6 grid grid-cols-3 gap-3 items-start">
                    {columns.map((col, ci) => (
                        <div key={ci} className={`flex flex-col gap-3 ${ci === 1 ? 'mt-10' : ci === 2 ? 'mt-4' : ''}`}>
                            {col.map(p => (
                                <div key={p.file} className={`relative rounded-2xl overflow-hidden bg-fog ${p.ratio}`}>
                                    <Image src={`/images/collage/${p.file}`} alt={p.alt} fill sizes="(max-width: 1024px) 33vw, 200px" className="object-cover"/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                    <p className="eyebrow text-brand-deep">Who we are</p>
                    <h2 className="display mt-4 text-4xl md:text-5xl text-balance">The longest-standing consulting organization at UCI</h2>
                    <p className="mt-6 text-slate leading-relaxed">
                        180 Degrees Consulting is the world&apos;s largest university-based consultancy. Our UC Irvine
                        branch was founded in 2017 and advises established companies, venture-backed startups,
                        foundations, and nonprofits.
                    </p>
                    <p className="mt-4 text-slate leading-relaxed">
                        Our teams work across strategy, market research, operations, and finance. Consultants carry
                        that work into technology, finance, and public service, at firms including McKinsey, Bain, BCG,
                        Goldman Sachs, and Google.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/services" className="pill pill-ink">What we do</Link>
                        <Link href="/team" className="pill pill-line">Meet the team</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
