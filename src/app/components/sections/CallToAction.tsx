import React from 'react';

interface CallToActionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export default function CallToAction({title, description, buttonText, buttonLink}: CallToActionProps) {
    return (
        <div className="w-full py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    {title}
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={buttonLink}
                        className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                        style={{backgroundColor: '#8BC34A'}}
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
}