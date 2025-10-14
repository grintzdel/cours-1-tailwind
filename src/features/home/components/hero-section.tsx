import HeroTextSection from "@/features/home/components/hero-text-section";
import HeroPortfolioSection from "@/features/home/components/hero-portfolio-section";

export default function HeroSection() {
    return (
        <section className="flex flex-col">
            <HeroTextSection />
            <HeroPortfolioSection />
        </section>
    )
}