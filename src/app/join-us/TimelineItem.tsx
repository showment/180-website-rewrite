import React from 'react';

interface TimelineEventProps {
    date: string;
    time: string;
    location: string;
    title: string;
    description?: string;
    submissionLink?: string;
    inviteOnly?: boolean;
    highlight?: boolean;
    icon: React.ElementType;
}

interface TimelineItemProps {
    event: TimelineEventProps;
    isLast: boolean;
}

export default function TimelineItem({event, isLast}: TimelineItemProps) {
    return (
        <div className="relative">
            {!isLast && (
                <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gray-200 -mb-4"/>
            )}

            <div
                className={`flex gap-4 ${event.highlight ? 'bg-green-50' : 'bg-gray-50'} rounded-lg p-4 hover:shadow-md transition-shadow relative`}>
                <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                    style={{backgroundColor: event.highlight ? '#8BC34A' : '#6B7280'}}
                >
                    <event.icon className="w-4 h-4 text-white"/>
                </div>

                <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="flex-1">
                            <div className="text-xs font-semibold mb-1" style={{color: '#8BC34A'}}>
                                {event.date}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                                {event.title}
                                {event.inviteOnly && (
                                    <span
                                        className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                    Invite Only
                  </span>
                                )}
                            </h3>
                        </div>
                    </div>

                    <div className="text-xs text-gray-600 mt-1">
                        <span className="font-semibold">Time:</span> {event.time} • <span
                        className="font-semibold">Location:</span> {event.location}
                    </div>

                    {event.submissionLink && (
                        <div className="text-sm text-gray-900 mt-2">
                            <p className="text-gray-600 mt-1">
                                <a
                                    href={event.submissionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline"
                                >
                                    <span className="font-semibold">Application Link</span>
                                </a>
                            </p>
                        </div>
                    )}

                    {event.description && (
                        <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}