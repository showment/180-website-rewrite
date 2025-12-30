import React, {memo, useState} from 'react';
import Image from 'next/image';
import {FaLinkedin} from 'react-icons/fa';

export interface Member {
    "First Name"?: string;
    "Last Name"?: string;
    Role?: string;
    "Major #1"?: string;
    "Major #2"?: string;
    "Major 1"?: string;
    "Major 2"?: string;
    Major?: string;
    LinkedIn?: string;

    [key: string]: string | undefined;
}

const Wrapper = ({children, href, className}: { children: React.ReactNode; href?: string; className?: string }) => {
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }
    return <div className={className}>{children}</div>;
};

const MemberCard = memo(function MemberCard({member}: { member: Member }) {
    const first = member["First Name"] || "";
    const last = member["Last Name"] || "";
    const imgSrc = `/images/members/${first}_${last}.webp`;

    const [imgError, setImgError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const major1 = member["Major #1"] || member["Major 1"] || member["Major"] || "";
    const major2 = member["Major #2"] || member["Major 2"] || "";

    const majors = [major1, major2]
        .map((m) => (m || "").trim())
        .filter((m) => m && m !== "-" && m.toLowerCase() !== "n/a")
        .join(" & ");

    const hasLinkedIn = !!member.LinkedIn;

    return (
        <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.02] aspect-[2/3] bg-gray-200 group"
        >
            <Wrapper href={member.LinkedIn} className="block w-full h-full relative">
                <Image
                    src={imgError ? "/images/members/_placeholder.jpg" : imgSrc}
                    alt={`${first} ${last}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"

                    className={`
                        object-cover duration-700 ease-in-out
                        ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
                    `}

                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setImgError(true);
                        setIsLoading(false);
                    }}
                />

                <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 pt-8">
                    <div className="flex flex-col items-start">
                        <h3 className="text-white text-xs font-bold leading-tight line-clamp-2">
                            {first} {last}
                        </h3>

                        <div className="text-white/90 text-[10px] font-medium leading-tight">
                            {member.Role && <p className="mt-0.5 line-clamp-1">{member.Role}</p>}
                            {majors && <p className="opacity-75 mt-0.5 line-clamp-1">{majors}</p>}
                        </div>
                    </div>
                </div>
            </Wrapper>

            {hasLinkedIn && (
                <a
                    href={member.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1.5 right-1.5 bg-black/50 p-1 rounded text-white opacity-80 hover:opacity-100 transition-opacity shadow-sm z-10"
                >
                    <FaLinkedin className="w-3 h-3"/>
                </a>
            )}
        </div>
    );
});

export default MemberCard;