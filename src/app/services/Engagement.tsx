import React from 'react';
import SectionHead from '@/app/components/ui/SectionHead';
import {engagement} from '@/data/siteData';

/* Ten weeks as a horizontal track on desktop (each item carries its own segment of the line, so every row gets one),
   and a vertical rail on mobile. */
export default function Engagement() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <SectionHead
                    eyebrow="How an engagement runs"
                    title="Ten weeks, start to finish"
                    aside={<p>One academic quarter. You meet the team in week two and see a final presentation in week nine.</p>}
                />
                <ol className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 lg:gap-y-14">
                    {engagement.map((step, i) => (
                        <li key={step.week} className="relative pl-7 lg:pl-0 lg:pr-8 lg:pt-8 lg:border-t lg:border-line">
                            <span className="absolute left-0 top-1 lg:top-0 lg:-translate-y-1/2 h-4 w-4 rounded-full bg-brand ring-4 ring-white" aria-hidden="true"/>
                            {i < engagement.length - 1 && <span className="lg:hidden absolute left-[7px] top-6 -bottom-10 w-px bg-line" aria-hidden="true"/>}
                            <p className="eyebrow text-brand-deep">{step.week}</p>
                            <h3 className="display text-xl mt-2">{step.title}</h3>
                            <p className="mt-2 text-sm text-slate leading-relaxed">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
