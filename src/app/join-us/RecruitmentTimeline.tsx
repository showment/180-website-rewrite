'use client';

import React from 'react';
import Link from 'next/link';
import {motion, MotionConfig} from 'framer-motion';

interface Ev {
    date: string; title: string; time: string; location: string; description?: string;
    submissionLink?: string; inviteOnly?: boolean; highlight?: boolean;
}

export default function RecruitmentTimeline({events, open}: { events: Ev[]; open: boolean }) {
    return (
        <section id="timeline" className="bg-fog py-20 lg:py-28 scroll-mt-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                    <p className="eyebrow text-brand-deep">Timeline</p>
                    <h2 className="display mt-4 text-4xl md:text-5xl">How recruiting runs.</h2>
                    <p className="text-slate mt-6">Info session, application, then three rounds. Every cycle follows the same shape. Dates change.</p>
                </div>
                <MotionConfig reducedMotion="user">
                    <div className="lg:col-span-8">
                        <ol className="space-y-3">
                        {events.map((e, i) => (
                            <motion.li
                                key={e.title}
                                initial={{opacity: 0, y: 24}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: '0px 0px -60px 0px'}}
                                transition={{duration: 0.55, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1]}}
                                className={`rounded-2xl border p-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${e.highlight ? 'bg-ink text-white border-ink' : 'bg-white border-line'}`}>
                                <div className="md:w-40 shrink-0">
                                    <p className={`eyebrow ${e.highlight ? 'text-brand' : 'text-brand-deep'}`}>{e.date}</p>
                                    <p className={`text-sm mt-1 ${e.highlight ? 'text-white/70' : 'text-slate'}`}>{e.time}</p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="display text-xl flex flex-wrap items-center gap-2">
                                        {e.title}
                                        {e.inviteOnly && <span className={`text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-full ${e.highlight ? 'bg-white/15' : 'bg-fog'}`}>Invite only</span>}
                                    </h3>
                                    <p className={`text-sm mt-1 ${e.highlight ? 'text-white/70' : 'text-slate'}`}>{e.location}</p>
                                    {e.description && <p className={`mt-3 text-sm leading-relaxed ${e.highlight ? 'text-white/85' : 'text-slate'}`}>{e.description}</p>}
                                    {e.submissionLink && (
                                        open
                                            ? <a href={e.submissionLink} target="_blank" rel="noopener noreferrer" className="pill pill-brand mt-4">Open the application <span aria-hidden="true">→</span></a>
                                            : <p className="mt-4 text-sm font-semibold text-white/60">Applications open at the start of the cycle.</p>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                        </ol>
                        <p className="mt-8 text-slate">More questions? <Link href="/join-us/faq" className="font-semibold text-ink underline underline-offset-4 hover:text-brand-deep">Read the FAQ <span aria-hidden="true">→</span></Link></p>
                    </div>
                </MotionConfig>
            </div>
        </section>
    );
}
