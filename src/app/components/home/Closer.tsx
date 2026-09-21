import React from 'react';
import CTABand from '@/app/components/ui/CTABand';

export default function Closer() {
    return (
        <CTABand
            eyebrow="Work with us"
            title="Start a project with us"
            body="Strategy, market research, marketing, operations, finance, and organizational design. A dedicated team of consultants takes on your problem and leaves you with the analysis behind every recommendation and a plan you can act on."
            primary={{href: '/contact', label: 'Contact us'}}
            secondary={{href: '/services', label: 'Our services'}}
        />
    );
}
