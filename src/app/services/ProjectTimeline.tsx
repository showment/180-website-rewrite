'use client';

import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {projectTimelineEvents} from "@/data/projectTimelineData";

export default function ProjectTimeline() {
    return (
        <div className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3">Project Timeline</h2>
                    <p className="text-l text-gray-700 max-w-5xl mx-auto mb-10">
                        We work with clients over 10 weeks to find actionable recommendations that can create lasting
                        impact.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Timeline position="alternate">
                        {projectTimelineEvents.map((step, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{m: 'auto 0', fontWeight: 'bold', color: '#8BC34A', fontSize: '0.875rem'}}
                                    align="right"
                                    variant="body2"
                                >
                                    {step.week}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot sx={{backgroundColor: '#8BC34A', width: 16, height: 16}}/>
                                    {index < projectTimelineEvents.length - 1 && (
                                        <TimelineConnector sx={{backgroundColor: '#E8F5E9'}}/>
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{py: '12px', px: 2}}>
                                    <div
                                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                                        <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}