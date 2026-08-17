import React, {memo, useState} from 'react';
import Image from 'next/image';
import {Linkedin} from 'lucide-react';

export interface Member {
    "First Name"?: string;
    "Last Name"?: string;
    Role?: string;
    "Major #1"?: string; "Major #2"?: string; "Major 1"?: string; "Major 2"?: string; Major?: string;
    LinkedIn?: string;
    [key: string]: string | undefined;
}

const MemberCard = memo(function MemberCard({member}: { member: Member }) {
    const first = member["First Name"] || "";
    const last = member["Last Name"] || "";
    const [imgError, setImgError] = useState(false);
    const src = imgError ? "/images/members/_placeholder.jpg" : `/images/members/${first}_${last}.webp`;

    const majors = [member["Major #1"] || member["Major 1"] || member["Major"] || "", member["Major #2"] || member["Major 2"] || ""]
        .map(m => (m || "").trim()).filter(m => m && m !== "-" && m.toLowerCase() !== "n/a").join(" & ");

    return (
        <div className="group">
            <div className="aspect-[4/5] rounded-2xl relative overflow-hidden bg-fog">
                <Image src={src} alt={`${first} ${last}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw" className="object-cover" onError={() => setImgError(true)}/>
                {member.LinkedIn && (
                    <a href={member.LinkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${first} ${last} on LinkedIn`}
                       className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-white/90 text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">
                        <Linkedin size={14}/>
                    </a>
                )}
            </div>
            <div className="mt-3">
                <h3 className="font-bold leading-tight">{first} {last}</h3>
                {member.Role && <p className="text-sm text-slate leading-tight mt-0.5">{member.Role}</p>}
                {majors && <p className="text-xs text-slate/70 leading-tight mt-0.5">{majors}</p>}
            </div>
        </div>
    );
});

export default MemberCard;
