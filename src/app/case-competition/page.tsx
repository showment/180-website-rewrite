'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import CaseCompetitionTimeline from './CaseCompetitionTimeline';
import FAQSection from './FAQSection';
import PrizesSection from './PrizesSection';
import {INTEREST_FORM_URL, whyParticipateReasons} from '@/data/caseCompetitionData';

export default function CaseCompetitionPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Case Competition"
                subtitle="Delta Sigma Pi × 180 Degrees Consulting × Bain & Company"
                imageSrc="/images/heros/case_comp_hero.webp"
            />

            <div className="w-full bg-gray-50 py-8 md:py-10">
                <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3"
                       style={{color: '#8BC34A'}}>
                        Spring 2026
                    </p>
                    <p className="text-base font-medium md:text-lg text-gray-700 text-left">
                        This spring, UCI&apos;s Delta Sigma Pi and 180 Degrees Consulting are co-hosting a Case
                        Competition with Bain &amp; Company. We encourage anyone to participate, regardless of
                        experience or major&mdash;learn more below.
                    </p>
                </div>
            </div>

            <div className="w-full py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                            <span className="text-sm font-semibold uppercase tracking-wider"
                                  style={{color: '#8BC34A'}}>
                                Why Participate?
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Build the skills consultants actually use
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                            Whether you&apos;re exploring consulting for the first time or already deep in the
                            recruiting cycle, the case competition is designed to help you grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyParticipateReasons.map((reason) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={reason.title}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6 flex flex-col"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                                        style={{backgroundColor: '#8BC34A'}}
                                    >
                                        <Icon className="w-6 h-6"/>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <CaseCompetitionTimeline/>

            <PrizesSection/>

            <FAQSection/>

            <div className="w-full py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3"
                       style={{color: '#8BC34A'}}>
                        Delta Sigma Pi × 180 Degrees Consulting × Bain
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Ready to compete?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        Fill out the interest form to get updates on the kickoff mixer, workshops, and team formation.
                    </p>
                    <a
                        href={INTEREST_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                        style={{backgroundColor: '#8BC34A'}}
                    >
                        Fill out the Interest Form
                        <ArrowRight className="w-5 h-5"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
