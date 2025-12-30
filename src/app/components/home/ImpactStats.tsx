import React from 'react';
import StatNumber from "@/app/components/home/StatNumber";

export default function ImpactStats() {
    return (
        <div className="w-full bg-gray-100 py-12 md:py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <StatNumber target={50} suffix="+" label="projects"/>
                    <StatNumber target={5000} suffix="+" label="hours of impact"/>
                    <StatNumber target={5} suffix="+" label="years of experience"/>
                </div>
            </div>
        </div>
    );
}