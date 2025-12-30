'use client';

import React from "react";
import HomeHero from "@/app/components/home/HomeHero";
import ImpactStats from "@/app/components/home/ImpactStats";
import InfoCard from "@/app/components/sections/InfoCard";
import HomeJoinSection from "@/app/components/home/HomeJoinSection";
import HomeCollage from "@/app/components/home/HomeCollage";
import {cardsData} from "@/data/cardsData";


export default function Home() {
    return (
        <>
            <HomeHero/>

            <div className="relative h-screen w-full bg-white overflow-hidden">
                <div
                    className="hidden lg:block absolute -top-24 -right-10 w-[50vw] h-[120%] z-0 transform -rotate-3 origin-top-right pointer-events-none">
                    <HomeCollage/>
                </div>

                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pointer-events-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center">
                        <div className="space-y-8 pointer-events-auto pr-8 lg:pr-12">
                            <h2 className="text-1xl md:text-2xl lg:text-5xl font-bold text-gray-900">
                                Who We Are
                            </h2>
                            <div className="space-y-6 text-gray-700">
                                <p className="text-lg md:text-l leading-relaxed">
                                    180 Degrees Consulting is the world&apos;s largest consultancy for non-profits and social
                                    enterprises. We connect top university students with socially conscious
                                    organizations to provide affordable, high-quality strategic and operational advice.
                                </p>
                                <p className="text-lg md:text-l leading-relaxed">
                                    Founded in 2017, our award-winning branch is comprised of diverse, high-achieving
                                    undergraduate students passionate about making a genuine impact. We have worked with
                                    various leading non-profits in Orange County. Our team maintains the highest
                                    reputation for professionalism and delivering exceptional advice to our clients.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </div>

            <ImpactStats/>

            <div className="w-full bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We Offer
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {cardsData.map((card, index) => (
                            <InfoCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                linkText={card.linkText}
                                linkUrl={card.linkUrl}
                                icon={<card.Icon size={48} strokeWidth={1}/>}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <HomeJoinSection/>
        </>
    );
}