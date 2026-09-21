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
                title="Join Us"
                lede="Our strength lies in the diversity of perspectives our consultants bring. We look for individuals who have pursued their interests deeply, approach problems rigorously, and work well alongside others."
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
                        title="What membership involves"
                        aside={<p>A community that extends well past graduation. Members build their careers with the support of the people around them, an active alumni network, and friendships that last.</p>}
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
                        title="Where members go next"
                        aside={<p>Our members go on to consulting, finance, and technology. The network stays open long after graduation.</p>}
                    />
                    <AlumniLogoGrid/>
                </div>
            </section>

        </>
    );
}
