'use client';

import React from 'react';
import PageHero from '@/app/components/PageHero';
import TimelineItem from './TimelineItem';
import AlumniLogoGrid from './AlumniLogoGrid';
import {recruitmentTimelineEvents} from "@/data/recruitmentTimelineData";

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Winter 2026 Recruitment"
                subtitle="Join a community of passionate consultants dedicated to making a difference"
                imageSrc="/images/heros/join_hero.webp"
            />

            <div className="w-full bg-gray-50 py-8 md:py-10">
                <p className="text-base font-medium md:text-lg text-gray-700 max-w-6xl mx-auto text-left px-4 md:px-8 lg:px-16">
                    180 Degrees Consulting works effectively by recruiting from a diverse range of backgrounds and
                    bringing together a broad range of skills this provides. If you are a student brimming with bright
                    ideas and have a desire to make a real difference with your skill-set, then we encourage you to
                    apply so that we can help you realize your potential.
                </p>
            </div>

            <div className="w-full bg-white py-8 md:py-12">
                <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Recruitment Timeline</h2>
                    </div>

                    <div className="space-y-4">
                        {recruitmentTimelineEvents.map((event, index) => (
                            <TimelineItem
                                key={index}
                                event={event}
                                isLast={index === recruitmentTimelineEvents.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-50 py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Where Our Alumni Go</h2>
                        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            180 Degrees Consulting @ UCI works hard to develop our members&apos; experiences, and the
                            career-agnostic problem-solving skills developed have allowed our alumni to regularly go on
                            to create immense impact at top consulting firms, banks, technology companies, and more.
                        </p>
                    </div>

                    <AlumniLogoGrid/>
                </div>
            </div>
        </div>
    );
}