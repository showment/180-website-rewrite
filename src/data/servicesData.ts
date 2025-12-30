import {BarChart3, DollarSign, LucideIcon, Megaphone, Monitor, Target, Users} from "lucide-react";

interface ServiceOffering {
    title: string;
    description: string;
    offerings: string[];
    icon: LucideIcon;
}

export const servicesData: ServiceOffering[] = [
    {
        title: "Market Research",
        description: "Data-driven insights to understand your market and beneficiaries.",
        offerings: ["Industry Trends", "Target Audience", "Competitive Analysis"],
        icon: BarChart3
    },
    {
        title: "Finance",
        description: "Financial planning and cost optimization strategies.",
        offerings: ["Cost Management", "Investment Feasibility", "Staff Expansion and Hiring"],
        icon: DollarSign
    },
    {
        title: "Marketing & Fundraising",
        description: "Build your brand and develop sustainable fundraising strategies.",
        offerings: ["Organization Branding", "Fundraising Strategies", "Event Logistics"],
        icon: Megaphone
    },
    {
        title: "Operations & Technology",
        description: "Streamline operations and leverage technology for impact.",
        offerings: ["Data Management", "Systems and Operations", "PR and Communications", "CRM Selection & Integration"],
        icon: Monitor
    },
    {
        title: "Strategy",
        description: "Develop comprehensive strategic plans aligned with your mission.",
        offerings: ["Business Strategy", "Project Feasibility", "Fee-based Modeling"],
        icon: Target
    },
    {
        title: "Organization",
        description: "Strengthen organizational capacity and build high-performing teams.",
        offerings: ["Human Capital", "Corporate Pipelines", "Volunteer Management", "Organizational Structure"],
        icon: Users
    }
];