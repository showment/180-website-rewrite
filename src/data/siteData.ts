// Content shared across inner pages. Edit copy here, not in components.

export const practices = [
    {title: "Strategy", blurb: "Comprehensive plans aligned with where the organization is headed.", tags: ["Business strategy", "Project feasibility", "Fee-based modeling"]},
    {title: "Market Research", blurb: "Data-driven insight into your market, your customers, and your competition.", tags: ["Industry trends", "Target audience", "Competitive analysis"]},
    {title: "Marketing & Fundraising", blurb: "Build the brand and the engine that brings in revenue or funding.", tags: ["Branding", "Fundraising strategy", "Event logistics"]},
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
    "BenNJerrys", "UnitedWay", "RonaldMcDonaldHouse", "SublimeSystems", "SpecialOlympicsSouthernCalifornia", "GuideDogsOfAmerica", "BestBuddies",
    "AlzheimersOC", "BBBSOC", "AutismPartnershipFoundation", "CASAOC", "BoysHopeGirlsHope", "CatalystFamilyInc",
    "ActionAllianceFoundation", "AllPeople", "AQuarterBlue", "ArtsForAll", "BarksOfLove", "BOSSInc", "BeyondBlindness",
    "BreastCancerAngels", "BridgeToConnect", "BuildingSkillsPartnership", "CasaTeresa", "CooperacionSantaAna", "DreamsforSchools",
    "Earthroots", "FamilyAssistanceMinistries", "GetInspired", "Greenly", "HealingToYou", "HighSchoolInc", "I5FreedomNetwork",
    "IRIOC", "KidworksOC", "LifeCollege", "OpenSourceEcology", "Pathpoint", "ProjectAccess", "SAYLove", "StepForwardAcademy",
    "StrengthInScarves", "TarasChance", "ThomasHouseFamilyShelter", "TurnTheBus", "UCPOC", "Waymakers",
    "WetlandsAndWildfireCareCenter", "WomenHelpingWomen",
];

export const memberBenefits = [
    {title: "Client work", text: "You join a project team of four to six and ship a real deliverable to a real organization."},
    {title: "Career support", text: "Preparation and mentorship that carries members into consulting, finance, and technology."},
    {title: "Alumni network", text: "An alumni network across consulting, finance, and technology that stays open to members long after they graduate."},
    {title: "Chapter life", text: "A close community outside the work, and the friendships that come with it."},
];

// Set once per recruiting cycle. The Join page keys off it.
export const CYCLE = {label: "Fall 2026 recruitment", open: true};

// Twelve to spotlight on Services; the rest are summarized as a count.
export const featuredClients = [
    "BenNJerrys", "UnitedWay", "RonaldMcDonaldHouse", "SublimeSystems", "SpecialOlympicsSouthernCalifornia", "GuideDogsOfAmerica",
    "AlzheimersOC", "BBBSOC", "AutismPartnershipFoundation", "CASAOC", "BoysHopeGirlsHope", "CatalystFamilyInc",
];

// Recruiting FAQ, shown at /join-us/faq. Items marked TODO need exec-board confirmation before launch.
export const joinFaqs = [
    {q: "How do I join?", a: "We hold recruiting seasons in the fall and the winter, both at the start of the quarter. Each season there is an application, then interviews. Dates for the current cycle are on the Join page timeline, and Instagram (@180dcuci) is the fastest place to catch them."},
    {q: "Do I need consulting experience?", a: "No, and most people who join don’t have any. We recruit for curiosity and work ethic. The rest you pick up through casing workshops, mock interviews, and your first engagement."},
    {q: "What majors do you recruit?", a: "All of them. Our teams mix business, economics, engineering, data science, and humanities, and that mix genuinely makes the work better. Coming from outside the business school is not a disadvantage here."},
    {q: "What do members actually do?", a: "You get placed on a team of four to six and build something a real organization will actually use. Around that there’s training, socials, retreats, and office tours."},
    // TODO confirm with exec board: weekly hours.
    {q: "What is the time commitment?", a: "Figure five to eight hours a week while an engagement is running. That covers your team meeting, client touchpoints, and whatever share of the research and deliverables you have taken on."},
    // TODO confirm with exec board: eligibility.
    {q: "Can freshmen and transfer students apply?", a: "Yes. Every applicant goes through the same case and behavioral interviews, and what year you are in does not factor into the decision."},
    {q: "How do I prepare for Round 1?", a: "Round 1 is a group case interview. You work through a case with a few other applicants while our interviewers watch. The thing worth knowing going in: we are watching how you contribute, not who wins the room. Say your structure out loud before you jump to an answer, build on what other people say instead of talking over them, keep an eye on the clock for the group, and make sure you land on a clear recommendation before time runs out. Running one or two practice cases out loud with a friend helps far more than reading about them."},
    {q: "How do I prepare for Round 2?", a: "Round 2 is an individual interview in three parts: behavioral questions, a case, and a market sizing question. It is where we assess your thought process as you build a framework. For the behavioral part, come with three or four stories you can tell well: a team you worked on, something you led, something that went badly. Be ready to say why 180DC specifically, not just why consulting. For the case, lay out your framework before you dig in, and talk through why you chose it. For market sizing, practice estimating out loud. State your assumptions, break the number into pieces you can actually reason about, do the arithmetic slowly, and check at the end whether the answer sounds sane. We care much more about how you got there than the number you land on."},
    {q: "Where can I learn case interviews?", a: "The casing workshop at our info sessions starts from zero, so you do not need to have done any of this before. If you want to go deeper on your own, these are what we usually point people to:", links: [
        {label: "Management Consulted: case interview guide", href: "https://managementconsulted.com/case-interview/"},
        {label: "Management Consulted: case interview frameworks", href: "https://managementconsulted.com/case-interview-frameworks/"},
        // TODO confirm the labels below match what the resources are actually titled.
        {label: "Case interview frameworks (PDF)", href: "https://caseinterview.com/case_interview_frameworks.pdf"},
        {label: "Case interview walkthrough (video)", href: "https://youtu.be/57xcFQ3mPj0"},
    ]},
];

// Twelve alumni destinations to spotlight on Join. Files in /public/images/logos.
export const featuredAlumniLogos = [
    "mckinsey.webp", "bain.webp", "bcg.webp", "goldman-sachs.webp", "google.webp", "apple.webp",
    "amazon.webp", "microsoft.webp", "jpm.webp", "deloitte.webp", "pwc.webp", "ey.webp",
];
