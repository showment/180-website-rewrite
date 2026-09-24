import { Calendar, MapPin, Users, Briefcase, LucideIcon } from 'lucide-react';

interface RecruitmentEvent {
    group: string;
    date: string;
    title: string;
    time?: string;
    location?: string;
    icon: LucideIcon;
    highlight?: boolean;
    inviteOnly?: boolean;
    description?: string;
    // Secondary link on the card: RSVP form, Zoom room, map pin, calendar file.
    link?: string;
    linkLabel?: string;
    // Only on the application event. Gated by CYCLE.open in siteData.ts.
    submissionLink?: string;
}

// TODO confirm with exec board before launch: the two TBD locations, the Zoom
// link for Info Night #2, the application deadline time, and the application URL.
export const recruitmentTimelineEvents: RecruitmentEvent[] = [
    {
        group: 'Boothing & Info Sessions',
        date: 'Tuesday 9/22',
        title: 'Anteater Involvement Fair',
        time: '11:00 AM - 4:00 PM',
        location: 'Aldrich Park',
        icon: MapPin,
        description: 'Find our booth at UCI’s fall involvement fair. Members are there all afternoon to talk through client projects, the recruiting process, and what a cycle actually looks like week to week.',
        // TODO add link: the official Anteater Involvement Fair page.
    },
    {
        group: 'Boothing & Info Sessions',
        date: 'Thursday 9/24',
        title: 'Information Night & Case Workshop #1',
        time: '6:00 PM - 7:00 PM',
        location: 'SB1 1128',
        icon: Users,
        description: 'Join 180 Degrees Consulting for an info session and case workshop. Meet our members, learn about opportunities at 180DC, and get a guided introduction to the consulting case interview format.',
        // TODO add link: RSVP form, if the team runs one this cycle.
    },
    {
        group: 'Boothing & Info Sessions',
        date: 'Monday 9/28',
        title: 'MUSA Business Fair',
        time: '5:00 PM - 7:00 PM',
        location: 'Merage Courtyard',
        icon: MapPin,
        description: 'MUSA’s fall business org fair. Stop by our table to meet members and hear how 180DC compares to the other business organizations on campus.',
    },
    {
        group: 'Boothing & Info Sessions',
        date: 'Tuesday 9/29',
        title: 'Ring Road Boothing',
        time: '11:00 AM - 2:00 PM',
        location: 'Ring Mall',
        icon: MapPin,
        description: 'Casual boothing between classes. Come ask about the application, the interview rounds, or the weekly time commitment.',
    },
    {
        group: 'Boothing & Info Sessions',
        date: 'Tuesday 9/29',
        title: 'Information Night & Case Workshop #2',
        time: '6:00 PM - 7:00 PM',
        location: 'Online',
        icon: Users,
        description: 'The same info session and case workshop, run over Zoom for anyone who could not make the first night. Meet our members, learn about opportunities at 180DC, and get a guided introduction to the consulting case interview format.',
        // TODO add the Zoom link here and uncomment.
        link: 'https://uci.zoom.us/j/99903918364',
        linkLabel: 'Join on Zoom',
    },
    {
        group: 'Recruitment Timeline',
        date: 'Thursday 10/1',
        title: 'Applications Due',
        time: '11:59 PM',
        icon: Calendar,
        highlight: true,
        description: 'Submit your application to be considered for 180DC membership. Our application collects basic information, short essays, and relevant documents such as your resume and transcript.',
        // TODO add the application URL here, then set CYCLE.open to true in siteData.ts.
        submissionLink: 'https://airtable.com/app0gcJj3KThEFsld/paguyQ9DKewVMW4Dl/form',
    },
    {
        group: 'Recruitment Timeline',
        date: 'Saturday 10/3',
        title: 'Round 1 Interviews',
        location: 'Location on invite',
        icon: Briefcase,
        inviteOnly: true,
        description: 'Round 1 is a group case interview where you’ll collaborate with other applicants on a case or discussion activity. This round helps us evaluate teamwork, problem-solving, and communication skills in a dynamic, interactive setting.',
    },
    {
        group: 'Recruitment Timeline',
        date: 'Sunday 10/4',
        title: 'Round 2 Interviews',
        location: 'Location on invite',
        icon: Briefcase,
        inviteOnly: true,
        description: 'Round 2 is an individual interview: behavioral questions, a case, and a market sizing question. It is how we assess your thought process as you build a framework, so we care far more about how you structure the problem than about the final answer.',
    },
];
