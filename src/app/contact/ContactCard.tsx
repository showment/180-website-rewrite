import React from 'react';
import Image from 'next/image';

interface ContactCardProps {
    name: string;
    title: string;
    email: string;
    image: string;
}

export default function ContactCard({name, title, email, image}: ContactCardProps) {
    return (
        <div className="flex items-start gap-4 mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-gray-600 mb-2">{title}</p>
                <a
                    href={`mailto:${email}`}
                    className="font-medium hover:underline"
                    style={{color: '#8BC34A'}}
                >
                    {email}
                </a>
            </div>
        </div>
    );
}