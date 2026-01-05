import { Calendar, Users, Briefcase, Coffee, PartyPopper } from 'lucide-react';


export const recruitmentTimelineEvents = [
    {
        date: 'Tuesday 1/6',
        title: 'Info Session & Casing Workshop',
        time: '6 PM - 7 PM',
        location: 'SB1 1200',
        icon: Users,
        description: "Join 180 Degrees Consulting for an info session and case workshop. Meet our members, learn about opportunities at 180DC, and get a guided introduction to the consulting case interview format."
    },
    {
        date: 'Thursday 1/8',
        title: 'Application Deadline',
        time: '12:00 PM (Noon)',
        location: 'Online Submission',
        icon: Calendar,
        highlight: true,
        description: 'Submit your application to be considered for 180DC membership. Our application collects basic information, short essays, and relevant documents such as your resume and transcript.',
        submissionLink: 'https://airtable.com/appWvO04zoJtbCdJg/paguyQ9DKewVMW4Dl/form'
    },
    {
        date: 'Saturday 1/10',
        title: 'R1: Group Case Interview',
        time: 'Scheduled individually',
        location: 'Location on Invite',
        icon: Briefcase,
        inviteOnly: true,
        description: 'Round 1 is a group interview where you’ll collaborate with other applicants on a case or discussion activity. This round helps us evaluate teamwork, problem-solving, and communication skills in a dynamic, interactive setting.'
    },
    {
        date: 'Sunday 1/11',
        title: 'R2: Individual Behavioral',
        time: 'Scheduled individually',
        location: 'Location on Invite',
        icon: Users,
        inviteOnly: true,
        description: 'Round 2 focuses on behavioral interviews, allowing us to get to know you personally, understand your experiences, and see how your skills align with 180DC’s values and culture.'
    },
    {
        date: 'Mon-Fri 1/12-1/16',
        title: 'Coffee Chats',
        time: 'Flexible scheduling',
        location: 'Various locations',
        icon: Coffee,
        inviteOnly: true,
        description: 'Coffee chats are informal one-on-one meetings with current 180DC members. This is your chance to ask questions, learn about their experiences, and get personalized insights about life at 180DC in a relaxed setting.'
    },
    {
        date: 'Wednesday 1/14',
        title: 'Candidates Dinner',
        time: '6 PM - 7 PM',
        location: 'Location on Invite',
        icon: PartyPopper,
        inviteOnly: true,
        description: 'A fun, casual dinner for final round candidates to connect with 180DC members. Enjoy food, conversation, and a chance to build relationships in a low-pressure environment.'
    },
    {
        date: 'Saturday 1/17',
        title: 'R3: Individual Case Interview',
        time: 'Scheduled individually',
        location: 'Location on Invite',
        icon: Briefcase,
        inviteOnly: true,
        description: 'Round 3 is the final round and consists of an individual case interview. You’ll be given a consulting case to solve independently, demonstrating your analytical thinking, structured problem-solving, and communication skills.'
    },
];