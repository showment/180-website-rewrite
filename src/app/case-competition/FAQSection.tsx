'use client';

import React, {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {caseCompetitionFAQ} from '@/data/caseCompetitionData';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base text-gray-700">
                        Everything you need to know before signing up.
                    </p>
                </div>

                <div className="space-y-3">
                    {caseCompetitionFAQ.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                                >
                                    <span className="text-base md:text-lg font-semibold text-gray-900">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 flex-shrink-0 ml-4 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
