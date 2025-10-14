import AboutTitle from "@/modules/app/react/components/about-title";
import AboutText from "@/modules/app/react/components/about-text";
import AboutGrid from "@/modules/app/react/components/about-grid";

export default function AboutSection() {
    return (
        <section className="px-8 md:px-16 py-16">
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-16 w-full">
                    <AboutTitle />
                    <AboutText />
                </div>
                <div className="flex justify-center items-center">
                    <AboutGrid />
                </div>
            </div>
        </section>
    )
}