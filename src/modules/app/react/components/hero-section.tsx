import HeroTextSection from "@/modules/app/react/components/hero-text-section";
import HeroPortfolioSection from "@/modules/app/react/components/hero-portfolio-section";

export default function HeroSection() {
    return (
        <section className="flex flex-col">
            <HeroTextSection />
            <HeroPortfolioSection />
        </section>
    )
}