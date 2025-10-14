import HeroTextSection from "@/features/home/components/hero-text-section";
import HeroPortfolioSection from "@/features/home/components/hero-portfolio-section";

export default function HeroSection() {
    return (
        <div className="flex flex-col">
            <HeroTextSection />
            <HeroPortfolioSection />
        </div>
    )
}