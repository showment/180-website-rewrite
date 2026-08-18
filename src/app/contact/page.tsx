import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/ui/PageHeader';
import ContactForm from './ContactForm';
import {contactsData} from "@/data/contactsData";

export const metadata = {title: "Contact | 180 Degrees Consulting @ UCI"};

const groups: { key: string; label: string; blurb: string }[] = [
    {key: "partnerships", label: "Organizations and partners", blurb: "Scoping a project, sponsoring the chapter, or hosting an office tour."},
    {key: "students", label: "Prospective members", blurb: "Recruiting, coffee chats, and anything about the application."},
    {key: "general", label: "Everything else", blurb: "Press, alumni, and general questions."},
];

export default function ContactPage() {
    return (
        <>
            <PageHeader
                eyebrow="Contact"
                title="Contact us."
                lede="For project inquiries, recruiting questions, and general correspondence."
                image="/images/heros/contact_hero.webp"
            >
                <a href="mailto:uci@180dc.org" className="pill pill-brand">Email</a>
                <a href="https://www.linkedin.com/company/180-degrees-consulting-uci" target="_blank" rel="noopener noreferrer" className="pill pill-ghost">LinkedIn</a>
                <a href="https://www.instagram.com/180dcuci/" target="_blank" rel="noopener noreferrer" className="pill pill-ghost">Instagram</a>
            </PageHeader>

            <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 space-y-10">
                    <div>
                        <p className="eyebrow text-brand-deep">Directory</p>
                        <h2 className="display mt-4 text-4xl md:text-5xl">Who to contact.</h2>
                    </div>
                    {groups.map(g => {
                        const people = contactsData.filter(c => c.category === g.key);
                        if (!people.length) return null;
                        return (
                            <div key={g.key}>
                                <h3 className="font-bold">{g.label}</h3>
                                <p className="text-sm text-slate mt-1">{g.blurb}</p>
                                <ul className="mt-4 space-y-4">
                                    {people.map(p => (
                                        <li key={p.email} className="flex items-center gap-4">
                                            <div className="h-16 w-16 rounded-2xl shrink-0 relative overflow-hidden bg-fog">
                                                <Image src={p.image} alt={p.name} fill sizes="64px" className="object-cover"/>
                                            </div>
                                            <div>
                                                <p className="font-bold leading-tight">{p.name}</p>
                                                <p className="text-sm text-slate">{p.title}</p>
                                                <a href={`mailto:${p.email}`} className="text-sm font-semibold text-brand-deep hover:underline">{p.email}</a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                    <ContactForm/>
                </div>
            </section>
        </>
    );
}
