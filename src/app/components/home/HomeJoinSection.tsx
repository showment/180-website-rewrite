import React from 'react';
import CompanyCarousel from "@/app/components/sections/CompanyCarousel";

export default function HomeJoinSection() {
    return (
        <div className="relative w-full bg-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Join Us
                    </h2>

                    <div className="space-y-6">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            All of our consultants are promising future leaders. Through their involvement with
                            180DC, they receive training and mentoring, become engaged citizens in their
                            communities, learn about the challenges facing the social sector, and make a significant
                            difference to the lives of others.
                        </p>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            180 Degrees Consulting @ UCI works hard to develop our members' experiences, and the
                            career-agnostic problem-solving skills developed have allowed our alumni to regularly go
                            on to create immense impact at top consulting firms, banks, technology companies, and
                            more.
                        </p>
                    </div>

                    <div className="pt-4">
                        <a
                            href="/join-us"
                            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                            style={{backgroundColor: '#8BC34A'}}
                        >
                            Join Our Team
                        </a>
                    </div>

                    <CompanyCarousel/>
                </div>
            </div>
        </div>
    );
}