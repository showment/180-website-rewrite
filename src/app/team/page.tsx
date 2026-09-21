import TeamClient from "./TeamClient";
import {fetchRoster} from "@/lib/roster";
import type {Member} from "./MemberCard";

export const metadata = {title: "Team | 180 Degrees Consulting @ UCI"};

export default async function TeamPage() {
    const members = await fetchRoster();
    return <TeamClient members={members as Member[]}/>;
}
