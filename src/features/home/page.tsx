import HeroSection from "@/modules/app/react/components/hero-section";
import AboutSection from "@/modules/app/react/components/about-section";
import React from "react";

export default function HomePage() {
    return (
        <React.Fragment>
            <HeroSection />
            <AboutSection />
        </React.Fragment>
    )
}