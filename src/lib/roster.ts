// Single source of truth for the member roster: the published Google Sheet CSV.
// Both /team and the /contact directory read from here, so a role change in the
// sheet flows to both pages without a code edit.

export type RosterRow = Record<string, string>;

const ROSTER_CSV_URL =
    process.env.NEXT_PUBLIC_ROSTER_CSV_URL ||
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQClsy4nUnoM8sL5ujmgcMWazD77YEQWMwzJOkyw7y8GAGDew9j-0nRkrZIDeHIWd6XwM07KdDQMVN/pub?output=csv";

// Splits one CSV line, honoring "quoted, fields" and "" escapes.
function splitRow(line: string): string[] {
    const out: string[] = [];
    let cur = "";
    let quoted = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (quoted) {
            if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
            else if (ch === '"') quoted = false;
            else cur += ch;
        } else if (ch === '"') quoted = true;
        else if (ch === ",") { out.push(cur); cur = ""; }
        else cur += ch;
    }
    out.push(cur);
    return out.map(v => v.trim());
}

export function parseCSV(csvText: string): RosterRow[] {
    const rows = csvText.trim().split(/\r?\n/);
    if (!rows.length) return [];
    const headers = splitRow(rows[0]);
    return rows.slice(1).map(row => {
        const values = splitRow(row);
        const obj: RosterRow = {};
        headers.forEach((h, i) => (obj[h] = values[i] || ""));
        return obj;
    });
}

export async function fetchRoster(): Promise<RosterRow[]> {
    try {
        const res = await fetch(ROSTER_CSV_URL, {next: {revalidate: 3600}});
        if (!res.ok) throw new Error(`roster CSV returned ${res.status}`);
        return parseCSV(await res.text());
    } catch (err) {
        console.error("Error fetching the roster sheet:", err);
        return [];
    }
}

// Column lookups are forgiving about header spelling so a sheet rename does not
// blank the page. Returns "" when the sheet has no such column.
export function field(row: RosterRow, ...names: string[]): string {
    for (const n of names) {
        const hit = Object.keys(row).find(k => k.toLowerCase().trim() === n.toLowerCase().trim());
        if (hit && row[hit]) return row[hit].trim();
    }
    return "";
}

export const fullName = (row: RosterRow) =>
    [field(row, "First Name", "First"), field(row, "Last Name", "Last")].filter(Boolean).join(" ");

// Portraits live at /public/images/members/First_Last.webp.
export const portraitFor = (row: RosterRow) =>
    `/images/members/${field(row, "First Name", "First")}_${field(row, "Last Name", "Last")}.webp`;
