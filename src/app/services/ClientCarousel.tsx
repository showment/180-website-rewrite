'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PRIORITY_CLIENTS = [
    "UnitedWay.webp", "RonaldMcDonaldHouse.webp", "SpecialOlympicsSouthernCalifornia.webp",
    "GuideDogsOfAmerica.webp", "AlzheimersOC.webp", "BestBuddies.webp",
    "AutismPartnershipFoundation.webp", "CASAOC.webp", "BoysHopeGirlsHope.webp",
    "CatalystFamilyInc.webp"
];

const OTHER_CLIENTS = [
    "ActionAllianceFoundation.webp", "AllPeople.webp", "AQuarterBlue.webp",
    "ArtsForAll.webp", "BarksOfLove.webp", "BOSSInc.webp", "BeyondBlindness.webp",
    "BreastCancerAngels.webp", "BridgeToConnect.webp", "BuildingSkillsPartnership.webp",
    "CasaTeresa.webp", "CooperacionSantaAna.webp", "DreamsForSchools.webp",
    "Earthroots.webp", "FamilyAssistanceMinistries.webp", "GetInspired.webp",
    "Greenly.webp", "HealingToYou.webp", "HighSchoolInc.webp", "I5FreedomNetwork.webp",
    "IRIOC.webp", "KidWorksOC.webp", "LifeCollege.webp", "OpenSourceEcology.webp",
    "PathPoint.webp", "ProjectAccess.webp", "SAYLove.webp", "StepForwardAcademy.webp",
    "StrengthInScarves.webp", "SublimeSystems.webp", "TarasChance.webp",
    "ThomasHouseFamilyShelter.webp", "TurnTheBus.webp", "UCPOC.webp",
    "Waymakers.webp", "WetlandsAndWildfireCareCenter.webp", "WomenHelpingWomen.webp"
];

const styleSheet = `
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}
.collage-wrapper { width: 100%; overflow: hidden; background: #fff; padding: 30px 0; }
.collage-row-container { display: flex; align-items: center; overflow: hidden; margin-bottom: 15px; }
.collage-track { display: flex; width: max-content; animation: scrollLeft linear infinite; gap: 0; }
.collage-item { flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 220px; height: 100%; padding: 0 20px; position: relative; }
.collage-img { 
    width: auto; 
    height: auto; 
    max-height: 120px; 
    max-width: 180px; 
    object-fit: contain; 
    opacity: 0.7; 
    transition: all 0.3s ease; 
}
.collage-item:hover .collage-img { opacity: 1; transform: scale(1.1); }
`;

const getPath = (filename: string) => `/images/clients/${filename}`;

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const chunkArray = <T,>(array: T[], numChunks: number): T[][] => {
    const result: T[][] = Array.from({ length: numChunks }, () => []);
    array.forEach((item, index) => {
        result[index % numChunks].push(item);
    });
    return result;
};

interface ClientData {
    name: string;
    src: string;
}

export default function ClientCarousel() {
    const [rows, setRows] = useState<ClientData[][]>([]);

    useEffect(() => {
        const priorityData = PRIORITY_CLIENTS.map(name => ({ name, src: getPath(name) }));
        const otherData = shuffleArray(OTHER_CLIENTS).map(name => ({ name, src: getPath(name) }));
        const allClients = [...priorityData, ...otherData];

        setRows(chunkArray(allClients, 3));
    }, []);

    if (rows.length === 0) return null;

    const rowHeights = ['150px', '150px', '150px'];
    const durations = ['45s', '60s', '50s'];

    return (
        <>
            <style>{styleSheet}</style>
            <div className="collage-wrapper">
                {rows.map((rowItems, i) => (
                    <div key={i} className="collage-row-container" style={{ height: rowHeights[i] }}>
                        <div className="collage-track" style={{ animationDuration: durations[i] }}>
                            {[...rowItems, ...rowItems].map((client, index) => (
                                <div key={`${i}-${index}`} className="collage-item">
                                    <Image
                                        src={client.src}
                                        alt={client.name}
                                        className="collage-img"
                                        width={180}
                                        height={120}
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}