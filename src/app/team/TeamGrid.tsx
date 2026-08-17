import React, {memo} from 'react';
import MemberCard, {Member} from './MemberCard';

interface TeamGridProps { eyebrow: string; title: string; list: Member[]; }

/* Fixed card widths so every portrait is the same size; flex-wrap centers a short last row. */
const TeamGrid = memo(function TeamGrid({eyebrow, title, list}: TeamGridProps) {
    if (!list.length) return null;
    return (
        <section>
            <div className="mb-8">
                <p className="eyebrow text-brand-deep">{eyebrow}</p>
                <h2 className="display mt-3 text-3xl md:text-4xl">{title}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {list.map((m, i) => (
                    <div key={`${m["First Name"]}-${m["Last Name"]}-${i}`}
                         className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)]">
                        <MemberCard member={m}/>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default TeamGrid;
