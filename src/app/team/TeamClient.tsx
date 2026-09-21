"use client";

import React, {useMemo} from "react";
import Link from "next/link";
import PageHeader from "@/app/components/ui/PageHeader";
import TeamGrid from "./TeamGrid";
import {Member} from "./MemberCard";

// Paste an Airtable "Embed this view" URL here (or set NEXT_PUBLIC_TEAM_EMBED_URL) and the page swaps the CSV grid for the embed.
const TEAM_EMBED_URL = process.env.NEXT_PUBLIC_TEAM_EMBED_URL || "";

const norm = (s: string = "") => s.toLowerCase().trim();

export default function TeamClient({members}: { members: Member[] }) {
    const groups = useMemo(() => {
        const leadership: Member[] = [];
        const ems: Member[] = [];
        const consultants: Member[] = [];

        members.forEach((m) => {
            const role = norm(m.Role || "");
            const isEM = role.includes("engagement manager") || role === "em" || role.includes("eng. mgr");
            const isConsultant = role.includes("consultant") || role === "sc" || role === "ac";
            if (isEM) ems.push(m);
            else if (isConsultant) consultants.push(m);
            else leadership.push(m);
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
            return 7;
        };
        const byName = (a: Member, b: Member) =>
            (a["Last Name"] || "").localeCompare(b["Last Name"] || "") ||
            (a["First Name"] || "").localeCompare(b["First Name"] || "");

        // Senior Consultant, then Consultant, then Associate Consultant. Check
        // the qualifiers first, since both contain the word "consultant".
        const tierOf = (roleRaw = "") => {
            const r = norm(roleRaw);
            if (r.includes("senior consultant") || r === "sc") return 0;
            if (r.includes("associate consultant") || r === "ac") return 2;
            return 1;
        };

        leadership.sort((a, b) => (rankOf(a.Role) - rankOf(b.Role)) || byName(a, b));
        ems.sort(byName);
        consultants.sort((a, b) => (tierOf(a.Role) - tierOf(b.Role)) || byName(a, b));
        return {leadership, ems, consultants};
    }, [members]);

    const total = groups.leadership.length + groups.ems.length + groups.consultants.length;

    return (
        <>
            <PageHeader
                eyebrow="Team"
                title="Our Team"
                lede="Our consultants come from a wide range of academic disciplines, professional backgrounds, and areas of expertise. That range is what allows our teams to approach a client's problem from more than one direction."
                image="/images/heros/team_hero.webp"
            >
                <Link href="/join-us" className="pill pill-brand">Join the team <span aria-hidden="true">→</span></Link>
                <Link href="/contact" className="pill pill-ghost">Contact leadership</Link>
            </PageHeader>

            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
                {TEAM_EMBED_URL ? (
                    <div className="rounded-3xl border border-line overflow-hidden bg-fog">
                        <iframe
                            src={TEAM_EMBED_URL}
                            title="180DC UCI member directory"
                            className="w-full h-[85vh] min-h-[640px]"
                            style={{border: 0}}
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div className="space-y-20">
                        <TeamGrid eyebrow="Leadership" title="Executive Board" list={groups.leadership}/>
                        <TeamGrid eyebrow="Project leads" title="Engagement Managers" list={groups.ems}/>
                        <TeamGrid eyebrow="Teams" title="Consultants" list={groups.consultants}/>
                        {total === 0 && (
                            <p className="text-slate">The roster is loading from our directory. If this persists, email <a className="underline" href="mailto:uci@180dc.org">uci@180dc.org</a>.</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
