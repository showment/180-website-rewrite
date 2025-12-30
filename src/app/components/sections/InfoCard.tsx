import React from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    icon: React.ReactNode;
}

export default function InfoCard({title, description, linkText, linkUrl, icon}: InfoCardProps) {
    return (
        <div
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100 flex flex-col h-full">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-gray-800">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                {description}
            </p>
            <div className="mt-auto">
                <a
                    href={linkUrl}
                    className="inline-block px-5 py-2 border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-900 hover:text-white transition-all"
                >
                    {linkText}
                </a>
            </div>
        </div>
    );
}