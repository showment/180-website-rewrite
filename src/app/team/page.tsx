import TeamClient from "./TeamClient";

type TeamMember = Record<string, string>;

function parseCSV(csvText: string): TeamMember[] {
    const rows = csvText.trim().split(/\r?\n/);
    const headers = rows[0].split(",").map((h) => h.trim());
    return rows.slice(1).map((row) => {
        const values = row.split(",").map((v) => v.trim());
        const obj: TeamMember = {};
        headers.forEach((h, i) => (obj[h] = values[i] || ""));
        return obj;
    });
}

export default async function TeamPage() {
    const docsUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQClsy4nUnoM8sL5ujmgcMWazD77YEQWMwzJOkyw7y8GAGDew9j-0nRkrZIDeHIWd6XwM07KdDQMVN/pub?output=csv";

    let members: TeamMember[] = [];

    try {
        const res = await fetch(docsUrl);
        const csvText = await res.text();
        members = parseCSV(csvText);
    } catch (err) {
        console.error("Error fetching Google Sheet:", err);
    }

    return <TeamClient members={members}/>;
}