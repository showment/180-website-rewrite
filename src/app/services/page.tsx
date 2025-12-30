"use client"

import React from "react";
import PageHero from "@/app/components/PageHero";
import ClientCarousel from "./ClientCarousel";
import ProjectTimeline from "./ProjectTimeline";
import ServiceOfferings from "./ServiceOfferings";
import CallToAction from "@/app/components/sections/CallToAction";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Our Services"
                subtitle="End-to-end consulting services designed to turn insight into action and ideas into results"
                imageSrc="/images/heros/service_hero.webp"
            />

            <div className="w-full bg-gray-50 py-8 md:py-10">
                <p className="text-base font-medium md:text-lg text-gray-700 max-w-6xl mx-auto text-left px-4">
                    180 Degrees Consulting offers high-quality consulting services without the premium price tag. Our
                    team comprises of carefully selected top-tier university students who volunteer their time because
                    they share our vision and values. We partner with non-profits and social enterprises to provide
                    innovative, practical, and sustainable solutions to the challenges they face.
                </p>
            </div>

            <ServiceOfferings/>

            <ProjectTimeline/>

            {/* Trusted By Section */}
            <div className="w-full py-12 md:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Trusted by Leading Organizations
                        </h2>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                            TRUSTED BY +40 NON-PROFITS
                        </p>
                    </div>

                    <ClientCarousel/>
                </div>
            </div>

            <CallToAction
                title="Ready to Make an Impact?"
                description="Let's work together to create sustainable solutions for your organization. Our team is ready to help you achieve your mission."
                buttonText="Request Services"
                buttonLink="/contact"
            />
        </div>
    );
}