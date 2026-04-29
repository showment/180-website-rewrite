import React from 'react';
import {Award, Coffee, Building2} from 'lucide-react';
import {casePrizes, casePrizePerks} from '@/data/caseCompetitionData';

const placeStyles = [
    {ring: 'ring-amber-300', bg: 'bg-amber-50', text: 'text-amber-700', accent: '#F59E0B'},
    {ring: 'ring-gray-300', bg: 'bg-gray-50', text: 'text-gray-700', accent: '#9CA3AF'},
    {ring: 'ring-orange-300', bg: 'bg-orange-50', text: 'text-orange-700', accent: '#EA580C'}
];

const perkIcons = [Coffee, Building2];

export default function PrizesSection() {
    return (
        <div className="w-full py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-10">
                    <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                        <span
                            className="text-sm font-semibold uppercase tracking-wider"
                            style={{color: '#8BC34A'}}
                        >
                            Prizes
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Compete for Cash &amp; Recruiting Access
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                        The top three teams take home cash prizes and exclusive recruiting opportunities with Bain
                        &amp; Company.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {casePrizes.map((prize, index) => {
                        const style = placeStyles[index] ?? placeStyles[0];
                        return (
                            <div
                                key={prize.place}
                                className={`relative rounded-xl ${style.bg} p-6 text-center shadow-sm hover:shadow-md transition-shadow ring-1 ${style.ring}`}
                            >
                                <div
                                    className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4"
                                    style={{color: style.accent}}
                                >
                                    <Award className="w-6 h-6"/>
                                </div>
                                <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${style.text}`}>
                                    {prize.place}
                                </p>
                                <p className="text-4xl md:text-5xl font-bold text-gray-900">
                                    {prize.amount}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
                        Bain &amp; Company Recruiting Perks
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        Bain will provide the top 3 teams with exclusive recruiting opportunities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {casePrizePerks.map((perk, index) => {
                            const Icon = perkIcons[index] ?? Award;
                            return (
                                <div
                                    key={perk}
                                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                                        style={{backgroundColor: '#8BC34A'}}
                                    >
                                        <Icon className="w-5 h-5"/>
                                    </div>
                                    <span className="text-sm md:text-base text-gray-800 font-medium">
                                        {perk}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
