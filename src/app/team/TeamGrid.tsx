import React, {memo} from 'react';
import MemberCard, {Member} from './MemberCard';

interface TeamGridProps {
    title: string;
    list: Member[];
}

const TeamGrid = memo(function TeamGrid({title, list}: TeamGridProps) {
    if (!list.length) return null;

    return (
        <section className="mb-12">
            <h2 className="text-3xl text-black font-bold text-center mb-6">{title}</h2>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-6xl mx-auto">
                {list.map((m, i) => (
                    <div
                        key={`${m["First Name"]}-${m["Last Name"]}-${i}`}
                        className="w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.67rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)]"
                    >
                        <MemberCard member={m}/>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default TeamGrid;