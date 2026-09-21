import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/ui/PageHeader';
import ContactForm from './ContactForm';
import {Linkedin} from 'lucide-react';
import {contactGroups, contactEmailOverrides, fallbackEmail} from "@/data/contactsData";
import {fetchRoster, field, fullName, portraitFor} from "@/lib/roster";

export const metadata = {title: "Contact | 180 Degrees Consulting @ UCI"};

export default async function ContactPage() {
    const roster = await fetchRoster();

    // One entry per person holding each configured role, in the configured order.
    const directory = contactGroups.map(g => ({
        ...g,
        people: roster
            .filter(r => field(r, "Role", "Position", "Title").toLowerCase() === g.role.toLowerCase())
            .map(r => {
                const name = fullName(r);
                return {
                    name,
                    role: field(r, "Role", "Position", "Title"),
                    email: field(r, "Email", "Email Address") || contactEmailOverrides[name] || "",
                    linkedIn: field(r, "LinkedIn", "Linkedin", "LinkedIn URL"),
                    image: portraitFor(r),
                };
            }),
    })).filter(g => g.people.length > 0);

    return (
        <>
            <PageHeader
                eyebrow="Contact"
                title="Contact Us"
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
                        <h2 className="display mt-4 text-4xl md:text-5xl">Who to contact</h2>
                    </div>
                    {directory.map(g => (
                        <div key={g.role}>
                            <h3 className="font-bold">{g.label}</h3>
                            <p className="text-sm text-slate mt-1">{g.blurb}</p>
                            <ul className="mt-4 space-y-4">
                                {g.people.map(p => (
                                    <li key={p.name} className="flex items-center gap-4">
                                        <div className="h-16 w-16 rounded-2xl shrink-0 relative overflow-hidden bg-fog">
                                            <Image src={p.image} alt={p.name} fill sizes="64px" className="object-cover"/>
                                        </div>
                                        <div>
                                            <p className="font-bold leading-tight">{p.name}</p>
                                            <p className="text-sm text-slate">{p.role}</p>
                                            <a href={`mailto:${p.email || fallbackEmail}`} className="text-sm font-semibold text-brand-deep hover:underline">{p.email || fallbackEmail}</a>
                                            {p.linkedIn && (
                                                <a href={p.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on LinkedIn`}
                                                   className="ml-3 inline-flex align-middle text-slate hover:text-brand-deep">
                                                    <Linkedin size={14}/>
                                                </a>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {directory.length === 0 && (
                        <p className="text-slate">The directory is loading from our roster. If this persists, email <a className="underline" href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.</p>
                    )}
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                    <ContactForm/>
                </div>
            </section>
        </>
    );
}
