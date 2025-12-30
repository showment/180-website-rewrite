'use client';

import React from 'react';
import PageHero from '@/app/components/PageHero';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import {contactsData} from "@/data/contactsData";

export default function ContactPage() {
    const renderContactSection = (title: string, category: string) => {
        const categoryContacts = contactsData.filter(c => c.category === category);

        if (categoryContacts.length === 0) return null;

        return (
            <div className="mb-12 last:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
                {categoryContacts.map((contact, index) => (
                    <ContactCard
                        key={index}
                        name={contact.name}
                        title={contact.title}
                        email={contact.email}
                        image={contact.image}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <PageHero
                title="Contact Us"
                subtitle="Questions? We’re here to help"
                imageSrc="/images/heros/contact_hero.webp"
            />

            <div className="w-full py-16 md:py-20 flex-grow">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            {renderContactSection("For General Inquiries:", "general")}
                            {renderContactSection("For Partnerships:", "partnerships")}
                            {renderContactSection("For Students:", "students")}
                        </div>

                        <div>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}