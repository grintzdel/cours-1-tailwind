import React from "react";

import HeroSection from "@/modules/app/react/components/hero-section";
import AboutSection from "@/modules/app/react/components/about-section";
import ProjectSection from "@/modules/app/react/components/project-section";

export default function HomePage() {
    return (
        <React.Fragment>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </React.Fragment>
    )
}
