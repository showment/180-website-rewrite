import React from 'react';
import PageHeader from '@/app/components/ui/PageHeader';
import SectionHead from '@/app/components/ui/SectionHead';
import RecruitmentTimeline from './RecruitmentTimeline';
import InsideStrip from '@/app/components/home/InsideStrip';
import AlumniLogoGrid from './AlumniLogoGrid';
import {memberBenefits} from '@/data/siteData';
import {recruitmentTimelineEvents} from '@/data/recruitmentTimelineData';
import {CYCLE} from '@/data/siteData';

export const metadata = {title: "Join | 180 Degrees Consulting @ UCI"};

export default function JoinPage() {
    const applyEvent = recruitmentTimelineEvents.find(e => e.submissionLink);
    return (
        <>
            <PageHeader
                eyebrow={CYCLE.label}
                title="Join us."
                lede="We recruit from every major each cycle. What membership involves, and how the process runs."
                image="/images/heros/join_hero.webp"
            >
                {applyEvent?.submissionLink && CYCLE.open
                    ? <a href={applyEvent.submissionLink} target="_blank" rel="noopener noreferrer" className="pill pill-brand">Apply now <span aria-hidden="true">→</span></a>
                    : <a href="#timeline" className="pill pill-brand">See the timeline <span aria-hidden="true">→</span></a>}
                <a href="https://www.instagram.com/180dcuci/" target="_blank" rel="noopener noreferrer" className="pill pill-ghost">Follow for dates</a>
            </PageHeader>

            {/* Membership: photo strip first, then what it involves. */}
            <section className="py-20 lg:py-28 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <SectionHead
                        eyebrow="Inside 180DC"
                        title="What membership involves."
                        aside={<p>Client work, training, and a network. Plus retreats, socials, office tours, and the case competition we host each spring. No prior consulting experience expected.</p>}
                    />
                </div>
                <InsideStrip/>
                <dl className="mx-auto max-w-7xl px-6 lg:px-10 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                    {memberBenefits.map(b => (
                        <div key={b.title} className="ledger pt-5">
                            <dt className="display text-xl">{b.title}</dt>
                            <dd className="mt-3 text-sm text-slate leading-relaxed">{b.text}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Icon components in the data can't cross the server->client boundary. */}
            <RecruitmentTimeline events={recruitmentTimelineEvents.map(({icon: _icon, ...e}) => e)} open={CYCLE.open}/>

            <section className="py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <SectionHead
                        eyebrow="After 180DC"
                        title="Where members go next."
                        aside={<p>Consulting, banking, and tech, mostly. Alumni come back for panels, coffee chats, and referrals.</p>}
                    />
                    <AlumniLogoGrid/>
                </div>
            </section>

        </>
    );
}
