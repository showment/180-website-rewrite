import React from "react";
import Link from "next/link";
import PageHeader from "@/app/components/ui/PageHeader";
import SectionHead from "@/app/components/ui/SectionHead";
import Engagement from "./Engagement";
import ClientWall from "./ClientWall";
import {practices} from "@/data/siteData";

export const metadata = {title: "Services | 180 Degrees Consulting @ UCI"};

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Services"
                title="Our services."
                lede="Ten-week consulting engagements across six practice areas for nonprofits, social enterprises, and companies in Orange County."
                image="/images/heros/service_hero.webp"
            >
                <Link href="/contact" className="pill pill-brand">Request a proposal <span aria-hidden="true">→</span></Link>
            </PageHeader>

            <section className="bg-fog py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <SectionHead
                        eyebrow="Practice areas"
                        title="Practice areas."
                        aside={<p>Most engagements sit in one of these six areas. If yours doesn&apos;t, tell us anyway; scoping is part of the first two weeks.</p>}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {practices.map(p => (
                            <div key={p.title} className="bg-white rounded-3xl p-7 border border-line">
                                <h3 className="display text-2xl">{p.title}</h3>
                                <p className="mt-3 text-slate">{p.blurb}</p>
                                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                                    {p.tags.map(t => <span key={t} className="px-3 py-1 rounded-full bg-fog">{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Engagement/>
            <ClientWall/>

            <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
                <div className="rounded-[2rem] bg-ink text-white p-10 md:p-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <p className="eyebrow text-brand">Work with us</p>
                        <h2 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-2xl">Have a project in mind?</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <Link href="/contact" className="pill pill-brand">Request a proposal <span aria-hidden="true">→</span></Link>
                        <a href="mailto:uci@180dc.org" className="pill pill-ghost">uci@180dc.org</a>
                    </div>
                </div>
            </section>
        </>
    );
}
