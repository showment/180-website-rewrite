import {
    Calendar,
    ClipboardList,
    FileText,
    Lightbulb,
    LucideIcon,
    PartyPopper,
    Presentation,
    Trophy,
    Users,
    Briefcase,
    Handshake,
    UserCheck
} from "lucide-react";

export interface CaseCompetitionEvent {
    date: string;
    day: string;
    title: string;
    time: string;
    location?: string;
    icon: LucideIcon;
    description: string;
    highlight?: boolean;
}

export const caseCompetitionEvents: CaseCompetitionEvent[] = [
    {
        date: "04/15",
        day: "Wednesday",
        title: "Kickoff Mixer",
        time: "7:00 PM",
        location: "Paul Merage",
        icon: PartyPopper,
        description:
            "Learn more about our competition logistics and the case prompt. Attendees will also get the chance to connect with each organization and meet potential teammates."
    },
    {
        date: "04/16",
        day: "Thursday",
        title: "Workshop #1",
        time: "7:00 PM",
        location: "Paul Merage",
        icon: Lightbulb,
        description:
            "Learn the fundamentals of case competitions, including what casing is and how to analyze the given prompt. We will cover the essential steps to approach a case, from start to finish."
    },
    {
        date: "04/17",
        day: "Thursday",
        title: "Team Formation",
        time: "11:59 PM",
        icon: Users,
        description:
            "Finalize your teams of 3–4 members by the end of the day. Official team placements will be released the next day for those who prefer to be randomized."
    },
    {
        date: "04/21",
        day: "Tuesday",
        title: "Workshop #2",
        time: "7:00 PM",
        location: "Paul Merage",
        icon: ClipboardList,
        description:
            "Understand the components of building a case report. Attendees will learn how to structure their analysis, document their findings, and communicate final recommendations."
    },
    {
        date: "04/24",
        day: "Friday",
        title: "Reports Deadline",
        time: "8:00 AM",
        icon: FileText,
        description:
            "Submit your written case report, including all recommendations. While minor changes can still be made, the bulk of the analysis and report content should be complete."
    },
    {
        date: "04/27",
        day: "Monday",
        title: "Workshop #3",
        time: "7:00 PM",
        location: "Paul Merage",
        icon: Presentation,
        description:
            "Master the final presentation and slide deck design. Attendees will learn how to build effective visuals, gain tips on public speaking, and deliver a professional pitch."
    },
    {
        date: "04/29",
        day: "Wednesday",
        title: "Presentations Deadline",
        time: "11:59 PM",
        icon: Calendar,
        description:
            "Submit your final slide deck and case report for the competition. Ensure your presentation and recommendations are ready for the judges!"
    },
    {
        date: "04/30",
        day: "Thursday",
        title: "Case Competition",
        time: "6:00 PM",
        location: "Paul Merage",
        icon: Trophy,
        highlight: true,
        description:
            "Present your final slides to a panel of judges from Bain & Company, Delta Sigma Pi, and 180 Degrees Consulting. Pitch your solution and get direct feedback from industry professionals."
    }
];

export interface WhyParticipateReason {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const whyParticipateReasons: WhyParticipateReason[] = [
    {
        title: "Skill Development",
        description:
            "Hone key skills in strategy, analysis, teamwork, and presentation by tackling a real-world business problem. These practical abilities are valuable across consulting, business, and other industries.",
        icon: Lightbulb
    },
    {
        title: "Professional Opportunities",
        description:
            "Engage directly with Bain & Company professionals through networking events, coffee chats, and Q&A sessions, gaining insight into the consulting industry and potential career paths.",
        icon: Handshake
    },
    {
        title: "Consulting Experience",
        description:
            "Apply structured problem-solving and frameworks used by top consulting firms while working on a live case. Gain a taste of the consulting workflow and the challenges consultants face.",
        icon: Briefcase
    },
    {
        title: "Mentorship",
        description:
            "Receive guidance from experienced mentors who provide feedback, help refine your approach, and share insights on navigating case competitions and consulting projects.",
        icon: UserCheck
    }
];

export interface CasePrize {
    place: string;
    amount: string;
}

export const casePrizes: CasePrize[] = [
    {place: "1st Place", amount: "$500"},
    {place: "2nd Place", amount: "$300"},
    {place: "3rd Place", amount: "$100"}
];

export const casePrizePerks: string[] = [
    "1:1 coffee chats with Bain professionals",
    "In-person office visits*"
];

export interface FAQItem {
    question: string;
    answer: string;
}

export const caseCompetitionFAQ: FAQItem[] = [
    {
        question: "When will the competition be?",
        answer:
            "The Case Competition will take place in Spring 2026, starting Week 3. More details will be released soon."
    },
    {
        question: "Who can participate?",
        answer:
            "Any UC Irvine undergraduate student can participate regardless of major or experience level."
    },
    {
        question: "What is a case competition?",
        answer:
            "Case competitions simulate real consulting challenges where teams analyze business problems and present strategic recommendations to judges."
    },
    {
        question: "What will I gain?",
        answer:
            "Participants gain hands-on consulting experience, mentorship, networking opportunities, and the chance to work on a real-world business case."
    }
];

export const INTEREST_FORM_URL = "https://deltasigmapi.fillout.com/casecomp";
