import React from "react";
import HomeHero from "@/app/components/home/HomeHero";
import Stats from "@/app/components/home/Stats";
import WhoWeAre from "@/app/components/home/WhoWeAre";
import Closer from "@/app/components/home/Closer";

export default function Home() {
    return (
        <>
            <HomeHero/>
            <Stats/>
            <WhoWeAre/>
            <Closer/>
        </>
    );
}
