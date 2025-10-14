import HeroText from "@/modules/app/react/components/hero-text";
import HeroPortfolio from "@/modules/app/react/components/hero-portfolio";
import {Background} from "@/ui/background";

export default function HeroSection() {
    return (
        <Background isGradient={true}>
        <section className="flex flex-col px-8 md:px-16">
            <HeroText />
            <HeroPortfolio />
        </section>
        </Background>
    )
}