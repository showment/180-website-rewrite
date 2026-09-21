// The /contact directory is generated from the roster sheet (the same CSV /team
// reads). To change who appears, change the Role in the sheet, not this file.
//
// `role` is matched case-insensitively against the sheet's Role column, so every
// person holding that role is listed. Order here is the order on the page.
export const contactGroups = [
    {
        role: "Vice President of External Affairs",
        label: "Organizations and partners",
        blurb: "Scoping a project, sponsoring the chapter, or hosting an office tour.",
    },
    {
        role: "Vice President of Internal Affairs",
        label: "Prospective members",
        blurb: "Recruiting, coffee chats, and anything about the application.",
    },
    {
        role: "Executive President",
        label: "Everything else",
        blurb: "Press, alumni, and general questions.",
    },
];

// Addresses for the /contact directory, keyed by the sheet's "First Name Last Name".
// Anyone left blank falls back to fallbackEmail below, so a half-filled map is safe.
//
// This needs a code edit whenever the board changes. Two ways out if that gets old:
// add an "Email" column to the roster sheet (it wins over this map automatically),
// or switch to role aliases so the address never depends on who holds the role.
// TODO fill in the current board's addresses.
export const contactEmailOverrides: Record<string, string> = {
    "Cyril Joby": "cjoby@180dc.org",        // Vice President of External Affairs
    "Aaron Park": "apark@180dc.org",        // Vice President of Internal Affairs
    "Alekhya Reddy": "areddy@180dc.org",     // Vice President of Internal Affairs
    "Showmen Talukder": "stalukder@180dc.org",  // Executive President
};

// Shown when neither the sheet nor the overrides supply an address.
export const fallbackEmail = "uci@180dc.org";
