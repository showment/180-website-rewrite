'use client';

import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Clock, MapPin} from 'lucide-react';
import {caseCompetitionEvents} from "@/data/caseCompetitionData";

export default function CaseCompetitionTimeline() {
    return (
        <div className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3">
                        Competition Timeline
                    </h2>
                    <p className="text-l text-gray-700 max-w-5xl mx-auto mb-10">
                        From the kickoff mixer through the final pitch, here&apos;s everything you need to know to plan
                        ahead.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Timeline position="alternate">
                        {caseCompetitionEvents.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent
                                        sx={{
                                            m: 'auto 0',
                                            fontWeight: 'bold',
                                            color: '#8BC34A',
                                            fontSize: '0.875rem'
                                        }}
                                        align="right"
                                        variant="body2"
                                    >
                                        {step.day}, {step.date}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            sx={{
                                                backgroundColor: step.highlight ? '#8BC34A' : '#FFFFFF',
                                                border: `2px solid ${step.highlight ? '#8BC34A' : '#8BC34A'}`,
                                                width: 36,
                                                height: 36,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Icon
                                                className="w-4 h-4"
                                                style={{color: step.highlight ? '#FFFFFF' : '#8BC34A'}}
                                            />
                                        </TimelineDot>
                                        {index < caseCompetitionEvents.length - 1 && (
                                            <TimelineConnector sx={{backgroundColor: '#E8F5E9'}}/>
                                        )}
                                    </TimelineSeparator>
                                    <TimelineContent sx={{py: '12px', px: 2}}>
                                        <div
                                            className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-left ${
                                                step.highlight ? 'border-2 border-green-400' : ''
                                            }`}
                                        >
                                            <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 mb-2">
                                                <span className="inline-flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5"/> {step.time}
                                                </span>
                                                {step.location && (
                                                    <span className="inline-flex items-center gap-1">
                                                        <MapPin className="w-3.5 h-3.5"/> {step.location}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600">{step.description}</p>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        })}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}
