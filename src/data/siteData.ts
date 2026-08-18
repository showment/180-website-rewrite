// Content shared across inner pages. Edit copy here, not in components.

export const practices = [
    {title: "Strategy", blurb: "Comprehensive plans aligned with your mission.", tags: ["Business strategy", "Project feasibility", "Fee-based modeling"]},
    {title: "Market Research", blurb: "Data-driven insight into your market and the people you serve.", tags: ["Industry trends", "Target audience", "Competitive analysis"]},
    {title: "Marketing & Fundraising", blurb: "Build the brand and a fundraising engine that lasts.", tags: ["Branding", "Fundraising strategy", "Event logistics"]},
    {title: "Operations & Technology", blurb: "Streamline how you run and pick the tools to run on.", tags: ["Data management", "CRM selection", "PR & comms"]},
    {title: "Finance", blurb: "Financial planning and cost optimization.", tags: ["Cost management", "Investment feasibility", "Hiring plans"]},
    {title: "Organization", blurb: "Capacity, structure, and high-performing teams.", tags: ["Human capital", "Volunteer management", "Org structure"]},
];

// The ten-week engagement, from projectTimelineData.
export const engagement = [
    {week: "Week 1", title: "Team assembly", text: "A team of four to six consultants forms and starts preliminary industry research."},
    {week: "Week 2", title: "Kickoff", text: "First meeting with your organization to understand the issues, how you operate, and your value proposition."},
    {week: "Week 3", title: "Framework", text: "The team presents a framework for the pain points, then refines it with you."},
    {week: "Week 4", title: "ROI analysis", text: "Initial ROIs for the researched recommendations and a prioritization matrix."},
    {week: "Weeks 5 to 6", title: "Solution research", text: "Deeper research on the prioritized solutions, plus implementation steps."},
    {week: "Weeks 7 to 8", title: "Report", text: "Findings are synthesized into a final report and presentation."},
    {week: "Week 9", title: "Final presentation", text: "Scope, research, and recommendations delivered to your team."},
    {week: "Week 10+", title: "Follow-up", text: "Post-project communication and feedback."},
];

// Every client logo in /public/images/clients, for the wall on Services.
export const allClients = [
    "UnitedWay", "RonaldMcDonaldHouse", "SublimeSystems", "SpecialOlympicsSouthernCalifornia", "GuideDogsOfAmerica", "BestBuddies",
    "AlzheimersOC", "BBBSOC", "AutismPartnershipFoundation", "CASAOC", "BoysHopeGirlsHope", "CatalystFamilyInc",
    "ActionAllianceFoundation", "AllPeople", "AQuarterBlue", "ArtsForAll", "BarksOfLove", "BOSSInc", "BeyondBlindness",
    "BreastCancerAngels", "BridgeToConnect", "BuildingSkillsPartnership", "CasaTeresa", "CooperacionSantaAna", "DreamsforSchools",
    "Earthroots", "FamilyAssistanceMinistries", "GetInspired", "Greenly", "HealingToYou", "HighSchoolInc", "I5FreedomNetwork",
    "IRIOC", "KidworksOC", "LifeCollege", "OpenSourceEcology", "Pathpoint", "ProjectAccess", "SAYLove", "StepForwardAcademy",
    "StrengthInScarves", "TarasChance", "ThomasHouseFamilyShelter", "TurnTheBus", "UCPOC", "Waymakers",
    "WetlandsAndWildfireCareCenter", "WomenHelpingWomen",
];

export const memberBenefits = [
    {title: "Client work from your first quarter", text: "You join a project team of four to six and ship a real deliverable to a real organization in ten weeks."},
    {title: "Case and interview training", text: "Casing workshops, mock interviews, and a resume book that gets members into consulting, finance, and tech."},
    {title: "Alumni network", text: "Alumni at McKinsey, Bain, BCG, Goldman Sachs, Google, Deloitte, and more return for panels, coffee chats, and referrals."},
    {title: "Chapter life", text: "Fall and spring retreats, socials with other UC chapters, office tours, and an annual case competition."},
];

// Set once per recruiting cycle. The Join page keys off it.
export const CYCLE = {label: "Winter 2026 recruitment", open: false};

// Twelve to spotlight on Services; the rest are summarized as a count.
export const featuredClients = [
    "UnitedWay", "RonaldMcDonaldHouse", "SublimeSystems", "SpecialOlympicsSouthernCalifornia", "GuideDogsOfAmerica", "BestBuddies",
    "AlzheimersOC", "BBBSOC", "AutismPartnershipFoundation", "CASAOC", "BoysHopeGirlsHope", "CatalystFamilyInc",
];

// Recruiting FAQ, shown at /join-us/faq. Items marked TODO need exec-board confirmation before launch.
export const joinFaqs = [
    {q: "How do I join?", a: "Each cycle opens with an info session and casing workshop, then an application, a group case interview, and an individual behavioral round. The full schedule is on the Join page timeline."},
    {q: "Do I need consulting experience?", a: "No. We recruit for curiosity and work ethic, then teach the rest through casing workshops, mock interviews, and your first engagement."},
    {q: "What majors do you recruit?", a: "Every major. Teams mix business, economics, engineering, data science, and humanities backgrounds, and the variety is a strength on projects."},
    {q: "What do members actually do?", a: "You join a project team of four to six and ship a real deliverable to a real organization over a ten-week engagement, alongside training, socials, retreats, and office tours."},
    // TODO confirm with exec board: weekly hours.
    {q: "What is the time commitment?", a: "Plan for roughly five to eight hours a week during an engagement: a team meeting, client touchpoints, and your share of the research and deliverables."},
    // TODO confirm with exec board: recruiting cadence.
    {q: "When does recruiting happen?", a: "At the start of the quarter, most cycles. Follow @180dcuci on Instagram for exact dates; the Join page timeline updates each cycle."},
    // TODO confirm with exec board: eligibility.
    {q: "Can freshmen and transfer students apply?", a: "Yes. We evaluate every applicant on the same case and behavioral interviews, regardless of year."},
];

// Twelve alumni destinations to spotlight on Join. Files in /public/images/logos.
export const featuredAlumniLogos = [
    "mckinsey.webp", "bain.webp", "bcg.webp", "goldman-sachs.webp", "google.webp", "apple.webp",
    "amazon.webp", "microsoft.webp", "jpm.webp", "deloitte.webp", "pwc.webp", "ey.webp",
];
