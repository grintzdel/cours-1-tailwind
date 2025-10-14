import HeroText from "@/modules/app/react/components/hero-text";
import HeroPortfolio from "@/modules/app/react/components/hero-portfolio";

export default function HeroSection() {
    return (
        <section className="flex flex-col">
            <HeroText />
            <HeroPortfolio />
        </section>
    )
}