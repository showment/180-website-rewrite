import React from 'react';
import Image from 'next/image';
import SectionHead from '@/app/components/ui/SectionHead';
import {allClients, featuredClients} from '@/data/siteData';

export default function ClientWall() {
    const rest = allClients.length - featuredClients.length;
    return (
        <section className="bg-fog py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <SectionHead
                    eyebrow="Clients"
                    title={<>{allClients.length} organizations since 2017.</>}
                    aside={<p>Nonprofits and social enterprises first, and increasingly startups and companies. A selection below, plus {rest} more.</p>}
                />
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-0">
                    {featuredClients.map(name => (
                        <li key={name} className="relative h-32">
                            <Image src={`/images/clients/${name}.webp`} alt={name.replace(/([a-z])([A-Z])/g, '$1 $2')} fill sizes="12vw" className="object-contain client-logo"/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
