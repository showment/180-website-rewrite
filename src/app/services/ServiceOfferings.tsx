'use client';

import React from 'react';
import {servicesData} from '@/data/servicesData';

export default function ServiceOfferings() {
    return (
        <div className="w-full py-16 md:py-15">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-8">
                    <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{color: '#8BC34A'}}>
                            What We Offer
                        </span>
                    </div>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comprehensive Service
                            Offerings</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index}
                                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="p-5 pb-3">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                                            style={{backgroundColor: '#8BC34A'}}>
                                            <Icon className="w-6 h-6"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                            <p className="text-sm text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 pb-5">
                                    <div className="border-t border-gray-100 pt-4">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key
                                            Offerings</h4>
                                        <ul className="space-y-2">
                                            {service.offerings.map((offering, offeringIndex) => (
                                                <li key={offeringIndex}
                                                    className="flex items-start gap-2 text-sm text-gray-700">
                                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none"
                                                         stroke="#8BC34A" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2} d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                    <span>{offering}</span>
                                                </li>
                                            ))}
                                        </ul>
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