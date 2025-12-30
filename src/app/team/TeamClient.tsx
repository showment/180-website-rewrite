"use client";

import React, {useMemo} from "react";
import Head from "next/head";
import PageHero from "@/app/components/PageHero";
import TeamGrid from "./TeamGrid";
import {Member} from "./MemberCard";

type TeamClientProps = { members: Member[] };

const norm = (s: string = "") => s.toLowerCase().trim();

export default function TeamClient({members}: TeamClientProps) {
    const groups = useMemo(() => {
        const leadership: Member[] = [];
        const ems: Member[] = [];
        const consultants: Member[] = [];

        members.forEach((m) => {
            const role = norm(m.Role || "");
            const isAssociateConsultant =
                role.includes("associate consultant") || role === "ac" || role.includes("associate");
            const isEngagementManager =
                role.includes("engagement manager") || role === "em" || role.includes("eng. mgr");
            const isConsultant = role.includes("consultant") && !isAssociateConsultant;
            const isLeadership =
                role.includes("president") ||
                role.includes("vp") ||
                role.includes("vice president") ||
                role.includes("director") ||
                (!isEngagementManager && !isConsultant && !isAssociateConsultant);

            if (isAssociateConsultant) return;
            else if (isEngagementManager) ems.push(m);
            else if (isConsultant) consultants.push(m);
            else if (isLeadership) leadership.push(m);
        });

        const rankOf = (roleRaw = "") => {
            const r = norm(roleRaw);
            if (r.includes("executive president")) return 0;
            if (r.includes("executive vice president")) return 1;
            if (r.includes("external vice president")) return 2;
            if (r.includes("vice president of internal affairs")) return 3;
            if (r.includes("vice president of professional development")) return 4;
            if (r.includes("vice president") || /\bvp\b/.test(r)) return 5;
            if (r.includes("director of marketing")) return 6;
            if (r.includes("director of data management")) return 7;
            return 7;
        };

        const byName = (a: Member, b: Member) =>
            (a["Last Name"] || "").localeCompare(b["Last Name"] || "") ||
            (a["First Name"] || "").localeCompare(b["First Name"] || "");

        leadership.sort((a, b) => {
            const diff = rankOf(a.Role) - rankOf(b.Role);
            return diff !== 0 ? diff : byName(a, b);
        });
        ems.sort(byName);
        consultants.sort(byName);

        return {leadership, ems, consultants};
    }, [members]);

    return (
        <>
            <Head>
                <title>Our Team</title>
            </Head>

            <div className="bg-white min-h-screen flex flex-col">
                <PageHero
                    title="Our Team"
                    subtitle="A diverse community of talented individuals dedicated to delivering innovative solutions and driving impact"
                    imageSrc="/images/heros/team_hero.webp"
                />

                <div className="py-2 px-4 bg-white flex-grow mt-12">
                    <TeamGrid title="Executives" list={groups.leadership}/>
                    <TeamGrid title="Engagement Managers" list={groups.ems}/>
                    <TeamGrid title="Consultants" list={groups.consultants}/>
                </div>
            </div>
        </>
    );
}