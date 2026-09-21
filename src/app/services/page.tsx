import React from "react";
import Link from "next/link";
import PageHeader from "@/app/components/ui/PageHeader";
import SectionHead from "@/app/components/ui/SectionHead";
import ClientWall from "./ClientWall";
import CTABand from "@/app/components/ui/CTABand";
import {practices} from "@/data/siteData";

export const metadata = {title: "Services | 180 Degrees Consulting @ UCI"};

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Services"
                title="Our Services"
                lede="Our consultants work across industries and sectors, advising established companies, startups, foundations, and nonprofits. Every engagement is scoped to the decision in front of you."
                image="/images/heros/service_hero.webp"
            >
                <Link href="/contact" className="pill pill-brand">Request a proposal <span aria-hidden="true">→</span></Link>
            </PageHeader>

            <section className="bg-fog py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <SectionHead
                        eyebrow="Practice areas"
                        title="Practice areas"
                        aside={<p>From go-to-market strategy to operational redesign and financial modeling, most engagements draw on several of these areas at once. If yours does not fit neatly, tell us anyway.</p>}
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

            <ClientWall/>

            <CTABand
                eyebrow="Work with us"
                title="Scope a project with us"
                body="Tell us about your organization and the problem you are facing. We will follow up to discuss scope and how we would approach the work."
                primary={{href: '/contact', label: 'Request a proposal'}}
            />
        </>
    );
}
